import Navbar from './components/navbar/Navbar';
import './global.css';
import { Nunito } from 'next/font/google';
export const metadata = {
  title: 'Hotel App',
  description: 'Generated by create-nx-workspace',
};
const font = Nunito({
  subsets: ['latin'],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
      </body>
    </html>
  );
}
