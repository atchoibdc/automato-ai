import { NextResponse } from 'next/server';
import { libraryReady } from '@/lib/library';
import { hasKey, isMock } from '@/lib/agent/gemini';

export async function GET() {
  try {
    const ready = await libraryReady();
    return NextResponse.json({
      library: ready,
      agent: hasKey() || isMock(),
      mock: isMock(),
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Status check failed' }, { status: 500 });
  }
}
