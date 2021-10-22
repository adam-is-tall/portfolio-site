import { CSSProperties } from "react";

interface Props {
  className?: string;
  style?: CSSProperties;
  text?: string;
}
export function Button(props: Props) {
  const { className = "", style, text = "" } = props;

  return (
    <div>
      <button type="button" className="block z-10 items-center px-md py-sm font-btn rounded transform transition hover:scale-105 text-white hover:text-black bg-royal hover:bg-coral focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-royal-light">
        {text}
      </button>
    </div>
  );
}
