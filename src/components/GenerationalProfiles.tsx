import React from 'react';
import { Zap, Award, Sparkles, Heart } from 'lucide-react';
import { Fragrance } from '../types';

interface GenerationalProfilesProps {
  fragrances: Fragrance[];
  onSelectFragrance: (fragrance: Fragrance) => void;
}

export const GenerationalProfiles: React.FC<GenerationalProfilesProps> = ({
  fragrances,
  onSelectFragrance,
}) => {
  const personas = [
    {
      title: 'The Vanguard',
      subtitle: 'Youth & Modern Trendsetters',
      icon: Zap,
      description: 'Bold, vibrant, magnetic energy crafted for evening soirees and distinctive metropolitan footprints.',
      names: ['Hawas Ice', 'YSL Y', 'Vampire Blood', '1 Million'],
    },
    {
      title: 'The Sovereign',
      subtitle: 'Executive & Connoisseurs',
      icon: Award,
      description: 'Commanding, stately, architecturally poised sillage designed to leave a quiet wake of authority.',
      names: ['Creed Aventus', 'Bleu De Chanel', 'Dior Sauvage', 'Dunhill'],
    },
    {
      title: 'The Alchemist',
      subtitle: 'Artisanal & Meditative',
      icon: Sparkles,
      description: 'Introspective resins, smoky woods, and ancient incense built for connoisseurs who appreciate pure essence.',
      names: ['Diptyque Tam Dao', 'Lattafa Ameer Al Oudh'],
    },
    {
      title: 'The Muse',
      subtitle: 'Romantic & Ethereal',
      icon: Heart,
      description: 'Sunlit florals, effervescent fruit nectar, and soothing aquatic breezes expressing graceful allure.',
      names: ['Gucci Flora', 'Armani Passione', 'Davidoff Cool Water'],
    },
  ];

  return (
    <section id="generation-curation" className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 py-20">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#f2ca50] font-semibold block">
          Generational Harmonies
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#ecdeef] font-semibold">
          Scents for Every Epoch & Persona
        </h2>
        <p className="text-sm text-[#d0c5af] font-light leading-relaxed">
          Perfumery transcends age. Whether you are defining your youth, anchoring executive presence, or seeking meditative solitude, our 13 formulations honor your chapter.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {personas.map((persona) => {
          const Icon = persona.icon;
          return (
            <div
              key={persona.title}
              className="bg-[#201924] border border-[#d4af37]/20 hover:border-[#d4af37]/60 p-6 rounded-2xl shadow-lg flex flex-col justify-between space-y-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-3.5">
                <span className="w-10 h-10 rounded-full bg-[#663464]/60 border border-[#d4af37]/30 flex items-center justify-center text-[#f2ca50]">
                  <Icon className="w-5 h-5 text-[#f2ca50]" />
                </span>
                <div>
                  <h3 className="font-serif text-xl text-[#ecdeef] font-semibold">{persona.title}</h3>
                  <span className="text-[10px] uppercase tracking-wider text-[#99907c] font-medium block mt-0.5">
                    {persona.subtitle}
                  </span>
                </div>
                <p className="text-xs text-[#d0c5af] font-light leading-relaxed">
                  {persona.description}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#d4af37]/10">
                <div className="text-[10px] uppercase text-[#99907c] tracking-wider font-semibold">
                  Featured Extraits:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {persona.names.map((name) => {
                    const fragrance = fragrances.find((f) => f.name === name);
                    return (
                      <button
                        key={name}
                        onClick={() => fragrance && onSelectFragrance(fragrance)}
                        className="px-2.5 py-1 bg-[#251d29] hover:bg-[#d4af37] border border-[#d4af37]/20 hover:border-[#d4af37] rounded-md text-[11px] text-[#ecdeef] hover:text-[#18111c] transition-all cursor-pointer font-medium"
                      >
                        {name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
