export interface MetaUserData {
  em?: string;
  ph?: string;
  client_ip_address?: string;
  client_user_agent?: string;
}

export interface MetaEventPayload {
  event_name: string;
  event_time: number;
  action_source: string;
  event_id: string;
  user_data: MetaUserData;
  custom_data?: Record<string, unknown>;
  event_source_url?: string;
}

const META_API_BASE = 'https://graph.facebook.com/v23.0';

async function sha256(value: string): Promise<string> {
  const normalized = value.trim().toLowerCase();
  const encoder = new TextEncoder();
  const data = encoder.encode(normalized);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

export async function hashEmail(email: string): Promise<string> {
  return sha256(email);
}

export async function hashPhone(phone: string): Promise<string> {
  // strip non-digit characters before hashing
  const digits = phone.replace(/\D/g, '');
  return sha256(digits);
}

/**
 * Send a single event to Meta Conversions API.
 * Catches and logs errors so callers never crash from a Meta failure.
 */
export async function sendMetaEvent(event: MetaEventPayload): Promise<void> {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const accessToken = process.env.META_ACCESS_TOKEN;

  if (!pixelId || !accessToken) {
    console.warn('[Meta CAPI] META_PIXEL_ID or META_ACCESS_TOKEN not configured');
    return;
  }

  try {
    const url = `${META_API_BASE}/${pixelId}/events?access_token=${accessToken}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: [event] }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('[Meta CAPI] API error', response.status, errorBody);
    }
  } catch (error) {
    console.error('[Meta CAPI] Request failed', error);
  }
}

const EVENT_NAME_MAP: Record<string, string> = {
  view_item: 'ViewContent',
  begin_checkout: 'InitiateCheckout',
  purchase: 'Purchase',
};

export function mapEventName(event: string): string {
  return EVENT_NAME_MAP[event] || event;
}
