import React, { useState } from "react";
import Error from "./Error";

const Form = ({ setSearch }) => {
  const [word, setWord] = useState("");
  const [error, setError] = useState(false);

  const searchImages = (e) => {
    e.preventDefault();

    //Validar
    if (word.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    setSearch(word);
  };

  return (
    <form onSubmit={searchImages}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search an image, ej: coffe or house"
            onChange={(e) => setWord(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            value="Search"
          />
        </div>
      </div>
      {error ? <Error message="Insert  search term"></Error> : null}
    </form>
  );
};

export default Form;
