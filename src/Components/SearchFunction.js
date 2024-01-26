import React, { useEffect, useState } from "react";
import LoadingComp from "./LoadingComp";
import { collection, query, where, getDocs } from "firebase/firestore";
import { postDB } from "../firebase";

const SearchFunction = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleKeyPress = (e) => {
    // Check if the pressed key is Enter (key code 13)
    if (e.key === "Enter") {
      // Trigger the search function when Enter is pressed
      handleSearch();
    }
  };

  const toggleCase = (text) => {
    if (!text || typeof text !== "string") {
      return text;
    }

    const firstLetter = text.charAt(0);

    if (firstLetter === firstLetter.toLowerCase()) {
      // First letter is lowercase, convert to uppercase
      return firstLetter.toUpperCase() + text.slice(1);
    } else {
      // First letter is uppercase, convert to lowercase
      return firstLetter.toLowerCase() + text.slice(1);
    }
  };

  const toggleCase2 = (text) => {
    if (!text || typeof text !== "string") {
      return text;
    }

    // Split the text into an array of words
    const words = text.split(/\s+/);

    // Toggle the case of each word
    const toggledWords = words.map((word) => {
      const firstLetter = word.charAt(0);

      if (firstLetter === firstLetter.toLowerCase()) {
        // First letter is lowercase, convert to uppercase
        return firstLetter.toUpperCase() + word.slice(1);
      } else {
        // First letter is uppercase, convert to lowercase
        return firstLetter.toLowerCase() + word.slice(1);
      }
    });

    // Join the toggled words back into a single string
    return toggledWords.join(" ");
  };

  const handleSearch = async () => {
    try {
      setIsLoading(true);
      const switchedText = toggleCase(searchText);
      const switchedText2 = toggleCase2(searchText);

      console.log(searchText, switchedText, switchedText2);

      const querySnapshot = await getDocs(collection(postDB, "bible-master"));

      const results = [];

      querySnapshot.forEach((doc) => {
        const bookData = doc.data();

        // Iterate through chapters and verses to find the matching text
        bookData.chapters.forEach((chapter) => {
          chapter.verses.forEach((verse) => {
            if (
              verse.text.includes(searchText) ||
              verse.text.includes(switchedText) ||
              verse.text.includes(switchedText2)
            ) {
              results.push({
                book: bookData.book,
                chapter: chapter.chapter,
                verse: verse.verse,
                text: verse.text,
              });
            }
          });
        });
      });

      setSearchResults(results);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error searching database:", error);
    }
  };

  return (
    <div className="search_container">
      <h3 className="search_title">What bible verse are you looking for?</h3>
      <div className="searchBar_container">
        <input
          type="text"
          placeholder="Before Abraham"
          className="searchBar_container_input"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onKeyPress={handleKeyPress}
        />
        <p
          className="searchBar_container_submit"
          onClick={() => {
            handleSearch();
          }}
        >
          Search
        </p>
      </div>
      {searchResults && (
        <div className="searchresult_container">
          {searchResults.map((result) => (
            <div
              className="searchresult_container_chapter"
              key={result.chapter}
            >
              <h3>{`${result.book} ${result.chapter}`}</h3>
              <SearchResultNew key={result.id} book={result} />
            </div>
          ))}
        </div>
      )}
      {isLoading && (
        <div className="loading_container">
          <img
            src="/assets/cross.svg"
            className="cross_loading_svg"
            alt="svg loading"
          />
        </div>
      )}
    </div>
  );
};

function SearchResultNew({ book }) {
  return (
    <div className="searchresult_container_box" key={book.book}>
      <p> {book.text}</p>
      <p className="searchresult_container_box_book">{`${book.book} ${book.chapter}:${book.verse}`}</p>
    </div>
  );
}

// function SearchResult({ book }) {
//   return (
//     <div className="searchresult_container" key={book.book}>
//       {book.chapters.map((chapter) => (
//         <div className="searchresult_container_chapter" key={chapter.chapter}>
//           <h3>{`${book.book} ${chapter.chapter}`}</h3>
//           {chapter.verses.map((verse) => (
//             <div className="searchresult_container_box" key={verse.verse}>
//               <p> {verse.text}</p>
//               <p className="searchresult_container_box_book">{`${book.book} ${chapter.chapter}:${verse.verse}`}</p>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

export default SearchFunction;
