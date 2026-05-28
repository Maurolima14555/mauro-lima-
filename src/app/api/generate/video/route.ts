import { NextRequest, NextResponse } from 'next/server';
import { ContentVideoEngine } from '@/engines/ContentVideoEngine';
import { prisma } from '@/lib/prisma';
import type { VideoGenerationConfig } from '@/types';

export async function POST(req: NextRequest) {
    try {
          const body = await req.json();
          const { projectId, config } = body as {
                  projectId: string;
                  config: VideoGenerationConfig;
                };

          if (!projectId || !config) {
                  return NextResponse.json(
                            { error: 'projectId and config are required' },
                            { status: 400 }
                          );
                }

          // Verify project exists
          const project = await prisma.project.findUnique({
                  where: { id: projectId },
                });

          if (!project) {
                  return NextResponse.json(
                            { error: 'Project not found' },
                            { status: 404 }
                          );
                }

          // Start video generation
          const engine = new ContentVideoEngine(projectId, config);
          const result = await engine.generate();

          if (!result.success) {
                  return NextResponse.json(
                            { error: result.error },
                            { status: 500 }
                          );
                }

          return NextResponse.json({
                  success: true,
                  videoId: result.videoId,
                  message: 'Video generation started successfully',
                });
        } catch (error) {
          console.error('Video generation API error:', error);
          return NextResponse.json(
                  { error: 'Internal server error' },
                  { status: 500 }
                );
        }
  }

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const videoId = searchParams.get('videoId');

    if (!videoId) {
          return NextResponse.json(
                  { error: 'videoId is required' },
                  { status: 400 }
                );
        }

    const video = await ContentVideoEngine.getStatus(videoId);

    if (!video) {
          return NextResponse.json(
                  { error: 'Video not found' },
                  { status: 404 }
                );
        }

    return NextResponse.json(video);
  }
