import React, { useState } from 'react';
import { Search, Sparkles, Filter, Droplet, ArrowRight } from 'lucide-react';
import { Fragrance } from '../types';

interface OlfactoryNotesViewProps {
  fragrances: Fragrance[];
  onSelectFragrance: (fragrance: Fragrance) => void;
}

interface NoteDetail {
  name: string;
  category: 'Top' | 'Heart' | 'Base';
  origin: string;
  method: string;
  description: string;
  fragranceNames: string[];
}

export const OlfactoryNotesView: React.FC<OlfactoryNotesViewProps> = ({
  fragrances,
  onSelectFragrance,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAccord, setSelectedAccord] = useState<'All' | 'Top' | 'Heart' | 'Base'>('All');

  const notesDatabase: NoteDetail[] = [
    {
      name: 'Calabrian Bergamot',
      category: 'Top',
      origin: 'Reggio Calabria, Southern Italy',
      method: 'Pelatrice Cold-Expression of Rind',
      description: 'Bright, effervescent, floral-citrus with an aristocratically dry, peppery sparkle.',
      fragranceNames: ['Dior Sauvage', 'Creed Aventus', 'Dunhill', 'Hawas Ice', 'YSL Y'],
    },
    {
      name: 'Smoky Agarwood (Oud)',
      category: 'Base',
      origin: 'Assam Valley & Southeast Asia',
      method: 'Slow Hydro-Distillation of Resin-Infected Heartwood',
      description: 'Regal, balsamic, ancient smoldering embers, deep sweet leathery nuances.',
      fragranceNames: ['Lattafa Ameer Al Oudh', 'Dunhill'],
    },
    {
      name: 'Natural Marine Ambergris',
      category: 'Base',
      origin: 'Atlantic Ocean Oceanic Flotsam',
      method: 'Aged Tincture in Organic Grape Alcohol (3 Years)',
      description: 'Warm oceanic salinity, golden animalic radiance, velvety cashmere tenacity.',
      fragranceNames: ['Hawas Ice', 'Creed Aventus', 'Bleu De Chanel'],
    },
    {
      name: 'Goa Sandalwood (Santalum Album)',
      category: 'Heart',
      origin: 'Western Ghats, Southern India',
      method: 'Fractional Steam Distillation of Aged Roots',
      description: 'Creamy, sacred, milky buttery wood with meditative zen temple undertones.',
      fragranceNames: ['Diptyque Tam Dao', 'Bleu De Chanel', 'Davidoff Cool Water'],
    },
    {
      name: 'May Rose Absolute (Centifolia)',
      category: 'Heart',
      origin: 'Grasse, French Riviera',
      method: 'Solvent Extraction of Dawn-Harvested Petals',
      description: 'Rich, honeyed, velvety floral opulence with green leafy dew undertones.',
      fragranceNames: ['Armani Passione', '1 Million', 'Creed Aventus'],
    },
    {
      name: 'Smoky French Birch Bark',
      category: 'Heart',
      origin: 'Fontainebleau Forest, France',
      method: 'Pyrogenic Slow Char Distillation',
      description: 'Aristocratic tar, leather jacket smoke, crisp campfire wood.',
      fragranceNames: ['Creed Aventus'],
    },
    {
      name: 'White Gardenia & Pear Blossom',
      category: 'Heart',
      origin: 'Tuscany, Italy',
      method: 'Gentle CO2 Supercritical Extraction',
      description: 'Sensual, intoxicating creamy white floral petals kissed by orchard fruit nectar.',
      fragranceNames: ['Gucci Flora'],
    },
    {
      name: 'Blood Orange & Midnight Plum',
      category: 'Top',
      origin: 'Sicily & Périgord Orchards',
      method: 'Cold Pressed Fruit & Vacuum Distillate',
      description: 'Dark, intoxicating red berry syrup with wicked citrus tang and gothic allure.',
      fragranceNames: ['Vampire Blood', '1 Million'],
    },
    {
      name: 'Blond Leather Accord',
      category: 'Base',
      origin: 'Florence Artisanal Tannery Essence',
      method: 'Artisanal Botanical Iso-E Reconstitution',
      description: 'Supple, suede-like, warm glove leather with sweet powdery drydown.',
      fragranceNames: ['1 Million'],
    },
    {
      name: 'Crisp Green Apple & Cardamom',
      category: 'Top',
      origin: 'Val di Non & Guatemala',
      method: 'Steam Distillation & Fresh Extraction',
      description: 'Vibrant, crunchy tart freshness balanced by warming aromatic spice seeds.',
      fragranceNames: ['Hawas Ice', 'YSL Y', 'Creed Aventus'],
    },
    {
      name: 'Clean Seawater & Maritime Mist',
      category: 'Top',
      origin: 'Brittany Emerald Coast',
      method: 'Aerated Marine Calone Fractionation',
      description: 'Invigorating salt spray, ozone breeze, and crushed wild mint leaves.',
      fragranceNames: ['Davidoff Cool Water', 'Hawas Ice'],
    },
  ];

  const filteredNotes = notesDatabase.filter((note) => {
    const matchesSearch =
      note.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.fragranceNames.some((n) => n.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesAccord = selectedAccord === 'All' || note.category === selectedAccord;

    return matchesSearch && matchesAccord;
  });

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 py-16 space-y-12">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#f2ca50] font-semibold block">
          Botanical Concordance
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-[#ecdeef] font-semibold">
          The Olfactory Notes Archive
        </h2>
        <p className="text-sm text-[#d0c5af] font-light leading-relaxed">
          Explore the rare botanicals, wild-harvested resins, and supercritical CO2 extractions that form the architecture of our 13 Master Extraits.
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#201924] border border-[#d4af37]/20 p-4 rounded-2xl shadow-lg">
        {/* Search Input */}
        <div className="flex items-center gap-2.5 bg-[#251d29] border border-[#d4af37]/20 rounded-xl px-4 py-2 w-full md:w-96">
          <Search className="w-4 h-4 text-[#99907c]" />
          <input
            type="text"
            placeholder="Search notes, origins, or extraits..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-xs text-[#ecdeef] placeholder:text-[#99907c] focus:outline-none w-full"
          />
        </div>

        {/* Accord Tier Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto">
          {(['All', 'Top', 'Heart', 'Base'] as const).map((accord) => (
            <button
              key={accord}
              onClick={() => setSelectedAccord(accord)}
              className={`px-3.5 py-1.5 rounded-lg text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                selectedAccord === accord
                  ? 'bg-[#d4af37] text-[#18111c]'
                  : 'bg-[#251d29] text-[#d0c5af] hover:text-[#ecdeef] border border-[#d4af37]/15'
              }`}
            >
              {accord} Accords
            </button>
          ))}
        </div>
      </div>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNotes.map((note) => (
          <div
            key={note.name}
            className="bg-[#201924] border border-[#d4af37]/20 hover:border-[#d4af37]/60 rounded-2xl p-6 shadow-xl flex flex-col justify-between space-y-5 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span
                  className={`px-2.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider ${
                    note.category === 'Top'
                      ? 'bg-[#f2ca50]/20 text-[#f2ca50] border border-[#f2ca50]/30'
                      : note.category === 'Heart'
                      ? 'bg-[#663464]/60 text-[#f2b2eb] border border-[#f2b2eb]/30'
                      : 'bg-[#3a323e] text-[#d0c5af] border border-[#d4af37]/30'
                  }`}
                >
                  {note.category} Accord
                </span>
                <span className="text-[10px] text-[#99907c] font-mono">{note.origin}</span>
              </div>

              <h3 className="font-serif text-2xl text-[#ecdeef] font-semibold">{note.name}</h3>

              <div className="text-[11px] text-[#f2ca50] font-mono flex items-center gap-1.5">
                <Droplet className="w-3.5 h-3.5" />
                <span>{note.method}</span>
              </div>

              <p className="text-xs text-[#d0c5af] font-light leading-relaxed">
                {note.description}
              </p>
            </div>

            <div className="pt-3 border-t border-[#d4af37]/10 space-y-2">
              <span className="text-[10px] uppercase tracking-wider text-[#99907c] font-semibold block">
                Found in Extraits:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {note.fragranceNames.map((name) => {
                  const matchedFragrance = fragrances.find((f) => f.name === name);
                  return (
                    <button
                      key={name}
                      onClick={() => matchedFragrance && onSelectFragrance(matchedFragrance)}
                      className="px-2.5 py-1 bg-[#251d29] hover:bg-[#d4af37] border border-[#d4af37]/20 rounded text-[11px] text-[#ecdeef] hover:text-[#18111c] font-medium transition-colors cursor-pointer"
                    >
                      {name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
