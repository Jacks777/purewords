import React, { useEffect, useState } from "react";
import { Nav } from "../Components/Nav";
import { Footer } from "../Components/Footer";

// import bibleChaptersJSON from "../bible-master/Books.json";
// import bibleData from "../bible-master/Obadiah.json";
import { Link, useLocation } from "react-router-dom";
import LoadingComp from "../Components/LoadingComp";

import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { postDB } from "../firebase";

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
  const [isCopied, setIsCopied] = useState(null);

  // testing
  const [allBookNames, setAllBookNames] = useState([]);

  const getBooksDB = async () => {
    try {
      const valRef = collection(postDB, "bible-master-books");
      const dataDb = await getDocs(query(valRef, orderBy("order")));

      const booksData = dataDb.docs.map((val) => {
        const bookName = val.data()?.name;
        return {
          ...val.data(),
          id: val.id,
          name: bookName,
        };
      });

      setAllBookNames(booksData);
    } catch (error) {
      console.error("Error fetching books data:", error);
    }
  };

  useEffect(() => {
    getBooksDB();
  }, []);

  const getBookContent = async (bookName) => {
    try {
      const valRef = doc(postDB, "bible-master", bookName);
      const docSnapshot = await getDoc(valRef);

      if (docSnapshot.exists()) {
        return docSnapshot.data();
      } else {
        console.log("No such document!");
        return null; // or handle the case where the document doesn't exist
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return null; // or handle the error appropriately
    }
  };

  const handleSelectBookDB = async (name) => {
    setSelectedBook(name);
    setSelectedChapter(null);

    const bookContent = await getBookContent(name);

    if (bookContent) {
      //set icon
      const formattedNameIcon = name.replace(/\s+/g, "-").toLowerCase();
      const iconUrl = `/bible-icons/${formattedNameIcon}-600x600-free-bible-icon.png`;

      setSelectedBookContent(bookContent.chapters);
      setSelectedBookIcon(iconUrl);
    } else {
      console.log("error showing icons and chapters");
    }
  };

  //end testing

  const handleSelectChapter = (chapter) => {
    setSelectedChapter(chapter);
  };

  const handleSelectChapterInit = (chapter) => {
    if (isLoading) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
      setSelectedChapter(chapter);

      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
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

  // const handleCopy = async (verse, book) => {
  //   try {
  //     // Use the Clipboard API to copy text to clipboard
  //     await navigator.clipboard.writeText(
  //       '"' + verse.text + '" ' + book + ":" + verse.verse
  //     );

  //     // Set isCopied to verse.verse for highlighting purposes
  //     setIsCopied(verse.verse);

  //     // Reset the copied state after a delay
  //     setTimeout(() => {
  //       setIsCopied(null);
  //     }, 300);
  //   } catch (error) {
  //     console.error("Error copying to clipboard:", error);
  //     alert("Error copying verse to clipboard. Please try again.");
  //   }
  // };

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
                <div className="readpage_container_books-list">
                  {allBookNames.map((bookName, index) => {
                    const formattedName = bookName.name
                      .replace(/\s+/g, "-")
                      .toLowerCase();
                    return (
                      <div
                        key={index}
                        className="bible_text_common bible_text_common_box"
                        onClick={() => handleSelectBookDB(bookName.name)}
                      >
                        <img
                          style={{ width: "80px" }}
                          src={`/bible-icons/${formattedName}-600x600-free-bible-icon.png`}
                          alt={`Icon for ${formattedName}600x600.png`}
                        />

                        <p>{bookName.name}</p>
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
                    <div key={verse.verse} className="bible_text_row">
                      <p className="bible_text_verseNumber">{verse.verse}</p>
                      <p className="bible_text" key={verse.verse}>
                        {verse.text}
                      </p>
                      {/* <img
                        src="/assets/copy.svg"
                        className={`bible_text_copy ${
                          isCopied === verse.verse ? "scaleUp" : ""
                        }`}
                        onClick={() => handleCopy(verse, selectedBook)}
                        alt="copy svg" build
                      /> */}
                    </div>
                  ))}
              </div>
            </>
          )}
        </div>
      ) : (
        <LoadingComp onClick={() => handleSelectChapterInit()} />
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
