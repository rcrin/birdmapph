"use client";
import Image from "next/image";
import { useAppSelector } from "@/redux/store";
import { useState, useEffect } from "react";
// width={2048}
// height={1365}

const BirdDescCard = () => {
  const [name, setName] = useState("Name");
  const [desc, setDesc] = useState("Description");

  const bird = useAppSelector((state) => state.birdReducer.value);

  useEffect(() => {
    setName(bird.speciesName);
    setDesc(bird.description);
  }, [bird]);

  return (
    <div className="flex h-auto w-auto justify-center items-center ">
      <div className="border-2 border-gray-500 bg-zinc-300 h-[95%] w-4/5">
        <div className="sketchy overflow-hidden margin-5 w-full h-full m-5">
          <h1 className="list_head_text text-center">
            <span className="blue_gradient name-text">
              {`${bird.genusId.genusName} ${bird.speciesName}`}
            </span>
          </h1>
          <div className="img-container">
            <Image
              src={bird.images[0]}
              alt="bird image"
              width={2048}
              height={1365}
              quality={100}
              className="rounded-2xl max-h-80 max-w-md"
              priority
            />
          </div>

          <h1 className="list_head_text text-center">
            <span className="green_gradient">Description</span>
          </h1>
          <hr className="bar" />
          <div className="w-full h-full">
            <p className="text-sm tracking-wide text-justify leading-6 font-normal whitespace-pre-line break-words indent-4">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirdDescCard;
