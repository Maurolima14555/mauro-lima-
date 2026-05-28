# FacelessForge

## Plataforma SaaS de Criação de Vídeos Faceless para YouTube

FacelessForge é uma plataforma completa para criação automatizada de vídeos "faceless" (sem rosto) para YouTube, utilizando Inteligência Artificial para gerar roteiros, narração e composição visual.

## Stack Tecnológico

- **Frontend**: Next.js 14 + TypeScript + Tailwind CSS
- - **Backend**: Next.js API Routes (App Router)
  - - **Banco de Dados**: PostgreSQL + Prisma ORM
    - - **IA**: OpenAI GPT-4 + TTS
      - - **Vídeo**: Remotion (React-based video creation)
       
        - ## Funcionalidades Principais
       
        - ### Engines de Conteúdo
        - - **ContentVideoEngine**: Geração de vídeos longos para YouTube
          - - **ContentShortEngine**: Geração de YouTube Shorts
            - - **ContentTranslationEngine**: Tradução e dubbing automático de vídeos
             
              - ### Features da Plataforma
              - - Landing page com apresentação do produto
                - - Dashboard de gerenciamento de projetos
                  - - Sistema de autenticação de usuários
                    - - Geração automática de roteiros com IA
                      - - Text-to-Speech com vozes naturais
                        - - Composição e renderização de vídeo
                          - - Exportação em múltiplos formatos
                           
                            - ## Estrutura do Projeto
                           
                            - ```
                              src/
                                app/              # Next.js App Router pages
                                components/       # Componentes React reutilizáveis
                                engines/          # Engines de processamento de conteúdo
                                  ContentVideoEngine/
                                  ContentShortEngine/
                                  ContentTranslationEngine/
                                lib/              # Utilitários e configurações
                                remotion/         # Composições de vídeo Remotion
                                types/            # Definições TypeScript
                              prisma/
                                schema.prisma     # Schema do banco de dados
                              public/             # Assets estáticos
                              ```

                              ## Como Executar

                              ```bash
                              # Instalar dependências
                              npm install

                              # Configurar banco de dados
                              npx prisma db push
                              npx prisma generate

                              # Iniciar servidor de desenvolvimento
                              npm run dev
                              ```

                              ## Variáveis de Ambiente

                              Crie um arquivo `.env` com:

                              ```env
                              DATABASE_URL="postgresql://..."
                              OPENAI_API_KEY="sk-..."
                              NEXTAUTH_SECRET="..."
                              NEXTAUTH_URL="http://localhost:3000"
                              ```

                              ## Licença

                              MIT License - FacelessForge © 2024
