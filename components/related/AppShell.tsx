"use client";
import Navbar from "@/components/related/Navbar";
import MobileNav from "@/components/related/MobileNav";
import { useState, useEffect } from "react";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <>
      
      <Navbar />
      <MobileNav />
      <main className="">
        {children}
      </main>
    </>
  );
}
