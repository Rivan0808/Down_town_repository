import React from 'react';
import { Award, ShieldCheck, MapPin, Sparkles, Droplets, CheckCircle2 } from 'lucide-react';
import { CREST_LOGO_URL } from '../data/fragrances';

interface HeritageViewProps {
  onExploreCollection: () => void;
  onBookConcierge: () => void;
}

export const HeritageView: React.FC<HeritageViewProps> = ({
  onExploreCollection,
  onBookConcierge,
}) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 py-16 space-y-16">
      {/* Editorial Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#201924] border border-[#d4af37]/30 text-[#f2ca50] text-[10px] uppercase tracking-widest font-bold">
          <Award className="w-3.5 h-3.5" />
          <span>Haute Parfumerie Provenance • Established 1912</span>
        </div>
        <h2 className="font-serif text-4xl sm:text-6xl text-[#ecdeef] font-semibold leading-tight">
          A Century of Scent, <br />
          <span className="italic font-normal text-[#f2ca50]">Uncompromising Discipline.</span>
        </h2>
        <p className="text-base text-[#d0c5af] font-light leading-relaxed">
          Founded on the quiet cobbles of Place Vendôme, Downtown Haute Parfumerie preserves the sacred tradition of slow fractional extraction, prolonged barrel maceration, and artisanal hand-pipetted crystal decanters.
        </p>
      </div>

      {/* 3 Pillars of Craftsmanship */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#201924] border border-[#d4af37]/20 p-8 rounded-2xl shadow-xl space-y-4">
          <span className="w-12 h-12 rounded-xl bg-[#663464]/60 border border-[#d4af37]/30 flex items-center justify-center text-[#f2ca50]">
            <Clock className="w-6 h-6" />
          </span>
          <h3 className="font-serif text-2xl text-[#ecdeef] font-semibold">180-Day Barrel Maceration</h3>
          <p className="text-xs text-[#d0c5af] font-light leading-relaxed">
            While industrial perfumes macerate for fewer than 14 days, Downtown compounds rest for six uninterrupted months in charred Limousin French oak barrels. This allows harsh top alcohol vapors to marry seamlessly with deep resinous base oils.
          </p>
        </div>

        <div className="bg-[#201924] border border-[#d4af37]/20 p-8 rounded-2xl shadow-xl space-y-4">
          <span className="w-12 h-12 rounded-xl bg-[#663464]/60 border border-[#d4af37]/30 flex items-center justify-center text-[#f2ca50]">
            <Droplets className="w-6 h-6" />
          </span>
          <h3 className="font-serif text-2xl text-[#ecdeef] font-semibold">Supercritical CO2 Distillation</h3>
          <p className="text-xs text-[#d0c5af] font-light leading-relaxed">
            We reject harsh petrochemical solvents. Our floral petals, wild herbs, and exotic spices are harvested at nocturnal peak bloom and extracted through sub-zero supercritical carbon dioxide to preserve delicate volatile aromatics intact.
          </p>
        </div>

        <div className="bg-[#201924] border border-[#d4af37]/20 p-8 rounded-2xl shadow-xl space-y-4">
          <span className="w-12 h-12 rounded-xl bg-[#663464]/60 border border-[#d4af37]/30 flex items-center justify-center text-[#f2ca50]">
            <ShieldCheck className="w-6 h-6" />
          </span>
          <h3 className="font-serif text-2xl text-[#ecdeef] font-semibold">Master Nose Provenance</h3>
          <p className="text-xs text-[#d0c5af] font-light leading-relaxed">
            Each flacon leaves our laboratory with a wax-stamped certificate of authenticity, signed by our chief olfactory director. Zero dilution, zero shortcuts, zero synthetic musks that mask cheap formulas.
          </p>
        </div>
      </div>

      {/* Official Certificate Seal Plaque */}
      <div className="bg-gradient-to-r from-[#201924] via-[#2f2733] to-[#201924] border-2 border-[#d4af37]/40 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        <div className="max-w-2xl mx-auto text-center space-y-5 relative z-10">
          <img
            src={CREST_LOGO_URL}
            alt="Atelier Crest"
            className="w-16 h-16 object-contain mx-auto"
          />
          <span className="text-xs uppercase tracking-[0.3em] text-[#f2ca50] font-bold block">
            OFFICIAL CERTIFICATION DOCKET
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-[#ecdeef] font-semibold">
            Authentic Flacon Certificate No. 7482-P
          </h3>
          <p className="text-sm text-[#d0c5af] font-light leading-relaxed">
            &quot;Every flacon bearing the Downtown Perfumery crest is certified to contain not less than 35% pure fragrance concentrate by weight. Macerated under climate-controlled conditions in our Parisian vaults.&quot;
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={onExploreCollection}
              className="px-7 py-3 bg-[#d4af37] text-[#18111c] text-xs uppercase tracking-wider font-bold rounded-xl shadow-lg hover:bg-[#f2ca50] transition-colors cursor-pointer"
            >
              Explore Certified Extraits
            </button>
            <button
              onClick={onBookConcierge}
              className="px-6 py-3 bg-[#251d29] border border-[#d4af37]/30 text-[#ecdeef] text-xs uppercase tracking-wider font-semibold rounded-xl hover:border-[#d4af37] transition-colors cursor-pointer"
            >
              Private Dossier Request
            </button>
          </div>
        </div>
      </div>

      {/* 3 Global Salons Directory */}
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#f2ca50] font-semibold block">
            World Architecture
          </span>
          <h3 className="font-serif text-3xl text-[#ecdeef] font-semibold">
            Our Global Salons & Tasting Parlours
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#201924] border border-[#d4af37]/20 p-6 rounded-2xl space-y-3">
            <div className="flex items-center gap-2 text-[#f2ca50]">
              <MapPin className="w-5 h-5" />
              <h4 className="font-serif text-xl font-semibold">Paris Atelier</h4>
            </div>
            <p className="text-xs text-[#ecdeef] font-medium">18 Place Vendôme, 75001 Paris, France</p>
            <p className="text-xs text-[#99907c]">+33 1 42 68 55 00 • By Private Appointment Only</p>
          </div>

          <div className="bg-[#201924] border border-[#d4af37]/20 p-6 rounded-2xl space-y-3">
            <div className="flex items-center gap-2 text-[#f2ca50]">
              <MapPin className="w-5 h-5" />
              <h4 className="font-serif text-xl font-semibold">London Flagship</h4>
            </div>
            <p className="text-xs text-[#ecdeef] font-medium">42 Old Bond Street, Mayfair, London W1S 4QR</p>
            <p className="text-xs text-[#99907c]">+44 20 7946 0912 • Concierge Tasting Chamber</p>
          </div>

          <div className="bg-[#201924] border border-[#d4af37]/20 p-6 rounded-2xl space-y-3">
            <div className="flex items-center gap-2 text-[#f2ca50]">
              <MapPin className="w-5 h-5" />
              <h4 className="font-serif text-xl font-semibold">New York Parlour</h4>
            </div>
            <p className="text-xs text-[#ecdeef] font-medium">740 Madison Avenue, Upper East Side, NY 10065</p>
            <p className="text-xs text-[#99907c]">+1 212 555 0198 • Vault Tasting & Decanting</p>
          </div>
        </div>
      </div>
    </div>
  );
};

function Clock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <circle cx="12" cy="12" r="10" strokeWidth="2" />
      <path strokeWidth="2" strokeLinecap="round" d="M12 6v6l4 2" />
    </svg>
  );
}
