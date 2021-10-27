import { Button } from "../Button";

interface Props {
  title: string;
  description: string;
  images: string[];
  background: string;
  caption: string;
  onClose: () => void;
}

export function Project(props: Props) {
  const { title = "", description, caption, images = [], onClose, background } = props;
  const show = !!title;

  return (
    <div
      style={{
        opacity: show ? 1 : 0,
        marginTop: show ? 0 : -200,
        transitionProperty: "opacity, margin-top",
        transitionDuration: "500ms",
        transitionTimingFunction: "ease-out",
      }}
      className="burbie z-20 fixed overflow-auto h-screen pt-20 sm:pt-0 sm:top-0 sm:left-20 md:left-24 bg-white"
    >
      <div className={`text-center ${show ? "p-md md:p-lg" : ""}`}>
        <h2 className="font-medium-buddy mb-sm">{title}</h2>
        <p className="font-skills text-royal mb-sm">{caption}</p>
        <p className="font-base mb-sm">{description}</p>
      </div>
      <div className="text-center pb-sm">
        {images.map((url) => (
          <div className="bg-gray.light bg-opacity-20 p-sm mb-sm"><img className="" src={url} alt="project image"/></div>
        ))}
      </div>
      {/* <div
        style={{ cursor: "pointer", display: show ? "block" : "none" }}
        className="w-full h-24 flex justify-center"
        onClick={onClose}
      >
        <Button className="m-auto z-10" text="Close" />
      </div> */}
    </div>
  );
}
