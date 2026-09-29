import React from 'react';
import { MapPin, ShoppingBag, Search, Truck, Utensils, Store, Compass, Info } from 'lucide-react';

import React, { useState } from 'react';
import { MapPin, ShoppingBag, Search, Truck, Utensils, Store, Compass, Info, CheckCircle, UserPlus, X } from 'lucide-react';

export default function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', role: 'Cliente / Morador' });

  const categories = [
    { name: 'Delivery', icon: <Utensils className="w-6 h-6" /> },
    { name: 'Mercados', icon: <Store className="w-6 h-6" /> },
    { name: 'Fretes', icon: <Truck className="w-6 h-6" /> },
    { name: 'Passeios', icon: <Compass className="w-6 h-6" /> },
    { name: 'Guia Útil', icon: <Info className="w-6 h-6" /> },
  ];

  const handleConnect = (e) => {
    e.preventDefault();
    if (formData.name) {
      setIsConnected(true);
      setIsModalOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D4A3E]">
      <header className="p-4 bg-white shadow-sm sticky top-0 z-10">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold text-[#1B3A2E]">Xandó Express</h1>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-sm font-medium text-gray-600">
              <MapPin className="w-4 h-4 text-[#2D4A3E]" /> Xandó
            </div>
            {isConnected ? (
              <span className="flex items-center gap-1 bg-green-100 text-green-800 text-xs px-2.5 py-1 rounded-full font-semibold">
                <CheckCircle className="w-3.5 h-3.5" /> Conectado
              </span>
            ) : (
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-1 bg-[#2D4A3E] text-white text-xs px-3 py-1.5 rounded-full font-semibold hover:bg-[#1B3A2E] transition-all"
              >
                <UserPlus className="w-3.5 h-3.5" /> Conectar ao Hub
              </button>
            )}
          </div>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input type="text" placeholder="O que procura hoje?" className="w-full pl-10 pr-4 py-2 rounded-full bg-[#F0F4F2] outline-none" />
        </div>
      </header>

      <main className="p-4 max-w-2xl mx-auto">
        {!isConnected && (
          <div className="mb-6 bg-gradient-to-r from-[#2D4A3E] to-[#456A5B] text-white p-5 rounded-2xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="font-bold text-lg mb-1">Faça parte da nossa comunidade!</h2>
              <p className="text-sm text-gray-200">Conecte-se ao hub Xandó Express para pedir, anunciar ou oferecer serviços locais.</p>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-[#2D4A3E] px-4 py-2 rounded-xl font-semibold text-sm hover:bg-[#FDFBF7] transition-all whitespace-nowrap shadow"
            >
              Conectar a esse hub
            </button>
          </div>
        )}

        <section className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <button key={cat.name} className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-[#E8E4D9] hover:border-[#8BA892] transition-all">
              <div className="mb-2 text-[#2D4A3E]">{cat.icon}</div>
              <span className="font-semibold text-sm">{cat.name}</span>
            </button>
          ))}
        </section>
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-3xl p-6 shadow-xl relative animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-[#F0F4F2] text-[#2D4A3E] rounded-full flex items-center justify-center mx-auto mb-3">
                <UserPlus className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1B3A2E]">Conectar ao Xandó Express</h3>
              <p className="text-sm text-gray-500 mt-1">Preencha seus dados para acessar o hub local.</p>
            </div>

            <form onSubmit={handleConnect} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Seu Nome</label>
                <input 
                  type="text"
                  required
                  placeholder="Ex: Maria Silva"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F0F4F2] border border-transparent focus:border-[#2D4A3E] outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">WhatsApp / Telefone</label>
                <input 
                  type="tel"
                  required
                  placeholder="(73) 99999-9999"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F0F4F2] border border-transparent focus:border-[#2D4A3E] outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Você é:</label>
                <select 
                  value={formData.role}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F0F4F2] border border-transparent focus:border-[#2D4A3E] outline-none text-sm"
                >
                  <option>Cliente / Morador</option>
                  <option>Comerciante / Restaurante</option>
                  <option>Entregador / Prestador</option>
                </select>
              </div>

              <button 
                type="submit"
                className="w-full py-3 bg-[#2D4A3E] text-white rounded-xl font-semibold hover:bg-[#1B3A2E] transition-all shadow-md mt-2"
              >
                Conectar Agora
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}