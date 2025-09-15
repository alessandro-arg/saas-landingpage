"use client";

import Image from "next/image";
import ArrowIcon from "../assets/icons/arrow-w.svg";
import cursorImage from "../assets/images/cursor.png";
import messageImage from "../assets/images/message.png";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative overflow-clip bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D4234,#4F21A165,#A46EDB90)] py-[72px] sm:py-24">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)] blur-[4px]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 border border-white/30 py-1 px-2 rounded-lg"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip: text]">
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Read more</span>
              <ArrowIcon />
            </span>
          </a>
        </div>

        <div className="flex justify-center mt-8 ">
          <div className="inline-flex relative">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex">
              One Task <br /> at a Time
            </h1>

            <motion.div
              className="absolute right-[476px] top-[108px] hidden sm:inline"
              drag
              dragSnapToOrigin
            >
              <Image
                src={cursorImage}
                height="200"
                width="200"
                className="max-w-none"
                alt=""
                draggable="false"
              />
            </motion.div>

            <motion.div
              className="absolute left-[498px] top-[56px] hidden sm:inline"
              drag
              dragSnapToOrigin
            >
              <Image
                src={messageImage}
                height="200"
                width="200"
                className="max-w-none "
                draggable="false"
                alt=""
              />
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center">
          <p className="text-xl text-center mt-8 max-w-md">
            Celebrate the joy of accomplishment with an app designed to track
            progress, motivate your efforts, and celebrate your success.
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-white text-black font-medium py-3 px-5 rounded-lg">
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
};
