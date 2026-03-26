/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Star, 
  Clock, 
  MapPin, 
  Instagram, 
  ChevronRight
} from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/message/7GNWPLKR6DN5F1";
const INSTAGRAM_URL = "https://www.instagram.com/p/DVEHukLERw9/";

const WhatsAppButton = ({ className = "", text = "Falar com o Dr. Davi no WhatsApp" }) => (
  <a 
    href={WHATSAPP_URL} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`btn-whatsapp group w-full sm:w-auto max-w-md mx-auto ${className}`}
  >
    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
    <span className="text-sm sm:text-base">{text}</span>
    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
  </a>
);

const PRICE_LIST = [
  {
    category: "PLANEJAMENTO ESTÉTICO E FUNCIONAL",
    items: [
      { name: "ENCERAMENTO + DSD (EXCLUSIVIDADE)", price: "R$ 50,00" },
      { name: "GUIA PARA MOCK-UP COM SILICONE DE ADIÇÃO", price: "R$ 100,00" },
    ]
  },
  {
    category: "DISSILICATO DE LÍTIO (E-MAX FRESADO)",
    note: "(O VALOR REFERE-SE AO ITEM FINALIZADO. JÁ INCLUSO MODELOS)",
    items: [
      { name: "COROA E-MAX", price: "R$ 400,00" },
      { name: "FACETAS/LÂMINADOS", price: "R$ 400,00" },
      { name: "INLAY/ONLAY/OVERLAY E-MAX", price: "R$ 400,00" },
    ]
  },
  {
    category: "ZIRCÔNIA",
    note: "(O VALOR REFERE-SE AO ITEM FINALIZADO. JÁ INCLUSO MODELOS. *NAS COROAS SOBRE IMPLANTES NÃO ESTÃO INCLUSO OS COMPONENTES)",
    items: [
      { name: "COROA SOBRE DENTE", price: "R$ 400,00" },
      { name: "COROA SOBRE IMPLANTE", price: "R$ 400,00" },
      { name: "PROTOCOLO (FINALIZADO)", price: "R$ 6.500,00" },
      { name: "ALETA", price: "R$ 150,00" },
    ]
  },
  {
    category: "RESINA",
    items: [
      { name: "PROVISÓRIO EM PMMA FRESADO", price: "R$ 120,00" },
      { name: "ALETA EM PMMA", price: "R$ 50,00" },
      { name: "PLACAS DE BRUXISMO FRESADA", price: "R$ 500,00" },
      { name: "RESINA COMPOSTA FRESADA", price: "R$ 300,00" },
    ]
  },
  {
    category: "DIVERSOS",
    items: [
      { name: "MODELO DE GESSO ESPECIAL", price: "R$ 20,00" },
      { name: "MODELO IMPRESSO", price: "R$ 50,00" },
      { name: "PLACA DE CLAREAMENTO", price: "R$ 150,00" },
      { name: "PLACA DE ACETATO", price: "R$ 150,00" },
      { name: "IMPRESSÃO DE GUIA SIMPLES PARA IMPLANTE", price: "R$ 200,00" },
    ]
  }
];

export default function App() {
  return (
    <div className="min-h-screen selection:bg-gold selection:text-black overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section id="hero" className="relative py-20 px-6 overflow-hidden bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full max-w-3xl mx-auto text-center"
        >
          <div className="flex flex-col items-center mb-8">
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <h2 className="text-2xl md:text-3xl font-serif tracking-[0.2em] text-premium-black uppercase font-bold">
              ALBERGUINE
            </h2>
            <div className="h-px w-32 bg-gold mt-1" />
            <p className="text-[10px] tracking-[0.4em] text-gray-500 uppercase mt-1">ESTÚDIO DENTAL</p>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight text-premium-black">
            Tabela de <span className="italic text-gold">Preços</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-light">
            Valores referenciais para os principais procedimentos realizados pelo Dr. Davi Alberguine.
          </p>
        </motion.div>
      </section>

      {/* TABELA DE PREÇOS */}
      <section className="py-24 px-6 bg-premium-black text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {PRICE_LIST.map((category, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-6"
              >
                <div className="border-l-4 border-gold pl-4">
                  <h3 className="text-xl font-bold tracking-wider text-gold uppercase">{category.category}</h3>
                  {category.note && (
                    <p className="text-[10px] text-gray-500 mt-1 leading-tight uppercase">{category.note}</p>
                  )}
                </div>

                <div className="space-y-4">
                  {category.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-end gap-4 group">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{item.name}</p>
                        <div className="h-px w-full bg-white/5 mt-1 group-hover:bg-gold/20 transition-colors" />
                      </div>
                      <span className="text-gold font-mono font-bold whitespace-nowrap">{item.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 p-6 sm:p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-gold font-serif italic text-lg">"Feito para quem exige o extraordinário."</p>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                A excelência não é um resultado, é a nossa essência. Para maiores informações sobre prazos e financeiro, consulte nosso administrativo através do WhatsApp.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <WhatsAppButton className="mx-auto" />
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="py-12 px-6 border-t border-white/5 bg-premium-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-serif font-bold text-gold">Dr. Davi Alberguine</h3>
            <p className="text-sm text-gray-500 mt-1">
              Especializado em Reabilitação Oral Estética & Laminados Cerâmicos
            </p>
            <p className="text-xs text-gray-600 mt-2 flex items-center justify-center md:justify-start gap-1">
              <MapPin className="w-3 h-3" /> Alphaville - SP
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#25D366] transition-colors">
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>

          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Dr. Davi Alberguine. Todos os direitos reservados.
          </p>
        </div>
      </footer>

    </div>
  );
}
