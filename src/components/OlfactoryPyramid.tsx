import React, { useState } from 'react';
import { ChevronRight, Award, Clock, Sparkles } from 'lucide-react';

interface OlfactoryPyramidProps {
  onBookConsultation: () => void;
  onBrowseFlacons: () => void;
}

export const OlfactoryPyramid: React.FC<OlfactoryPyramidProps> = ({
  onBookConsultation,
  onBrowseFlacons,
}) => {
  const [activeTier, setActiveTier] = useState<'top' | 'heart' | 'base'>('top');

  const tierData = {
    top: {
      title: 'Top Accord',
      timeLabel: '0–45 Minute Diffusion',
      description:
        'High-volatility molecules distilled via cold press and supercritical CO2 extraction. Creates an instant captivating presence in any salon.',
      tags: [
        'Calabrian Bergamot',
        'Frosted Italian Lemon',
        'Blackcurrant Nectar',
        'Crisp Green Apple',
        'Pink Peppercorn',
        'Blood Mandarin',
        'White Aldehydes'
      ],
      tagColor: 'border-[#f2ca50]/40 bg-[#f2ca50]/10 text-[#f2ca50]',
      progressPct: 88,
    },
    heart: {
      title: 'Heart Accord',
      timeLabel: '1–6 Hours Diffusion',
      description:
        'The aromatic nucleus and thematic signature of the flacon. Slowly blooms alongside personal skin chemistry and natural pulse points.',
      tags: [
        'May Rose Absolute',
        'Cardamom Pods',
        'Smoky Birch Bark',
        'White Gardenia',
        'Clary Sage',
        'Moroccan Jasmine',
        'Cinnamon Bark'
      ],
      tagColor: 'border-[#f2b2eb]/40 bg-[#663464]/30 text-[#f2b2eb]',
      progressPct: 75,
    },
    base: {
      title: 'Base Accord',
      timeLabel: '6–18 Hours Diffusion',
      description:
        'Heavy molecular fixatives, aged woods, and warm resinous balms that anchor the fragrance for intimate skin contact well into the nocturnal hours.',
      tags: [
        'Smoky Agarwood (Oud)',
        'Natural Ambergris',
        'Bourbon Vanilla Infusion',
        'Goa Sandalwood',
        'Ambroxan',
        'Blond Leather',
        'Atlas Cedarwood'
      ],
      tagColor: 'border-[#d4af37]/40 bg-[#3a323e]/60 text-[#d4af37]',
      progressPct: 94,
    },
  };

  const current = tierData[activeTier];

  return (
    <div className="w-full">
      {/* Pyramid Section */}
      <section className="w-full bg-[#201924]/60 border-t border-[#d4af37]/15 py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Controls */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#f2ca50] font-semibold block mb-1">
                  Interactive Diagnostic
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#ecdeef] font-semibold">
                  The Olfactory Pyramid Accord
                </h2>
              </div>
              <p className="text-sm text-[#d0c5af] font-light leading-relaxed">
                Every master composition unfolds over 14 hours. Toggle an accord layer below to witness how our nose balances volatile top notes with tenacious resins.
              </p>

              <div className="flex flex-col gap-3 pt-2">
                <button
                  onClick={() => setActiveTier('top')}
                  className={`w-full p-4 rounded-xl text-left flex items-center justify-between border transition-all duration-300 cursor-pointer ${
                    activeTier === 'top'
                      ? 'bg-[#2f2733] border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                      : 'bg-[#251d29] border-[#d4af37]/15 hover:border-[#d4af37]/40 text-[#ecdeef]'
                  }`}
                >
                  <div>
                    <span className={`font-serif text-lg font-semibold block ${activeTier === 'top' ? 'text-[#f2ca50]' : 'text-[#ecdeef]'}`}>
                      Top Notes • 0 to 45 Mins
                    </span>
                    <span className="text-xs text-[#d0c5af] font-light">
                      First impact • Frosted Citrus, Spices, Pink Pepper, Aldehydes
                    </span>
                  </div>
                  <ChevronRight className={`w-5 h-5 shrink-0 ${activeTier === 'top' ? 'text-[#f2ca50]' : 'text-[#99907c]'}`} />
                </button>

                <button
                  onClick={() => setActiveTier('heart')}
                  className={`w-full p-4 rounded-xl text-left flex items-center justify-between border transition-all duration-300 cursor-pointer ${
                    activeTier === 'heart'
                      ? 'bg-[#2f2733] border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                      : 'bg-[#251d29] border-[#d4af37]/15 hover:border-[#d4af37]/40 text-[#ecdeef]'
                  }`}
                >
                  <div>
                    <span className={`font-serif text-lg font-semibold block ${activeTier === 'heart' ? 'text-[#f2ca50]' : 'text-[#ecdeef]'}`}>
                      Heart Notes • 1 to 6 Hours
                    </span>
                    <span className="text-xs text-[#d0c5af] font-light">
                      The soul • May Rose, Cardamom, Birch, Clary Sage, Jasmine
                    </span>
                  </div>
                  <ChevronRight className={`w-5 h-5 shrink-0 ${activeTier === 'heart' ? 'text-[#f2ca50]' : 'text-[#99907c]'}`} />
                </button>

                <button
                  onClick={() => setActiveTier('base')}
                  className={`w-full p-4 rounded-xl text-left flex items-center justify-between border transition-all duration-300 cursor-pointer ${
                    activeTier === 'base'
                      ? 'bg-[#2f2733] border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                      : 'bg-[#251d29] border-[#d4af37]/15 hover:border-[#d4af37]/40 text-[#ecdeef]'
                  }`}
                >
                  <div>
                    <span className={`font-serif text-lg font-semibold block ${activeTier === 'base' ? 'text-[#f2ca50]' : 'text-[#ecdeef]'}`}>
                      Base Notes • 6 to 18 Hours
                    </span>
                    <span className="text-xs text-[#d0c5af] font-light">
                      The sillage • Agarwood, Ambergris, Bourbon Vanilla, Ambroxan
                    </span>
                  </div>
                  <ChevronRight className={`w-5 h-5 shrink-0 ${activeTier === 'base' ? 'text-[#f2ca50]' : 'text-[#99907c]'}`} />
                </button>
              </div>
            </div>

            {/* Dynamic Infographic Visualizer */}
            <div className="lg:col-span-7 bg-[#120b16] border border-[#d4af37]/30 p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col justify-between">
              <div className="flex items-center justify-between pb-6 border-b border-[#d4af37]/15">
                <span className="text-xs uppercase tracking-widest text-[#f2ca50] font-bold">
                  Selected Phase: {current.title}
                </span>
                <span className="px-2.5 py-1 rounded bg-[#251d29] border border-[#d4af37]/20 text-[11px] text-[#d0c5af] flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-[#f2ca50]" />
                  {current.timeLabel}
                </span>
              </div>

              {/* Dynamic Botanical Tag Matrix */}
              <div className="py-6 space-y-4">
                <p className="text-base text-[#ecdeef] leading-relaxed font-light">
                  {current.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {current.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1.5 rounded-lg border text-xs uppercase tracking-wider font-semibold ${current.tagColor}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Longevity Radar Circular Gauge */}
              <div className="pt-6 bg-[#201924] border border-[#d4af37]/20 p-4 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <svg className="w-12 h-12 text-[#f2ca50] shrink-0" viewBox="0 0 36 36">
                    <path
                      className="text-[#3a323e]"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                    <path
                      className="text-[#f2ca50]"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeDasharray={`${current.progressPct}, 100`}
                      strokeLinecap="round"
                      strokeWidth="3"
                    />
                  </svg>
                  <div>
                    <span className="font-serif text-xl text-[#ecdeef] font-semibold block">
                      38% Pure Concentration
                    </span>
                    <span className="text-xs text-[#99907c]">
                      Haute Extrait Concentration Ratio (Pure Macerate)
                    </span>
                  </div>
                </div>
                <span className="text-[10px] uppercase text-[#f2ca50] tracking-widest font-mono border border-[#d4af37]/30 px-2 py-1 rounded bg-[#251d29] hidden sm:inline">
                  Laboratory Grade
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bespoke Discovery Wardrobe Consultation Banner */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 py-20">
        <div className="relative rounded-2xl overflow-hidden bg-[#201924] border border-[#d4af37]/30 shadow-2xl p-8 lg:p-14">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-5">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#f2ca50] font-semibold block">
                Private Client Service
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#ecdeef] font-semibold">
                Curate Your Bespoke Discovery Wardrobe
              </h2>
              <p className="text-base text-[#d0c5af] max-w-2xl font-light leading-relaxed">
                Seeking your family heirloom fragrance or building a curated decant box for gifts? Reserve a confidential consultation with our Parisian Master Nose Concierge.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={onBookConsultation}
                  className="px-8 py-3.5 bg-[#d4af37] hover:bg-[#f2ca50] text-[#18111c] text-xs uppercase tracking-wider font-bold rounded-xl shadow-[0_4px_24px_rgba(212,175,55,0.25)] transition-all cursor-pointer"
                >
                  Book Atelier Consultation
                </button>
                <button
                  onClick={onBrowseFlacons}
                  className="px-6 py-3.5 bg-[#251d29] hover:bg-[#2f2733] border border-[#d4af37]/30 text-[#ecdeef] text-xs uppercase tracking-wider font-semibold rounded-xl shadow-sm transition-all cursor-pointer"
                >
                  Browse Flacons
                </button>
              </div>
            </div>

            {/* Fixed Tier Transparency Box */}
            <div className="lg:col-span-4 bg-[#251d29]/90 border border-[#d4af37]/30 p-6 rounded-2xl space-y-4 shadow-xl">
              <h4 className="text-base text-[#ecdeef] font-semibold flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#f2ca50]" />
                <span>Fixed Tier Transparency</span>
              </h4>
              <div className="space-y-2.5 text-xs text-[#d0c5af]">
                <div className="flex justify-between items-center py-2 bg-[#201924] px-3.5 rounded-lg border border-[#d4af37]/15">
                  <span>Any 20ml Pocket Extrait:</span>
                  <span className="text-[#f2ca50] font-bold text-sm">₹32,900</span>
                </div>
                <div className="flex justify-between items-center py-2 bg-[#201924] px-3.5 rounded-lg border border-[#d4af37]/15">
                  <span>Any 50ml Master Crystal:</span>
                  <span className="text-[#f2ca50] font-bold text-sm">₹62,900</span>
                </div>
                <p className="text-[11px] text-[#99907c] pt-1 leading-relaxed">
                  Zero arbitrary retail markups. Identical vintage rarity applied uniformly across all 13 extraits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
