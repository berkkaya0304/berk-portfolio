import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const JetBrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
  display: "swap",
});

export const metadata = {
  title: "Berk Kaya | Computer Engineer | Crafting Technology Solutions",
  description: "Berk Kaya's portfolio: Computer scientist, engineer, and software developer showcasing expertise in innovative software and technology solutions.",
  metadataBase: new URL("https://berkkaya.me"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Berk Kaya | Computer Engineer",
    description: "Computer scientist, engineer, and software developer showcasing expertise in innovative software and technology solutions.",
    url: "https://berkkaya.me",
    siteName: "Berk Kaya Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Berk Kaya Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Berk Kaya | Computer Engineer",
    description: "Computer scientist, engineer, and software developer showcasing expertise in innovative software and technology solutions.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="author" content="Berk Kaya" />
        <meta
          name="keywords"
          content="Berk Kaya, computer scientist, computer engineer, software engineer, portfolio, software development, programming, projects, technology, web development, full-stack developer"
        />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${JetBrains_mono.variable} antialiased`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
