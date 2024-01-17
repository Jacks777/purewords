import { useEffect, useState } from "react";

import "./App.css";
import kjvJson from "./kjv.json";

function App() {
  return (
    <>
      <main className="main_app_container">
        <LandingPage />
        {/* <BibleVerse /> */}
      </main>
    </>
  );
}

function LandingPage() {
  return (
    <div className="landingpage_container">
      <div className="landingpage_container_inner">
        <div className="landingpage_container_inner-left">
          <div className="bento_left_top">
            <div className="bento_left_top_left bento_card">Left</div>
            <div className="bento_left_top_right bento_card">right</div>
          </div>
          <div className="bento_left_bottom bento_card">Bottom</div>
        </div>
        <div className="landingpage_container_inner-right">
          <div className="bento_right bento_card">Right</div>
        </div>
      </div>
    </div>
  );
}

// function LandingPage() {
//   return (
//     <div className="bento_grid_container">
//       <div className="bento_grid_container_inner">
//         <div className="bento_grid_container-start">
//           <div className="bento_grid_container-card card-start">
//             Bento Grid 1
//           </div>
//           <div className="bento_grid_container-card card-start">
//             Bento Grid 2
//           </div>
//         </div>
//         <div className="bento_grid_container-end">
//           <div className="bento_grid_container-card card-end">Bento Grid</div>
//           <div className="bento_grid_container-card card-end">Bento Grid</div>
//         </div>
//         <div className="bento_grid_container-right">
//           <div className="bento_grid_container-card card-right">
//             Bento Grid Important
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function BibleVerse() {
//   const [randomVerse, setRandomVerse] = useState("");

//   useEffect(() => {
//     // Function to fetch and set a random Bible verse
//     const fetchRandomVerse = () => {
//       // Get a random verse from kjv.json
//       const randomVerse = getRandomVerse();
//       setRandomVerse(randomVerse);
//     };

//     fetchRandomVerse();
//   }, []); // Empty dependency array to ensure the effect runs only once

//   // Function to get a random verse from kjv.json
//   const getRandomVerse = () => {
//     const verses = Object.keys(kjvJson);
//     const randomIndex = Math.floor(Math.random() * verses.length);
//     const randomVerseKey = verses[randomIndex];
//     return kjvJson[randomVerseKey];
//   };

//   return (
//     <div className="bible_verse_container">
//       <h2>Random Bible Verse</h2>
//       <p>{randomVerse}</p>
//     </div>
//   );
// }

export default App;
