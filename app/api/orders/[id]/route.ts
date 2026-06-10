import { connectDB } from '@/lib/mongodb';
import { Order } from '@/lib/models/Order';
import { NextRequest, NextResponse } from 'next/server';
import { sendMetaEvent, hashPhone, mapEventName } from '@/lib/meta';

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    const body = await request.json();

    const { status } = body;

    if (!status) {
      return NextResponse.json(
        { error: 'Status is required' },
        { status: 400 }
      );
    }

    const order = await Order.findByIdAndUpdate(
      id,
      { status },
      { returnDocument: 'after' }
    );

    if (!order) {
      return NextResponse.json(
        { error: 'Order not found' },
        { status: 404 }
      );
    }

    // Server-side Meta CAPI — order_confirmed (fire-and-forget)
    if (status === 'Confirmed') {
      const phHash = await hashPhone(order.phone);
      const clientIp =
        request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
        request.headers.get('x-real-ip') ||
        '';
      const clientUa = request.headers.get('user-agent') || '';

      sendMetaEvent({
        event_name: mapEventName('order_confirmed'),
        event_time: Math.floor(Date.now() / 1000),
        action_source: 'website',
        event_id: `confirm_${order._id}`,
        user_data: {
          ph: phHash,
          client_ip_address: clientIp,
          client_user_agent: clientUa,
        },
        custom_data: {
          value: order.total,
          currency: 'BDT',
          order_id: order._id,
          status: 'Confirmed',
        },
      });
    }

    return NextResponse.json(order);
  } catch (error) {
    console.error('Error updating order:', error);
    return NextResponse.json(
      { error: 'Failed to update order' },
      { status: 500 }
    );
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;

    const order = await Order.findById(id);

    if (!order) {
      return NextResponse.json(
        { error: 'Order not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(order);
  } catch (error) {
    console.error('Error fetching order:', error);
    return NextResponse.json(
      { error: 'Failed to fetch order' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;

    const order = await Order.findByIdAndDelete(id);

    if (!order) {
      return NextResponse.json(
        { error: 'Order not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: 'Order deleted successfully' });
  } catch (error) {
    console.error('Error deleting order:', error);
    return NextResponse.json(
      { error: 'Failed to delete order' },
      { status: 500 }
    );
  }
}
