import type { Metadata } from "next";

import "./globals.css";
import AnimateCaseStudy from "./AnimateCaseStudy";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, caseStudy }: { children: React.ReactNode; caseStudy: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen p-24">
          <AnimateCaseStudy caseStudy={caseStudy}>{children}</AnimateCaseStudy>
        </main>
      </body>
    </html>
  );
}
