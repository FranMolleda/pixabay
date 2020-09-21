import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./components/Form";
import ImageList from "./components/ImagesList";

function App() {
  const [search, setSearch] = useState("");
  const [listimage, setListImage] = useState([]);
  const [actualpage, setActualPage] = useState(1);
  const [totalpages, setTotalPages] = useState(1);

  useEffect(() => {
    const ApiConsult = async () => {
      if (search === "") return;
      const pageImages = 30;
      const ApiKey = "18342908-2d1927776b8451fa90751081b";
      const url = `https://pixabay.com/api/?key=${ApiKey}&q=${search}&per_page=${pageImages}&order="latest"&lang="es"&page=${actualpage}`;
      const response = await axios(url);
      setListImage(response.data.hits);

      const calculateTotalPages = Math.ceil(
        response.data.totalHits / pageImages
      );
      setTotalPages(calculateTotalPages);

      const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView({ behavior: "smooth" });
    };
    ApiConsult();
  }, [search, actualpage]);

  const handlePreviusPage = () => {
    const previous = actualpage - 1;
    if (actualpage === 1) return;
    setActualPage(previous);
  };

  const handleNextPage = () => {
    const next = actualpage + 1;
    if (next > totalpages) return;
    setActualPage(next);
  };

  return (
    <div className="containner">
      <div className="jumbotron">
        <p className="lead text-center">Images Searching</p>

        <Form setSearch={setSearch} />
      </div>
      <div className="row justify-content-center">
        <ImageList listimage={listimage} />

        {actualpage === 1 ? null : (
          <button
            type="button"
            className="btn btn-info mr-1"
            onClick={handlePreviusPage}
          >
            &laquo; Previous
          </button>
        )}
        {actualpage === totalpages ? null : (
          <button
            type="button"
            className="btn btn-info"
            onClick={handleNextPage}
          >
            Next &raquo;
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
