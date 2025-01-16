import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '@/app/session_providers/SessionProvider';
import { Navbar } from '@/components/ui/navbar';
import { RenderProvider } from "@/contexts/RenderContext";
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fashion Store - Your Style, Your Way',
  description: 'Discover the latest fashion trends and shop your favorite styles.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RenderProvider>
          <Providers>
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </RenderProvider>
      </body>
    </html>
  );
}
