import { Merriweather } from 'next/font/google';
import './globals.css'; 

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={merriweather.className}>
        {children}
      </body>
    </html>
  );
}
