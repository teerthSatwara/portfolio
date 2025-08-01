import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "next-themes"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <body
      
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        

        <ThemeProvider attribute="class" enableSystem>
        {children}
          
        </ThemeProvider >
       
      </body>
    </html>
  );
}
