import type { Metadata, Viewport } from 'next';
import './globals.css';

// Configure NEXT_PUBLIC_SITE_URL once the production domain is approved.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Alline Silvestre | Nutricionista Funcional em Umuarama e Online',
  description: 'Alline Silvestre, CRN 7793. Nutrição funcional com foco em saúde intestinal, lipedema, intolerância à histamina e cuidado individualizado. Consultas em Umuarama e online.',
  keywords: ['Alline Silvestre', 'Nutricionista Umuarama', 'Nutrição funcional', 'Saúde intestinal', 'Lipedema', 'Consulta nutricional online'],
  openGraph: {
    title: 'Alline Silvestre | Nutrição Funcional',
    description: 'Nutrição personalizada, ciência e escuta. Atendimento em Umuarama e online.',
    type: 'website', locale: 'pt_BR',
    images: [{ url: '/alline-preto.webp', width: 1100, height: 1883, alt: 'Retrato de Alline Silvestre' }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#f8f6f2' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
