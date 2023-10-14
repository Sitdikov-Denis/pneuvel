type ModalProps = {
    isOpen: boolean;
    onClose: () => void; // Явно указываем тип для onClose
  };
  
  function Modal({ isOpen, onClose }: ModalProps) {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <span className="modal-close" onClick={onClose}>×</span>
          <p>Чтобы отправить заявку на разработку, скачайте данный опросный лист:</p>
          <a href="text.docx" download>Скачать опросный лист</a>
        </div>
      </div>
    );
  }

  export default Modal