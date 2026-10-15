import React, { useState } from 'react';
import { FRAGRANCES, PRICES, formatINR } from './data/fragrances';
import { ActiveTab, CartItem, FlaconSize, Fragrance } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MasterCollection } from './components/MasterCollection';
import { FlaconFormats } from './components/FlaconFormats';
import { GenerationalProfiles } from './components/GenerationalProfiles';
import { OlfactoryPyramid } from './components/OlfactoryPyramid';
import { OlfactoryNotesView } from './components/OlfactoryNotesView';
import { BespokeBlendsView } from './components/BespokeBlendsView';
import { HeritageView } from './components/HeritageView';
import { ScentQuizView } from './components/ScentQuizView';
import { ShoppingBagDrawer } from './components/ShoppingBagDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { OlfactoryInspectModal } from './components/OlfactoryInspectModal';
import { ConciergeModal } from './components/ConciergeModal';
import { QuickSearchModal } from './components/QuickSearchModal';
import { Footer } from './components/Footer';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('collection');
  const [globalSize, setGlobalSize] = useState<FlaconSize>(20);

  // Initial cart with 2 items to match the reference badge
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'cart-1',
      fragranceId: 'hawas-ice',
      name: 'Hawas Ice',
      size: 20,
      price: PRICES.SIZE_20,
      image: FRAGRANCES[0].image,
      quantity: 1,
    },
    {
      id: 'cart-2',
      fragranceId: 'creed-aventus',
      name: 'Creed Aventus',
      size: 50,
      price: PRICES.SIZE_50,
      image: FRAGRANCES[4].image,
      quantity: 1,
    },
  ]);

  // Initial wishlist with 3 items matching the badge in reference
  const [wishlistIds, setWishlistIds] = useState<string[]>([
    'dior-sauvage',
    'diptyque-tam-dao',
    'gucci-flora',
  ]);

  const [inspectedFragrance, setInspectedFragrance] = useState<Fragrance | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleAddToCart = (fragrance: Fragrance, size: FlaconSize) => {
    const price = size === 20 ? PRICES.SIZE_20 : PRICES.SIZE_50;
    const existingIndex = cartItems.findIndex(
      (item) => item.fragranceId === fragrance.id && item.size === size
    );

    if (existingIndex > -1) {
      const updated = [...cartItems];
      updated[existingIndex].quantity += 1;
      setCartItems(updated);
    } else {
      const newItem: CartItem = {
        id: `cart-${Date.now()}`,
        fragranceId: fragrance.id,
        name: fragrance.name,
        size: size,
        price: price,
        image: fragrance.image,
        quantity: 1,
      };
      setCartItems([...cartItems, newItem]);
    }

    showToast(`${fragrance.name} (${size}ml Extrait) added to Bag`);
  };

  const handleAddCustomCoffret = (item: CartItem) => {
    setCartItems([...cartItems, item]);
    showToast(`${item.name} added to Bag`);
  };

  const handleUpdateCartQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveCartItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleToggleWishlist = (fragrance: Fragrance) => {
    if (wishlistIds.includes(fragrance.id)) {
      setWishlistIds((prev) => prev.filter((id) => id !== fragrance.id));
      showToast(`${fragrance.name} removed from Wishlist`);
    } else {
      setWishlistIds((prev) => [...prev, fragrance.id]);
      showToast(`${fragrance.name} saved to Wishlist`);
    }
  };

  const wishlistFragrances = FRAGRANCES.filter((f) => wishlistIds.includes(f.id));
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="bg-[#18111c] text-[#ecdeef] min-h-screen flex flex-col relative selection:bg-[#d4af37] selection:text-[#18111c]">
      {/* Sticky Global Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenConcierge={() => setIsConciergeOpen(true)}
      />

      {/* Main Content Flow */}
      <main className="w-full pt-20 flex-1 relative z-10">
        {activeTab === 'collection' && (
          <div className="flex flex-col w-full animate-in fade-in duration-300">
            {/* 1. Editorial Hero Section */}
            <Hero
              onExploreClick={() => {
                document.getElementById('master-collection')?.scrollIntoView({ behavior: 'smooth' });
              }}
              onGenerationsClick={() => {
                document.getElementById('generation-curation')?.scrollIntoView({ behavior: 'smooth' });
              }}
              onSelectHeroFormat={(size) => {
                setGlobalSize(size);
                document.getElementById('master-collection')?.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* 2 & 3. Master 13-Fragrance Showcase with sticky filter */}
            <MasterCollection
              fragrances={FRAGRANCES}
              globalSize={globalSize}
              setGlobalSize={setGlobalSize}
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
              onInspect={(f) => setInspectedFragrance(f)}
              onAddToCart={handleAddToCart}
            />

            {/* 4. Artisanal Bottle Sizing Guide */}
            <FlaconFormats
              onSelectSize={(size) => {
                setGlobalSize(size);
                document.getElementById('master-collection')?.scrollIntoView({ behavior: 'smooth' });
                showToast(`Global sizing set to ${size}ml (${formatINR(size === 20 ? PRICES.SIZE_20 : PRICES.SIZE_50)})`);
              }}
            />

            {/* 5. Scents for Every Generation Feature */}
            <GenerationalProfiles
              fragrances={FRAGRANCES}
              onSelectFragrance={(f) => setInspectedFragrance(f)}
            />

            {/* 6. Interactive Olfactory Accord Pyramid Widget & Bespoke Tasting */}
            <OlfactoryPyramid
              onBookConsultation={() => setIsConciergeOpen(true)}
              onBrowseFlacons={() => {
                document.getElementById('master-collection')?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </div>
        )}

        {activeTab === 'olfactory-notes' && (
          <div className="animate-in fade-in duration-300">
            <OlfactoryNotesView
              fragrances={FRAGRANCES}
              onSelectFragrance={(f) => setInspectedFragrance(f)}
            />
          </div>
        )}

        {activeTab === 'bespoke-blends' && (
          <div className="animate-in fade-in duration-300">
            <BespokeBlendsView
              fragrances={FRAGRANCES}
              onAddCustomCoffretToCart={handleAddCustomCoffret}
            />
          </div>
        )}

        {activeTab === 'heritage' && (
          <div className="animate-in fade-in duration-300">
            <HeritageView
              onExploreCollection={() => setActiveTab('collection')}
              onBookConcierge={() => setIsConciergeOpen(true)}
            />
          </div>
        )}

        {activeTab === 'scent-quiz' && (
          <div className="animate-in fade-in duration-300">
            <ScentQuizView
              fragrances={FRAGRANCES}
              onInspect={(f) => setInspectedFragrance(f)}
              onAddToCart={handleAddToCart}
            />
          </div>
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenConcierge={() => setIsConciergeOpen(true)}
      />

      {/* Slide-over Drawers & Interactive Modals */}
      <ShoppingBagDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistFragrances={wishlistFragrances}
        onRemoveFromWishlist={(id) => {
          setWishlistIds((prev) => prev.filter((i) => i !== id));
        }}
        onAddToCart={handleAddToCart}
        onInspect={(f) => setInspectedFragrance(f)}
      />

      <OlfactoryInspectModal
        fragrance={inspectedFragrance}
        onClose={() => setInspectedFragrance(null)}
        onAddToCart={handleAddToCart}
      />

      <ConciergeModal
        isOpen={isConciergeOpen}
        onClose={() => setIsConciergeOpen(false)}
      />

      <QuickSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        fragrances={FRAGRANCES}
        onSelectFragrance={(f) => setInspectedFragrance(f)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#2f2733] border border-[#d4af37]/40 px-5 py-3 rounded-xl shadow-2xl text-[#ecdeef] flex items-center gap-3 animate-in slide-in-from-bottom duration-300">
          <CheckCircle2 className="w-5 h-5 text-[#f2ca50]" />
          <span className="text-xs uppercase tracking-wider font-semibold">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
