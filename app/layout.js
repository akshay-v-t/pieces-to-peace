import './globals.css';
import { Lora } from 'next/font/google';

export const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-lora',
  display: 'swap',
});

export const metadata = {
  title: 'Pieces to Peace',
  description: 'Lorem Ipsum',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lora.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
