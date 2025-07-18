import { Inter } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/related/AppShell";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="pointer-events-none fixed inset-0 -z-20 bg-[linear-gradient(90deg,rgba(180,200,255,0.06)_1px,transparent_1px),linear-gradient(180deg,rgba(180,200,255,0.06)_1px,transparent_1px)] [background-size:48px_48px] opacity-40" />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
