import { useEffect, useState, CSSProperties, useRef } from "react";
import ah1 from "./heads/open-ah-1.png";
import ah2 from "./heads/open-ah-2.png";
import oh1 from "./heads/open-oh-1.png";
import oh2 from "./heads/open-oh-2.png";

const frameChangeInterval = 0.5; // seconds
const headFrames = [ah1, ah2, oh1, oh2];
const availableIndices = headFrames.length - 1;

interface Props {
  className?: string;
  style?: CSSProperties;
}
export function TalkingHead({ className = "", style }: Props) {
  const [frameIndex, setFrameIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const timeoutRef = useRef<number>();

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

    const id = window.setInterval(() => {
      const nextIndex = frameIndex < availableIndices ? frameIndex + 1 : 0;
      setFrameIndex(nextIndex);
    }, frameChangeInterval * 1000);

    return () => window.clearInterval(id);
  }, [frameIndex, isScrolling]);

  return (
    <div style={style} className={className || "w-20"}>
      <img src={headFrames[frameIndex]} alt="" className="w-full" />
    </div>
  );
}
