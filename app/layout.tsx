import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Divya | Full Stack Developer Portfolio",
  description:
    "Portfolio of Divya, a B.Tech IT graduate and Full Stack Developer specializing in Next.js, React, and cloud technologies. Available for opportunities.",
  keywords: ["Divya", "Full Stack Developer", "Next.js", "React", "Portfolio", "Web Developer", "Tamil Nadu"],
  authors: [{ name: "Divya" }],
  openGraph: {
    title: "Divya | Full Stack Developer Portfolio",
    description: "Portfolio of Divya – Full Stack Developer | Next.js | React | AWS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="noise">{children}</body>
    </html>
  );
}
