import ReactDOM from 'react-dom';

import '../styles/modal.css';

export default function Modal({ children }) {
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
      <div className="modal">
        {children}
      </div>
    </div>
  ), document.body)
}