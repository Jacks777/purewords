import React, { useEffect, useState } from "react";
import { Nav } from "../Components/Nav";
import { Footer } from "../Components/Footer";

import bibleChaptersJSON from "../bible-master/Books.json";
import bibleData from "../bible-master/Obadiah.json";
import { Link } from "react-router-dom";

const Read = () => {
  return (
    <>
      <Nav />
      <BibleReader />
      <Footer />
    </>
  );
};

function BibleReader() {
  const [selectedBook, setSelectedBook] = useState("");
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [selectedBookContent, setSelectedBookContent] = useState(null);
  const [selectedBookIcon, setSelectedBookIcon] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const handleSelectBook = async (name) => {
    setSelectedBook(name);
    setSelectedChapter(null);

    const formattedName = name.replace(/\s+/g, "");

    try {
      // Use dynamic import to load the JSON file
      const response = await import(`../bible-master/${formattedName}.json`);

      const data = response.default;

      // Set Icon
      const formattedNameIcon = name.replace(/\s+/g, "-").toLowerCase();

      const iconUrl = `/bible-icons/${formattedNameIcon}-600x600-free-bible-icon.png`;

      setSelectedBookContent(data.chapters);
      setSelectedBookIcon(iconUrl);
    } catch (error) {
      console.error("Error loading book content:", error);
    }
  };

  const handleSelectChapter = (chapter) => {
    setSelectedChapter(chapter);
  };

  const handleSelectChapterInit = (chapter) => {
    if (isLoading) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
      setSelectedChapter(chapter);
    }
  };

  const handleNextChapter = () => {
    if (selectedBookContent && selectedChapter) {
      const currentIndex = selectedBookContent.findIndex(
        (chapter) => chapter.chapter === selectedChapter
      );

      // Check if the current chapter is not the last chapter
      if (currentIndex < selectedBookContent.length - 1) {
        const nextChapter = selectedBookContent[currentIndex + 1].chapter;
        handleSelectChapter(nextChapter);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }
  };

  const handleBackChapter = () => {
    if (selectedBookContent && selectedChapter) {
      const currentIndex = selectedBookContent.findIndex(
        (chapter) => chapter.chapter === selectedChapter
      );

      // Check if the current chapter is not the first chapter
      if (currentIndex > 0) {
        const prevChapter = selectedBookContent[currentIndex - 1].chapter;
        handleSelectChapter(prevChapter);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div
      className={`readpage_container ${
        isLoading ? "readpage_active_prayer" : ""
      }`}
    >
      {!isLoading ? (
        <div className="readpage_container_inner">
          <div className="readpage_container_books">
            {/* CHOOSE A BOOK */}
            {!selectedBook && (
              <>
                <p className="readpage_container_books-title">Choose a book</p>
                <div className="readpage_container_books-list">
                  {bibleChaptersJSON.map((bookName, index) => {
                    const formattedName = bookName
                      .replace(/\s+/g, "-")
                      .toLowerCase();

                    return (
                      <div
                        key={index}
                        className="bible_text_common bible_text_common_box"
                        onClick={() => handleSelectBook(bookName)}
                      >
                        <img
                          style={{ width: "80px" }}
                          src={`/bible-icons/${formattedName}-600x600-free-bible-icon.png`}
                          alt={`Icon for ${formattedName}600x600.png`}
                        />

                        <p>{bookName}</p>
                      </div>
                    );
                  })}
                  <ScrollToTopButton />
                </div>
              </>
            )}
          </div>

          {selectedBookContent && !selectedChapter && (
            <>
              <p
                onClick={() => {
                  setSelectedBook("");
                  setSelectedBookContent(null);
                  setSelectedChapter(null);
                }}
                className="back_button_global"
              >
                Back to books
              </p>
              <div className="iconBookInfo">
                <img
                  className="icon_chapter"
                  src={`${selectedBookIcon}`}
                  alt={`Icon for ${selectedBookIcon}600x600.png`}
                />
                <p>{selectedBook}</p>
              </div>
              <div className="chapter-list">
                {selectedBookContent.map((chapter, index) => (
                  <div key={index} className="chapter-container">
                    <p
                      className="bible_text_common"
                      onClick={() => handleSelectChapterInit(chapter.chapter)}
                    >
                      {`${selectedBook} ${chapter.chapter}`}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}

          {selectedBookContent && selectedChapter && (
            <>
              {
                <div className="next_svg_container" onClick={handleNextChapter}>
                  <img
                    className="next_svg"
                    src="/assets/next.svg"
                    alt="next button"
                  />
                </div>
              }
              {
                <div className="back_svg_container" onClick={handleBackChapter}>
                  <img
                    className="back_svg"
                    src="/assets/back.svg"
                    alt="back button"
                  />
                </div>
              }
              <p
                onClick={() => {
                  setSelectedChapter(null);
                }}
                className="back_button_global"
              >
                Back to Chapters
              </p>

              <p className="readpage_container_books-title">
                {selectedBook}, {selectedChapter}
              </p>
              <div className="bible_text_container">
                {selectedBookContent
                  .find((chapter) => chapter.chapter === selectedChapter)
                  .verses.map((verse) => (
                    <div className="bible_text_row">
                      <p className="bible_text_verseNumber">{verse.verse}</p>
                      <p className="bible_text" key={verse.verse}>
                        {verse.text}
                      </p>
                    </div>
                  ))}
              </div>
            </>
          )}
        </div>
      ) : (
        <p
          className="bible_text_container_prayer"
          onClick={() => handleSelectChapterInit()}
        >
          "In the name of the Father, and of the Son, and of the Holy Spirit"
        </p>
      )}
    </div>
  );
}

function ScrollToTopButton() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <p className="buttonToTop" onClick={handleScrollToTop}>
      Scroll to Top
    </p>
  );
}

export default Read;
