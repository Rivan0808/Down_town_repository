import React, { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, ShieldCheck, Gift, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CartItem } from '../types';
import { formatINR, PRICES } from '../data/fragrances';

interface ShoppingBagDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const ShoppingBagDrawer: React.FC<ShoppingBagDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState<string | null>(null);

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = (rawSubtotal * discountPercent) / 100;
  const total = rawSubtotal - discountAmount;
  const freeVialThreshold = PRICES.FREE_VIAL_THRESHOLD;
  const progressToFreeVials = Math.min(100, Math.round((rawSubtotal / freeVialThreshold) * 100));

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'ATELIER10') {
      setDiscountPercent(10);
      setPromoMessage('10% Atelier Courtesy Applied');
    } else if (promoCode.trim().toUpperCase() === 'CONNOISSEUR') {
      setDiscountPercent(15);
      setPromoMessage('15% Private Connoisseur Privilege Applied');
    } else {
      setPromoMessage('Code not recognized in Master Registry');
    }
  };

  const handleSimulateCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      const certNo = `DP-2025-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderComplete(certNo);
      onClearCart();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#18111c] border-l border-[#d4af37]/30 shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-5 border-b border-[#d4af37]/20 flex items-center justify-between bg-[#201924]">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#f2ca50]" />
              <h3 className="font-serif text-xl text-[#ecdeef] font-semibold">
                Your Atelier Bag ({items.reduce((acc, i) => acc + i.quantity, 0)})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#2f2733] text-[#d0c5af] hover:text-[#ecdeef] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5">
            {orderComplete ? (
              <div className="py-12 px-4 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 border border-[#d4af37] text-[#f2ca50] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-2xl text-[#ecdeef] font-semibold">
                  Maceration Order Confirmed
                </h4>
                <p className="text-xs text-[#d0c5af] font-light leading-relaxed">
                  Your artisanal flacons are entering the packaging room. Each bottle is wax-sealed with certificate:
                </p>
                <div className="inline-block px-4 py-2 bg-[#251d29] border border-[#d4af37]/40 rounded font-mono text-sm text-[#f2ca50] font-bold tracking-widest">
                  {orderComplete}
                </div>
                <p className="text-[11px] text-[#99907c]">
                  An insured courier dispatch docket has been assigned to your private dossier.
                </p>
                <button
                  onClick={() => {
                    setOrderComplete(null);
                    onClose();
                  }}
                  className="mt-4 px-6 py-2.5 bg-[#d4af37] text-[#18111c] rounded-lg text-xs uppercase tracking-wider font-bold"
                >
                  Return to Atelier
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#201924] border border-[#d4af37]/20 flex items-center justify-center mx-auto text-[#99907c]">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <h4 className="font-serif text-xl text-[#ecdeef] font-semibold">Your Bag is Empty</h4>
                <p className="text-xs text-[#d0c5af] font-light max-w-xs mx-auto">
                  Select an iconic extrait in 20ml pocket decant or 50ml master crystal to begin your bespoke journey.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 px-5 py-2 bg-[#251d29] hover:bg-[#d4af37] border border-[#d4af37]/30 text-[#ecdeef] hover:text-[#18111c] text-xs uppercase tracking-wider font-bold rounded-lg transition-all"
                >
                  Explore The 13 Icons
                </button>
              </div>
            ) : (
              <>
                {/* Free Discovery Vials Bar */}
                <div className="bg-[#201924] border border-[#d4af37]/20 p-3.5 rounded-xl space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#ecdeef] font-medium flex items-center gap-1.5">
                      <Gift className="w-3.5 h-3.5 text-[#f2ca50]" />
                      {rawSubtotal >= freeVialThreshold ? (
                        <span className="text-[#f2ca50] font-bold">Complimentary Discovery Set Unlocked!</span>
                      ) : (
                        <span>
                          Add <strong className="text-[#f2ca50]">{formatINR(freeVialThreshold - rawSubtotal)}</strong> for Free Bespoke Discovery Vials
                        </span>
                      )}
                    </span>
                    <span className="text-[#99907c] text-[10px] font-mono">{progressToFreeVials}%</span>
                  </div>
                  <div className="w-full bg-[#2f2733] h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-[#d4af37] to-[#f2ca50] h-full transition-all duration-500 rounded-full"
                      style={{ width: `${progressToFreeVials}%` }}
                    />
                  </div>
                </div>

                {/* Items List */}
                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-[#201924] border border-[#d4af37]/15 p-3 rounded-xl flex items-center gap-3 relative group"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg border border-[#d4af37]/20 bg-[#251d29] shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif text-sm text-[#ecdeef] font-semibold truncate">
                          {item.name}
                        </h4>
                        <span className="text-[10px] text-[#f2ca50] uppercase tracking-wider font-bold block">
                          {item.size}ml {item.isCustomCoffret ? 'Bespoke Discovery Coffret' : item.size === 20 ? 'Pocket Extrait' : 'Master Crystal'}
                        </span>
                        {item.monogram && (
                          <span className="text-[10px] text-[#d0c5af] block font-mono">
                            Engraving: &quot;{item.monogram}&quot;
                          </span>
                        )}
                        <span className="text-xs text-[#ecdeef] font-bold block mt-1">
                          {formatINR(item.price)} each
                        </span>
                      </div>

                      {/* Controls */}
                      <div className="flex flex-col items-end justify-between self-stretch">
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-[#99907c] hover:text-[#ffb4ab] transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        <div className="flex items-center gap-1.5 bg-[#251d29] border border-[#d4af37]/20 rounded-md p-0.5">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1 hover:text-[#f2ca50] text-[#d0c5af]"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold px-1 text-[#ecdeef]">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1 hover:text-[#f2ca50] text-[#d0c5af]"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Promo Code Form */}
                <form onSubmit={handleApplyPromo} className="space-y-1.5 pt-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Atelier Promo (try ATELIER10)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 bg-[#201924] border border-[#d4af37]/20 rounded-lg px-3 py-2 text-xs text-[#ecdeef] placeholder:text-[#99907c] focus:outline-none focus:border-[#d4af37]"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-2 bg-[#251d29] hover:bg-[#d4af37] border border-[#d4af37]/30 text-[#ecdeef] hover:text-[#18111c] text-xs uppercase tracking-wider font-bold rounded-lg transition-all"
                    >
                      Apply
                    </button>
                  </div>
                  {promoMessage && (
                    <p className={`text-[11px] ${discountPercent > 0 ? 'text-[#f2ca50]' : 'text-[#ffb4ab]'}`}>
                      {promoMessage}
                    </p>
                  )}
                </form>
              </>
            )}
          </div>

          {/* Footer Totals & Checkout */}
          {!orderComplete && items.length > 0 && (
            <div className="p-5 border-t border-[#d4af37]/20 bg-[#201924] space-y-4">
              <div className="space-y-2 text-xs text-[#d0c5af]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#ecdeef]">{formatINR(rawSubtotal)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#f2ca50]">
                    <span>Atelier Privilege ({discountPercent}%)</span>
                    <span>-{formatINR(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Insured Global White-Glove Courier</span>
                  <span className="text-[#f2ca50] uppercase font-bold text-[10px]">Complimentary</span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#ecdeef] pt-2 border-t border-[#d4af37]/15">
                  <span>Total Investment</span>
                  <span className="font-serif text-2xl text-[#f2ca50]">{formatINR(total)}</span>
                </div>
              </div>

              <button
                disabled={isCheckingOut}
                onClick={handleSimulateCheckout}
                className="w-full py-3.5 bg-[#d4af37] hover:bg-[#f2ca50] disabled:bg-[#4d4635] text-[#18111c] rounded-xl text-xs uppercase tracking-wider font-bold transition-all shadow-[0_4px_24px_rgba(212,175,55,0.25)] flex items-center justify-center gap-2 cursor-pointer"
              >
                {isCheckingOut ? (
                  <span>Certifying Flacons...</span>
                ) : (
                  <>
                    <span>Proceed to Secure Atelier Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#99907c]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#f2ca50]" />
                <span>Encrypted 256-bit Swiss Banking Standard • Paris Atelier Seal</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
