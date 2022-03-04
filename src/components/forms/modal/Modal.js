import React, { useState } from "react";
import styles from "./Modal.css";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen, parentCallback }) => {
  const [title, setTitle] = useState("");
  const [titleUrl, setTitleUrl] = useState("");
  const [source, setSource] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [score, setScore] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  console.log("modal setIsOpen", typeof(setIsOpen));

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleClick = () => {
    console.log("in functie");
    const movieInfo = [
      title,
      titleUrl,
      source,
      coverUrl,
      description,
      category,
      score,
      releaseDate,
    ];
    // movieInfo.title = title;
    // movieInfo.titleUrl = titleUrl;
    // movieInfo.source = source;
    // movieInfo.coverUrl = coverUrl;
    // movieInfo.description = description;
    // movieInfo.category = category;
    // movieInfo.score = score;
    // movieInfo.releaseDate = releaseDate;
    parentCallback(movieInfo);
  };

  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Add movie</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="inputs-container">
            <form onSubmit={handleSubmit}>
              <div className="first-inputs-container">
                <label>
                  Movie title
                  <input
                    type="text"
                    required
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </label>
                <label>
                  Title URL
                  <input
                    type="text"
                    required
                    onChange={(e) => {
                      setTitleUrl(e.target.value);
                    }}
                  />
                </label>
              </div>
              <label>
                Original source
                <input
                  type="text"
                  required
                  className="original-source-input"
                  onChange={(e) => {
                    setSource(e.target.value);
                  }}
                />
              </label>
              <label>
                Cover URL
                <input
                  type="text"
                  className="cover-url-input"
                  onChange={(e) => {
                    setCoverUrl(e.target.value);
                  }}
                />
              </label>
              <label>
                Description
                <textarea
                  className="description-input"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </label>
              <div className="categ-score-container">
                <label>
                  Category
                  <select
                    name="select"
                    required
                    className="categ-input"
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                  >
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
                  <input
                    type="text"
                    className="score-input"
                    onChange={(e) => {
                      setScore(e.target.value);
                    }}
                  />
                </label>
              </div>
              <label>
                Release Date
                <input
                  type="date"
                  className="release-input"
                  onChange={(e) => {
                    setReleaseDate(e.target.value);
                  }}
                />
              </label>
            </form>

            <div className={styles.modalActions}>
              <div className={styles.actionsContainer}>
                <button className="add-btn" onClick={handleClick}>
                  Add movie
                </button>
                <button
                  className={styles.cancelBtn}
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
