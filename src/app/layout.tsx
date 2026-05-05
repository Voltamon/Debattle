import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Debattle | Meaningful Political Discussions",
  description: "Join Debattle for meaningful political debates and discussions. Get out the vote.",
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
