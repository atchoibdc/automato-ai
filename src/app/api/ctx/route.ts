import { NextResponse } from 'next/server';
import { getCtx } from '@/lib/library';

export async function GET() {
  try {
    const ctx = await getCtx();
    return NextResponse.json(ctx);
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Failed to get context' }, { status: 500 });
  }
}
