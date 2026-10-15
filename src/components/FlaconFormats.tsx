import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { FlaconSize } from '../types';

interface FlaconFormatsProps {
  onSelectSize: (size: FlaconSize) => void;
}

export const FlaconFormats: React.FC<FlaconFormatsProps> = ({ onSelectSize }) => {
  return (
    <section className="w-full bg-[#120b16] py-20 relative overflow-hidden border-t border-[#d4af37]/15">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#f2ca50] font-semibold block">
            Vessel Engineering
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#ecdeef] font-semibold">
            Bespoke Flacon Formats
          </h2>
          <p className="text-sm text-[#d0c5af] font-light leading-relaxed">
            Each size is calibrated with our custom high-dispersion micro-mist atomizers to preserve pure extrait density.
          </p>
        </div>

        {/* 2 Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* 20ml Travel Decant */}
          <div className="bg-[#201924] border border-[#d4af37]/25 rounded-2xl p-8 lg:p-10 shadow-xl flex flex-col justify-between relative group hover:border-[#d4af37]/60 transition-all duration-300">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-[#2f2733] border border-[#d4af37]/20 rounded text-[10px] uppercase tracking-widest text-[#f2ca50] font-semibold">
                  Everyday Intimacy
                </span>
                <span className="font-serif text-3xl text-[#f2ca50] font-bold">₹32,900</span>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-[#ecdeef] font-semibold">
                  20ml Artisanal Pocket Decant
                </h3>
                <p className="text-sm text-[#d0c5af] mt-2 font-light leading-relaxed">
                  Engineered in sleek anodized brushed gold and shatter-resistant glass. Crafted for effortless travel, boardroom touchups, and evening dinners.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-[#251d29] border border-[#d4af37]/15 p-4 rounded-xl">
                  <span className="text-[10px] text-[#99907c] uppercase tracking-wider block">Dispersion</span>
                  <span className="text-lg text-[#ecdeef] font-semibold">300+ Sprays</span>
                </div>
                <div className="bg-[#251d29] border border-[#d4af37]/15 p-4 rounded-xl">
                  <span className="text-[10px] text-[#99907c] uppercase tracking-wider block">Architecture</span>
                  <span className="text-lg text-[#ecdeef] font-semibold">Metal-Clad Shell</span>
                </div>
              </div>

              <ul className="space-y-3 text-xs text-[#d0c5af] pt-2">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#f2ca50] shrink-0" />
                  <span>Includes Italian plum velvet pouch with gold foil tassel</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#f2ca50] shrink-0" />
                  <span>High-dispersion 45-micron atomiser plume for soft cloud diffusion</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#f2ca50] shrink-0" />
                  <span>TSA cabin carry-on certified globally for flight seamlessness</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onSelectSize(20)}
              className="mt-8 w-full py-3 bg-[#251d29] hover:bg-[#d4af37] border border-[#d4af37]/40 text-[#ecdeef] hover:text-[#18111c] rounded-xl text-xs uppercase tracking-wider font-bold transition-all shadow-md cursor-pointer"
            >
              Select 20ml Extrait Standard (₹32,900)
            </button>
          </div>

          {/* 50ml Crystal Flacon */}
          <div className="bg-[#201924] border border-[#d4af37]/40 rounded-2xl p-8 lg:p-10 shadow-2xl flex flex-col justify-between relative group hover:border-[#d4af37] transition-all duration-300">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-[#d4af37] text-[#18111c] rounded text-[10px] uppercase tracking-widest font-bold">
                  The Masterpiece
                </span>
                <span className="font-serif text-3xl text-[#f2ca50] font-bold">₹62,900</span>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-[#ecdeef] font-semibold">
                  50ml Heavy Crystal Flacon
                </h3>
                <p className="text-sm text-[#d0c5af] mt-2 font-light leading-relaxed">
                  Hand-polished heavyweight lead-free crystal adorned with our gold-embossed Downtown Perfumery crest and magnetic closure.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-[#251d29] border border-[#d4af37]/15 p-4 rounded-xl">
                  <span className="text-[10px] text-[#99907c] uppercase tracking-wider block">Dispersion</span>
                  <span className="text-lg text-[#ecdeef] font-semibold">750+ Sprays</span>
                </div>
                <div className="bg-[#251d29] border border-[#d4af37]/15 p-4 rounded-xl">
                  <span className="text-[10px] text-[#99907c] uppercase tracking-wider block">Presentation</span>
                  <span className="text-lg text-[#ecdeef] font-semibold">Silk Coffret Box</span>
                </div>
              </div>

              <ul className="space-y-3 text-xs text-[#d0c5af] pt-2">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#f2ca50] shrink-0" />
                  <span>Monogrammed wax certificate of 180-day maceration pedigree</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#f2ca50] shrink-0" />
                  <span>Weighted brass cap with precision magnetic tactile click</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#f2ca50] shrink-0" />
                  <span>Complimentary 2-vial discovery set included with order</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onSelectSize(50)}
              className="mt-8 w-full py-3 bg-[#d4af37] hover:bg-[#f2ca50] text-[#18111c] rounded-xl text-xs uppercase tracking-wider font-bold transition-all shadow-[0_4px_24px_rgba(212,175,55,0.25)] cursor-pointer"
            >
              Select 50ml Crystal Standard (₹62,900)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
