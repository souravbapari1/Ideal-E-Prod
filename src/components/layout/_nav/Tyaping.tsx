"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
function Typing() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Digital World",
        5000, // wait 1s before replacing "Mice" with "Hamsters"
        "Art & Design",
        5000,
        "Creative Agency",
        5000,
        "Social Marketing",
        5000,
      ]}
      wrapper="span"
      cursor={false}
      speed={70}
      omitDeletionAnimation={false}
      repeat={Infinity}
    />
  );
}

export default Typing;
