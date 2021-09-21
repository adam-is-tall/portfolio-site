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
      <button type="button" className="block items-center px-md py-sm border-royal border-2 font-btn rounded-full transform transition hover:-translate-y-2 text-royal hover:text-white bg-white hover:bg-royal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-royal-light">
        {text}
      </button>
    </div>
  );
}
