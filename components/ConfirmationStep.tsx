import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ConfirmationStepProps {
  onConfirm: () => void;
}

const ConfirmationStep: React.FC<ConfirmationStepProps> = ({ onConfirm }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-6 animate-fade-in text-center">
      
      <div className="mb-8 space-y-2">
        <p className="text-primary text-lg tracking-[0.2em] uppercase font-serif">
          Esperamos contar contigo
        </p>
        <h1 className="text-4xl md:text-6xl font-serif text-text">
          ¿Nos acompañas?
        </h1>
      </div>

      <button
        onClick={onConfirm}
        className="
          group
          relative
          flex items-center justify-center gap-4
          w-full max-w-md py-6 px-8
          bg-primary text-background
          rounded-sm shadow-2xl
          hover:bg-primary/90 hover:scale-[1.02] hover:shadow-primary/20
          transition-all duration-500 ease-out
          text-2xl md:text-3xl font-serif tracking-widest
        "
      >
        <span className="relative z-10">ASISTIRÉ</span>
        <CheckCircle2 className="w-8 h-8 relative z-10 group-hover:rotate-12 transition-transform" />
        
        {/* Decorative shine effect */}
        <div className="absolute inset-0 w-full h-full bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700" />
      </button>

      <p className="mt-6 text-gray-500 text-sm font-light italic">
        Haz clic para ver los detalles
      </p>
    </div>
  );
};

export default ConfirmationStep;