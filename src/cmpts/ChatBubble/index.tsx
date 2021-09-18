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
export default function ChatBubble(props: Props) {
  const { children = null, style, className = "", direction = "left" } = props;
  const left = direction === "left";
  const right = direction === "right";
  return (
    <div style={style} className={`bg-coral-light p-lg relative ${className}`}>
      <p className="text-black font-speech">{children}</p>
      {left && (
        <div className="absolute" style={{ bottom: -80, left: 180 }}>
          <ArrowLeft style={{ width: 150 }} />
          <TalkingHead
            direction="left"
            className="absolute"
            style={{ left: -180, bottom: -80, width: 170 }}
          />
        </div>
      )}
      {right && (
        <div className="absolute" style={{ bottom: -80, left: 180 }}>
          <ArrowLeft style={{ width: 150 }} />
          <TalkingHead
            direction="right"
            className="absolute"
            style={{ left: -180, bottom: -80, width: 170 }}
          />
        </div>
      )}
    </div>
  );
}
