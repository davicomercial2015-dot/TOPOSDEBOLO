/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  Clock, 
  Download, 
  FileText, 
  Gift, 
  Layers, 
  Printer, 
  Sparkles, 
  Zap,
  ChevronDown,
  Star,
  ShieldCheck,
  Package,
  ArrowRight,
  Heart,
  MessageCircle,
  Send,
  Bookmark
} from 'lucide-react';

// --- Components ---

const UrgencyBanner = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes session

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="bg-brand-pink text-white py-2 px-4 shadow-lg sticky top-0 z-50 overflow-hidden font-black uppercase tracking-wider text-[10px] sm:text-xs">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-6">
        <div className="flex items-center gap-2">
          <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>Oferta: 75% OFF + Bônus termina em: <span className="text-brand-accent font-mono">{formatTime(timeLeft)}</span></span>
        </div>
        <div className="hidden sm:block h-3 w-px bg-white/20" />
        <p>Encerra HOJE!</p>
      </div>
      <motion.div 
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 h-[2px] bg-yellow-300 w-full"
      />
    </div>
  );
};

const SectionTitle = ({ children, subtitle, light = false }: { children: ReactNode, subtitle?: string, light?: boolean }) => (
  <div className="text-center mb-12 px-4">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-2xl md:text-3xl font-display font-black mb-4 uppercase ${light ? 'text-white' : 'text-brand-purple'}`}
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className={`text-lg max-w-2xl mx-auto leading-relaxed ${light ? 'text-white/80' : 'text-slate-600'}`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-brand-light p-6 rounded-xl border border-slate-200 flex flex-col items-center text-center"
  >
    <div className="text-3xl mb-4">
      <Icon className="w-10 h-10 text-brand-purple" />
    </div>
    <h3 className="text-sm md:text-base font-black mb-2 text-brand-dark uppercase leading-tight">{title}</h3>
    <p className="text-slate-600 font-bold text-xs leading-relaxed">{description}</p>
  </motion.div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string, key?: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-center hover:text-brand-purple transition-colors"
      >
        <span className="text-lg font-bold text-slate-800 flex-1">{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden text-center"
          >
            <p className="pb-6 text-slate-600 leading-relaxed max-w-xl mx-auto px-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [showUpsell, setShowUpsell] = useState(false);
  
  useEffect(() => {
    if (showUpsell) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showUpsell]);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-brand-light font-sans selection:bg-brand-purple/30">
      <UrgencyBanner />

      {/* Hero Section */}
      <section className="relative pt-6 pb-12 lg:pt-16 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-display font-black text-brand-dark leading-[1.2] mb-6 uppercase tracking-tighter">
              +1.500 <span className="text-brand-purple">Moldes de Topos de Bolo</span> prontos para imprimir e montar em minutos
            </h1>

            {/* Video Moved Here - Below Headline */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="my-8 relative"
            >
              <div className="relative aspect-[9/16] max-w-[240px] md:max-w-[280px] mx-auto rounded-3xl overflow-hidden shadow-2xl border-[4px] sm:border-[6px] border-white ring-1 ring-slate-200">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/Y_mnFKApVR0?autoplay=1&mute=1&loop=1&playlist=Y_mnFKApVR0"
                  title="Vídeo de Demonstração"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
            
            <p className="text-base sm:text-lg text-slate-600 font-bold mb-8 leading-relaxed max-w-2xl mx-auto">
              Acesse o maior pack do Brasil com +1500 modelos prontos e 100% editáveis no Canva. Imprima com o tamanho correto e lucre muito mais na sua papelaria.
            </p>

            <div className="mb-6">
              <button 
                onClick={scrollToPricing}
                className="w-full sm:w-auto bg-brand-accent text-brand-dark px-8 py-5 rounded-xl text-lg sm:text-xl font-black shadow-[0_6px_0_0_#b45309] transition-all flex items-center justify-center gap-2 active:shadow-[0_2px_0_0_#b45309] active:translate-y-1 uppercase"
              >
                QUERO MEU ACESSO AGORA!
              </button>
            </div>

            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-3 py-2 rounded-full text-[10px] sm:text-xs font-black uppercase border border-emerald-100 mb-8">
              <Gift className="w-3 h-3 sm:w-4 sm:h-4 text-brand-purple" />
              <span>BÔNUS: Convites Editáveis + Modelos Top de Vendas inclusos!</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-white py-16 sm:py-20 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4">
          <SectionTitle>
            Veja como funcionam os Moldes Prontos:
          </SectionTitle>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <FeatureCard 
              icon={Download} 
              title="ESCOLHA O TEMA (+1500 OPÇÕES)" 
              description=""
            />
            <FeatureCard 
              icon={Sparkles} 
              title="EDITE NO CANVA EM MINUTOS" 
              description=""
            />
            <FeatureCard 
              icon={FileText} 
              title="TAMANHO CONFIGURADO A4" 
              description=""
            />
            <FeatureCard 
              icon={Printer} 
              title="IMPRIMA E ENTREGUE HOJE" 
              description=""
            />
          </div>
        </div>
      </section>

      {/* Variety Section */}
      <section className="py-16 sm:py-24 overflow-hidden bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4">
          <SectionTitle subtitle="São mais de 1500 modelos profissionais para você nunca mais recusar um pedido por falta de tempo.">
            Variedade Incomparável
          </SectionTitle>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-16">
            {[
              "https://i.pinimg.com/1200x/64/3c/8c/643c8c8003c2493a75ec49454a6b720c.jpg",
              "https://i.pinimg.com/1200x/8a/f9/d6/8af9d64ef703511ea9cbdd38073d5f9c.jpg",
              "https://i.pinimg.com/736x/0c/d6/b4/0cd6b41321cab2f68f451c5d57dd1350.jpg",
              "https://i.pinimg.com/1200x/47/06/3d/47063dee77542d5ad2727030d3af589b.jpg",
              "https://i.pinimg.com/1200x/b5/21/ba/b521ba8e49613050b325607c3a218615.jpg",
              "https://i.pinimg.com/736x/d4/cc/31/d4cc31375a26d6f3afba80ff0fe4d3ad.jpg",
              "https://i.pinimg.com/1200x/42/df/e1/42dfe1a50a39941b7b76d14d715ac5be.jpg",
              "https://i.pinimg.com/736x/98/6e/17/986e17cf52dfb88d566f098d4e82d53b.jpg"
            ].map((imgUrl, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
                className="relative rounded-2xl overflow-hidden aspect-square shadow-md border border-slate-100 group"
              >
                <img 
                  src={imgUrl} 
                  alt={`Demonstrativo ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

            <div className="bg-brand-light rounded-3xl p-6 sm:p-12 border border-brand-purple/10 text-center">
              <div className="grid sm:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col items-center sm:items-start sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-black text-brand-dark mb-6 uppercase tracking-tight">
                    Tudo o que você precisa <span className="text-brand-purple">em um só lugar</span>
                  </h3>
                  <ul className="space-y-3 w-full max-w-sm mx-auto sm:mx-0">
                    {[
                      '+1500 Temas de todos os nichos',
                      'Arquivos em Alta Resolução (PNG, PDF)',
                      'Templates 100% Editáveis no Canva',
                      'Tamanho A4 já configurado',
                      'Acesso Imediato após a compra'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={scrollToPricing}
                    className="mt-8 text-brand-purple font-black flex items-center gap-2 text-sm uppercase tracking-wider hover:translate-x-1 transition-transform"
                  >
                    Ver planos de acesso <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="hidden sm:block">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 rotate-2">
                    <p className="text-slate-400 font-black text-[10px] uppercase tracking-widest mb-4">Sugestão de uso</p>
                    <p className="text-slate-700 font-bold text-sm leading-relaxed italic">
                      "Desde que comecei a usar esse pack, consigo entregar encomendas no mesmo dia. Meus clientes amam a rapidez e a qualidade dos temas!"
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="w-8 h-8 bg-brand-pink rounded-full" />
                      <span className="text-xs font-black text-brand-dark">Mariana, Confeiteira</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="bg-brand-purple py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-4 uppercase">
              BÔNUS ESPECIAIS <span className="text-brand-accent underline underline-offset-8 italic">GRÁTIS</span>
            </h2>
            <p className="text-white/80 text-lg font-bold max-w-2xl mx-auto">
              Ao adquirir o pack hoje, você leva esses extras sem custo adicional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: 'Convites Editáveis', 
                desc: 'Modelos de convites que combinam perfeitamente com os topos de bolo.',
                val: 'R$ 67,00',
                img: 'https://i.pinimg.com/736x/9d/80/23/9d80233579036643b7e1ce3a71e962e1.jpg'
              },
              { 
                title: 'Seleção Top Vendas', 
                desc: 'Os temas que mais saem nas festas e garantem encomendas rápidas.',
                val: 'R$ 47,00',
                img: 'https://i.pinimg.com/736x/0d/66/5a/0d665aba1683924c006b2ccd4ee2ca76.jpg'
              },
              { 
                title: 'Templates Extras', 
                desc: 'Bandeirolas e wrappers para cupcakes combinando com os temas.',
                val: 'R$ 57,00',
                img: 'https://i.pinimg.com/1200x/a1/0f/f8/a10ff8f6245582b41e6ddf1418d8f772.jpg'
              }
            ].map((bonus, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl border-b-4 border-slate-200 flex flex-col"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={bonus.img} 
                    alt={bonus.title} 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-emerald-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase border border-white/20 shadow-lg">
                      PRESENTE GRÁTIS
                    </div>
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col items-center text-center">
                  <h3 className="text-xl font-black text-brand-dark mb-2 uppercase tracking-tight">{bonus.title}</h3>
                  <p className="text-slate-600 mb-6 font-bold text-sm leading-relaxed flex-1">{bonus.desc}</p>
                  <div className="flex items-center justify-center gap-2 pt-4 border-t border-slate-100 w-full">
                    <span className="text-slate-300 line-through text-xs font-bold">DE {bonus.val}</span>
                    <span className="text-emerald-600 font-black text-sm uppercase">POR R$ 0,00</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Testimonials Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <SectionTitle subtitle="Veja o que dizem as confeiteiras e papelarias que já dominam o mercado com nosso pack.">
            Quem Usa, <span className="text-brand-purple">Recomenda!</span>
          </SectionTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                user: "maricakes_oficial",
                img: "https://picsum.photos/seed/face1/100/100",
                text: "Gente, esse pack salvou minha vida! Antes eu demorava horas no Canva tentando criar algo do zero. Agora escolho, mudo o nome e pronto. Melhor investimento do ano! 😍🎂",
                time: "2h"
              },
              {
                user: "papelariacriativa_bh",
                img: "https://picsum.photos/seed/face2/100/100",
                text: "Já comprei vários packs, mas esse é o mais completo. A qualidade das artes é surreal e as cores saem perfeitas na impressão. Meus clientes notaram a diferença na hora! ✨",
                time: "5h"
              },
              {
                user: "doceart_confeitaria",
                img: "https://picsum.photos/seed/face3/100/100",
                text: "Os convites que vêm no bônus são perfeitos! Consigo vender o combo completo agora: bolo + topo + convite digital. Meu ticket médio subiu muito. Recomendo demais! 🚀",
                time: "8h"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
              >
                {/* Instagram Header */}
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={item.img} alt={item.user} className="w-10 h-10 rounded-full border-2 border-brand-pink p-0.5" referrerPolicy="no-referrer" />
                    <div>
                      <p className="text-sm font-black text-brand-dark tracking-tight">@{item.user}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase">Publicado há {item.time}</p>
                    </div>
                  </div>
                  <motion.div whileTap={{ scale: 1.2 }}>
                    <Heart className="w-5 h-5 text-slate-300 cursor-pointer hover:text-brand-pink transition-colors" />
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className="px-4 pb-4">
                  <p className="text-sm text-slate-700 font-medium leading-relaxed mb-3">
                    <span className="font-black mr-2 text-brand-dark">@{item.user}</span>
                    {item.text}
                  </p>
                  <div className="flex items-center gap-4 text-slate-400">
                    <MessageCircle className="w-5 h-5" />
                    <Send className="w-5 h-5" />
                    <div className="ml-auto">
                      <Bookmark className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-4 py-3 bg-slate-50 border-t border-slate-100 flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-5 h-5 rounded-full bg-brand-pink border border-white" />
                  </div>
                  <p className="text-[11px] font-black text-brand-dark">Curtido por você</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / CTA Card */}
      <section id="pricing" className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <SectionTitle>
            Escolha a Melhor Opção para Você
          </SectionTitle>

          <div className="grid md:grid-cols-2 gap-y-12 md:gap-x-8 max-w-4xl mx-auto items-center">
            {/* Offer 1: Basic */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border-2 border-slate-200 overflow-hidden relative shadow-xl flex flex-col order-1"
            >
              <div className="p-6 sm:p-8 text-center flex-1 flex flex-col">
                <h3 className="text-xl font-black text-brand-dark mb-1 uppercase tracking-tighter">Pack Básico</h3>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-[9px] mb-6">SOMENTE 50 MODELOS EDITÁVEIS DE TOPOS DE BOLO</p>
                
                <div className="mb-6 flex-1">
                  <div className="flex flex-col items-center">
                    <span className="text-slate-900 text-4xl sm:text-5xl font-display font-black tracking-tighter uppercase">
                      R$ 9,90
                    </span>
                    <span className="text-slate-500 font-bold text-[10px] sm:text-xs mt-2 uppercase tracking-wide">Pagamento Único</span>
                  </div>
                  <ul className="mt-6 space-y-2 text-left">
                    <li className="flex items-center gap-2 text-[11px] sm:text-xs font-bold text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple" />
                      50 Temas Selecionados
                    </li>
                    <li className="flex items-center gap-2 text-[11px] sm:text-xs font-bold text-slate-300 line-through">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Bônus VIP inclusos
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col gap-4">
                  <button 
                    onClick={() => setShowUpsell(true)}
                    className="w-full bg-slate-100 hover:bg-slate-200 text-slate-600 py-4 rounded-xl text-base sm:text-lg font-black transition-all uppercase"
                  >
                    SELECIONAR BÁSICO
                  </button>
                  <p className="text-[10px] font-black text-brand-purple uppercase bg-brand-purple/5 py-2 px-3 rounded-lg leading-tight">
                    Temos uma OFERTA melhor e mais VANTAJOSA abaixo 👇
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Offer 2: Full */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border-4 border-brand-purple overflow-hidden relative shadow-2xl flex flex-col scale-100 md:scale-105 z-10 order-2 md:order-2"
            >
              <div className="absolute top-0 right-0 bg-brand-purple text-white px-3 py-1 rounded-bl-xl font-black text-[9px] uppercase tracking-widest z-10">
                MAIS VANTAJOSO
              </div>
              <div className="aspect-video relative overflow-hidden ring-1 ring-slate-100">
                <img 
                  src="https://i.pinimg.com/736x/03/ce/d8/03ced8fe1fa8b25c7d1f50efd7022d93.jpg" 
                  alt="Pack Completo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 sm:p-8 text-center flex-1 flex flex-col">
                <h3 className="text-xl font-black text-brand-dark mb-1 uppercase tracking-tighter">Pack Completo</h3>
                <p className="text-brand-purple font-black uppercase tracking-widest text-[9px] mb-6">TOPOS + TODOS OS BÔNUS VIP</p>
                
                <div className="mb-6 flex-1">
                  <div className="flex flex-col items-center">
                    <span className="text-brand-pink text-4xl sm:text-5xl font-display font-black tracking-tighter uppercase">
                      R$ 19,90
                    </span>
                    <span className="text-slate-500 font-bold text-[10px] sm:text-xs mt-2 uppercase tracking-wide">Pagamento Único</span>
                  </div>
                  <ul className="mt-6 space-y-2 text-left">
                    <li className="flex items-center gap-2 text-[11px] sm:text-xs font-bold text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple" />
                      1500+ Temas Editáveis
                    </li>
                    <li className="flex items-center gap-2 text-[11px] sm:text-xs font-bold text-emerald-600">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Todos os Bônus VIP
                    </li>
                    <li className="flex items-center gap-2 text-[11px] sm:text-xs font-bold text-emerald-600">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Acesso Vitalício
                    </li>
                  </ul>
                </div>

                <a 
                  href="https://pay.wiapy.com/uRzdvDo4Jl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-accent text-brand-dark py-4 rounded-xl text-base sm:text-lg font-black shadow-[0_6px_0_0_#b45309] transition-all flex items-center justify-center gap-2 group active:shadow-[0_2px_0_0_#b45309] active:translate-y-1 uppercase no-underline"
                >
                  LEVAR TUDO AGORA!
                </a>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto flex flex-col items-center">
            <div className="grid sm:grid-cols-3 gap-4 border-t border-slate-200 pt-8 w-full">
              <div className="flex items-center justify-center gap-2 text-slate-600 font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-brand-purple" />
                7 Dias de Garantia
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-600 font-bold text-sm">
                <Zap className="w-5 h-5 text-brand-purple" />
                Acesso Imediato
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-600 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-brand-purple" />
                Compra Segura
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 sm:py-24 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4">
          <SectionTitle>Perguntas Frequentes</SectionTitle>
          <div className="mt-8">
            {[
              { 
                q: 'Como recebo o acesso ao Pack?', 
                a: 'Imediatamente após a confirmação do pagamento, você receberá um e-mail com todos os links de acesso aos arquivos no Canva e pastas de download.' 
              },
              { 
                q: 'Preciso pagar mensalidade?', 
                a: 'Não! O pagamento é único e o acesso é vitalício, incluindo todas as atualizações futuras que fizermos no pack.' 
              },
              { 
                q: 'Não sei usar o Canva, consigo editar?', 
                a: 'Sim! Os arquivos já vêm prontos. Você só vai precisar clicar no texto para mudar o nome e a idade. É muito intuitivo e funciona perfeitamente no celular.' 
              },
              { 
                q: 'Os arquivos já vêm no tamanho certo?', 
                a: 'Sim! Todos os topos de bolo já estão configurados no tamanho padrão de folha A4, prontos para você imprimir sem erro de escala.' 
              },
              { 
                q: 'E se eu não gostar do produto?', 
                a: 'Nós oferecemos 7 dias de garantia incondicional. Se por qualquer motivo você não achar que o pack vale o investimento, devolvemos 100% do seu dinheiro.' 
              }
            ].map((faq, idx) => (
              <FAQItem key={idx} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Final Footer */}
      <footer className="bg-brand-dark text-white pt-16 pb-8">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-display font-black mb-8 uppercase italic tracking-tighter">Topos de Bolo Expert</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
            <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-xl border border-white/10">
              <ShieldCheck className="w-8 h-8 text-brand-accent" />
              <div className="text-left">
                <p className="text-[10px] font-black uppercase text-brand-purple">Segurança</p>
                <p className="text-xs font-bold text-white/70">Compra 100% Protegida</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-xl border border-white/10">
              <Zap className="w-8 h-8 text-brand-accent" />
              <div className="text-left">
                <p className="text-[10px] font-black uppercase text-brand-purple">Suporte</p>
                <p className="text-xs font-bold text-white/70">contato@toposdebolo.com</p>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-white/30 font-black uppercase tracking-widest">&copy; 2026 Topos de Bolo Expert. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Upsell Popup */}
      <AnimatePresence>
        {showUpsell && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowUpsell(false)}
              className="absolute inset-0 bg-brand-dark/90 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              className="relative bg-white w-full max-w-lg rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-brand-accent p-5 sm:p-10 text-center max-h-[92vh] overflow-y-auto"
            >
              <div className="absolute top-2 right-2 sm:top-6 sm:right-6 z-10">
                <button 
                  onClick={() => setShowUpsell(false)}
                  className="bg-slate-100 hover:bg-slate-200 p-2 rounded-full text-slate-400 hover:text-brand-dark transition-colors"
                >
                  <ChevronDown className="w-4 h-4 sm:w-6 sm:h-6 rotate-45" />
                </button>
              </div>

              <div className="w-12 h-12 sm:w-20 sm:h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-emerald-600">
                <Sparkles className="w-6 h-6 sm:w-10 sm:h-10" />
              </div>

              <h2 className="text-lg sm:text-2xl md:text-3xl font-display font-black text-brand-dark mb-2 sm:mb-4 uppercase leading-tight tracking-tighter">
                ESPERE! <br className="hidden sm:block" /> <span className="text-brand-purple">TENHO UMA OFERTA MELHOR</span>
              </h2>

              <p className="text-xs sm:text-base text-slate-600 font-bold mb-5 sm:mb-8 leading-relaxed px-2">
                Por apenas mais <span className="text-brand-pink">R$ 5,00</span>, leve o <span className="font-black text-brand-dark">PACK COMPLETO</span> com todos os bônus inclusos agora.
              </p>

              <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-5 sm:mb-8 border border-slate-100">
                <div className="flex flex-col items-center justify-center">
                  <span className="text-slate-400 line-through font-bold text-[10px] sm:text-xs uppercase mb-1">DE R$ 19,90</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[8px] sm:text-[9px] font-black bg-brand-accent px-1.5 sm:py-0.5 rounded-md uppercase text-brand-dark">OFERTA ÚNICA</span>
                    <span className="text-2xl sm:text-4xl md:text-5xl font-display font-black text-brand-pink tracking-tighter">R$ 14,90</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 sm:gap-4">
                <a 
                  href="https://pay.wiapy.com/tZMk0JKfij"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-accent text-brand-dark py-3.5 sm:py-5 rounded-xl text-sm sm:text-xl font-black shadow-[0_4px_0_0_#b45309] sm:shadow-[0_6px_0_0_#b45309] transition-all flex items-center justify-center gap-2 sm:gap-3 active:shadow-[0_2px_0_0_#b45309] active:translate-y-1 uppercase group no-underline"
                >
                  <Gift className="w-4 h-4 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" />
                  SIM! QUERO O PACK COMPLETO
                </a>
                <a 
                  href="https://pay.wiapy.com/3x8eWD0iFc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-slate-400 font-black text-[9px] sm:text-xs uppercase hover:text-slate-600 transition-colors p-2 no-underline block"
                >
                  Não, obrigado. Quero pagar R$ 9,90 no básico.
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
