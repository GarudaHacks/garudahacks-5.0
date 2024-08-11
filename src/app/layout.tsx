import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localfont from 'next/font/local'
import "./globals.css";

const pptelegraflight = localfont({
  src: [
    {
      path: "../../public/font/PPTelegraf-UltraLight.otf", 
      weight: "300", 
    }
  ], 
  variable: "--font-pptelegraflight"
})

const pptelegraf = localfont({
  src: [
    {
      path: "../../public/font/PPTelegraf-UltraBold.otf", 
      weight: "700", 
    },
  ], 
  variable: "--font-pptelegraf", 
})

const inter = Poppins({weight:'700', 
                      subsets: ['latin']});

export const metadata: Metadata = {
  title: "GarudaHacks 5.0",
  description: "Indonesia's premier hackathon, largest in SouthEast Asia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={'${pptelegraf.variable} font-sansmono'}>
      <body>{children}</body>
    </html>
  );
}
