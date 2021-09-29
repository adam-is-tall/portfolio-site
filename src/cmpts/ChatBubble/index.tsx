import React, { CSSProperties, ReactNode } from "react";
import { ReactComponent as ArrowLeft } from "./speech-arrows/speech-arrow-1.svg";
// import { ReactComponent as ArrowRight } from "./speech-arrows/speech-arrow-2.svg";
import { ReactComponent as ArrowRight } from "./speech-arrows/speech-arrow-4.svg";
import { TalkingHead } from "../TalkingHead";

interface Props {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  /**
   * @default "left"
   */
  direction?: "left" | "right";
  color?: "dark" | "light";
  frames?: string[];
}
export function ChatBubble(props: Props) {
  const { children = null, style, className = "", direction = "left", color = "light", frames } = props;
  const left = direction === "left";
  const right = direction === "right";
  const dark = color === "dark";
  const light = color === "light";
  return (
    <div style={style} className={`p-md lg:p-lg text-left relative ${className} ${dark ? 'bg-magenta-light' : 'bg-coral-light'}`}>
      <p className="text-black font-speech">{children}</p>
      {left && (
        <div className="absolute" style={{ bottom: -60, left: 180 }}>
          <ArrowLeft className="w-20 md:w-32 relative -top-3 md:-top-0" />
          <TalkingHead
            direction="left"
            frames={frames}
            className="absolute transform -translate-y-1/2 -translate-x-full w-32 lg:w-48"
          />
        </div>
      )}
      {right && (
        <div className="absolute" style={{ bottom: -60, right: 180 }}>
          <ArrowRight className="w-20 md:w-32 -top-3 md:-top-0" />
          <TalkingHead
            direction="right"
            frames={frames}
            className="absolute transform -translate-y-1/2 translate-x-full lg:translate-x-3/4 w-32 lg:w-48"
          />
        </div>
      )}
    </div>
  );
}
