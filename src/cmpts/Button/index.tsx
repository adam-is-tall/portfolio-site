import { CSSProperties } from "react";

interface Props {
  className?: string;
  style?: CSSProperties;
  text?: string;
}
export function Button(props: Props) {
  const { className = "", style, text = "" } = props;

  return (
    <button type="button" className="inline-flex items-center px-lg py-md border border-transparent font-btn rounded-full transform transition hover:-translate-y-2 text-white hover:text-royal bg-royal hover:bg-coral focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-royal-light">
      {text}
    </button>
  );
}
