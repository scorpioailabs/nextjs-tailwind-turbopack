import '@/styles/globals.css';
import React from 'react';
import AddressBar from '@/ui/AddressBar';
import GlobalNav from './GlobalNav';
import SideBar from '@/ui/SideBar';
import Footer from '@/ui/Footer';
import TestCard from '@/ui/TestCard';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Next.js Turbopack App Directory Playground</title>
      </head>
      <body className="overflow-y-scroll bg-zinc-900">
        <div className="grid grid-cols-[1fr,minmax(auto,240px),min(800px,100%),1fr] gap-x-8 py-8">
          <div className="col-start-2">
            <GlobalNav />
          </div>

          {/* use sidebar and style */}
          <div className="col-start-2">
            <SideBar />
          </div>
          <div className="col-start-3 space-y-6">
            <AddressBar />
            <div className="rounded-xl border border-zinc-800 bg-black p-8">
              {children}
            </div>
          </div>

          <div className="col-start-3 col-end-4 mt-28 flex items-center justify-center">
            <Footer reactVersion='383' nextVersion='3938'/>
          </div>
        </div>
      </body>
    </html>
  );
}
