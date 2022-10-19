import React, { useEffect } from "react";
import "./Modal.scss";
import { closest } from "@/utils/Utilities";

const Modal = ({
  modalShow = false,
  padding = "30px 15px",
  handleClose = () => {},
  children,
}) => {
  const onClose = (event) => {
    if (
      event.target.getAttribute("class") == "container-flex" ||
      closest(event.target, ".close")
    ) {
      handleClose(event);
    }
  };

  useEffect(() => {
    document.body.style.overflow = modalShow ? "hidden" : "auto";
  }, [modalShow]);

  return (
    <>
      {modalShow && (
        <div className="modal-dialog" onClick={onClose}>
          <div className="container-flex">
            <div className="modal">
              <div className="close" onClick={onClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="#FFF"
                    fillRule="evenodd"
                    d="M3.826.74L10 6.912 16.174.739a2.183 2.183 0 1 1 3.087 3.087L13.087 10l6.174 6.174a2.183 2.183 0 1 1-3.087 3.087L10 13.087l-6.174 6.174A2.183 2.183 0 1 1 .74 16.174L6.913 10 .739 3.826A2.183 2.183 0 0 1 3.826.74z"
                  />
                </svg>
              </div>
              <div className="modal-content" style={{ padding }}>
                {children}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
