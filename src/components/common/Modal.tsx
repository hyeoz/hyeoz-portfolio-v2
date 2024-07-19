import { ReactElement } from 'react';

type ModalPropsType = {
  open: boolean;
  title: string;
  content: ReactElement;
  onClose: () => void;
};

function Modal({ open, title, content, onClose }: ModalPropsType) {
  return (
    <div
      className="modal"
      style={{
        display: open ? 'block' : 'none',
      }}
    >
      <div className="modal-backdrop"></div>
      <div className="modal-wrapper">
        <div className="modal-header">
          <h1>{title}</h1>
          <h1 onClick={onClose}>
            <img
              src="/svg/close_x.svg"
              alt="modal-close-x"
              style={{
                width: '16px',
                height: '16px',
              }}
            />
          </h1>
        </div>
        <div className="modal-content">{content}</div>
      </div>
    </div>
  );
}

export default Modal;
