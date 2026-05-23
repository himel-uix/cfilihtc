import { NextRequest, NextResponse } from 'next/server';
import { sessionOptions, SessionData } from '@/lib/auth';
import { getIronSession } from 'iron-session';

export async function POST(request: NextRequest) {
  try {
    const response = NextResponse.json({ success: true });
    const session = await getIronSession<SessionData>(request, response, sessionOptions);
    session.destroy();

    return response;
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { error: 'Failed to logout' },
      { status: 500 }
    );
  }
}
