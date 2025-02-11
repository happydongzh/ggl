import React from "react";

const ImageSlider = ({ images }) => {
  return (
    <div
      className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar  space-x-4 px-5 mt-7"
      // style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="snap-center shrink-0 w-3/4  flex-none mx-auto"
          style={{ minWidth: "76%" }}
        >
          <img
            src={image}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
