import React, { useState } from "react";
import Form from "./components/Form";

function App() {
  const [search, setSearch] = useState("");

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
