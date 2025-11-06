import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export interface JWTPayload {
  userId: string;
  email: string;
  role: string;
}

export function generateToken(payload: JWTPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
}

export function generateRefreshToken(payload: JWTPayload): string {
  const refreshSecret = process.env.JWT_REFRESH_SECRET || 'refresh-secret';
  return jwt.sign(payload, refreshSecret, { expiresIn: '30d' });
}

export function verifyToken(token: string): JWTPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as JWTPayload;
  } catch (error) {
    return null;
  }
}

export async function authenticate(req: NextRequest): Promise<JWTPayload | null> {
  const token = req.headers.get('authorization')?.replace('Bearer ', '') || 
                req.cookies.get('token')?.value;

  if (!token) {
    return null;
  }

  return verifyToken(token);
}

export function requireAuth(handler: Function) {
  return async (req: NextRequest, context?: any) => {
    const user = await authenticate(req);

    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Attach user to request
    (req as any).user = user;
    return handler(req, context);
  };
}