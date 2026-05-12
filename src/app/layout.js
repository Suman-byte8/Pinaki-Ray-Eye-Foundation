import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Eye Specialist Hospital in Malda | Pinaki Ray Eye Foundation",
  description:
    "National Award Winning Eye Hospital in Malda, West Bengal. Providing comprehensive eye care, cataract surgery, and community outreach since 1992.",
  icons: {
    icon: "/favIcon.png",
    apple: "/favIcon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Google Analytics Tag */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-T8EGTHF3ZS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-T8EGTHF3ZS');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
          <Navbar />
          <main className="flex-grow w-full">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
