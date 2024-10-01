import memojiImage from "../assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "../assets/icons/arrow-down.svg";
import grainImage from "../assets/images/grain.jpg";
//orbit images
import { HeroOrbit } from "@/components/HeroOrbit";

import Mars from "../assets/icons/mars-svgrepo-com.png";
import Earth from "../assets/icons/planet-earth-svgrepo-com.png";
import PlanetSystem from "../assets/icons/planet-svgrepo-com.png";
import Saturn from "../assets/icons/saturn-svgrepo-com.png";
import Satelite from "../assets/icons/satellite-svgrepo-com.png";
import Uranus from "../assets/icons/uranus-svgrepo-com.png";
import Star from "../assets/icons/star2.svg";

export const HeroSection = () => {
  return (
    <div
      id="section1"
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
    >
      <div className="bg-transparent absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5 "
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="hero-ring size-[620px]"></div>
        <div className="hero-ring size-[820px]"></div>
        <div className="hero-ring size-[1020px]"></div>
        <div className="hero-ring size-[1220px]"></div>

        <HeroOrbit size={912} rotation={-80} shouldOrbit orbitDuration="36s">
          <Image
            src={Mars}
            alt="Mars"
            className="bg-transparent size-[48px] "
          />
          <HeroOrbit size={540} rotation={80} shouldSpin spinDuration="5s">
            <Image
              src={Earth}
              alt="Earth"
              className="bg-transparent size-[48px] "
            />
          </HeroOrbit>
        </HeroOrbit>
        <HeroOrbit size={672} rotation={160} shouldOrbit orbitDuration="34s">
          <Image
            src={Saturn}
            alt="Saturn"
            className="bg-transparent size-[96px] "
          />
        </HeroOrbit>
        <HeroOrbit
          size={958}
          rotation={150}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="5s"
        >
          <Image
            src={PlanetSystem}
            alt="PlanetSystem"
            className="bg-transparent size-[96px] "
          />
        </HeroOrbit>
        <HeroOrbit
          size={754}
          rotation={170}
          shouldOrbit
          orbitDuration="20s"
          shouldSpin
          spinDuration="160s"
        >
          <Image
            src={Satelite}
            alt="Satelite"
            className="bg-transparent size-[32px] "
          />
        </HeroOrbit>
        <HeroOrbit size={770} rotation={320} shouldOrbit orbitDuration="34s">
          <Image
            src={Uranus}
            alt="Uranus"
            className="bg-transparent size-[48px]"
          />
        </HeroOrbit>
        <HeroOrbit size={760} rotation={340} shouldPulse={true}>
          <Star className=" bg-transparent size-10 text-cyan-300/30" />
        </HeroOrbit>
        <HeroOrbit
          size={360}
          rotation={140}
          shouldPulse={true}
          shouldOrbit
          orbitDuration="100s"
        >
          <Star className=" bg-transparent size-7 text-cyan-300/80" />
        </HeroOrbit>
        <HeroOrbit size={460} rotation={140} shouldPulse={true}>
          <Star className=" bg-transparent size-15 text-cyan-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={820}
          rotation={310}
          shouldPulse={true}
          shouldOrbit
          orbitDuration="50s"
        >
          <Star className=" bg-transparent size-7 text-cyan-300/10" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={390} shouldPulse={true}>
          <Star className=" bg-transparent size-10 text-cyan-300/10" />
        </HeroOrbit>
        <HeroOrbit size={690} rotation={40} shouldOrbit orbitDuration="80s">
          <Star className=" bg-transparent size-12 text-cyan-300/15" />
        </HeroOrbit>
        <HeroOrbit size={760} rotation={120} shouldOrbit orbitDuration="60s">
          <Star className=" bg-transparent size-5 text-cyan-300/20" />
        </HeroOrbit>
        <HeroOrbit size={750} rotation={-80} shouldOrbit orbitDuration="120s">
          <Star className=" bg-transparent size-10 text-cyan-300/15" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={-100}>
          <Star className=" bg-transparent size-12 text-cyan-300/20" />
        </HeroOrbit>
        <HeroOrbit size={610} rotation={-120} shouldOrbit orbitDuration="100s">
          <Star className=" bg-transparent size-5 text-cyan-300/15" />
        </HeroOrbit>
        <HeroOrbit size={592} rotation={-160} shouldOrbit orbitDuration="40s">
          <Star className=" bg-transparent size-10 text-cyan-300/10" />
        </HeroOrbit>
        <HeroOrbit size={820} rotation={140} shouldOrbit orbitDuration="90s">
          <Star className=" bg-transparent size-7 text-cyan-300/20" />
        </HeroOrbit>
        <HeroOrbit size={660} rotation={310} shouldOrbit orbitDuration="40s">
          <Star className=" bg-transparent size-15 text-cyan-300/20" />
        </HeroOrbit>
        <HeroOrbit size={840} rotation={-10} shouldOrbit orbitDuration="8s">
          <Star className=" bg-transparent size-7 text-cyan-300/15" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-220} shouldPulse={true}>
          <Star className=" bg-transparent size-10 text-cyan-300/10" />
        </HeroOrbit>
        <HeroOrbit size={790} rotation={310} shouldOrbit orbitDuration="40s">
          <Star className=" bg-transparent size-6 text-cyan-300/20" />
        </HeroOrbit>
        <HeroOrbit size={690} rotation={-240} shouldPulse={true}>
          <Star className=" bg-transparent size-5 text-cyan-300/20" />
        </HeroOrbit>
        <HeroOrbit size={760} rotation={-70} shouldOrbit orbitDuration="80s">
          <Star className=" bg-transparent size-7 text-cyan-300/20" />
        </HeroOrbit>
        <HeroOrbit size={812} rotation={-120} shouldPulse>
          <Star className=" bg-transparent size-10 text-cyan-300/10" />
        </HeroOrbit>
        <HeroOrbit size={940} rotation={120} shouldPulse={true}>
          <Star className=" bg-transparent size-5 text-cyan-300/10" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center gap-0.5">
          <Image
            src={memojiImage}
            alt="person peaking from behind laptop"
            className="size-[48px]"
          />

          <div className="bg-gray-700 border border-gray-500 px-4 py-2 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-cyan-500 size-2.5 rounded-full  relative">
              <div className="absolute inset-0 bg-cyan-500 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium cyan-500 ">
              Currently Available
            </div>
          </div>
          <div className="max-w-lg mx-auto">
            <h1 className="font-serif text-3xl md:text-5xl text-center mt-6 tracking-wide">
              Building exceptional user experiences
            </h1>
            <p className="mt-4 text-center text-white/70 md:text-lg">
              I specialize in designing and building exceptional full-stack
              websites with the use of the latest technology. Let your dream
              project be my canvas.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
            <button className=" card inline-flex items-center gap-2 border-2 border-cyan-300/80 px-6 h-12 rounded-xl">
              <span className="font-semibold">My Projects</span>
              <ArrowDown className="size-4" />
            </button>
            <button className="inline-flex items-center gap-2 border border-white bg-white px-6 text-gray-900 h-12 rounded-xl">
              <span className="bg-transparent">👋</span>

              <span className="font-semibold  text-gray-900 bg-transparent">
                Contact me
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
