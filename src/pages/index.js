import React from 'react';
import Carbon from '@/components/Carbon';
import HomeHeader from '@/components/HomeHeader';

export function HomeHeading({ children }) {
  return (
    <h2 className="mb-12 text-center text-5xl font-bold leading-tight sm:text-6xl">
      {children}
    </h2>
  );
}
export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="mb-20 flex items-center justify-center py-5">
        <Carbon />
      </div>
    </>
  );
}
