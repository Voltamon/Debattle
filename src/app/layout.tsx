import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Debattle | The Premier Digital Parliament",
  description: "Join the waitlist for the world's first structured parliamentary debate platform. Elevate the public discourse.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
