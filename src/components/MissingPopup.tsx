import type { JSX } from "react/jsx-runtime";

interface MissingPopupProps {
  onClose: () => void;
}

export default function MissingPopup({
  onClose,
}: MissingPopupProps): JSX.Element {
  return (
    <div className="missing-content-popup-overlay">
      <div className="missing-content-popup">
        <h1>Erm...</h1>
        <p>
          Sorry about that! This content is currently missing in this version of
          the prototype, it may be implemented in future versions!
        </p>
        <button type="button" className="plain-btn" onClick={onClose}>
          Dismiss
        </button>
      </div>
    </div>
  );
}
