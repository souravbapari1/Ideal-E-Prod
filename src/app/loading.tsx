import Image from "next/image";
import React from "react";

function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center relative">
      <Image
        alt=""
        src={"/logo-p.svg"}
        width={1000}
        height={1000}
        className="w-12 h-12  object-contain pl-2"
      />
      <div className=" border-[2px] border-primary rounded-full w-28 h-28 border-t-transparent border-b-transparent absolute top-0 left-0 right-0 bottom-0 mx-auto my-auto animate-spin"></div>
    </div>
  );
}

export default Loading;
