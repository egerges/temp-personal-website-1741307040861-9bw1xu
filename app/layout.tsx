import type { Metadata } from "next";
import { ErrorBoundary } from "react-error-boundary";

import "./globals.css";

import { Footer } from "@components/Footer";
import { Navbar } from "@components/Navbar";
import { ErrorFallback } from "@components/ErrorFallback";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { Suspense } from "react";
import Loader from "@/components/Loader";

export const metadata: Metadata = {
  title: "Elio Gerges - Software Engineer",
  description: `Hey, I'm Elio! I turn code into Experiences.
                Fueled by curiosity, inspired by challenges, and guided by the desire
                to make technology more accessible.
                A Software Engineer exploring the realms of full-stack development and crafting user-focused applications with a touch of innovation.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-adsense-account" content="ca-pub-1039385271790053" />
        {/* Google Tag Manager Head Script */}
        <GoogleTagManager gtmId="GTM-5JWFGN9F" />
        <GoogleAnalytics gaId="G-8ZYEDWVYLT" />
      </head>
      <body className="antialiased w-[100vw] min-h-[100%]">
        
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5JWFGN9F"
            height="0"
            width="0"
            style={{display: 'none', visibility: 'hidden'}}>
          </iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1039385271790053"
        crossOrigin="anonymous"></script>
        
        <Navbar />
        <div
          className="min-h-[50rem] w-full max-w-[100vw] overflow-x-hidden dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center"
        >
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Loader />}>
              {children}
            </Suspense>
          </ErrorBoundary>
        </div>
        <Footer />
      </body>
    </html>
  );
}
