import type { Metadata } from "next";
import "./globals.css";
import CorporateBanner from "@/components/CorporateBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vican Code Private Limited | Enterprise SaaS & Software Engineering",
  description: "Vican Code Private Limited (CIN: U62012PB2026PTC069843) is an Indian software powerhouse building flagship SaaS platforms (DGate, Educan, VicanTools, VicanThemes, PracEasy, MyBankIFSCCode) and delivering high-performance web, cloud, and mobile engineering.",
  keywords: [
    "Vican Code Private Limited",
    "Vican Code",
    "CIN U62012PB2026PTC069843",
    "DGate Society OS",
    "Educan School ERP",
    "VicanTools WebAssembly",
    "VicanThemes Marketplace",
    "PracEasy CA Suite",
    "MyBankIFSCCode Bank Directory",
    "Software Development Derabassi Punjab",
    "Indian SaaS Company"
  ],
  authors: [{ name: "Vican Code Private Limited" }],
  creator: "Vican Code Private Limited",
  publisher: "Vican Code Private Limited",
  metadataBase: new URL("https://www.vicancode.com"),
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/assets/images/favicons/favicon-16x16.png", type: "image/png", sizes: "16x16" }
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" }
    ],
    shortcut: "/favicon.ico"
  },
  openGraph: {
    title: "Vican Code Private Limited | Enterprise SaaS & Software Engineering",
    description: "Discover our suite of flagship products: DGate, Educan, VicanTools, VicanThemes, PracEasy, and MyBankIFSCCode.",
    url: "https://www.vicancode.com",
    siteName: "Vican Code",
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicons/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body>
        <CorporateBanner />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
