import React, { useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";

import "./styles.css";
import { Button } from "../button";

interface ModalProps {
  eyebrow?: string;
  header?: string;
  onCloseText?: string;
  onConfirmText?: string;
  onExtraText?: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onExtra?: () => void;
  children: React.ReactNode;
  variant?: "one-button" | "two-buttons" | "three-buttons";
}

const Modal = ({
  eyebrow,
  header,
  isOpen,
  onClose,
  onCloseText = "Cancel",
  onConfirm,
  onConfirmText = "Confirm",
  onExtra,
  onExtraText = "Delete",
  children,
  variant = "two-buttons",
}: ModalProps) => {

  useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          onClose();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content" role="dialog" aria-modal="true">
        {eyebrow && <div className="modal-eyebrow">{eyebrow}</div>}
        {header && <h2 className="modal-header">{header}</h2>}
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          {variant === "three-buttons" && (
            <Button variant="ghost" onClick={onExtra}>
              {onExtraText}
            </Button>
          )}
          <div className={variant === "three-buttons" ? "modal-footer-right-three-buttons" : "modal-footer-right-two-buttons"}>
            {(variant === "two-buttons" || variant === "three-buttons") && (
              <>
                <Button variant={variant === "three-buttons" ? "secondary" : "ghost"} onClick={onClose}>
                  {onCloseText}
                </Button>
                <Button variant="primary" onClick={onConfirm}>
                  {onConfirmText}
                </Button>
              </>
            )}
            {variant === "one-button" && (
              <Button variant="ghost" onClick={onConfirm}>
                {onConfirmText}
              </Button>
            )}
          </div>
          <div className="modal-close" onClick={onClose}>
            <Button
              icon={<IoCloseSharp />}
              variant="icon"
              size="icon"
              onClick={onClose}
              aria-label="Close modal"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
