import { NextRequest, NextResponse } from 'next/server';
import { analyzeImage } from '@/lib/agent/vision';
import { matchSections } from '@/lib/agent/matcher';
import { retext } from '@/lib/agent/retext';

const OK_MIME = new Set(['image/png', 'image/jpeg', 'image/webp']);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('image') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'Upload an image in the "image" field' }, { status: 400 });
    }

    if (!OK_MIME.has(file.type)) {
      return NextResponse.json({ error: 'Use a PNG, JPEG or WebP image' }, { status: 415 });
    }

    const notes = String(formData.get('notes') || '').slice(0, 500);
    const retextOption = String(formData.get('retext') || '');

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const spec = await analyzeImage(buffer, file.type, notes);
    const sections = await matchSections(buffer, file.type, spec);
    const htmlMap = retextOption === '0' ? {} : await retext(sections);

    const result = {
      page: spec.page,
      sections: sections.map((s) => ({
        ...s,
        html: htmlMap[s.order] || null,
      })),
    };

    return NextResponse.json(result);
  } catch (err: any) {
    console.error('Plan generation error:', err);
    return NextResponse.json(
      { error: err.message || 'Server error while generating plan' },
      { status: err.status || 500 }
    );
  }
}
