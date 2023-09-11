import { useEffect, useState, CSSProperties, useRef } from "react";
import ah1 from "../../assets/img/heads/open-ah-1.png";
import ah2 from "../../assets/img/heads/open-ah-2.png";
import oh1 from "../../assets/img/heads/open-oh-1.png";
import oh2 from "../../assets/img/heads/open-oh-2.png";
import r from "../../assets/img/heads/open-r.png";
import rest from "../../assets/img/heads/new/head-rest.png";
import ah from "../../assets/img/heads/new/head-ah.png";

const frameChangeInterval = 0.5; // seconds
const headFrames = [rest, ah];

interface Props {
  className?: string;
  style?: CSSProperties;
  /**
   * @default "left"
   */
  direction?: "right" | "left";
  frames?: string[]
}
export function TalkingHead(props: Props) {
  const { className = "", style, direction = "left", frames = headFrames } = props;
  const [frameIndex, setFrameIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const timeoutRef = useRef<number>();

  const availableIndices = frames.length - 1;
  const getNextIndex = (index: number) =>
    index < availableIndices ? index + 1 : 0;

  useEffect(() => {
    function handleScrollEvent(e: Event) {
      setIsScrolling(true);

      timeoutRef.current && window.clearTimeout(timeoutRef.current);

      timeoutRef.current = window.setTimeout(() => {
        setIsScrolling(false);
      }, 200);
    }

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  useEffect(() => {
    if (!isScrolling) return;

    let hasExecuted = false;
    if (!hasExecuted) {
      setFrameIndex(getNextIndex);
    }
    hasExecuted = true;

    const id = window.setInterval(
      () => setFrameIndex(getNextIndex),
      frameChangeInterval * 1000
    );

    return () => window.clearInterval(id);
  }, [isScrolling]);
  const xScale = direction === "left" ? -1 : 1;

  return (
    <div style={style} className={className || "w-20"}>
      <img
        style={{ transform: `scaleX(${xScale})` }}
        src={frames[frameIndex]}
        alt="Adam's Silly Face"
        className="w-full"
      />
    </div>
  );
}
