import React, { useState, useEffect } from 'react';
import { MapPin, ShoppingBag, Search, Truck, Utensils, Store, Compass, Info, CheckCircle, UserPlus, X, Sun, Moon, Cloud, Sparkles } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#121212] text-gray-100 p-6 font-sans">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-black text-amber-500 uppercase tracking-tighter">Royal Barber</h1>
        <p className="text-gray-500 text-sm mt-2">Estilo e precisão em cada detalhe.</p>
      </header>
  const services = [
    { name: 'Corte Degradê', price: 'R$ 60' },
    { name: 'Barba Premium', price: 'R$ 45' },
    { name: 'Combo Completo', price: 'R$ 95' },
    { name: 'Sobrancelha', price: 'R$ 20' }
  ];

  const handleConnect = (e) => {
    e.preventDefault();
    if (formData.name) {
      setIsConnected(true);
      setIsModalOpen(false);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput;
    const updatedMessages = [...messages, { sender: 'user', text: userMsg }];
    setMessages(updatedMessages);
    setChatInput('');

    setTimeout(() => {
      let reply = 'Estou aqui para ajudar com delivery, fretes, passeios e dicas em Xandó e Nova Caraíva. Como posso te orientar?';
      const lower = userMsg.toLowerCase();

      if (lower.includes('delivery') || lower.includes('comida') || lower.includes('mercado') || lower.includes('pedir')) {
        reply = 'Fazer seu pedido no novo Xandó Express is super prático! Acesse a aba \'Delivery\' no menu principal, escolha o restaurante ou mercado parceiro, monte seu carrinho e envie o pedido diretamente. Quer que eu te direcione para as opções abertas agora?';
      } else if (lower.includes('transporte') || lower.includes('frete') || lower.includes('bagagem') || lower.includes('quadriciclo') || lower.includes('buggy') || lower.includes('mala')) {
        reply = 'Precisa se deslocar ou transportar malas no Xandó ou Nova Caraíva? Na aba \'Fretes & Transporte\', você encontra condutores credenciados de quadriciclos e buggies para alinhar o atendimento com rapidez e segurança. Posso te levar até lá?';
      } else if (lower.includes('parceiro') || lower.includes('cadastro') || lower.includes('cadastrar') || lower.includes('restaurante') || lower.includes('pousada')) {
        reply = 'Seja muito bem-vindo ao Xandó Express! Cadastrar seu restaurante, pousada, frete ou passeio na nossa nova plataforma é a melhor forma de vender mais na alta e baixa temporada. Basta acessar a seção \'Seja um Parceiro\' e preencher o formulário rápido. Nossa equipe entrará em contato em breve!';
      } else if (lower.includes('custo') || lower.includes('gratuito') || lower.includes('taxa') || lower.includes('pagar') || lower.includes('grátis')) {
        reply = 'O uso do Xandó Express é **100% gratuito** para turistas e moradores! Você navega pelo guia, escolhe os serviços e faz seus pedidos sem pagar taxa de assinatura ou inscrição.';
      }

      setMessages(prev => [...prev, { sender: 'concierge', text: reply }]);
    }, 600);
  };

  return (
    <div className={`min-h-screen transition-colors duration-700 ${
      isNightTime 
        ? 'bg-[#0f172a] text-[#f8fafc]' 
        : 'bg-[#FDFBF7] text-[#3D3A32]'
    }`}>
      {/* HEADER DINÂMICO DIA / NOITE */}
      <header className={`relative overflow-hidden shadow-md transition-all duration-700 ${
        isNightTime
          ? 'bg-gradient-to-b from-[#1e293b] via-[#0f172a] text-white border-b border-slate-800'
          : 'bg-gradient-to-b from-[#e0f2fe] via-[#fef3c7] to-[#FDFBF7] text-[#2D4A3E] border-b border-amber-100'
      }`}>
        
        {/* ELEMENTOS ANIMADOS DE FUNDO */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {isNightTime ? (
            <div className="absolute inset-0">
              {/* Estrelas sutis */}
              <div className="absolute top-4 left-10 text-amber-200/60 animate-pulse text-xs">✦</div>
              <div className="absolute top-10 right-20 text-blue-200/70 animate-pulse text-xs" style={{ animationDuration: '3s' }}>✦</div>
              <div className="absolute top-6 right-40 text-white/50 text-[10px]">★</div>
              
              {/* Nuvens Noturnas Animadas em Loop */}
              <div className="absolute top-4 w-full flex animate-[slideCloud_25s_linear_infinite] opacity-30 text-white gap-32">
                <Cloud className="w-24 h-12" />
                <Cloud className="w-32 h-16" />
              </div>
            </div>
          ) : (
            <div className="absolute inset-0">
              {/* Raios de Sol Suaves e Sol Animado */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-300/30 rounded-full blur-2xl animate-pulse"></div>
            </div>
          )}
        </div>

        <div className="relative z-10 p-4 max-w-4xl mx-auto">
          {/* Barra Superior / Controles */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <div className={`p-2 rounded-2xl shadow-sm ${
                isNightTime ? 'bg-indigo-950/80 text-amber-300' : 'bg-amber-100 text-amber-600'
              }`}>
                {isNightTime ? <Moon className="w-6 h-6 animate-pulse" /> : <Sun className="w-6 h-6 animate-[spin_12s_linear_infinite]" />}
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight">Xandó Express</h1>
                <p className={`text-xs ${isNightTime ? 'text-slate-300' : 'text-amber-900/70'}`}>Caraíva & Xandó - BA</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Alternador de Modo Diurno / Noturno */}
              <div className={`flex items-center p-1 rounded-full border text-xs ${
                isNightTime ? 'bg-slate-900/80 border-slate-700 text-slate-300' : 'bg-white/80 border-amber-200 text-amber-900'
              }`}>
                <button 
                  onClick={() => setTimeMode(isNightTime ? 'day' : 'night')}
                  className={`px-2.5 py-1 rounded-full font-medium transition-all flex items-center gap-1 ${
                    timeMode !== 'auto' ? 'bg-amber-500 text-white shadow-sm' : 'hover:opacity-80'
                  }`}
                  title="Alternar manualmente Dia/Noite"
                >
                  {isNightTime ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
                  <span className="hidden sm:inline">{isNightTime ? 'Noite' : 'Dia'}</span>
                </button>
              </div>

              <div className={`flex items-center gap-1 text-sm font-medium px-2.5 py-1 rounded-full border ${
                isNightTime ? 'bg-slate-900/60 border-slate-700 text-slate-200' : 'bg-white/70 border-amber-200/60 text-[#2D4A3E]'
              }`}>
                <MapPin className="w-4 h-4 text-amber-600" /> Xandó
              </div>

              {isConnected ? (
                <span className="flex items-center gap-1 bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-semibold shadow-sm">
                  <CheckCircle className="w-3.5 h-3.5" /> Conectado
                </span>
              ) : (
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className={`flex items-center gap-1 text-xs px-3.5 py-1.5 rounded-full font-semibold shadow-sm transition-all ${
                    isNightTime 
                      ? 'bg-amber-400 text-slate-950 hover:bg-amber-300' 
                      : 'bg-[#2D4A3E] text-white hover:bg-[#1B3A2E]'
                  }`}
                >
                  <UserPlus className="w-3.5 h-3.5" /> Conectar
                </button>
              )}
            </div>
          </div>

          {/* Barra de Pesquisa */}
          <div className="relative mt-3 mb-2">
            <Search className={`absolute left-3.5 top-3.5 w-4 h-4 ${
              isNightTime ? 'text-slate-400' : 'text-amber-800/60'
            }`} />
            <input 
              type="text"
              placeholder="O que você procura no Xandó ou Nova Caraíva? (Ex: Pescado, Buggy, Açaí...)"
              className={`w-full pl-10 pr-4 py-3 rounded-2xl text-sm outline-none transition-all shadow-sm border ${
                isNightTime 
                  ? 'bg-slate-900/90 border-slate-700 text-white placeholder-slate-400 focus:border-amber-400' 
                  : 'bg-white/90 border-amber-200 text-[#2D4A3E] placeholder-amber-900/40 focus:border-[#2D4A3E]'
              }`}
            />
          </div>
        </div>
      </header>

      {/* CORPO DO APLICATIVO - ESTILO RÚSTICO E PRAIANO */}
      <main className="max-w-4xl mx-auto p-4 space-y-6">
        
        {/* Banner de Boas-vindas Rústico */}
        <div className={`p-5 rounded-3xl border shadow-sm transition-all ${
          isNightTime 
            ? 'bg-slate-800/80 border-slate-700 text-slate-100' 
            : 'bg-[#F7F4EB] border-[#E6DFC5] text-[#2D4A3E]'
        }`}>
          <div className="flex items-start justify-between">
            <div>
              <span className={`inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2 ${
                isNightTime ? 'bg-indigo-950 text-indigo-200' : 'bg-[#E8E2CB] text-[#4A5D4E]'
              }`}>
                🌴 Vivência Caraíva
              </span>
              <h2 className="text-lg font-bold mb-1">Bem-vindo ao coração do Xandó!</h2>
              <p className={`text-sm ${isNightTime ? 'text-slate-300' : 'text-[#5C5646]'}`}>
                Delivery nativo, fretes na areia, buggies e utilidades para sua estadia na vila mais charmosa da Bahia.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-amber-500 font-bold uppercase tracking-widest text-sm">Serviços</h3>
          {services.map((s, i) => (
            <div key={i} className="flex justify-between items-center p-4 bg-[#1a1a1a] border border-[#333] rounded-xl">
              <span className="text-gray-200 font-medium">{s.name}</span>
              <span className="text-amber-500 font-bold">{s.price}</span>
            </div>
          ))}
        </div>

        {/* Destaques / Sugestões da Vila */}
        <div>
          <div className="flex justify-between items-center mb-3 px-1">
            <h3 className="text-sm font-bold uppercase tracking-wider opacity-80">Destaques no Xandó</h3>
            <span className="text-xs font-medium text-amber-700 dark:text-amber-400 cursor-pointer hover:underline">Ver todos</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[1, 2].map((item) => (
              <div 
                key={item}
                className={`p-4 rounded-3xl border shadow-sm transition-all ${
                  isNightTime 
                    ? 'bg-slate-800/90 border-slate-700 text-slate-100' 
                    : 'bg-white border-[#E6DFC5] text-[#3D3A32]'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 uppercase">
                      {item === 1 ? 'Restaurante na Praia' : 'Serviço de Frete'}
                    </span>
                    <h4 className="font-bold text-base mt-1">
                      {item === 1 ? 'Cabana & Sabor do Xandó' : 'Frete 4x4 Areia Fofa'}
                    </h4>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded-xl bg-emerald-50 text-emerald-800">
                    {item === 1 ? '⭐ 4.9' : '⚡ Rápido'} 
                  </span>
                </div>
                <p className={`text-xs mb-3 ${isNightTime ? 'text-slate-300' : 'text-[#6B6555]'}`}>
                  {item === 1 
                    ? 'Peixe fresco do dia, porções generosas e cerveja gelada à beira mar.' 
                    : 'Transporte de bagagens e compras da balsa até sua pousada no Xandó.'}
                </p>
                <button className={`w-full py-2.5 rounded-xl font-semibold text-xs transition-all shadow-sm ${
                  isNightTime
                    ? 'bg-amber-400 text-slate-950 hover:bg-amber-300'
                    : 'bg-[#2D4A3E] text-white hover:bg-[#1B3A2E]'
                }`}>
                  {item === 1 ? 'Ver Cardápio & Pedir' : 'Chamar no WhatsApp'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* MODAL DE CONEXÃO AO HUB */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`w-full max-w-md p-6 rounded-3xl shadow-2xl relative border ${
            isNightTime ? 'bg-slate-900 border-slate-800 text-white' : 'bg-[#FDFBF7] border-[#E6DFC5] text-[#2D4A3E]' 
          }`}>
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 p-2 rounded-full hover:bg-black/5 text-gray-500"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-amber-100 text-amber-800 rounded-2xl flex items-center justify-center mx-auto mb-2">
                <UserPlus className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold">Conecte-se ao Xandó Express</h3>
              <p className="text-xs text-gray-500 mt-1">
                Participe da rede de moradores, comerciantes e visitantes da região.
              </p>
            </div>

            <form onSubmit={handleConnect} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase mb-1 opacity-70">Seu Nome ou Estabelecimento</label>
                <input 
                  type="text"
                  required
                  placeholder="Ex: João da Pousada / Marina"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none ${
                    isNightTime 
                      ? 'bg-slate-800 border-slate-700 text-white focus:border-amber-400' 
                      : 'bg-[#F2EFE9] border-transparent focus:border-[#2D4A3E]'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase mb-1 opacity-70">WhatsApp / Telefone</label>
                <input 
                  type="tel"
                  required
                  placeholder="(73) 99999-9999"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none ${
                    isNightTime 
                      ? 'bg-slate-800 border-slate-700 text-white focus:border-amber-400' 
                      : 'bg-[#F2EFE9] border-transparent focus:border-[#2D4A3E]'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase mb-1 opacity-70">Você é:</label>
                <select 
                  value={formData.role}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none ${
                    isNightTime 
                      ? 'bg-slate-800 border-slate-700 text-white focus:border-amber-400' 
                      : 'bg-[#F2EFE9] border-transparent focus:border-[#2D4A3E]'
                  }`}
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

      {/* BOTÃO FLUTUANTE DO CONCIERGE XANDÓ EXPRESS */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={() => setIsConciergeOpen(!isConciergeOpen)}
          className={`flex items-center gap-2 px-4 py-3 rounded-full shadow-xl transition-all duration-300 font-medium text-sm ${
            isNightTime
              ? 'bg-amber-400 text-slate-950 hover:bg-amber-300 shadow-amber-500/20'
              : 'bg-[#2D4A3E] text-[#FDFBF7] hover:bg-[#233a30] shadow-emerald-950/25'
          }`}
        >
          <Sparkles className="w-5 h-5 animate-pulse text-amber-300" />
          <span>Concierge Xandó</span>
        </button>

        {/* MODAL / CHAT DO CONCIERGE */}
        {isConciergeOpen && (
          <div className={`absolute bottom-16 right-0 w-80 sm:w-96 rounded-2xl shadow-2xl border flex flex-col overflow-hidden transition-all duration-300 ${
            isNightTime
              ? 'bg-slate-900 border-slate-700 text-slate-100'
              : 'bg-white border-amber-200 text-[#3D3A32]'
          }`}>
            {/* Cabeçalho do Chat */}
            <div className={`p-4 flex items-center justify-between border-b ${
              isNightTime ? 'bg-slate-800 border-slate-700' : 'bg-amber-50 border-amber-100'
            }`}>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-amber-500 text-white">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Concierge Xandó Express</h3>
                  <p className="text-[10px] opacity-75">Seu assistente virtual oficial</p>
                </div>
              </div>
              <button
                onClick={() => setIsConciergeOpen(false)}
                className="p-1.5 rounded-full hover:bg-black/10 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Corpo das Mensagens */}
            <div className="p-4 h-80 overflow-y-auto flex flex-col gap-3 text-xs">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`max-w-[85%] p-3 rounded-2xl leading-relaxed ${
                    m.sender === 'user'
                      ? 'ml-auto bg-amber-500 text-white rounded-br-sm'
                      : isNightTime
                        ? 'mr-auto bg-slate-800 text-slate-200 rounded-bl-sm border border-slate-700'
                        : 'mr-auto bg-[#F2EFE9] text-[#3D3A32] rounded-bl-sm'
                  }`}
                >
                  {m.text}
                </div>
              ))}
            </div>

            {/* Input de Envio */}
            <form onSubmit={handleSendMessage} className={`p-3 border-t flex gap-2 ${
              isNightTime ? 'bg-slate-800 border-slate-700' : 'bg-amber-50/50 border-amber-100'
            }`}>
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Digite sua dúvida sobre o Xandó..."
                className={`flex-1 px-3 py-2 rounded-xl text-xs outline-none border ${
                  isNightTime
                    ? 'bg-slate-900 border-slate-700 text-white focus:border-amber-400'
                    : 'bg-white border-amber-200 text-[#3D3A32] focus:border-[#2D4A3E]'
                }`}
              />
              <button
                type="submit"
                className="px-4 py-2 bg-amber-500 text-white rounded-xl text-xs font-semibold hover:bg-amber-600 transition"
              >
                Enviar
              </button>
            </form>
          </div>
        )}
      </div>

      {/* FOOTER OU INFO FINAL */}
      <footer className={`py-8 text-center text-xs transition-colors duration-700 ${
        isNightTime ? 'text-slate-500 border-t border-slate-800' : 'text-amber-900/40 border-t border-amber-100' 
      }`}>
        <p>© Xandó Express • Caraíva e Xandó - BA</p>
      </footer>

      {/* Estilos CSS Inline para Animação de Nuvens */}
      <style>{`
        @keyframes slideCloud {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
