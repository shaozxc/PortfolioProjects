import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const HeroOrbit = ({
  children,
  size,
  rotation,
  shouldOrbit = false,
  shouldSpin = false,
  spinDuration,
  orbitDuration,
  shouldPulse = false,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  shouldSpin?: boolean;
  shouldOrbit?: boolean;
  shouldPulse?: boolean;
  orbitDuration?: string;
  spinDuration?: string;
}>) => {
  return (
    <div className="bg-transparent absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className={twMerge(
          shouldOrbit === true && "animate-spin",
          shouldPulse === true &&
            "animate-pulse [animation-duration: 1s, animation-timing-function: ease-in-out, animation-iteration-count: infinite] [animation-duration: 2s, animation-timing-function"
        )}
        style={{
          animationDuration: orbitDuration,
        }}
      >
        <div
          className=" bg-transparent flex items-start justify-start"
          style={{
            transform: `rotate(${rotation}deg)`, // Rotation is transform
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          <div
            className={twMerge(shouldSpin === true && "animate-spin")}
            style={{
              animationDuration: spinDuration,
            }}
          >
            <div
              className=" bg-transparent  inline-flex"
              style={{
                transform: `rotate(${rotation * -1}deg)`, // Rotation
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
