import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import AudioPlayer from "@/components/audio/Audio";

const JetBrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Berk Kaya | Crafting Technology Solutions with Expertise in Engineering",
  description: "Berk Kaya - Computer Scientist | Engineer | Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="author" content="Berk Kaya" />
        <meta
          name="keywords"
          content="Berk Kaya, computer scientist, computer engineer, software engineer, portfolio, software development, programming, projects, technology"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://berkkaya.me/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://berkkaya.me/your-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={JetBrains_mono.variable}>
        <AudioPlayer />
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
