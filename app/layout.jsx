import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

import AudioPlayer from "@/components/audio/Audio";


const JetBrains_mono = JetBrains_Mono({ subsets: ["latin"], weight: ["100","200","300","400","500","600","700","800"], variable: '--font-jetbrainsMono' });

export const metadata = {
  title: "Berk Kaya Portfolio",
  description: "Berk Kaya Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={JetBrains_mono.variable}>
        <AudioPlayer />
        <Header />
        <StairTransition/>
        <PageTransition>
        {children}
        </PageTransition>
        </body>
    </html>
  );
}
