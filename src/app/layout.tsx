import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FacelessForge - Crie Videos Faceless para YouTube com IA',
    description:
        'Plataforma SaaS para criacao automatizada de videos faceless para YouTube usando Inteligencia Artificial. Gere roteiros, narracoes e videos completos em minutos.',
          keywords: ['faceless', 'youtube', 'videos', 'ia', 'inteligencia artificial', 'automatizacao'],
            authors: [{ name: 'FacelessForge' }],
              openGraph: {
                  title: 'FacelessForge - Crie Videos Faceless para YouTube com IA',
                      description: 'Plataforma SaaS para criacao automatizada de videos faceless para YouTube',
                          type: 'website',
                              locale: 'pt_BR',
                                },
                                };

                                export default function RootLayout({
                                  children,
                                  }: {
                                    children: React.ReactNode;
                                    }) {
                                      return (
                                          <html lang="pt-BR">
                                                <body className={inter.className}>
                                                        {children}
                                                              </body>
                                                                  </html>
                                                                    );
                                                                    }
