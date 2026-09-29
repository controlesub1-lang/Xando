import React from 'react';
import { MapPin, ShoppingBag, Search, Truck, Utensils, Store, Compass, Info } from 'lucide-react';

export default function App() {
  const categories = [
    { name: 'Delivery', icon: <Utensils className="w-6 h-6" /> },
    { name: 'Mercados', icon: <Store className="w-6 h-6" /> },
    { name: 'Fretes', icon: <Truck className="w-6 h-6" /> },
    { name: 'Passeios', icon: <Compass className="w-6 h-6" /> },
    { name: 'Guia Útil', icon: <Info className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D4A3E]">
      <header className="p-4 bg-white shadow-sm sticky top-0 z-10">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold text-[#1B3A2E]">Xandó Express</h1>
          <div className="flex items-center gap-2 text-sm font-medium">
            <MapPin className="w-4 h-4" /> Xandó
          </div>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input type="text" placeholder="O que procura hoje?" className="w-full pl-10 pr-4 py-2 rounded-full bg-[#F0F4F2] outline-none" />
        </div>
      </header>

      <main className="p-4">
        <section className="grid grid-cols-2 gap-4">
          {categories.map((cat) => (
            <button key={cat.name} className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-[#E8E4D9] hover:border-[#8BA892] transition-all">
              <div className="mb-2 text-[#2D4A3E]">{cat.icon}</div>
              <span className="font-semibold">{cat.name}</span>
            </button>
          ))}
        </section>
      </main>
    </div>
  );
}