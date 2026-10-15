import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, ShieldCheck, Clock, Award, Droplets } from 'lucide-react';
import { Fragrance, FlaconSize } from '../types';
import { formatINR, PRICES } from '../data/fragrances';

interface OlfactoryInspectModalProps {
  fragrance: Fragrance | null;
  onClose: () => void;
  onAddToCart: (fragrance: Fragrance, size: FlaconSize) => void;
}

export const OlfactoryInspectModal: React.FC<OlfactoryInspectModalProps> = ({
  fragrance,
  onClose,
  onAddToCart,
}) => {
  const [selectedSize, setSelectedSize] = useState<FlaconSize>(20);

  useEffect(() => {
    setSelectedSize(20);
  }, [fragrance]);

  if (!fragrance) return null;

  const price = selectedSize === 20 ? PRICES.SIZE_20 : PRICES.SIZE_50;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#120b16]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#201924] border border-[#d4af37]/40 max-w-xl w-full p-6 sm:p-8 rounded-2xl shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#251d29] hover:bg-[#3a323e] border border-[#d4af37]/20 text-[#d0c5af] hover:text-[#ecdeef] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Details */}
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#663464]/60 border border-[#d4af37]/30 text-[10px] uppercase tracking-widest text-[#f2ca50] font-semibold">
            <Award className="w-3 h-3 text-[#f2ca50]" />
            <span>{fragrance.heritage}</span>
          </div>
          <h3 className="font-serif text-3xl text-[#ecdeef] font-semibold mt-2">
            {fragrance.name}
          </h3>
          <p className="text-sm text-[#f2b2eb] font-medium mt-0.5">
            {fragrance.subtitle} • {fragrance.badge}
          </p>
        </div>

        {/* Narrative */}
        <p className="text-sm text-[#d0c5af] font-light leading-relaxed">
          {fragrance.description} Macerated in charred French oak barrels for 180 continuous days before double-filtering through unbleached cotton fiber.
        </p>

        {/* Key Specification Badges */}
        <div className="grid grid-cols-3 gap-2 bg-[#251d29] border border-[#d4af37]/15 p-3 rounded-xl text-center">
          <div>
            <span className="text-[10px] text-[#99907c] uppercase tracking-wider block">Concentration</span>
            <span className="text-xs text-[#f2ca50] font-bold">{fragrance.concentration}</span>
          </div>
          <div>
            <span className="text-[10px] text-[#99907c] uppercase tracking-wider block">Longevity</span>
            <span className="text-xs text-[#ecdeef] font-bold">{fragrance.longevity}</span>
          </div>
          <div>
            <span className="text-[10px] text-[#99907c] uppercase tracking-wider block">Sillage</span>
            <span className="text-xs text-[#ecdeef] font-bold">{fragrance.sillage}</span>
          </div>
        </div>

        {/* Accord Breakdown */}
        <div className="space-y-3 bg-[#251d29] border border-[#d4af37]/20 p-4 rounded-xl">
          <div className="space-y-0.5">
            <span className="text-[10px] text-[#f2ca50] uppercase font-bold tracking-wider flex items-center gap-1.5">
              <Droplets className="w-3 h-3" />
              <span>Top Accord (Immediate Sensation):</span>
            </span>
            <p className="text-sm text-[#ecdeef] font-light">
              {fragrance.topNotes.join(' • ')}
            </p>
          </div>
          <div className="space-y-0.5 pt-2 border-t border-[#d4af37]/10">
            <span className="text-[10px] text-[#f2b2eb] uppercase font-bold tracking-wider flex items-center gap-1.5">
              <Droplets className="w-3 h-3" />
              <span>Heart Accord (Core Character):</span>
            </span>
            <p className="text-sm text-[#ecdeef] font-light">
              {fragrance.heartNotes.join(' • ')}
            </p>
          </div>
          <div className="space-y-0.5 pt-2 border-t border-[#d4af37]/10">
            <span className="text-[10px] text-[#99907c] uppercase font-bold tracking-wider flex items-center gap-1.5">
              <Droplets className="w-3 h-3" />
              <span>Base Accord (Enduring Trail):</span>
            </span>
            <p className="text-sm text-[#ecdeef] font-light">
              {fragrance.baseNotes.join(' • ')}
            </p>
          </div>
        </div>

        {/* Sizing & Pricing */}
        <div className="flex items-center justify-between pt-2">
          <div>
            <span className="text-[10px] text-[#99907c] uppercase tracking-wider block font-semibold">
              Select Vessel Format:
            </span>
            <div className="flex gap-2 mt-1.5">
              <button
                onClick={() => setSelectedSize(20)}
                className={`px-3.5 py-1.5 rounded-lg text-xs uppercase tracking-wider font-bold transition-all cursor-pointer ${
                  selectedSize === 20
                    ? 'bg-[#d4af37] text-[#18111c]'
                    : 'bg-[#251d29] border border-[#d4af37]/20 text-[#ecdeef] hover:border-[#d4af37]'
                }`}
              >
                20ml Pocket (₹32,900)
              </button>
              <button
                onClick={() => setSelectedSize(50)}
                className={`px-3.5 py-1.5 rounded-lg text-xs uppercase tracking-wider font-bold transition-all cursor-pointer ${
                  selectedSize === 50
                    ? 'bg-[#d4af37] text-[#18111c]'
                    : 'bg-[#251d29] border border-[#d4af37]/20 text-[#ecdeef] hover:border-[#d4af37]'
                }`}
              >
                50ml Crystal (₹62,900)
              </button>
            </div>
          </div>

          <div className="text-right">
            <span className="text-[10px] text-[#99907c] uppercase tracking-wider block">Price</span>
            <span className="font-serif text-3xl text-[#f2ca50] font-bold">{formatINR(price)}</span>
          </div>
        </div>

        {/* Add to Bag Button */}
        <button
          onClick={() => {
            onAddToCart(fragrance, selectedSize);
            onClose();
          }}
          className="w-full py-3.5 bg-[#d4af37] hover:bg-[#f2ca50] text-[#18111c] rounded-xl text-xs uppercase tracking-wider font-bold transition-all shadow-[0_4px_24px_rgba(212,175,55,0.25)] flex items-center justify-center gap-2 cursor-pointer"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Add Selected {selectedSize}ml Flacon to Bag</span>
        </button>
      </div>
    </div>
  );
};
