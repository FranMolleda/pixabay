import React from "react";
import Image from "./Image";
import PropTypes from "prop-types";

const ImagesList = ({ listimage }) => {
  return (
    <div className="col-12 p-5 row">
      {listimage.map((image) => (
        <Image image={image} key={image.id} />
      ))}
    </div>
  );
};

ImagesList.propTypes = {
  listimage: PropTypes.array.isRequired,
};

export default ImagesList;
