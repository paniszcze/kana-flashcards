import ReactDOM from "react-dom";

import "../styles/Modal.css";

export default function Modal({ setVisibility, children }) {
  const handleClickOutside = (e) => {
    if (e.target.className === "modal-backdrop") {
      setVisibility(false);
    }
  };

  return ReactDOM.createPortal(
    <div className="modal-backdrop" onClick={handleClickOutside}>
      <div className="modal">{children}</div>
    </div>,
    document.body
  );
}
