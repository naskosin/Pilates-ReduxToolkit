import "./MyModal.css";
import { useState } from "react";
export const MyModal = ({ showModal,  hideModal }) => {
  

  return showModal ? (
    <div className="MyModal">
      <div className="MyModalContent">
        <p className="MyModalContentParagraph">Do you want to delete?</p>
        <button className="MyModalContentButtonSave">Cancel</button>
        <button className="MyModalContentButtonCancel">Delete</button>
        <span className="MyModalContentSpan" onClick={hideModal}>X</span>
      </div>
    </div>
  ) : (
    ""
  );
};
