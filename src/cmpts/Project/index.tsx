interface Props {
  title: string;
  description: string;
  images: string[];
  captions: string[];
  onClose: () => void;
}

export function Project(props: Props) {
  const { title = "", description, images = [], onClose } = props;
  const show = !!title;

  return (
    <div
      style={{
        opacity: show ? 1 : 0,
        marginTop: show ? 0 : -200,
        transitionProperty: "opacity, margin-top",
        transitionDuration: "200ms",
        transitionTimingFunction: "ease-out",
      }}
      className="burbie z-20 fixed overflow-auto h-screen top-20 sm:top-0 sm:left-20 md:left-24 bg-white"
    >
      <div className="p-sm md:p-lg text-center">
        <h2 className="font-medium-buddy mb-sm">{title}</h2>
        <p className="font-tiny mb-sm">Planning | Interface Design</p>
        <p className="font-base mb-sm">{description}</p>
      </div>
      <div className="text-center">
        {images.map((url) => (
          <img className="border-b-2 border-white" src={url} />
        ))}
      </div>
      <div
        style={{ cursor: "pointer" }}
        className="w-full h-24 bg-magenta"
        onClick={onClose}
      ></div>
    </div>
  );
}