import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { Fragrance, FlaconSize } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistFragrances: Fragrance[];
  onRemoveFromWishlist: (id: string) => void;
  onAddToCart: (fragrance: Fragrance, size: FlaconSize) => void;
  onInspect: (fragrance: Fragrance) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistFragrances,
  onRemoveFromWishlist,
  onAddToCart,
  onInspect,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#18111c] border-l border-[#d4af37]/30 shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-5 border-b border-[#d4af37]/20 flex items-center justify-between bg-[#201924]">
            <div className="flex items-center gap-2.5">
              <Heart className="w-5 h-5 text-[#f2b2eb]" />
              <h3 className="font-serif text-xl text-[#ecdeef] font-semibold">
                Saved Extraits ({wishlistFragrances.length})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#2f2733] text-[#d0c5af] hover:text-[#ecdeef] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {wishlistFragrances.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#201924] border border-[#d4af37]/20 flex items-center justify-center mx-auto text-[#99907c]">
                  <Heart className="w-7 h-7" />
                </div>
                <h4 className="font-serif text-xl text-[#ecdeef] font-semibold">No Saved Extraits</h4>
                <p className="text-xs text-[#d0c5af] font-light max-w-xs mx-auto">
                  Click the heart icon on any fragrance card to save and compare your personal wishlist.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {wishlistFragrances.map((fragrance) => (
                  <div
                    key={fragrance.id}
                    className="bg-[#201924] border border-[#d4af37]/20 rounded-xl p-3.5 space-y-3 relative group"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={fragrance.image}
                        alt={fragrance.name}
                        className="w-16 h-16 object-cover rounded-lg border border-[#d4af37]/20 bg-[#251d29] shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] text-[#99907c] uppercase tracking-wider block font-semibold">
                          {fragrance.subtitle}
                        </span>
                        <h4 className="font-serif text-base text-[#ecdeef] font-semibold truncate">
                          {fragrance.name}
                        </h4>
                        <span className="text-[11px] text-[#f2ca50] font-medium block">
                          {fragrance.badge} • {fragrance.concentration}
                        </span>
                      </div>
                      <button
                        onClick={() => onRemoveFromWishlist(fragrance.id)}
                        className="text-[#99907c] hover:text-[#ffb4ab] p-1.5 rounded-md hover:bg-[#251d29]"
                        title="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="bg-[#251d29] p-2 rounded text-[11px] text-[#d0c5af] flex items-center justify-between">
                      <span>Top Accord: {fragrance.topNotes.slice(0, 2).join(', ')}</span>
                      <button
                        onClick={() => {
                          onInspect(fragrance);
                          onClose();
                        }}
                        className="text-[#f2ca50] hover:underline"
                      >
                        Inspect
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        onClick={() => {
                          onAddToCart(fragrance, 20);
                        }}
                        className="py-2 bg-[#251d29] hover:bg-[#d4af37] border border-[#d4af37]/30 text-[#ecdeef] hover:text-[#18111c] rounded-lg text-[11px] uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-1.5"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>20ml (₹32,900)</span>
                      </button>
                      <button
                        onClick={() => {
                          onAddToCart(fragrance, 50);
                        }}
                        className="py-2 bg-[#d4af37] hover:bg-[#f2ca50] text-[#18111c] rounded-lg text-[11px] uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-1.5"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>50ml (₹62,900)</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-5 border-t border-[#d4af37]/20 bg-[#201924]">
            <button
              onClick={onClose}
              className="w-full py-2.5 bg-[#251d29] border border-[#d4af37]/30 text-[#ecdeef] hover:text-[#f2ca50] rounded-xl text-xs uppercase tracking-wider font-semibold transition-all text-center"
            >
              Continue Browsing Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
