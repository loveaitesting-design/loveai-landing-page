'use client'

import Footer from '@/components/Footer/Footer';
import NavComponent from '@/components/Navbar/NavComponent';
import { ReactNode } from 'react';
import FloatingHearts from '@/components/FloatingHearts/FloatingHearts';
type PolicyLayoutProps = {
  children: ReactNode;
};

export default function PolicyLayout({ children }: PolicyLayoutProps) {
  return (
    <main>
            <FloatingHearts />

      <NavComponent />
      {children}
      <Footer />
    </main>
  );
} 