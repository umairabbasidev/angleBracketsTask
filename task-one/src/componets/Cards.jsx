import React from "react";

function Cards({
  name,
  role,
  about,
  img,
  iconOne,
  iconTwo,
  iconThree,
  iconFour,
  iconFive,
  iconSix,
  iconSeven,
}) {
  return (
    <>
      <div className=" bg-[#394852] p-2 rounded-xl pl-4 pb-4 mt-10 mx-4 ml-8 mr-8">
        <img src={img} alt="" />
        <p className="text-white text-lg pt-2">{name}</p>
        <p className="text-white text-md pt-1">{role}</p>
        <p className="text-[#7e9090]  pt-2 text-sm">
          Senior Solution Architect who has
          <br /> mastered .NET technologies to build
          <br /> advanced desktop and web applications.
        </p>
        <div className="flex gap-2 pt-4">
          <img src={iconOne} alt="" />
          <img src={iconTwo} alt="" />
          <img src={iconThree} alt="" />

          <img src={iconSeven} alt="" className="" />
          <img src={iconFour} alt="" className="-ml-8" />
          <img src={iconSix} alt="" />
          <img src={iconFive} alt="" />
        </div>
      </div>
    </>
  );
}

export default Cards;
