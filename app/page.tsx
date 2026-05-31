'use client';

import { useState } from 'react';
import { Car, Search, Plus, MapPin } from 'lucide-react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <nav className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="bg-emerald-500 text-black w-9 h-9 rounded-xl flex items-center justify-center font-bold">P1</div>
            <div>
              <div className="font-semibold text-2xl tracking-tighter">PointOne</div>
              <div className="text-[10px] text-zinc-500 -mt-1">AUTO</div>
            </div>
          </div>

          <div className="flex items-center gap-10 text-sm">
            <a href="#browse" className="hover:text-emerald-400">Browse Cars</a>
            <a href="#how" className="hover:text-emerald-400">How it Works</a>
            <a href="#sell" className="hover:text-emerald-400">Sell</a>
          </div>

          <button className="bg-white hover:bg-zinc-100 text-black px-8 py-2.5 rounded-2xl font-medium text-sm">Sign in</button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-zinc-900 text-emerald-400 text-sm px-4 py-1.5 rounded-full mb-6">
            0.1% fee • Max £100
          </div>
          <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
            The simplest way<br />to sell your car
          </h1>
          <p className="text-2xl text-zinc-400 max-w-lg mx-auto">
            List today. Active forever. Pay almost nothing.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 pb-20">
        <div className="bg-zinc-900 rounded-3xl p-2 shadow-2xl">
          <div className="flex bg-zinc-950 rounded-3xl p-2">
            <div className="flex-1 flex items-center px-6 py-5 bg-zinc-900 rounded-3xl">
              <Search className="mr-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Search makes, models, registration..."
                className="bg-transparent outline-none flex-1 placeholder:text-zinc-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-black px-12 rounded-3xl font-medium">Search</button>
          </div>
        </div>
      </div>

      {/* How it Works */}
      <section id="how" className="bg-zinc-900 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold tracking-tight">How PointOne Works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                <Plus className="w-10 h-10 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">1. List Your Car</h3>
              <p className="text-zinc-400">Upload photos, details, pay tiny 0.1% fee. No time limit.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                <Car className="w-10 h-10 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">2. Buyers Find You</h3>
              <p className="text-zinc-400">Share QR poster or link. Buyers get full info + MOT history.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                <MapPin className="w-10 h-10 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">3. Sell & Transfer</h3>
              <p className="text-zinc-400">Complete sale privately. We take no cut on the sale price.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}