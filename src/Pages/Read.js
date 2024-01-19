import React, { useState } from "react";
import { Nav } from "../Components/Nav";
import { Footer } from "../Components/Footer";

import bibleChaptersJSON from "../bible-master/Books.json";

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

  const handleSelectBook = async (name) => {
    setSelectedBook(name);
    setSelectedChapter(null);

    const formattedName = name.replace(/\s+/g, "");

    try {
      // Use dynamic import to load the JSON file
      const response = await import(`../bible-master/${formattedName}.json`);
      const data = response.default;

      // Assuming the structure of your data is { book, chapters }
      setSelectedBookContent(data.chapters);
    } catch (error) {
      console.error("Error loading book content:", error);
    }
  };

  const handleSelectChapter = (chapter) => {
    setSelectedChapter(chapter);
  };

  return (
    <div className="readpage_container">
      <div className="readpage_container_inner">
        <div className="readpage_container_title">Read The Holy Bible</div>
        <div className="readpage_container_books">
          {!selectedBook && (
            <>
              <p className="readpage_container_books-title">Choose a book</p>
              <div className="readpage_container_books-list">
                {bibleChaptersJSON.map((bookName, index) => (
                  <div key={index} className="bible_text_common">
                    <p onClick={() => handleSelectBook(bookName)}>{bookName}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        {selectedBookContent && !selectedChapter && (
          <>
            {" "}
            <p
              onClick={() => {
                setSelectedBook("");
                setSelectedBookContent(null);
                setSelectedChapter(null);
              }}
              style={{ color: "red" }}
            >
              Back
            </p>
            <p className="readpage_container_books-title">Choose a chapter</p>
            <div className="chapter-list">
              {selectedBookContent.map((chapter, index) => (
                <div key={index} className="chapter-container">
                  <p
                    className="bible_text_common"
                    onClick={() => handleSelectChapter(chapter.chapter)}
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
            <p
              onClick={() => {
                setSelectedChapter(null);
              }}
              style={{ color: "red" }}
            >
              Back
            </p>
            <p className="bible_text_container_prayer">
              "In the name of the Father, and of the Son, and of the Holy
              Spirit"
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
    </div>
  );
}

export default Read;
