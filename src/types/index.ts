// FacelessForge - TypeScript Type Definitions

export type ProjectType = 'VIDEO' | 'SHORT' | 'TRANSLATION';

export type ProjectStatus = 'DRAFT' | 'PROCESSING' | 'COMPLETED' | 'FAILED';

export type VideoStatus =
  | 'PENDING'
    | 'GENERATING_SCRIPT'
      | 'GENERATING_AUDIO'
        | 'GENERATING_IMAGES'
          | 'RENDERING'
            | 'COMPLETED'
              | 'FAILED';

              export type PlanType = 'FREE' | 'STARTER' | 'PRO' | 'ENTERPRISE';

              export interface User {
                id: string;
                  name?: string | null;
                    email: string;
                      emailVerified?: Date | null;
                        image?: string | null;
                          createdAt: Date;
                            updatedAt: Date;
                            }

                            export interface Project {
                              id: string;
                                userId: string;
                                  title: string;
                                    description?: string | null;
                                      type: ProjectType;
                                        status: ProjectStatus;
                                          createdAt: Date;
                                            updatedAt: Date;
                                              videos?: Video[];
                                              }

                                              export interface Video {
                                                id: string;
                                                  projectId: string;
                                                    title: string;
                                                      script?: string | null;
                                                        audioUrl?: string | null;
                                                          videoUrl?: string | null;
                                                            thumbnailUrl?: string | null;
                                                              duration?: number | null;
                                                                status: VideoStatus;
                                                                  metadata?: Record<string, unknown>;
                                                                    createdAt: Date;
                                                                      updatedAt: Date;
                                                                        scenes?: Scene[];
                                                                        }

                                                                        export interface Scene {
                                                                          id: string;
                                                                            videoId: string;
                                                                              order: number;
                                                                                text: string;
                                                                                  imageUrl?: string | null;
                                                                                    audioUrl?: string | null;
                                                                                      duration?: number | null;
                                                                                        createdAt: Date;
                                                                                        }

                                                                                        export interface VideoGenerationConfig {
                                                                                          topic: string;
                                                                                            style: VideoStyle;
                                                                                              duration: VideoDuration;
                                                                                                language: string;
                                                                                                  voiceId?: string;
                                                                                                    musicEnabled?: boolean;
                                                                                                      subtitlesEnabled?: boolean;
                                                                                                      }
                                                                                                      
                                                                                                      export type VideoStyle =
                                                                                                        | 'educational'
                                                                                                          | 'entertainment'
                                                                                                            | 'news'
                                                                                                              | 'storytelling'
                                                                                                                | 'tutorial';
                                                                                                                
                                                                                                                export type VideoDuration = 'short' | 'medium' | 'long';
                                                                                                                
                                                                                                                export interface ScriptSegment {
                                                                                                                  text: string;
                                                                                                                    duration: number;
                                                                                                                      imagePrompt: string;
                                                                                                                      }
                                                                                                                      
                                                                                                                      export interface GeneratedScript {
                                                                                                                        title: string;
                                                                                                                          description: string;
                                                                                                                            tags: string[];
                                                                                                                              segments: ScriptSegment[];
                                                                                                                                totalDuration: number;
                                                                                                                                }
                                                                                                                                
                                                                                                                                export interface ContentEngineResult {
                                                                                                                                  success: boolean;
                                                                                                                                    videoId?: string;
                                                                                                                                      error?: string;
                                                                                                                                      }
                                                                                                                                      
                                                                                                                                      export interface TranslationConfig {
                                                                                                                                        sourceLanguage: string;
                                                                                                                                          targetLanguage: string;
                                                                                                                                            preserveVoice?: boolean;
                                                                                                                                            }
                                                                                                                                            
                                                                                                                                            export interface PricingPlan {
                                                                                                                                              id: PlanType;
                                                                                                                                                name: string;
                                                                                                                                                  price: number;
                                                                                                                                                    currency: string;
                                                                                                                                                      interval: 'month' | 'year';
                                                                                                                                                        features: string[];
                                                                                                                                                          videosPerMonth: number;
                                                                                                                                                            maxDuration: number;
                                                                                                                                                              popular?: boolean;
                                                                                                                                                              }
