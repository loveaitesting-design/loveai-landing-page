'use client';

import './globals.css';
import { useEffect, useState } from 'react';

type RootLayoutProps = {
  children: React.ReactNode;
};

type HeartData = {
  id: number;
  left: string;
  fontSize: number;
  color: string;
  animationDuration: number;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const [hearts, setHearts] = useState<HeartData[]>([]);

  useEffect(() => {
    const colors = ['#ff4d6d', '#ff6f91', '#ff8a80', '#ffb6b9', '#ff99c8'];
    const newHearts: HeartData[] = [];

    for (let i = 0; i < 50; i++) {
      newHearts.push({
        id: i,
        left: `${Math.random() * 100}vw`,
        fontSize: Math.random() * 30 + 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        animationDuration: 5 + Math.random() * 5,
      });
    }

    setHearts(newHearts);
  }, []);

  return (
    <html lang="en">
      <head />
      <body
        style={{
          margin: 0,
          padding: 0,
          minHeight: '100vh',
          background: 'linear-gradient(to right, #FFDFDF, #D5F8FF)',
          overflowX: 'hidden',
        }}
      >
        {/* Floating hearts container */}
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 0,
            overflow: 'hidden',
          }}
        >
          {hearts.map(({ id, left, fontSize, color, animationDuration }) => (
            <div
              key={id}
              style={{
                position: 'absolute',
                left,
                bottom: '-50px',
                fontSize,
                color,
                animation: `floatUp ${animationDuration}s ease-in forwards`,
                userSelect: 'none',
                willChange: 'transform, opacity',
              }}
            >
              ♡
            </div>
          ))}
        </div>

        {children}

        <style>{`
          @keyframes floatUp {
            0% { transform: translateY(0) scale(1); opacity: 1; }
            100% { transform: translateY(-110vh) scale(1.5); opacity: 0; }
          }
        `}</style>
      </body>
    </html>
  );
}
