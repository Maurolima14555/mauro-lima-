import OpenAI from 'openai';

if (!process.env.OPENAI_API_KEY) {
  throw new Error('OPENAI_API_KEY is not set in environment variables');
  }

  export const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    });

    export async function generateScript(
      topic: string,
        style: string,
          duration: string,
            language: string = 'pt-BR'
            ): Promise<string> {
              const durationMap = {
                  short: '3-5 minutos',
                      medium: '8-12 minutos',
                          long: '15-20 minutos',
                            };

                              const prompt = `Crie um roteiro detalhado para um video do YouTube no estilo faceless sobre o topico: "${topic}".

                              Estilo: ${style}
                              Duracao alvo: ${durationMap[duration as keyof typeof durationMap] || duration}
                              Idioma: ${language}

                              O roteiro deve incluir:
                              1. Introducao cativante (hook)
                              2. Desenvolvimento do conteudo em segmentos claros
                              3. Conclusao com call-to-action

                              Formato de resposta em JSON:
                              {
                                "title": "titulo do video",
                                  "description": "descricao para YouTube",
                                    "tags": ["tag1", "tag2"],
                                      "segments": [
                                          {
                                                "text": "texto narrado",
                                                      "duration": 30,
                                                            "imagePrompt": "descricao da imagem para este segmento"
                                                                }
                                                                  ],
                                                                    "totalDuration": 300
                                                                    }`;

                                                                      const completion = await openai.chat.completions.create({
                                                                          model: 'gpt-4-turbo-preview',
                                                                              messages: [
                                                                                    {
                                                                                            role: 'system',
                                                                                                    content: 'Voce e um especialista em criacao de conteudo para YouTube. Sempre responda em JSON valido.',
                                                                                                          },
                                                                                                                {
                                                                                                                        role: 'user',
                                                                                                                                content: prompt,
                                                                                                                                      },
                                                                                                                                          ],
                                                                                                                                              response_format: { type: 'json_object' },
                                                                                                                                                  temperature: 0.7,
                                                                                                                                                    });
                                                                                                                                                    
                                                                                                                                                      return completion.choices[0]?.message?.content || '{}';
                                                                                                                                                      }
                                                                                                                                                      
                                                                                                                                                      export async function generateTTS(
                                                                                                                                                        text: string,
                                                                                                                                                          voice: OpenAI.Audio.Speech.SpeechCreateParams['voice'] = 'nova'
                                                                                                                                                          ): Promise<Buffer> {
                                                                                                                                                            const mp3 = await openai.audio.speech.create({
                                                                                                                                                                model: 'tts-1',
                                                                                                                                                                    voice,
                                                                                                                                                                        input: text,
                                                                                                                                                                          });
                                                                                                                                                                          
                                                                                                                                                                            const buffer = Buffer.from(await mp3.arrayBuffer());
                                                                                                                                                                              return buffer;
                                                                                                                                                                              }
                                                                                                                                                                              
                                                                                                                                                                              export async function translateText(
                                                                                                                                                                                text: string,
                                                                                                                                                                                  targetLanguage: string,
                                                                                                                                                                                    sourceLanguage: string = 'auto'
                                                                                                                                                                                    ): Promise<string> {
                                                                                                                                                                                      const completion = await openai.chat.completions.create({
                                                                                                                                                                                          model: 'gpt-4-turbo-preview',
                                                                                                                                                                                              messages: [
                                                                                                                                                                                                    {
                                                                                                                                                                                                            role: 'system',
                                                                                                                                                                                                                    content: `Voce e um tradutor profissional. Traduza o texto de ${sourceLanguage} para ${targetLanguage}. Mantenha o tom e estilo original. Responda apenas com a traducao, sem explicacoes.`,
                                                                                                                                                                                                                          },
                                                                                                                                                                                                                                {
                                                                                                                                                                                                                                        role: 'user',
                                                                                                                                                                                                                                                content: text,
                                                                                                                                                                                                                                                      },
                                                                                                                                                                                                                                                          ],
                                                                                                                                                                                                                                                              temperature: 0.3,
                                                                                                                                                                                                                                                                });
                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                  return completion.choices[0]?.message?.content || text;
                                                                                                                                                                                                                                                                  }
