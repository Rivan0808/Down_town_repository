import React, { useState } from 'react';
import { Sparkles, Check, Gift, ShoppingBag, Plus, Trash2 } from 'lucide-react';
import { Fragrance, CartItem } from '../types';
import { formatINR, PRICES } from '../data/fragrances';

interface BespokeBlendsViewProps {
  fragrances: Fragrance[];
  onAddCustomCoffretToCart: (item: CartItem) => void;
}

export const BespokeBlendsView: React.FC<BespokeBlendsViewProps> = ({
  fragrances,
  onAddCustomCoffretToCart,
}) => {
  const [coffretSize, setCoffretSize] = useState<3 | 5>(3);
  const [selectedIds, setSelectedIds] = useState<string[]>(['hawas-ice', 'creed-aventus', 'dior-sauvage']);
  const [boxFinish, setBoxFinish] = useState<'Imperial Plum' | 'Nocturne Noir' | 'Gilded Alabaster'>('Imperial Plum');
  const [monogram, setMonogram] = useState('H.A.');

  const price = coffretSize === 3 ? PRICES.COFFRET_3 : PRICES.COFFRET_5;
  const isFull = selectedIds.length >= coffretSize;

  const toggleSelect = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(i => i !== id));
    } else {
      if (selectedIds.length < coffretSize) {
        setSelectedIds([...selectedIds, id]);
      }
    }
  };

  const handleAddToCart = () => {
    if (selectedIds.length < coffretSize) return;

    const selectedNames = selectedIds
      .map(id => fragrances.find(f => f.id === id)?.name)
      .filter(Boolean) as string[];

    const coffretItem: CartItem = {
      id: `coffret-${Date.now()}`,
      name: `Bespoke Discovery Coffret (${coffretSize} Extraits)`,
      size: 20,
      price: price,
      image: fragrances.find(f => f.id === selectedIds[0])?.image || fragrances[0].image,
      quantity: 1,
      isCustomCoffret: true,
      coffretItems: selectedNames,
      monogram: monogram.trim() || undefined,
    };

    onAddCustomCoffretToCart(coffretItem);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 py-16 space-y-12">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#f2ca50] font-semibold block">
          Private Atelier Service
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-[#ecdeef] font-semibold">
          Bespoke Discovery Coffret
        </h2>
        <p className="text-sm text-[#d0c5af] font-light leading-relaxed">
          Curate a personalized flight of signature 20ml extraits, housed in a velvet-lined jewelry coffret featuring your custom engraved monogram brass plaque.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Visual Coffret Display Preview */}
        <div className="lg:col-span-5 bg-[#201924] border border-[#d4af37]/30 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 lg:sticky lg:top-28">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-widest text-[#f2ca50] font-mono">
              COFFRET ATELIER PREVIEW
            </span>
            <span className="text-xs text-[#d0c5af]">
              {selectedIds.length} of {coffretSize} Slots Assigned
            </span>
          </div>

          {/* Coffret Box Visual Representation */}
          <div
            className={`w-full rounded-2xl border-2 p-6 transition-all duration-500 shadow-2xl relative ${
              boxFinish === 'Imperial Plum'
                ? 'bg-[#3e103f]/90 border-[#d4af37]'
                : boxFinish === 'Nocturne Noir'
                ? 'bg-[#120b16] border-[#d4af37]/60'
                : 'bg-[#2f2733] border-[#ffe088]'
            }`}
          >
            {/* Monogram Brass Plaque */}
            <div className="mx-auto w-44 py-1.5 px-3 bg-[#d4af37] text-[#18111c] text-center rounded shadow-md border border-[#f2ca50] mb-6">
              <span className="text-[9px] uppercase tracking-widest block font-bold">DOWNTOWN ATELIER</span>
              <span className="font-serif text-sm font-bold tracking-widest">
                {monogram || 'BESPOKE EDITION'}
              </span>
            </div>

            {/* Vials Slots */}
            <div className={`grid gap-3 ${coffretSize === 3 ? 'grid-cols-3' : 'grid-cols-5'}`}>
              {Array.from({ length: coffretSize }).map((_, index) => {
                const id = selectedIds[index];
                const fragrance = fragrances.find((f) => f.id === id);

                return (
                  <div
                    key={index}
                    className="aspect-[1/2.5] rounded-xl border border-dashed border-[#d4af37]/40 bg-[#120b16]/70 flex flex-col items-center justify-between p-2 relative group overflow-hidden"
                  >
                    {fragrance ? (
                      <>
                        <img
                          src={fragrance.image}
                          alt={fragrance.name}
                          className="w-full h-2/3 object-cover rounded-md border border-[#d4af37]/30"
                        />
                        <span className="text-[9px] text-[#ecdeef] font-semibold text-center truncate w-full block mt-1">
                          {fragrance.name}
                        </span>
                        <button
                          onClick={() => toggleSelect(fragrance.id)}
                          className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-[#ffb4ab] transition-opacity cursor-pointer"
                          title="Remove vial"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </>
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-[#99907c] gap-1">
                        <Plus className="w-4 h-4" />
                        <span className="text-[9px] uppercase tracking-wider">Slot {index + 1}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pricing and Button */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] text-[#99907c] uppercase tracking-wider block">Total Coffret Value</span>
                <span className="font-serif text-3xl text-[#f2ca50] font-bold">{formatINR(price)}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-[#f2ca50] uppercase font-bold block">Save up to ₹29,000</span>
                <span className="text-[11px] text-[#99907c]">Versus individual flacons</span>
              </div>
            </div>

            <button
              disabled={!isFull}
              onClick={handleAddToCart}
              className="w-full py-3.5 bg-[#d4af37] hover:bg-[#f2ca50] disabled:bg-[#3a323e] disabled:text-[#99907c] text-[#18111c] rounded-xl text-xs uppercase tracking-wider font-bold transition-all shadow-[0_4px_24px_rgba(212,175,55,0.25)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{isFull ? 'Add Bespoke Coffret to Bag' : `Select ${coffretSize - selectedIds.length} More Vials`}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Customization Controls */}
        <div className="lg:col-span-7 space-y-8">
          {/* Step 1: Format Size */}
          <div className="bg-[#201924] border border-[#d4af37]/20 p-6 rounded-2xl space-y-4">
            <span className="text-[10px] uppercase tracking-widest text-[#f2ca50] font-bold block">
              STEP 1: SELECT COFFRET FLIGHT
            </span>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => {
                  setCoffretSize(3);
                  if (selectedIds.length > 3) setSelectedIds(selectedIds.slice(0, 3));
                }}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  coffretSize === 3
                    ? 'bg-[#2f2733] border-[#d4af37] shadow-md'
                    : 'bg-[#251d29] border-[#d4af37]/20 text-[#d0c5af]'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-serif text-lg text-[#ecdeef] font-semibold">Trio Discovery (3)</span>
                  <span className="text-[#f2ca50] font-bold">₹24,900</span>
                </div>
                <p className="text-xs text-[#99907c] mt-1">Three 20ml decants in handcrafted box</p>
              </button>

              <button
                onClick={() => setCoffretSize(5)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  coffretSize === 5
                    ? 'bg-[#2f2733] border-[#d4af37] shadow-md'
                    : 'bg-[#251d29] border-[#d4af37]/20 text-[#d0c5af]'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-serif text-lg text-[#ecdeef] font-semibold">Quintet Imperial (5)</span>
                  <span className="text-[#f2ca50] font-bold">₹38,900</span>
                </div>
                <p className="text-xs text-[#99907c] mt-1">Five 20ml decants with VIP seal</p>
              </button>
            </div>
          </div>

          {/* Step 2: Choose Box Color */}
          <div className="bg-[#201924] border border-[#d4af37]/20 p-6 rounded-2xl space-y-4">
            <span className="text-[10px] uppercase tracking-widest text-[#f2ca50] font-bold block">
              STEP 2: VELVET COFFRET PRESENTATION
            </span>
            <div className="grid grid-cols-3 gap-3">
              {(['Imperial Plum', 'Nocturne Noir', 'Gilded Alabaster'] as const).map((finish) => (
                <button
                  key={finish}
                  onClick={() => setBoxFinish(finish)}
                  className={`py-3 px-2 rounded-xl border text-center text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    boxFinish === finish
                      ? 'bg-[#d4af37] text-[#18111c] border-[#f2ca50]'
                      : 'bg-[#251d29] border-[#d4af37]/20 text-[#d0c5af] hover:text-[#ecdeef]'
                  }`}
                >
                  {finish}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Brass Monogram Engraving */}
          <div className="bg-[#201924] border border-[#d4af37]/20 p-6 rounded-2xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-widest text-[#f2ca50] font-bold block">
                STEP 3: COMPLIMENTARY BRASS MONOGRAM
              </span>
              <span className="text-[10px] text-[#f2ca50] uppercase font-mono">Complimentary</span>
            </div>
            <input
              type="text"
              maxLength={12}
              value={monogram}
              onChange={(e) => setMonogram(e.target.value.toUpperCase())}
              placeholder="e.g. H.A. or WINDSOR"
              className="w-full bg-[#251d29] border border-[#d4af37]/30 rounded-xl px-4 py-2.5 text-sm text-[#ecdeef] font-mono tracking-widest focus:outline-none focus:border-[#d4af37]"
            />
            <p className="text-[11px] text-[#99907c]">
              Up to 12 capital characters etched via diamond point into solid jewelers brass.
            </p>
          </div>

          {/* Step 4: Pick The Extraits */}
          <div className="bg-[#201924] border border-[#d4af37]/20 p-6 rounded-2xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-widest text-[#f2ca50] font-bold block">
                STEP 4: SELECT YOUR EXTRAITS ({selectedIds.length}/{coffretSize})
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-1">
              {fragrances.map((f) => {
                const isSelected = selectedIds.includes(f.id);
                return (
                  <button
                    key={f.id}
                    onClick={() => toggleSelect(f.id)}
                    className={`flex items-center gap-3 p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#2f2733] border-[#d4af37]'
                        : 'bg-[#251d29] border-[#d4af37]/15 hover:border-[#d4af37]/40 text-[#d0c5af]'
                    }`}
                  >
                    <img
                      src={f.image}
                      alt={f.name}
                      className="w-12 h-12 rounded-lg object-cover border border-[#d4af37]/20 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h5 className="font-serif text-sm text-[#ecdeef] font-semibold truncate">
                        {f.name}
                      </h5>
                      <span className="text-[10px] text-[#99907c] block truncate">{f.badge}</span>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center border shrink-0 ${
                        isSelected
                          ? 'bg-[#d4af37] border-[#d4af37] text-[#18111c]'
                          : 'border-[#4d4635]'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
