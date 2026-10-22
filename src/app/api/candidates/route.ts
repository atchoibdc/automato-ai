import { NextRequest, NextResponse } from 'next/server';
import { candidatesFor } from '@/lib/agent/matcher';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const list = await candidatesFor(body.section || { role: 'other' }, { max: 40 });
    return NextResponse.json(list.map((m) => ({ id: m.id, title: m.title, sub: m.sub, cat: m.cat })));
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Failed to get candidates' }, { status: 500 });
  }
}
