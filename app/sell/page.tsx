'use client';

import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function SellPage() {
  const [formData, setFormData] = useState({ title: '', price: 0, make: '', model: '', year: '', mileage: '', description: '' });
  
  const calculateFee = (price: number) => Math.min(price * 0.001, 100);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Create listing then redirect to Stripe
    alert('Listing form submitted - fee: £' + calculateFee(formData.price));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Sell Your Car on PointOne</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full form fields here */}
        <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-lg">List for Sale (0.1% fee)</button>
      </form>
    </div>
  );
}