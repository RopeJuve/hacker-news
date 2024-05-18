import { useState, useEffect } from "react";
import ListOfNews from "./components/ListOfNews";
import NavBar from "./components/NavBar";
import Loader from "./components/Loader";
import { useFetchData } from "./hooks/useFetchData.js";

function App() {
  const { news, search, tag, page, nbResults, nbPages, setTag, setSearch, setPage } = useFetchData();

  const handleTag = (e) => {
    setTag(e.target.id);
  }
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const handlePage = (e) => {
    setPage(e.target.id);
  }

  return (
    <>
      <div className='bg-[#e0e1e3] text-[#030303] font-["Cuprum"]' >

        <NavBar tag={tag} setTag={handleTag} search={search} setSearch={handleSearch} />
        {news.length === 0 ? <Loader /> : <ListOfNews search={search} news={news} nbResults={nbResults} nbPages={nbPages} setPage={handlePage} page={page} />}

      </div>
    </>
  )
}

export default App;
