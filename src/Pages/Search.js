import { useEffect, useState } from "react";

import { Nav } from "../Components/Nav";
import { Footer } from "../Components/Footer";
import SearchFunction from "../Components/SearchFunction";

function Search() {
  return (
    <>
      <Nav />
      <SearchFunction />
      <Footer />
    </>
  );
}

export default Search;
