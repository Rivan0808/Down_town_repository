import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, Globe, Sparkles, Menu, X } from 'lucide-react';
import { ActiveTab } from '../types';
import { CREST_LOGO_URL, USER_AVATAR_URL } from '../data/fragrances';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onOpenConcierge: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onOpenConcierge
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currency, setCurrency] = useState<'INR' | 'USD' | 'EUR'>('INR');

  const navItems: { id: ActiveTab; label: string }[] = [
    { id: 'collection', label: 'The Collection' },
    { id: 'olfactory-notes', label: 'Olfactory Notes' },
    { id: 'bespoke-blends', label: 'Bespoke Blends' },
    { id: 'heritage', label: 'Heritage' },
    { id: 'scent-quiz', label: 'Scent Quiz' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-40 bg-[#120b16]/90 backdrop-blur-2xl border-b border-[#d4af37]/20 shadow-[0_12px_36px_-8px_rgba(212,175,55,0.08)]">
      {/* Top Announcement Bar */}
      <div className="w-full bg-[#201924]/90 py-1.5 px-4 lg:px-14 border-b border-[#d4af37]/10">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between text-[11px] uppercase tracking-widest text-[#d0c5af]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f2ca50] animate-pulse"></span>
            <span className="font-semibold text-white/90">Complimentary Bespoke Discovery Vials on All Orders Above ₹85,000</span>
            <span className="hidden md:inline text-[#4d4635]">|</span>
            <span className="hidden md:inline text-[#d4af37]">Handcrafted Haute Fragrances</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                const next: Record<string, 'INR' | 'USD' | 'EUR'> = { INR: 'USD', USD: 'EUR', EUR: 'INR' };
                setCurrency(next[currency]);
              }}
              className="flex items-center gap-1 hover:text-[#d4af37] transition-colors cursor-pointer"
              title="Change Currency"
            >
              <Globe className="w-3 h-3 text-[#d4af37]" />
              <span>{currency} ({currency === 'INR' ? '₹' : currency === 'USD' ? '$' : '€'})</span>
            </button>
            <span className="text-[#4d4635]">•</span>
            <button
              onClick={onOpenConcierge}
              className="hover:text-[#d4af37] transition-colors flex items-center gap-1 text-left"
            >
              <Sparkles className="w-3 h-3 text-[#d4af37]" />
              <span>Private Concierge</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="h-20 w-full px-4 lg:px-14 flex items-center justify-between">
        <div className="max-w-[1440px] w-full mx-auto flex items-center justify-between gap-6">
          {/* Brand Logo & Title */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                setActiveTab('collection');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 group text-left"
            >
              <img
                src={CREST_LOGO_URL}
                alt="Downtown Perfumery Crest"
                className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="font-serif text-xl tracking-[0.2em] text-[#ecdeef] uppercase group-hover:text-[#f2ca50] transition-colors font-semibold">
                  Downtown
                </span>
                <span className="text-[10px] tracking-[0.3em] text-[#d4af37] uppercase -mt-0.5 font-medium">
                  Perfumery
                </span>
              </div>
            </button>

            {/* Quick Search Input */}
            <div
              onClick={onOpenSearch}
              className="hidden xl:flex items-center bg-[#251d29]/70 hover:bg-[#2f2733]/80 border border-[#d4af37]/20 rounded-full px-3.5 py-1.5 gap-2.5 w-72 cursor-pointer transition-colors"
            >
              <Search className="w-4 h-4 text-[#99907c]" />
              <span className="text-xs text-[#99907c] flex-1">Search rare absolutes...</span>
              <kbd className="text-[10px] bg-[#2f2733] border border-[#4d4635] text-[#d0c5af] px-1.5 py-0.5 rounded font-mono">
                ⌘K
              </kbd>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-xs uppercase tracking-[0.14em] font-semibold py-1 relative transition-colors ${
                    isActive
                      ? 'text-[#f2ca50]'
                      : 'text-[#d0c5af] hover:text-[#ecdeef]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#d4af37] to-[#f2ca50] rounded-full shadow-[0_0_8px_rgba(212,175,55,0.6)]"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3">
            {/* Mobile Search Button */}
            <button
              onClick={onOpenSearch}
              className="xl:hidden p-2 text-[#d0c5af] hover:text-[#ecdeef] hover:bg-[#251d29] transition-colors rounded-full"
              title="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Button */}
            <button
              onClick={onOpenWishlist}
              className="relative p-2 text-[#d0c5af] hover:text-[#ecdeef] hover:bg-[#251d29] transition-colors rounded-full"
              title="View Wishlist"
            >
              <Heart className="w-5 h-5 text-[#f2b2eb]" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#733037] border border-[#d4af37]/40 text-[#ffdadb] text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Bag Button */}
            <button
              onClick={onOpenCart}
              className="flex items-center gap-2 bg-[#251d29] border border-[#d4af37]/30 px-3.5 py-1.5 rounded-full hover:bg-[#2f2733] hover:border-[#d4af37] transition-all group shadow-sm"
              title="Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4 text-[#f2ca50] group-hover:scale-110 transition-transform" />
              <span className="text-xs uppercase tracking-wider text-[#ecdeef] group-hover:text-[#f2ca50] font-semibold">
                Bag
              </span>
              <span className="bg-[#d4af37] text-[#18111c] text-[10px] font-bold px-1.5 py-0.5 rounded-full ml-0.5">
                {cartCount}
              </span>
            </button>

            {/* User VIP Profile */}
            <div className="relative pl-1">
              <button
                onClick={onOpenConcierge}
                className="transition-transform duration-200 hover:scale-105 rounded-full ring-1 ring-[#d4af37]/40 p-0.5"
                title="Atelier VIP Member"
              >
                <img
                  src={USER_AVATAR_URL}
                  alt="Profile"
                  className="w-7 h-7 rounded-full object-cover"
                />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#d0c5af] hover:text-[#ecdeef]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#18111c] border-b border-[#d4af37]/20 px-6 py-5 flex flex-col gap-4 animate-in fade-in slide-in-from-top duration-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`text-left text-sm uppercase tracking-wider font-semibold py-2 border-b border-[#3a323e]/50 ${
                activeTab === item.id ? 'text-[#f2ca50]' : 'text-[#d0c5af]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              onOpenConcierge();
              setMobileMenuOpen(false);
            }}
            className="w-full text-center py-2.5 bg-[#d4af37]/20 border border-[#d4af37] text-[#f2ca50] rounded text-xs uppercase tracking-widest font-bold mt-2"
          >
            Private Client Concierge
          </button>
        </div>
      )}
    </header>
  );
};
