import { NextResponse } from 'next/server';
import { getIndex } from '@/lib/library';

export async function GET() {
  try {
    const catalog = await getIndex();
    return NextResponse.json(catalog);
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Failed to get catalog' }, { status: 500 });
  }
}
