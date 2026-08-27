import React from "react";
import { MoveUpRight, MoveRight } from "lucide-react";

const Card = ({ id }) => {
  const cards = [
    {
      image:
        "https://images.unsplash.com/photo-1474403078171-7f199e9d1335?w=500&auto=format&fit=crop&q=60",
      title: "Satisfied",
    },
    {
      image:
        "https://images.unsplash.com/photo-1474403078171-7f199e9d1335?w=500&auto=format&fit=crop&q=60",
      title: "Good",
    },
    {
      image:
        "https://images.unsplash.com/photo-1474403078171-7f199e9d1335?w=500&auto=format&fit=crop&q=60",
      title: "Nice  ",
    },
  ];

  return (
    <div className="mt-10 flex text-black">
      {/* Left Section */}
      <div className="main-left w-[20%]">
        <h1 className="text-2xl font-bold text-gray-700">
          Prospective <br />
          Customer <br />
          Segmentation
        </h1>

        <p className="mt-3 w-[76%] text-sm font-normal text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consequuntur error vel architecto nesciunt nemo quos.
        </p>

        <MoveUpRight
          size={28}
          strokeWidth={1.25}
          className="mt-30"
        />
      </div>

      {/* Right Section */}
      <div className="flex gap-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative h-83 w-60 shrink-0"
          >
            {/* Image */}
            <img
              src={card.image}
              alt="customer"
              className="h-full w-full rounded-2xl object-cover"
            />

            {/* Content over Image */}
            <div className="absolute bottom-5 left-5 right-5 text-white">
              
              {/* Number */}
              <div className="relative">
                <p className="absolute -top-8 left-0 flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs text-black">
                  {id ? id + index : index + 1}
                </p>

                {/* Text */}
                <p className="mt-10 text-sm font-medium text-gray-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe, sequi.
                </p>
              </div>

              {/* Button */}
              <div className="relative mt-4 flex w-fit items-center">
                {/* Satisfied */}
                <div className="rounded-l-full rounded-r-2xl bg-[#526dcc] px-4 py-2 text-white">
                  <p className="text-sm">{card.title}</p>
                </div>

                {/* Arrow Circle */}
                <div className="absolute -right-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#526dcc]">
                  <MoveRight size={18} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;