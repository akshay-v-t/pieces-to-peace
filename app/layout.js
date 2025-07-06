import './globals.css';
import { Lora, Open_Sans } from 'next/font/google';

export const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-lora',
  display: 'swap',
});

export const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-openSans',
  display: 'swap',
});

export const metadata = {
  title: 'Pieces to Peace',
  description: 'Lorem Ipsum',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lora.variable} ${openSans.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
