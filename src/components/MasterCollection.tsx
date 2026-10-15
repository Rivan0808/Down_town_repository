import React, { useState } from 'react';
import { Eye, Heart, ShoppingBag, Star, Sparkles, Filter } from 'lucide-react';
import { Fragrance, FragranceCategory, FlaconSize } from '../types';
import { formatINR, PRICES } from '../data/fragrances';

interface MasterCollectionProps {
  fragrances: Fragrance[];
  globalSize: FlaconSize;
  setGlobalSize: (size: FlaconSize) => void;
  wishlistIds: string[];
  onToggleWishlist: (fragrance: Fragrance) => void;
  onInspect: (fragrance: Fragrance) => void;
  onAddToCart: (fragrance: Fragrance, size: FlaconSize) => void;
}

export const MasterCollection: React.FC<MasterCollectionProps> = ({
  fragrances,
  globalSize,
  setGlobalSize,
  wishlistIds,
  onToggleWishlist,
  onInspect,
  onAddToCart,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<FragranceCategory>('all');
  const [sortBy, setSortBy] = useState<'curated' | 'name' | 'longevity' | 'rating'>('curated');
  const [cardSizes, setCardSizes] = useState<Record<string, FlaconSize>>({});

  const categories: { id: FragranceCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Fragrances', count: fragrances.length },
    { id: 'woody', label: 'Woody & Smoky', count: fragrances.filter(f => f.category.includes('woody')).length },
    { id: 'aquatic', label: 'Fresh & Aquatic', count: fragrances.filter(f => f.category.includes('aquatic')).length },
    { id: 'floral', label: 'Floral & Gourmand', count: fragrances.filter(f => f.category.includes('floral')).length },
    { id: 'amber', label: 'Amber & Oriental', count: fragrances.filter(f => f.category.includes('amber')).length },
    { id: 'citrus', label: 'Aromatic Citrus', count: fragrances.filter(f => f.category.includes('citrus')).length },
  ];

  // Filter
  const filtered = fragrances.filter((f) => {
    if (selectedCategory === 'all') return true;
    return f.category.includes(selectedCategory);
  });

  // Sort
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'longevity') {
      const getNum = (str: string) => parseInt(str) || 0;
      return getNum(b.longevity) - getNum(a.longevity);
    }
    return 0; // curated order
  });

  const getEffectiveSize = (id: string): FlaconSize => {
    return cardSizes[id] || globalSize;
  };

  const handleCardSizeChange = (id: string, size: FlaconSize) => {
    setCardSizes(prev => ({ ...prev, [id]: size }));
  };

  return (
    <div id="master-collection" className="w-full">
      {/* Interactive Sticky Olfactory Families & Sizing Master Bar */}
      <section className="sticky top-20 z-30 w-full bg-[#120b16]/95 backdrop-blur-xl border-y border-[#d4af37]/20 shadow-lg py-3.5 transition-all">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Family Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    active
                      ? 'bg-[#d4af37] text-[#18111c] shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                      : 'bg-[#251d29] text-[#d0c5af] hover:bg-[#2f2733] hover:text-[#ecdeef] border border-[#d4af37]/15'
                  }`}
                >
                  {cat.label} ({cat.count})
                </button>
              );
            })}
          </div>

          {/* Master Sizing Switcher Control & Sort */}
          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            <div className="flex items-center bg-[#201924] p-1 rounded-lg border border-[#d4af37]/20">
              <button
                onClick={() => {
                  setGlobalSize(20);
                  setCardSizes({});
                }}
                className={`px-3 py-1 rounded text-[11px] uppercase tracking-wider font-bold transition-all cursor-pointer ${
                  globalSize === 20
                    ? 'bg-[#d4af37] text-[#18111c] shadow-sm'
                    : 'text-[#d0c5af] hover:text-[#ecdeef]'
                }`}
              >
                20ml Pocket (₹32,900)
              </button>
              <button
                onClick={() => {
                  setGlobalSize(50);
                  setCardSizes({});
                }}
                className={`px-3 py-1 rounded text-[11px] uppercase tracking-wider font-bold transition-all cursor-pointer ${
                  globalSize === 50
                    ? 'bg-[#d4af37] text-[#18111c] shadow-sm'
                    : 'text-[#d0c5af] hover:text-[#ecdeef]'
                }`}
              >
                50ml Crystal (₹62,900)
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <span className="text-[10px] text-[#99907c] uppercase tracking-wider">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#251d29] border border-[#d4af37]/25 text-[#ecdeef] text-[11px] uppercase tracking-wider px-3 py-1.5 rounded focus:outline-none focus:border-[#d4af37] cursor-pointer"
              >
                <option value="curated">Master Curation</option>
                <option value="name">Name (A-Z)</option>
                <option value="longevity">Highest Longevity</option>
                <option value="rating">Critic Rating</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* The Master 13-Fragrance Luxury Showcase Grid */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#f2ca50] font-semibold block mb-1">
              Permanent Collection • Edition 2025
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#ecdeef] font-semibold">
              The 13 Iconic Extraits
            </h2>
          </div>
          <p className="text-sm text-[#d0c5af] max-w-md font-light leading-relaxed">
            Each formula is macerated for 180 days and hand-pipetted into your selected flacon with master nose batch certification.
          </p>
        </div>

        {/* 13 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {sorted.map((item) => {
            const currentSize = getEffectiveSize(item.id);
            const price = currentSize === 20 ? PRICES.SIZE_20 : PRICES.SIZE_50;
            const isWishlisted = wishlistIds.includes(item.id);

            return (
              <div
                key={item.id}
                className="group bg-[#201924] border border-[#d4af37]/20 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between transition-all duration-300 hover:border-[#d4af37]/60 hover:shadow-[0_12px_36px_-8px_rgba(212,175,55,0.18)] hover:-translate-y-1.5"
              >
                {/* Image Section */}
                <div className="relative w-full aspect-square overflow-hidden bg-[#251d29]">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  {/* Subtle Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#201924] via-transparent to-black/30 pointer-events-none" />

                  {/* Top Left Badge */}
                  <div className="absolute top-3.5 left-3.5 bg-[#663464]/90 border border-[#d4af37]/30 px-2.5 py-1 rounded text-[10px] uppercase tracking-wider text-[#ecdeef] font-bold shadow-md">
                    {item.badge}
                  </div>

                  {/* Top Right Rating & Wishlist */}
                  <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5">
                    <div className="bg-[#120b16]/85 backdrop-blur-md text-[#f2ca50] border border-[#d4af37]/30 px-2 py-0.5 rounded text-[11px] font-bold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-[#f2ca50]" /> {item.rating}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(item);
                      }}
                      className={`p-1.5 rounded-full backdrop-blur-md border transition-all cursor-pointer ${
                        isWishlisted
                          ? 'bg-[#733037] border-[#d4af37] text-white'
                          : 'bg-[#120b16]/80 border-[#d4af37]/30 text-[#d0c5af] hover:text-[#f2b2eb]'
                      }`}
                      title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
                    >
                      <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  {/* Olfactory Inspect Quick Button */}
                  <button
                    onClick={() => onInspect(item)}
                    className="absolute inset-x-4 bottom-3.5 py-2.5 bg-[#120b16]/90 hover:bg-[#d4af37] text-[#ecdeef] hover:text-[#18111c] border border-[#d4af37]/30 rounded-lg text-xs uppercase tracking-wider font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-1.5 backdrop-blur-md cursor-pointer shadow-lg"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Olfactory Inspect</span>
                  </button>
                </div>

                {/* Card Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#99907c] block font-semibold">
                      {item.subtitle}
                    </span>
                    <h3 className="font-serif text-xl text-[#ecdeef] group-hover:text-[#f2ca50] transition-colors font-semibold mt-0.5">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#d0c5af] line-clamp-2 mt-1.5 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Notes Capsule Grid */}
                  <div className="space-y-1.5 bg-[#251d29]/80 border border-[#d4af37]/10 p-3 rounded-xl">
                    <div className="flex items-center text-[11px] gap-2">
                      <span className="font-bold text-[#f2ca50] uppercase w-11 shrink-0">Top:</span>
                      <span className="text-[#d0c5af] truncate">{item.topNotes.slice(0, 2).join(', ')}</span>
                    </div>
                    <div className="flex items-center text-[11px] gap-2">
                      <span className="font-bold text-[#f2b2eb] uppercase w-11 shrink-0">Heart:</span>
                      <span className="text-[#d0c5af] truncate">{item.heartNotes.slice(0, 2).join(', ')}</span>
                    </div>
                    <div className="flex items-center text-[11px] gap-2">
                      <span className="font-bold text-[#99907c] uppercase w-11 shrink-0">Base:</span>
                      <span className="text-[#d0c5af] truncate">{item.baseNotes.slice(0, 2).join(', ')}</span>
                    </div>
                  </div>

                  {/* Size Selector Pills & Pricing */}
                  <div className="pt-1 flex items-center justify-between">
                    <div className="flex gap-1.5 bg-[#251d29] border border-[#d4af37]/20 p-1 rounded-lg">
                      <button
                        onClick={() => handleCardSizeChange(item.id, 20)}
                        className={`px-2.5 py-0.5 rounded text-[11px] font-bold transition-all cursor-pointer ${
                          currentSize === 20
                            ? 'bg-[#d4af37] text-[#18111c]'
                            : 'text-[#d0c5af] hover:text-[#ecdeef]'
                        }`}
                      >
                        20ml
                      </button>
                      <button
                        onClick={() => handleCardSizeChange(item.id, 50)}
                        className={`px-2.5 py-0.5 rounded text-[11px] font-bold transition-all cursor-pointer ${
                          currentSize === 50
                            ? 'bg-[#d4af37] text-[#18111c]'
                            : 'text-[#d0c5af] hover:text-[#ecdeef]'
                        }`}
                      >
                        50ml
                      </button>
                    </div>

                    <div className="text-right">
                      <span className="font-serif text-2xl text-[#f2ca50] font-bold tracking-tight">
                        {formatINR(price)}
                      </span>
                    </div>
                  </div>

                  {/* Add to Bag Button */}
                  <button
                    onClick={() => onAddToCart(item, currentSize)}
                    className="w-full py-2.5 bg-[#251d29] hover:bg-[#d4af37] border border-[#d4af37]/30 text-[#ecdeef] hover:text-[#18111c] rounded-xl text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add {currentSize}ml to Bag</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
