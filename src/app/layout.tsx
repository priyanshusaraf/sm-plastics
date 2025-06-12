import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SM Plastics - Leading Injection Moulding Manufacturer",
  description: "SM Plastics is a leading injection moulding plastic manufacturing company with 25+ years of experience, 22+ machines, specializing in pen manufacturing, toy cars, containers, and spectacle frames. Founded by Gopal Saraf.",
  keywords: "injection moulding, plastic manufacturing, pen manufacturing, toy cars, containers, spectacle frames, SM Plastics, Gopal Saraf",
  authors: [{ name: "SM Plastics" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
