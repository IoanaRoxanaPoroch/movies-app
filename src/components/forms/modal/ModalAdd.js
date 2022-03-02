// import React from "react";
// import ReactDOM from "react-dom";
// import "./ModalAdd.css";

// const ModalAdd = ({ isShowing, hide, settingMovieTitle, handleClickAdd }) =>
//   isShowing
//     ? ReactDOM.createPortal(
//         <React.Fragment>
//           <div className="modal-overlay" />
//           <div
//             className="modal-wrapper"
//             aria-modal
//             aria-hidden
//             tabIndex={-1}
//             role="dialog"
//           >
//             <div className="modal">
//               <div className="modal-header">
//                 <button
//                   type="button"
//                   className="modal-close-button"
//                   data-dismiss="modal"
//                   aria-label="Close"
//                   onClick={hide}
//                 >
//                   <span aria-hidden="true">&times;</span>
//                 </button>
//               </div>
//               <div className="title-modal-container">
//                 <p>Add movie</p>
//               </div>
//               <div className="inputs-container">
//                 <form>
//                   <div className="first-inputs-container">
//                     <label>
//                       Movie title
//                       <input
//                         type="text"
//                         required
//                         onChange={settingMovieTitle}
//                       />
//                     </label>
//                     <label>
//                       Title URL
//                       <input type="text" required />
//                     </label>
//                   </div>
//                   <label>
//                     Original source
//                     <input
//                       type="text"
//                       required
//                       className="original-source-input"
//                     />
//                   </label>
//                   <label>
//                     Cover URL
//                     <input type="text" className="cover-url-input" />
//                   </label>
//                   <label>
//                     Description
//                     <textarea className="description-input" />
//                   </label>
//                   <div className="categ-score-container">
//                     <label>
//                       Category
//                       <select name="select" required className="categ-input">
//                         <option value="none"></option>
//                         <option value="action">Action</option>
//                         <option value="comedy">Comedy</option>
//                         <option value="thriller">Thriller</option>
//                         <option value="romance">Romance</option>
//                         <option value="musical">Musical</option>
//                       </select>
//                     </label>
//                     <label>
//                       IMDB Score
//                       <input type="text" className="score-input" />
//                     </label>
//                   </div>
//                   <label>
//                     Release Date
//                     <input type="text" className="release-input" />
//                   </label>
//                 </form>
//               </div>
//               <div className="bottom-btns-container">
//                 <button className="add-btn" onClick={handleClickAdd}>
//                   Add movie
//                 </button>
//                 <button className="cancel-btn">Cancel</button>
//               </div>
//             </div>
//           </div>
//         </React.Fragment>,
//         document.body
//       )
//     : null;

// export default ModalAdd;

// const Modal = ({open,close,modalText}) =>{
//   const classModal = open ? "modal--open" : "modal--close"

//   return(
//       <div className={classModal}>
//           <div className="modal">
//               <span className="close" onClick={close}>X</span>
//               <span className="modalText">{modalText}</span>
//           </div>
//       </div>
//   )
// }

// export default Modal;

import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import "./ModalAdd.css";

function Modal(props) {
  console.log("zzzzzzz ", props);
  const [modalIsOpen, setModalIsOpen] = useState(props.toggle);
  console.log("modal props", props.toggle);
  console.log(modalIsOpen);
  useEffect(() => {
    if (props.toggle) {
      setModalIsOpen(props.toggle);
    }
    console.log("aciiiiii", modalIsOpen);
  }, [props.toggle]);

  const closeModal = () => {
    setModalIsOpen(false);
  };
  function openModal() {
    setModalIsOpen(true);
  }

  return (
    <div>
      <ReactModal
        isOpen={modalIsOpen}
        contentLabel="Minimal Modal"
        onRequestClose={closeModal}
      >
        <button className="closeBtn" onClick={closeModal}>
          X
        </button>
        <div className="title-modal-container">
          <p>Add movie</p>
        </div>
        <div className="inputs-container">
          <form>
            <div className="first-inputs-container">
              <label>
                Movie title
                <input type="text" required />
              </label>
              <label>
                Title URL
                <input type="text" required />
              </label>
            </div>
            <label>
              Original source
              <input type="text" required className="original-source-input" />
            </label>
            <label>
              Cover URL
              <input type="text" className="cover-url-input" />
            </label>
            <label>
              Description
              <textarea className="description-input" />
            </label>
            <div className="categ-score-container">
              <label>
                Category
                <select name="select" required className="categ-input">
                  <option value="none"></option>
                  <option value="action">Action</option>
                  <option value="comedy">Comedy</option>
                  <option value="thriller">Thriller</option>
                  <option value="romance">Romance</option>
                  <option value="musical">Musical</option>
                </select>
              </label>
              <label>
                IMDB Score
                <input type="text" className="score-input" />
              </label>
            </div>
            <label>
              Release Date
              <input type="text" className="release-input" />
            </label>
          </form>
        </div>
        <div className="bottom-btns-container">
          <button className="add-btn">Add movie</button>
          <button className="cancel-btn" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </ReactModal>
    </div>
  );
}
export default Modal;
