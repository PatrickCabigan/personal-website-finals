import React from 'react';
import { Dialog } from '@headlessui/react';
import { PAIMON_URL } from '../../constants/images';

interface PaimonDialogProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  onConfirm?: () => void;
  confirmText?: string;
}

const PaimonDialog: React.FC<PaimonDialogProps> = ({
  isOpen,
  onClose,
  message,
  onConfirm,
  confirmText = "OK",
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-2xl bg-genshin-panel/95 border-2 border-genshin-accent rounded-2xl overflow-hidden">
          <div className="flex">
            <div className="w-36 h-48 flex items-center justify-center">
              <img src={PAIMON_URL} alt="Paimon" className="h-full object-contain" />
            </div>
            
            <div className="flex-1 p-6">
              <Dialog.Title className="text-genshin-accent font-bold text-lg tracking-wider mb-3">
                PAIMON
              </Dialog.Title>
              
              <p className="text-white text-sm leading-relaxed mb-6">
                {message}
              </p>
              
              <div className="flex justify-end gap-3">
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-white/60 font-bold hover:text-white transition"
                >
                  CANCEL
                </button>
                <button
                  onClick={() => {
                    onClose();
                    if (onConfirm) onConfirm();
                  }}
                  className="px-4 py-2 bg-genshin-accent text-black font-bold rounded hover:bg-yellow-600 transition"
                >
                  {confirmText}
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default PaimonDialog;