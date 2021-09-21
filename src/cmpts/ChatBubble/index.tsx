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
}
export function ChatBubble(props: Props) {
  const { children = null, style, className = "", direction = "left" } = props;
  const left = direction === "left";
  const right = direction === "right";
  return (
    <div style={style} className={`bg-coral-light p-md lg:p-lg text-left relative ${className}`}>
      <p className="text-black font-speech">{children}</p>
      {left && (
        <div className="absolute" style={{ bottom: -60, left: 180 }}>
          <ArrowLeft className="w-28 sm:w-32" />
          <TalkingHead
            direction="left"
            className="absolute transform -translate-y-1/2 -translate-x-full w-32 lg:w-48"
          />
        </div>
      )}
      {right && (
        <div className="absolute" style={{ bottom: -60, right: 180 }}>
          <ArrowRight className="w-20 sm:w-32" />
          <TalkingHead
            direction="right"
            className="absolute transform -translate-y-1/2 translate-x-full lg:translate-x-3/4 w-32 lg:w-48"
          />
        </div>
      )}
    </div>
  );
}
