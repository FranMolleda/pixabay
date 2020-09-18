import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./components/Form";
import ImageList from "./components/ImagesList";
function App() {
  const [search, setSearch] = useState("");
  const [listimage, setListImage] = useState([]);

  useEffect(() => {
    const ApiConsult = async () => {
      if (search === "") return;
      const pageImages = 30;
      const ApiKey = "18342908-2d1927776b8451fa90751081b";
      const url = `https://pixabay.com/api/?key=${ApiKey}&q=${search}&per_page=${pageImages}&order="latest"&lang="es"`;
      const response = await axios(url);
      setListImage(response.data.hits);
    };
    ApiConsult();
  }, [search]);

  return (
    <div className="containner">
      <div className="jumbotron">
        <p className="lead text-center">Images Searching</p>

        <Form setSearch={setSearch} />
      </div>
      <div className="row justify-content-center">
        <ImageList listimage={listimage} />
      </div>
    </div>
  );
}

export default App;
