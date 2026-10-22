import { NextRequest, NextResponse } from 'next/server';
import { getCategory } from '@/lib/library';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const modules = await getCategory(id);
    return NextResponse.json(modules);
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Category not found' }, { status: 404 });
  }
}
