import { connectDB } from '@/lib/mongodb';
import { Order } from '@/lib/models/Order';
import { NextRequest, NextResponse } from 'next/server';
import { sendMetaEvent, hashPhone, mapEventName } from '@/lib/meta';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();

    const { name, phone, address, quantity, total, event_id } = body;

    if (!name || !phone || !address || !quantity || !total) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!/^01\d{9}$/.test(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number. Must be a valid 11-digit Bangladeshi number.' },
        { status: 400 }
      );
    }

    const order = await Order.create({
      name,
      phone,
      address,
      quantity,
      total,
      status: 'Pending',
    });

    // Server-side Meta CAPI — purchase event (fire-and-forget)
    const phHash = await hashPhone(phone);
    const clientIp =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      '';
    const clientUa = request.headers.get('user-agent') || '';

    sendMetaEvent({
      event_name: mapEventName('purchase'),
      event_time: Math.floor(Date.now() / 1000),
      action_source: 'website',
      event_id: event_id || `order_${order._id}`,
      user_data: {
        ph: phHash,
        client_ip_address: clientIp,
        client_user_agent: clientUa,
      },
      custom_data: {
        value: total,
        currency: 'BDT',
        transaction_id: order._id,
      },
    });

    return NextResponse.json(order, { status: 201 });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    const orders = await Order.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Order.countDocuments();

    return NextResponse.json({
      orders,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      { error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}
