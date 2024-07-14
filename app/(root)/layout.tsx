import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import '../globals.css'
import {Toaster} from 'react-hot-toast';

export const metadata: Metadata = {
  title: "My resume",
  description: "about myself",
  icons:{
    icon:''
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">
          <Toaster />
          <div className=" bg-dark-1">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}