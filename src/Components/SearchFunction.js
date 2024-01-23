import React, { useEffect, useState } from "react";
import bibleChaptersJSON from "../bible-master/Books.json";
import LoadingComp from "./LoadingComp";

const SearchFunction = () => {
  const [searchInput, setSearchInput] = useState("");
  const [bibleData, setBibleData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const loadBookData = async (bookName) => {
    try {
      const response = await import(`../bible-master/${bookName}.json`);
      return response.default;
    } catch (error) {
      console.error(`Error loading ${bookName} data:`, error);
      return null;
    }
  };

  const getBooks = () => {
    const formattedBookNames = bibleChaptersJSON.map((bookName, index) => {
      return bookName.replace(/\s+/g, "");
    });

    return formattedBookNames;
  };

  const loadAllBooks = async () => {
    const bookNames = getBooks();
    const allBooksData = [];

    for (const bookName of bookNames) {
      const bookData = await loadBookData(bookName);

      if (bookData) {
        allBooksData.push({
          book: bookName,
          chapters: bookData.chapters,
        });
      }
    }

    return allBooksData;
  };

  useEffect(() => {
    const fetchBooks = async () => {
      const allBooksData = await loadAllBooks();
      setBibleData(allBooksData);
    };

    fetchBooks();
  }, []);

  const handleSubmit = () => {
    setSearchResults(searchVerses(searchInput));
  };

  const searchVerses = (query) => {
    const lowercaseQuery = query.toLowerCase();

    return bibleData.reduce((acc, book) => {
      const matchingChapters = book.chapters.reduce((accChapters, chapter) => {
        const matchingVerses = chapter.verses.filter((verse) =>
          verse.text.toLowerCase().includes(lowercaseQuery)
        );

        if (matchingVerses.length > 0) {
          accChapters.push({
            ...chapter,
            verses: matchingVerses,
          });
        }

        return accChapters;
      }, []);

      if (matchingChapters.length > 0) {
        acc.push({
          ...book,
          chapters: matchingChapters,
        });
      }
      return acc;
    }, []);
  };

  const handleKeyPress = (e) => {
    // Check if the pressed key is Enter (key code 13)
    if (e.key === "Enter") {
      // Trigger the search function when Enter is pressed
      handleSubmit();
    }
  };

  return (
    <div className="search_container">
      <div className="searchBar_container">
        <input
          type="text"
          placeholder="Exodus 3:3"
          className="searchBar_container_input"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          onKeyPress={handleKeyPress}
        />
        <p
          className="searchBar_container_submit"
          onClick={() => {
            handleSubmit();
          }}
        >
          Search
        </p>
      </div>
      {searchResults.map((book) => (
        <SearchResult key={book.book} book={book} />
      ))}
    </div>
  );
};

function SearchResult({ book }) {
  return (
    <div className="searchresult_container" key={book.book}>
      {book.chapters.map((chapter) => (
        <div key={chapter.chapter}>
          <h3>{`${book.book} ${chapter.chapter}`}</h3>
          {chapter.verses.map((verse) => (
            <div className="searchresult_container_box" key={verse.verse}>
              <p> {verse.text}</p>
              <p className="searchresult_container_box_book">{`${book.book} ${chapter.chapter}:${verse.verse}`}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default SearchFunction;
