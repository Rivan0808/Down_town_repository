import React, { useState, useEffect } from 'react';
import { Search, X, Droplet, ArrowRight } from 'lucide-react';
import { Fragrance } from '../types';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  fragrances: Fragrance[];
  onSelectFragrance: (fragrance: Fragrance) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  fragrances,
  onSelectFragrance,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = fragrances.filter((f) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      f.name.toLowerCase().includes(q) ||
      f.subtitle.toLowerCase().includes(q) ||
      f.badge.toLowerCase().includes(q) ||
      f.persona.toLowerCase().includes(q) ||
      f.topNotes.some((n) => n.toLowerCase().includes(q)) ||
      f.heartNotes.some((n) => n.toLowerCase().includes(q)) ||
      f.baseNotes.some((n) => n.toLowerCase().includes(q))
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#201924] border border-[#d4af37]/40 max-w-xl w-full rounded-2xl shadow-2xl overflow-hidden space-y-4 p-4">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 bg-[#251d29] border border-[#d4af37]/25 rounded-xl px-4 py-3">
          <Search className="w-5 h-5 text-[#f2ca50] shrink-0" />
          <input
            autoFocus
            type="text"
            placeholder="Search all 13 extraits, notes (bergamot, oud, ambergris)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-[#ecdeef] placeholder:text-[#99907c] focus:outline-none"
          />
          <button
            onClick={onClose}
            className="text-[#99907c] hover:text-[#ecdeef] p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto space-y-2 pr-1">
          {results.length === 0 ? (
            <div className="py-8 text-center text-xs text-[#99907c]">
              No rare absolutes found matching &quot;{query}&quot;.
            </div>
          ) : (
            results.map((f) => (
              <button
                key={f.id}
                onClick={() => {
                  onSelectFragrance(f);
                  onClose();
                }}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-[#251d29] hover:bg-[#2f2733] border border-[#d4af37]/15 hover:border-[#d4af37]/60 text-left transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={f.image}
                    alt={f.name}
                    className="w-12 h-12 rounded-lg object-cover border border-[#d4af37]/20 shrink-0"
                  />
                  <div>
                    <h5 className="font-serif text-sm text-[#ecdeef] group-hover:text-[#f2ca50] transition-colors font-semibold">
                      {f.name}
                    </h5>
                    <span className="text-[10px] text-[#99907c] block">
                      {f.badge} • Top: {f.topNotes.slice(0, 2).join(', ')}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#f2ca50] font-bold">₹32,900 / ₹62,900</span>
                  <ArrowRight className="w-4 h-4 text-[#99907c] group-hover:text-[#f2ca50] group-hover:translate-x-1 transition-all" />
                </div>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
