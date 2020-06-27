import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useCallback } from "react";
import { useRef } from "react";

const modalElement = document.getElementById("modal-root");

export const Modal = ({ children, isOpen, onClose }) => {
    const modalRef = useRef(null);
    const handleEscape = useCallback((event) => {
        if (event.keyCode === 27) onClose();
    }, []);
    const hanldeClickOut = useCallback((event) => {
        if (modalRef.current && !modalRef.current.contains(event.target))
            onClose();
    }, []);
    useEffect(() => {
        if (isOpen) {
            modalElement.classList.add("active");
            document.addEventListener("keydown", handleEscape, false);
            document.addEventListener("click", hanldeClickOut, false);
        } else {
            modalElement.classList.remove("active");
        }
        return () => {
            document.removeEventListener("click", hanldeClickOut, false);
            document.removeEventListener("keydown", handleEscape, false);
        };
    }, [handleEscape, isOpen, modalElement]);
    const clickOutside = () => {
        if (isOpen) {
            onClose();
        }
    };
    return createPortal(
        isOpen ? (
            <React.Fragment>
                <div className="overlay"></div>
                <div className="modal" ref={modalRef} onClick={clickOutside}>
                    <div className="modal-inner">{children}</div>
                </div>
            </React.Fragment>
        ) : null,
        modalElement
    );
};
