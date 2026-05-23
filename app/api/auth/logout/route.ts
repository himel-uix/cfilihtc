import { NextRequest, NextResponse } from 'next/server';
import { sessionOptions } from '@/lib/auth';
import { getIronSession } from 'iron-session';

export async function POST(request: NextRequest) {
  try {
    const session = await getIronSession(request, new NextResponse(), sessionOptions);
    session.destroy();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { error: 'Failed to logout' },
      { status: 500 }
    );
  }
}
