import { NextResponse } from 'next/server';
import { ContentShortEngine } from '@/engines/ContentShortEngine';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { topic, niche, targetAudience, duration = 60 } = body;

    if (!topic || !niche) {
      return NextResponse.json(
        { error: 'Topic and niche are required' },
        { status: 400 }
      );
    }

    // Generate short content using the ContentShortEngine
    const shortEngine = new ContentShortEngine({
      topic,
      niche,
      targetAudience: targetAudience || 'general audience',
      duration,
    });

    const shortContent = await shortEngine.generate();

    // Save to database
    const short = await prisma.short.create({
      data: {
        title: shortContent.title,
        script: shortContent.script,
        hook: shortContent.hook,
        callToAction: shortContent.callToAction,
        hashtags: shortContent.hashtags.join(','),
        duration: shortContent.duration,
        niche,
        topic,
        status: 'generated',
      },
    });

    return NextResponse.json({
      success: true,
      short: {
        id: short.id,
        title: short.title,
        script: short.script,
        hook: short.hook,
        callToAction: short.callToAction,
        hashtags: shortContent.hashtags,
        duration: short.duration,
        status: short.status,
      },
    });
  } catch (error) {
    console.error('Error generating short:', error);
    return NextResponse.json(
      { error: 'Failed to generate short content' },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    const [shorts, total] = await Promise.all([
      prisma.short.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.short.count(),
    ]);

    return NextResponse.json({
      shorts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching shorts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch shorts' },
      { status: 500 }
    );
  }
}
