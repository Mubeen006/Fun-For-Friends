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

export const metadata = {
  title: "Fun For Friends",
  description: "Next app for freinds to have fun together",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
  },
  openGraph: {
    title: "Fun For Friends",
    description: "Next app for friends to have fun together",
    url: "https://fun-for-friends.vercel.app",
    siteName: "Fun For Friends",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fun For Friends OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fun For Friends",
    description: "Next app for friends to have fun together",
    images: ["/og-image.png"],
  },
  themeColor: "#000000",
  appleWebApp: {
    capable: true,
    title: "Fun For Friends",
    statusBarStyle: "black-translucent",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  verification: {
    google: "google-site-verification=google0544d66e61578cfb.html",
    yandex: "yandex-verification: your-yandex-verification-code",
    me: "your-me-verification-code",
  },
  alternates: {
    canonical: "https://fun-for-friends.vercel.app",
    languages: {
      "en-US": "https://fun-for-friends.vercel.app/en-US",
      "es-ES": "https://fun-for-friends.vercel.app/es-ES",
    },
  },
  manifestIcons: [
    {
      src: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      src: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      src: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  formatDetection: {
    telephone: false,
  },
  theme: {
    primary: "#000000",
    secondary: "#ffffff",
  },
  keywords: [
    "fun for friends",
    "next app",
    "friends",
    "fun",
    "social",
    "entertainment",
  ],
  authors: [
    {
      name: "Muhammad Mubeen",
      url: "#",
      email: "cmubeen599@gmail.com",
    },],
  publisher: {
    name: "Muhammad Mubeen",
    url: "#",
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
