import { useEffect, useRef } from "react";
import { useLockBodyScroll } from "./useLockBodyScroll";

export function SuccessDialog({ open, onClose }) {
  const dialogRef = useRef(null);

  useLockBodyScroll(open);

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;

    if (open) {
      if (!dlg.open) dlg.showModal();
    } else {
      if (dlg.open) dlg.close();
    }
  }, [open]);

  return (
    <>
      <dialog
        ref={dialogRef}
        className="fixed top-1/2 left-1/2 w-[92vw] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-0 shadow-2xl"
        onCancel={(e) => {
          e.preventDefault();
          onClose();
        }}
        onClick={(e) => {
          if (e.target === dialogRef.current) onClose();
        }}
      >
        <div className="p-6 text-center">
          <h3 className="mb-3 text-2xl font-bold text-main-dark">
            Заявка отправлена!
          </h3>
          <p className="mb-6 text-main-dark/80">
            Мы свяжемся с вами в ближайшее время.
          </p>

          <button
            type="button"
            onClick={onClose}
            className="gradient-blue-strong w-full rounded-xl py-2 font-semibold text-main-light duration-200 hover:scale-102"
          >
            Закрыть
          </button>
        </div>
      </dialog>

      <style>{`
        dialog::backdrop { background: rgba(0,0,0,0.75); }
      `}</style>
    </>
  );
}
