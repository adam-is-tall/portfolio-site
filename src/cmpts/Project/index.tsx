import { Button } from "../Button";
import sketchCircle from "../assets/img/sketch-circle.png";
import sketchArrow from "../assets/img/sketch-down-arrow.png";
import { ChatBubble } from "../ChatBubble";

interface Props {
  title: string;
  description: string;
  images: string[];
  background: string;
  onClose: () => void;
  url?: string;
}

export function Project(props: Props) {
  const { title = "", description, images = [], onClose, background, url } = props;
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
        <p className="font-base mb-sm">{description}</p>
        { url && <a href={url} className="tiny-button" target="_blank" style={{"marginTop": "50px"}}>Read Full Case Study</a>}
      </div>
      <div className="text-center">
        {images.map((url) => (
          <div className="bg-gray.light bg-opacity-20 mt-sm border-gray border-b-2"><img className="" src={url} alt="project image"/></div>
        ))}
      </div>
      <div
        style={{ cursor: "pointer", display: show ? "block" : "none" }}
        className="w-full h-20 flex justify-center"
      >
        { url && 
          <div className="relative flex flex-col items-center space-y-sm p-md py-lg sm:p-lg md:p-xl lg:px-2xl lg:py-xl lg:pb-3xl mt-md md:mt-0 text-center">
          <ChatBubble direction="right">
            To see more about my process for this project, <a className="text-royal" href={url} target="_blank">take a look at this case study.</a>  
          </ChatBubble>
          </div>
          // <h3>To see more about my process for this project, <a href={url} target="_blank">read a case study here.</a></h3>
          
        }
      </div>
    </div>
  );
}
