import React, { useState } from 'react';
import { Sparkles, ArrowRight, RotateCcw, ShoppingBag, Eye, Award } from 'lucide-react';
import { Fragrance, FlaconSize } from '../types';

interface ScentQuizViewProps {
  fragrances: Fragrance[];
  onInspect: (fragrance: Fragrance) => void;
  onAddToCart: (fragrance: Fragrance, size: FlaconSize) => void;
}

export const ScentQuizView: React.FC<ScentQuizViewProps> = ({
  fragrances,
  onInspect,
  onAddToCart,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [resultFragrance, setResultFragrance] = useState<Fragrance | null>(null);

  const questions = [
    {
      question: 'What presence do you wish to manifest when stepping into a grand salon?',
      options: [
        { label: 'Electric, avant-garde, magnetic youth and velocity', persona: 'The Vanguard' },
        { label: 'Imperial, stately executive authority and quiet power', persona: 'The Sovereign' },
        { label: 'Meditative, mystical sacred woods and introspective alchemy', persona: 'The Alchemist' },
        { label: 'Luminous romantic charm and sunlit floral allure', persona: 'The Muse' },
      ],
    },
    {
      question: 'Which sensory terrain awakens your deepest memory?',
      options: [
        { label: 'Glacial sea waves, chilled green apples, and crisp ginger', persona: 'The Vanguard' },
        { label: 'Smoky French birch bark, dry cedar, and zesty bergamot', persona: 'The Sovereign' },
        { label: 'Holy temple sandalwood, rare oud, and caramel resin', persona: 'The Alchemist' },
        { label: 'Dewy white gardenia petals, sparkling pear, and May rose', persona: 'The Muse' },
      ],
    },
    {
      question: 'What setting defines your signature ritual?',
      options: [
        { label: 'Nocturne soirees and high-fashion midnight celebrations', persona: 'The Vanguard' },
        { label: 'High-stakes boardroom conferences and grand dinners', persona: 'The Sovereign' },
        { label: 'Solitary evening meditation and library contemplation', persona: 'The Alchemist' },
        { label: 'Golden hour coastal champagne and romantic rendezvous', persona: 'The Muse' },
      ],
    },
    {
      question: 'How should your sillage trail linger after you leave?',
      options: [
        { label: 'An intoxicating, head-turning statement of pure audacity', persona: 'The Vanguard' },
        { label: 'A tailored, regal whisper of confidence that commands respect', persona: 'The Sovereign' },
        { label: 'A mysterious incense skin scent for intimate encounters', persona: 'The Alchemist' },
        { label: 'A delicious, radiant halo that draws warmth and smiles', persona: 'The Muse' },
      ],
    },
  ];

  const handleSelectOption = (index: number) => {
    const updatedAnswers = [...answers, index];
    setAnswers(updatedAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate best fragrance match
      const personaScores: Record<string, number> = {
        'The Vanguard': 0,
        'The Sovereign': 0,
        'The Alchemist': 0,
        'The Muse': 0,
      };

      updatedAnswers.forEach((ansIdx, qIdx) => {
        const persona = questions[qIdx].options[ansIdx].persona;
        personaScores[persona] = (personaScores[persona] || 0) + 1;
      });

      let topPersona = 'The Sovereign';
      let maxScore = -1;
      Object.entries(personaScores).forEach(([p, score]) => {
        if (score > maxScore) {
          maxScore = score;
          topPersona = p;
        }
      });

      const candidates = fragrances.filter((f) => f.persona === topPersona);
      const chosen = candidates[Math.floor(Math.random() * candidates.length)] || fragrances[0];
      setResultFragrance(chosen);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setResultFragrance(null);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 py-16 space-y-12">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#f2ca50] font-semibold block">
          Aura Diagnostic
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-[#ecdeef] font-semibold">
          Discover Your Olfactory Signature
        </h2>
        <p className="text-sm text-[#d0c5af] font-light leading-relaxed">
          Answer four intuitive questions to calculate which of our 13 Master Extraits and Generational Personas aligns with your biological skin chemistry.
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-[#201924] border border-[#d4af37]/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        {resultFragrance ? (
          /* Result Screen */
          <div className="space-y-6 text-center animate-in fade-in duration-300">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#663464]/60 border border-[#d4af37]/30 text-[#f2ca50] text-[10px] uppercase tracking-widest font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Aura Match Confirmed: {resultFragrance.persona}</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-[#ecdeef] font-semibold">
              {resultFragrance.name}
            </h3>
            <p className="text-sm text-[#d0c5af] font-light max-w-lg mx-auto">
              {resultFragrance.description}
            </p>

            <div className="relative w-48 h-48 mx-auto rounded-2xl overflow-hidden border-2 border-[#d4af37]/40 shadow-2xl bg-[#251d29]">
              <img
                src={resultFragrance.image}
                alt={resultFragrance.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-[#120b16]/80 text-[#f2ca50] text-[10px] px-2 py-0.5 rounded font-bold">
                {resultFragrance.concentration}
              </div>
            </div>

            <div className="bg-[#251d29] border border-[#d4af37]/15 p-4 rounded-xl max-w-md mx-auto text-left space-y-1 text-xs">
              <div><strong className="text-[#f2ca50]">Top:</strong> <span className="text-[#d0c5af]">{resultFragrance.topNotes.join(', ')}</span></div>
              <div><strong className="text-[#f2b2eb]">Heart:</strong> <span className="text-[#d0c5af]">{resultFragrance.heartNotes.join(', ')}</span></div>
              <div><strong className="text-[#99907c]">Base:</strong> <span className="text-[#d0c5af]">{resultFragrance.baseNotes.join(', ')}</span></div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => onAddToCart(resultFragrance, 20)}
                className="px-6 py-3 bg-[#d4af37] hover:bg-[#f2ca50] text-[#18111c] text-xs uppercase tracking-wider font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add 20ml Extrait (₹32,900)</span>
              </button>
              <button
                onClick={() => onInspect(resultFragrance)}
                className="px-5 py-3 bg-[#251d29] hover:bg-[#3a323e] border border-[#d4af37]/30 text-[#ecdeef] text-xs uppercase tracking-wider font-semibold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>Inspect Notes</span>
              </button>
              <button
                onClick={handleReset}
                className="p-3 text-[#99907c] hover:text-[#ecdeef] transition-colors"
                title="Retake Quiz"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Question Screen */
          <div className="space-y-8">
            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-[11px] uppercase tracking-wider text-[#99907c]">
                <span>Question {currentStep + 1} of {questions.length}</span>
                <span>{Math.round(((currentStep + 1) / questions.length) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-[#251d29] h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#d4af37] to-[#f2ca50] h-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Text */}
            <h3 className="font-serif text-2xl sm:text-3xl text-[#ecdeef] font-semibold leading-snug">
              {questions[currentStep].question}
            </h3>

            {/* Options */}
            <div className="space-y-3">
              {questions[currentStep].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  className="w-full p-4 rounded-xl bg-[#251d29] hover:bg-[#2f2733] border border-[#d4af37]/20 hover:border-[#d4af37] text-left transition-all duration-200 flex items-center justify-between group cursor-pointer"
                >
                  <span className="text-sm text-[#d0c5af] group-hover:text-[#ecdeef] leading-relaxed">
                    {opt.label}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#99907c] group-hover:text-[#f2ca50] shrink-0 ml-3 transition-transform group-hover:translate-x-1" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
