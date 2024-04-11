import React, { useState } from "react";
import ActionButton from "../../utils/button";

const Carousel = ({ itemsLength, children, itemIndex }) => {
  const [index, setIndex] = useState(itemIndex);
  const length = itemsLength;
  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <div>
      <ActionButton handleClick={handlePrevious} icon={"prev"}>
        Next
      </ActionButton>
      {children}
      <ActionButton handleClick={handleNext} icon={"next"}></ActionButton>
    </div>
  );
};

export default Carousel;
