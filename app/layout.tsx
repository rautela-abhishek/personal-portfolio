import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Abhishek Singh Rautela - Portfolio',
  description: 'Software Developer Portfolio',
  keywords: ['Portfolio', 'Software Developer', 'Full-Stack', 'Developer'],
  authors: [{ name: 'Abhishek Singh Rautela' }],
  openGraph: {
    title: 'Abhishek Singh Rautela - Portfolio',
    description: 'Software Developer Portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}