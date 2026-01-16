import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ImagePopup = ({ images, setIsOpen, photoIndex, setPhotoIndex }) => {
  if (!images || images.length === 0) {
    return null;
  }

  const slides = images.map((src) => ({ src }));

  return (
    <Lightbox
      open={true}
      close={() => setIsOpen(false)}
      index={photoIndex}
      slides={slides}
      on={{
        view: ({ index }) => {
          setPhotoIndex(index);
        },
      }}
    />
  );
};

export default ImagePopup;
