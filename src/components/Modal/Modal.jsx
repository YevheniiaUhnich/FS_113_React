import { HiDocumentRemove } from "react-icons/hi";
import s from "./Modal.module.css";
import { useEffect } from "react";

const Modal = ({ children, title = `Default modal`, onClose }) => {
  const handleBackdropClick = (e) => {
    // console.log(e.target);
    // console.log(e.currentTarget);
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    console.log("Модалка на екран!!!");
    const handleKeyDown = (e) => {
      console.log(e.key);
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    const intervalID = setInterval(() => {
      console.log(newDate().toLocaleTimeString());
    }, 1000);
    const timeoutId = setTimeout(() => {}, 4000);
    return () => {
      clearInterval(intervalID);
      clearTimeout(timeoutId);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div onClick={handleBackdropClick} className={s.wrapper}>
      <div className={s.content}>
        <h1>{title}</h1>
        <hr />
        <button onClick={onClose} className={s.closeBtn}>
          x
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
