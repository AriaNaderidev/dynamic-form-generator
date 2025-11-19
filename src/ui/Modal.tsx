import React from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  // useEffect(() => {
  //   if (isOpen) document.body.style.overflow = "hidden";
  //   else document.body.style.overflow = "";
  //   return () => {
  //     document.body.style.overflow = "";
  //   };
  // }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onPointerDown={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation()}
      onClick={onClose}
      inert={false}
    >
      <div
        className="relative w-[600px] max-w-[80%] rounded-2xl text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-1 right-2 cursor-pointer text-2xl text-gray-400 duration-200 hover:text-black"
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
