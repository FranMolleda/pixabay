import React from "react";
import Image from "./Image";
const ImagesList = ({ listimage }) => {
  return (
    <div className="col-12 p-5 row">
      {listimage.map((image) => (
        <Image image={image} key={image.id} />
      ))}
    </div>
  );
};

export default ImagesList;
