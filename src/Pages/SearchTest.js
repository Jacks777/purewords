import React, { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { postDB } from "../firebase";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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
    } catch (error) {
      console.error("Error searching database:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {searchResults.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>
                {result.text}
                {result.verse}
                {result.book}
                {result.chapter}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
