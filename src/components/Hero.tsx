import React from 'react';
import { Sparkles, ShieldCheck, Droplet, Plane, Gift, ArrowDown } from 'lucide-react';
import { HERO_SHOWCASE_URL } from '../data/fragrances';

interface HeroProps {
  onExploreClick: () => void;
  onGenerationsClick: () => void;
  onSelectHeroFormat: (size: 20 | 50) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onGenerationsClick,
  onSelectHeroFormat,
}) => {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 pt-8 lg:pt-12 pb-16">
      {/* Background Ambient Glows */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#663464]/25 via-[#d4af37]/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-[350px] -left-40 w-[550px] h-[550px] bg-[#3e103f]/20 blur-[140px] pointer-events-none rounded-full" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Column: Editorial Headline & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          {/* Haute Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#251d29]/80 border border-[#d4af37]/30 shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#f2ca50] animate-ping" />
            <span className="text-[10px] tracking-[0.22em] uppercase text-[#f2ca50] font-semibold">
              Haute Parfumerie & Timeless Essences
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[62px] lg:leading-[70px] text-[#ecdeef] tracking-tight font-semibold">
            The Art of Scent, <br />
            <span className="italic font-normal text-[#f2ca50]">Distilled to Perfection.</span>
          </h1>

          {/* Narrative */}
          <p className="text-base sm:text-lg text-[#d0c5af] max-w-xl leading-relaxed font-light">
            Discover iconic signature extraits crafted for timeless distinction across every generation. Hand-poured in artisanal 20ml pocket decants (<span className="text-[#f2ca50] font-semibold">₹32,900</span>) and 50ml crystal flacons (<span className="text-[#f2ca50] font-semibold">₹62,900</span>).
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <button
              onClick={onExploreClick}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-[#d4af37] hover:bg-[#f2ca50] text-[#18111c] text-xs uppercase tracking-wider font-bold shadow-[0_4px_24px_rgba(212,175,55,0.25)] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <span>Explore The 13 Icons</span>
              <ArrowDown className="w-4 h-4" />
            </button>
            <button
              onClick={onGenerationsClick}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#251d29]/90 hover:bg-[#2f2733] border border-[#d4af37]/30 text-[#ecdeef] text-xs uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#f2ca50]" />
              <span>Generational Profiles</span>
            </button>
          </div>

          {/* 4 Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 w-full">
            <div className="flex items-center gap-2.5 bg-[#201924]/70 border border-[#d4af37]/15 p-2.5 rounded-lg shadow-sm">
              <ShieldCheck className="w-5 h-5 text-[#f2ca50] shrink-0" />
              <div className="flex flex-col">
                <span className="text-[10px] text-[#ecdeef] uppercase font-bold tracking-wider">100% Rare</span>
                <span className="text-[10px] text-[#99907c]">Authentic Absolutes</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 bg-[#201924]/70 border border-[#d4af37]/15 p-2.5 rounded-lg shadow-sm">
              <Droplet className="w-5 h-5 text-[#f2ca50] shrink-0" />
              <div className="flex flex-col">
                <span className="text-[10px] text-[#ecdeef] uppercase font-bold tracking-wider">Hand-Poured</span>
                <span className="text-[10px] text-[#99907c]">Artisanal Decants</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 bg-[#201924]/70 border border-[#d4af37]/15 p-2.5 rounded-lg shadow-sm">
              <Plane className="w-5 h-5 text-[#f2ca50] shrink-0" />
              <div className="flex flex-col">
                <span className="text-[10px] text-[#ecdeef] uppercase font-bold tracking-wider">White-Glove</span>
                <span className="text-[10px] text-[#99907c]">Insured Global Courier</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 bg-[#201924]/70 border border-[#d4af37]/15 p-2.5 rounded-lg shadow-sm">
              <Gift className="w-5 h-5 text-[#f2ca50] shrink-0" />
              <div className="flex flex-col">
                <span className="text-[10px] text-[#ecdeef] uppercase font-bold tracking-wider">Gift Pouch</span>
                <span className="text-[10px] text-[#99907c]">Italian Wine Velvet</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Vitrine Showcase Vignette */}
        <div className="lg:col-span-5 relative mt-6 lg:mt-0">
          <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#201924] border border-[#d4af37]/25 shadow-2xl group">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${HERO_SHOWCASE_URL}')` }}
            />
            {/* Dark Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#120b16] via-[#120b16]/30 to-transparent" />

            {/* Exclusive Gold Plaque Header */}
            <div className="absolute top-4 right-4 bg-[#18111c]/80 backdrop-blur-md border border-[#d4af37]/40 px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest text-[#f2ca50]">
              LIMITED MMXIV HARVEST
            </div>

            {/* Floating Spec Plaque */}
            <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#251d29]/95 backdrop-blur-xl border border-[#d4af37]/30 shadow-2xl flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#f2ca50] font-bold block">
                  Official Flacon Pairings
                </span>
                <h4 className="font-serif text-lg text-[#ecdeef] font-medium">
                  Dual Signature Formats
                </h4>
                <div className="flex gap-2 mt-1">
                  <button
                    onClick={() => onSelectHeroFormat(20)}
                    className="text-[10px] uppercase tracking-wider text-[#d0c5af] hover:text-[#f2ca50] underline underline-offset-2"
                  >
                    20ml Pocket (₹32,900)
                  </button>
                  <span className="text-[#4d4635]">•</span>
                  <button
                    onClick={() => onSelectHeroFormat(50)}
                    className="text-[10px] uppercase tracking-wider text-[#d0c5af] hover:text-[#f2ca50] underline underline-offset-2"
                  >
                    50ml Master (₹62,900)
                  </button>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] text-[#99907c] uppercase block">Starting At</span>
                <span className="font-serif text-2xl text-[#f2ca50] font-bold">₹32,900</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
