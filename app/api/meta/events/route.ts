import { NextRequest, NextResponse } from 'next/server';
import {
  sendMetaEvent,
  hashPhone,
  mapEventName,
} from '@/lib/meta';
import type { MetaEventPayload, MetaUserData } from '@/lib/meta';

interface RequestBody {
  event_name: string;
  event_id: string;
  phone?: string;
  custom_data?: Record<string, unknown>;
  event_source_url?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: RequestBody = await request.json();
    const { event_name, event_id, phone, custom_data, event_source_url } = body;

    if (!event_name || !event_id) {
      return NextResponse.json(
        { error: 'event_name and event_id are required' },
        { status: 400 },
      );
    }

    const userData: MetaUserData = {
      client_ip_address:
        request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
        request.headers.get('x-real-ip') ||
        '',
      client_user_agent: request.headers.get('user-agent') || '',
    };

    if (phone) {
      userData.ph = await hashPhone(phone);
    }

    const payload: MetaEventPayload = {
      event_name: mapEventName(event_name),
      event_time: Math.floor(Date.now() / 1000),
      action_source: 'website',
      event_id,
      user_data: userData,
      custom_data: custom_data || {},
      event_source_url,
    };

    // fire-and-forget — never blocks the response
    sendMetaEvent(payload);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[Meta Events API] Error processing event', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
