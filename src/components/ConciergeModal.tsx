import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Calendar, MapPin } from 'lucide-react';

interface ConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConciergeModal: React.FC<ConciergeModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    salon: 'Paris Atelier (18 Place Vendôme)',
    consultationType: 'Bespoke Discovery Coffret Consultation',
    preferredDate: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#120b16]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#201924] border border-[#d4af37]/40 max-w-lg w-full p-6 sm:p-8 rounded-2xl shadow-2xl relative space-y-6">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#251d29] hover:bg-[#3a323e] border border-[#d4af37]/20 text-[#d0c5af] hover:text-[#ecdeef] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 border border-[#d4af37] text-[#f2ca50] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-3xl text-[#ecdeef] font-semibold">
              Consultation Reserved
            </h3>
            <p className="text-xs text-[#d0c5af] font-light leading-relaxed max-w-sm mx-auto">
              Our Senior Master Nose Concierge in <strong className="text-[#f2ca50]">{formData.salon}</strong> has been notified. A confidential invitation letter and tasting protocol will be dispatched to <strong className="text-[#ecdeef]">{formData.email}</strong>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 bg-[#d4af37] text-[#18111c] rounded-xl text-xs uppercase tracking-wider font-bold"
            >
              Return to Atelier
            </button>
          </div>
        ) : (
          <>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#663464]/60 border border-[#d4af37]/30 text-[10px] uppercase tracking-widest text-[#f2ca50] font-semibold">
                <Sparkles className="w-3 h-3 text-[#f2ca50]" />
                <span>CONFIDENTIAL CLIENT SERVICE</span>
              </div>
              <h3 className="font-serif text-3xl text-[#ecdeef] font-semibold mt-2">
                Atelier Master Consultation
              </h3>
              <p className="text-xs text-[#d0c5af] font-light mt-1">
                Reserve an appointment with our olfactory master for tailored flacon curation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="text-[#99907c] uppercase tracking-wider font-semibold block">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Lord Julian Sterling"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#251d29] border border-[#d4af37]/25 rounded-xl px-3.5 py-2.5 text-[#ecdeef] focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[#99907c] uppercase tracking-wider font-semibold block">Client Dossier Email</label>
                <input
                  required
                  type="email"
                  placeholder="name@exclusive.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#251d29] border border-[#d4af37]/25 rounded-xl px-3.5 py-2.5 text-[#ecdeef] focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[#99907c] uppercase tracking-wider font-semibold block">Preferred Salon</label>
                  <select
                    value={formData.salon}
                    onChange={(e) => setFormData({ ...formData, salon: e.target.value })}
                    className="w-full bg-[#251d29] border border-[#d4af37]/25 rounded-xl px-3 py-2 text-[#ecdeef] focus:outline-none focus:border-[#d4af37]"
                  >
                    <option value="Paris Atelier (18 Place Vendôme)">Paris Atelier (Vendôme)</option>
                    <option value="London Flagship (42 Old Bond St)">London Flagship (Mayfair)</option>
                    <option value="New York Parlour (Madison Ave)">New York Parlour (Madison)</option>
                    <option value="Virtual Private Tasting Suite">Virtual Tasting Suite</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[#99907c] uppercase tracking-wider font-semibold block">Consultation Type</label>
                  <select
                    value={formData.consultationType}
                    onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                    className="w-full bg-[#251d29] border border-[#d4af37]/25 rounded-xl px-3 py-2 text-[#ecdeef] focus:outline-none focus:border-[#d4af37]"
                  >
                    <option value="Bespoke Discovery Coffret Consultation">Discovery Coffret</option>
                    <option value="Executive Scent Signature">Executive Signature</option>
                    <option value="Wedding & Heirloom Sillage">Heirloom / Wedding</option>
                    <option value="Private Vintage Cellar Access">Private Vintage Cellar</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[#99907c] uppercase tracking-wider font-semibold block">Preferred Date & Notes</label>
                <input
                  type="text"
                  placeholder="e.g. Next Tuesday morning • Looking for smoky woods"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#251d29] border border-[#d4af37]/25 rounded-xl px-3.5 py-2.5 text-[#ecdeef] focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#d4af37] hover:bg-[#f2ca50] text-[#18111c] rounded-xl text-xs uppercase tracking-wider font-bold transition-all shadow-[0_4px_24px_rgba(212,175,55,0.25)] cursor-pointer mt-2"
              >
                Submit Consultation Request
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
