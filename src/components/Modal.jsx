import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

// Closes on Esc, backdrop click or the Close button. Content is unmounted on
// close, so an embedded video stops playing.
export default function Modal({ open, onClose, label, wide, children }) {
  const closeBtn = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    closeBtn.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  // Portal to <body>: a parent with backdrop-filter would otherwise trap
  // position:fixed inside the panel.
  return createPortal(
    <div className="modal" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={"modal-box" + (wide ? " modal-box--wide" : "")} role="dialog" aria-modal="true" aria-label={label}>
        <button ref={closeBtn} className="modal-close" onClick={onClose}>
          Close ✕
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
