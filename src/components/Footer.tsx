import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CREST_LOGO_URL } from '../data/fragrances';
import { ActiveTab } from '../types';

interface FooterProps {
  onNavigate: (tab: ActiveTab) => void;
  onOpenConcierge: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConcierge }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-[#120b16] text-[#d0c5af] relative z-20 pt-16 pb-12 border-t border-[#d4af37]/20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16">
          {/* Column 1 & 2: Brand & Certification */}
          <div className="lg:col-span-2 flex flex-col justify-between pr-0 lg:pr-8 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src={CREST_LOGO_URL}
                  alt="Downtown Perfumery Crest"
                  className="h-8 w-auto object-contain"
                />
                <div className="flex flex-col">
                  <span className="font-serif text-xl tracking-[0.2em] text-[#ecdeef] uppercase font-semibold">
                    Downtown
                  </span>
                  <span className="text-[10px] tracking-[0.25em] text-[#d4af37] uppercase -mt-0.5 font-medium">
                    Haute Parfumerie
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#d0c5af] max-w-sm leading-relaxed font-light">
                An artisanal fragrance maison consecrated to olfactory transcendence, raw botanical absolutes, and architectural flacon design. Crafted in limited annual harvests.
              </p>
            </div>

            <div className="pt-4 border-t border-[#d4af37]/15 space-y-1">
              <div className="flex items-center gap-2 text-[#f2ca50]">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest text-[#ecdeef] font-bold">
                  Authentic Flacon Certificate No. 7482-P
                </span>
              </div>
              <p className="text-[11px] text-[#99907c] leading-relaxed">
                Every creation carries a wax-stamped seal of maceration pedigree and master nose provenance.
              </p>
            </div>
          </div>

          {/* Column 3: Global Salons */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#ecdeef] font-semibold block">
              Global Salons
            </span>
            <ul className="space-y-4 text-xs font-light">
              <li className="space-y-0.5">
                <div className="text-[#f2ca50] font-medium">Paris Atelier</div>
                <div className="text-[#99907c]">18 Place Vendôme, 75001 Paris</div>
                <div className="text-[#d0c5af]/70 text-[11px]">+33 1 42 68 55 00</div>
              </li>
              <li className="space-y-0.5">
                <div className="text-[#f2ca50] font-medium">London Flagship</div>
                <div className="text-[#99907c]">42 Old Bond Street, Mayfair</div>
                <div className="text-[#d0c5af]/70 text-[11px]">+44 20 7946 0912</div>
              </li>
              <li className="space-y-0.5">
                <div className="text-[#f2ca50] font-medium">New York Parlour</div>
                <div className="text-[#99907c]">740 Madison Avenue, Upper East Side</div>
                <div className="text-[#d0c5af]/70 text-[11px]">+1 212 555 0198</div>
              </li>
            </ul>
          </div>

          {/* Column 4: Curations Navigation */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#ecdeef] font-semibold block">
              Curations
            </span>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('collection')}
                  className="hover:text-[#f2ca50] transition-colors text-left"
                >
                  Private Reserve Absolutes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('bespoke-blends')}
                  className="hover:text-[#f2ca50] transition-colors text-left"
                >
                  Maceration Archives (Coffrets)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('olfactory-notes')}
                  className="hover:text-[#f2ca50] transition-colors text-left"
                >
                  Botanical Concordance
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('scent-quiz')}
                  className="hover:text-[#f2ca50] transition-colors text-left"
                >
                  Diagnostics of Aura
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenConcierge}
                  className="hover:text-[#f2ca50] transition-colors text-left"
                >
                  Atelier White Glove Service
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Private Gazette */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#ecdeef] font-semibold block">
              Private Gazette
            </span>
            <p className="text-xs text-[#d0c5af] leading-relaxed font-light">
              Receive invitations to limited harvest vintages and confidential midnight distillations.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2 pt-1">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Atelier correspondence email"
                className="w-full bg-[#201924] border border-[#d4af37]/25 px-3.5 py-2 rounded-lg text-xs text-[#ecdeef] placeholder:text-[#99907c] focus:outline-none focus:border-[#d4af37]"
              />
              <button
                type="submit"
                className="w-full bg-[#d4af37] text-[#18111c] hover:bg-[#f2ca50] text-xs uppercase tracking-wider py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 font-bold cursor-pointer"
              >
                <span>Request Membership</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              {subscribed && (
                <div className="flex items-center gap-1.5 text-[11px] text-[#f2ca50] animate-in fade-in">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Dossier registration received.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Legal & Protocol */}
        <div className="pt-8 border-t border-[#d4af37]/15 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-wider text-[#99907c]">
          <div className="flex items-center gap-4">
            <span>© 2025 Downtown Haute Parfumerie Inc.</span>
            <span>All Rights Reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={onOpenConcierge} className="hover:text-[#ecdeef] transition-colors">
              Confidentiality Protocol
            </button>
            <button onClick={() => onNavigate('heritage')} className="hover:text-[#ecdeef] transition-colors">
              Origin Certificates
            </button>
            <button onClick={onOpenConcierge} className="hover:text-[#ecdeef] transition-colors">
              Client Concierge
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
