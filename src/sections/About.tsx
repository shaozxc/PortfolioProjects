"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

import { motion } from "framer-motion";
import StarIcon from "../assets/icons/star2.svg";
import { CardTitle } from "@/components/CardTitle";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import Jsicon from "@/assets/icons/square-js.svg";
import HTMLicon from "@/assets/icons/html5.svg";
import ReactIcon from "@/assets/icons/react.svg";
import CSSICON from "@/assets/icons/css3.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import Github from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import Portrait from "@/assets/images/personalImage.png";
import { ToolboxItems } from "@/components/ToolboxItems";
import { useRef } from "react";

const toolboxitems = [
  {
    title: "Javascript",
    iconType: Jsicon,
  },
  {
    title: "HTML5",
    iconType: HTMLicon,
  },
  {
    title: "CSS",
    iconType: CSSICON,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Github",
    iconType: Github,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
];

const hobbies = [
  {
    title: "Reading",
    emoji: "📚",
    left: "5%",
    top: "0%",
  },
  {
    title: "Writing",
    emoji: "🖊️",
    left: "50%",
    top: "35%",
  },
  {
    title: "Painting",
    emoji: "🎨",
    left: "10%",
    top: "40%",
  },
  {
    title: "Photography",
    emoji: "📷",
    left: "47%",
    top: "20%",
  },
  {
    title: "Travelling",
    emoji: "✈️",
    left: "50%",
    top: "%",
  },
  {
    title: "Sports",
    emoji: "🏸",
    left: "10%",
    top: "20%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div id="aboutus" className="py-20">
      <div className="container">
        <SectionHeader
          gradientTitle="About Me"
          mainTitle="A Glipmse into my Life"
          description=" Learn more about who I am, my inspirations and my process"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid md:grid-cols-5 lg:grid-cols-3 md:gap-8">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1 ">
              <CardTitle
                title="My Reads"
                description="Explore the books which shape my inspirations"
              />
              <Image
                src={bookImage}
                alt="Book Imge"
                className="w-40 mx-auto -mt-4"
              />
            </Card>
            <Card className="sm:mt-8 md:mt-0 h-[320px] md:col-span-3 lg:col-span-2 ">
              <div>
                <CardTitle
                  className="lg:-mb-4 md:-mb-2"
                  title="My toolbox"
                  description="These are the technologies I use daily to create my projects."
                />

                <ToolboxItems
                  items={toolboxitems}
                  className="mt-2 md:mt-0"
                  itemsWrapperClassName="animate-move-left [animation-duration:30s]"
                />
                <ToolboxItems
                  items={toolboxitems}
                  className="mt-4 md:mt-2"
                  itemsWrapperClassName=" animate-move-right [animation-duration:15s]"
                />
              </div>
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="flex flex-col h-[320px] md:col-span-3 lg:col-span-2">
              <div>
                <CardTitle
                  title="Beyond The Code"
                  description="My favourite Pass-times."
                  className="px-6 py-6"
                />
                <div
                  className="relative flex flex-1 h-full"
                  ref={constraintRef}
                >
                  {hobbies.map((hobby) => (
                    <motion.div
                      key={hobby.title}
                      className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-cyan-300 to-indigo-400 rounded-full py-1.5 absolute"
                      style={{
                        left: hobby.left,
                        top: hobby.top,
                      }}
                      drag
                      dragConstraints={constraintRef}
                    >
                      <span className="font-medium text-gray-950">
                        {hobby.title}
                      </span>
                      <span>{hobby.emoji}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map Image"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-indigo-400/20 -z-20 animate-ping [animation-duration:2s]"></div>
                <Image
                  src={Portrait}
                  alt="myportrait"
                  className="size-60 object-contain"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
