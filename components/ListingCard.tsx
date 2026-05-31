'use client';
import Image from 'next/image';

export default function ListingCard({ listing }: { listing: any }) {
  return (
    <div className="bg-zinc-900 rounded-3xl overflow-hidden group cursor-pointer">
      <div className="relative h-64 bg-zinc-800">
        {listing.images && listing.images.length > 0 ? (
          <Image 
            src={listing.images[0]} 
            alt={`${listing.make} ${listing.model}`} 
            fill 
            className="object-cover" 
          />
        ) : null}
      </div>
      <div className="p-6">
        <div className="flex justify-between">
          <div>
            <p className="text-emerald-400 text-xs tracking-widest">{listing.year} • {(listing.mileage || 0).toLocaleString()} miles</p>
            <h3 className="font-semibold text-xl mt-1">{listing.make} {listing.model}</h3>
          </div>
          <div className="text-right font-mono text-3xl font-bold">£{Number(listing.price).toLocaleString()}</div>
        </div>
        <button className="mt-8 w-full py-3.5 bg-white text-zinc-950 rounded-2xl text-sm font-semibold hover:bg-emerald-400 transition-all">
          VIEW + PRINT POSTER
        </button>
      </div>
    </div>
  );
}