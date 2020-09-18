import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./components/Form";

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
  // useEffect(() => {
  //   if (search === "") return;
  //   const ApiConsult = async () => {
  //     const url = `https://pixabay.com/api/?key=18342908-2d1927776b8451fa90751081b&q=${search}&image_type=photo`;
  //     const response = await axios(url);
  //     setImage(response.data.hits);
  //   };

  //   ApiConsult();
  // }, [search]);

  //ApiKey=18342908-2d1927776b8451fa90751081b
  //url=https://pixabay.com/api/?key=18342908-2d1927776b8451fa90751081b&q=yellow+flowers&image_type=photo
  return (
    <div className="containner">
      <div className="jumbotron">
        <p className="lead text-center">Images Searching</p>

        <Form setSearch={setSearch} />
      </div>
    </div>
  );
}

export default App;
