import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amelie Asberger",
  description: "Amelie Asberger, Softwareentwicklerin (Frontend, Web) aus Augsburg",
  formatDetection: {
      telephone: false,
      date: false,
      email: false,
      url: false,
      address: false,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
        <head>
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/assets/icons/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/assets/icons/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/assets/icons/favicon-16x16.png"
            />
            <link
                rel="manifest"
                href="/assets/icons/site.webmanifest"
            />
            <link
                rel="shortcut icon"
                href="/assets/icons/favicon.ico"
            />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
    </html>
  );
}
