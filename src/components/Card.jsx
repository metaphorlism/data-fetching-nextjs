import React from "react";
import Image from "next/image";

const Card = ({ image, name, price }) => {
  return (
    <div className="w-[250px] h-[300px] rounded-xl bg-[#f8fafc] shadow-md flex flex-col justify-between mx-auto">
      <div className="w-full h-1/2">
        <Image
          src={image}
          alt="Product Image"
          width={250}
          height={150}
          className="object-contain w-full h-full"
        />
      </div>
      <p className="text-[#f97316] px-2 overflow-hidden">{name}</p>
      <p className="font-bold px-2">${price}</p>
      <button className="w-[90%] mx-auto bg-slate-500/20 py-2 rounded-lg font-bold mb-2">
        Buy
      </button>
    </div>
  );
};

export default Card;
