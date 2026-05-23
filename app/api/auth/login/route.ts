import { NextRequest, NextResponse } from 'next/server';
import { authenticateAdmin, sessionOptions } from '@/lib/auth';
import { getIronSession } from 'iron-session';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    const admin = await authenticateAdmin(email, password);

    if (!admin) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    const session = await getIronSession(request, new NextResponse(), sessionOptions);
    session.admin = admin;
    await session.save();

    return NextResponse.json({ success: true, admin });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Failed to login' },
      { status: 500 }
    );
  }
}
