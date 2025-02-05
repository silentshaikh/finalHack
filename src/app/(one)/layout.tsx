import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Header from "@/components/Header/Header";
import TopBar from "@/components/TopBar/TopBar";
import Context from "@/Context/Context";
import Footer from "@/components/Footer/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Suspense } from "react";
import LoadingPage from "@/components/LoadingPage/LoadingPage";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Fabric Haven",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
<Suspense fallback={ <LoadingPage/> }>
        <ClerkProvider>
        <Context>
        <TopBar/>
        <Header/>
        {children}
        <Footer/>
        </Context>
        </ClerkProvider>
</Suspense>
      </body>
    </html>
  );
}
