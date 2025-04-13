"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
function Typing() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Digital World",
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        "IT services",
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        "Application Development",
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        "Strategic Planning",
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        "Product Designing",
        1500, // wait 1s before replacing "Mice" with "Hamsters"
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
