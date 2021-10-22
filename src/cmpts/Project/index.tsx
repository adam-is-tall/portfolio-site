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
      className="burbie z-20 fixed overflow-auto h-screen top-20 sm:top-0 sm:left-20 md:left-24 bg-white"
    >
      <div className={`text-center ${show ? "p-sm md:p-lg" : ""}`}>
        <h2 className="font-medium-buddy mb-sm">{title}</h2>
        <p className="font-tiny mb-sm">{caption}</p>
        <p className="font-base mb-sm">{description}</p>
      </div>
      <div className="text-center test" style={{backgroundImage: `url(${background})`, backgroundSize: 'contain', backgroundAttachment: "fixed"}}>
        {images.map((url) => (
          <div className="bg-white bg-opacity-20"><img className="" src={url} /></div>
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
