import React, { useState } from "react";
import { ReactComponent as LogoVert } from "./assets/img/AH-vert.svg";
import { ReactComponent as LogoHoriz } from "./assets/img/AH-horiz.svg";
import { ReactComponent as LogoSide } from "./assets/img/AH-sidebyside.svg";
import { ReactComponent as DesignSystem } from "./assets/img/design-system.svg";
import { ReactComponent as DesignInterfaceTop } from "./assets/img/design-interface-top.svg";
import { ReactComponent as DesignInterfaceBottom } from "./assets/img/design-interface-bottom.svg";
import { ReactComponent as DesignPlanning } from "./assets/img/design-planning.svg";
import Bball2 from "./assets/img/p-mindfullness-1.jpg";
import Bball1 from "./assets/img/p-mindfullness.jpg";
import Portfolio3 from "./assets/img/p-mya.jpg";
import Portfolio4 from "./assets/img/p-bod-2.png";
import BankBg from "./assets/img/p-bod-bg.jpg";
import BankT from "./assets/img/p-bod-thumb.png";
import BankL from "./assets/img/p-bod-latest.png";
import Bank0 from "./assets/img/p-bod-0.jpg";
import Bank1 from "./assets/img/p-bod-1.png";
import Bank2 from "./assets/img/p-bod-2.png";
import Bank3 from "./assets/img/p-bod-3.png";
import Signal0 from "./assets/img/p-signal.jpg";
import Signal1 from "./assets/img/p-signal-1.jpg";
import Signal2 from "./assets/img/p-signal-2.jpg";
import Signal3 from "./assets/img/p-signal-3.jpg";
import GnT from "./assets/img/p-gn-thumb.jpg";
import Gn0 from "./assets/img/p-gn.jpg";
import Gn1 from "./assets/img/p-gn-system.jpg";
import Gn2 from "./assets/img/p-gn-screens.jpg";
import Gn3 from "./assets/img/p-gn-components.jpg";
import sketchBigCircle from "./assets/img/sketch-bigcircle.png";
import sketchCircle from "./assets/img/sketch-circle.png";
import sketchArrow from "./assets/img/sketch-down-arrow.png";
import sketchShow from "./assets/img/sketch-showwork.png";
import { Button } from "./cmpts/Button";
import { Project } from "./cmpts/Project";
import { ChatBubble } from "./cmpts/ChatBubble";

import SketchLine from "./assets/img/sketch-line.png";
import shapeStackBottom from "./assets/img/shapes-bottom.svg";
import shapeStack2 from "./assets/img/shape-group2.svg";
import shapeStack3 from "./assets/img/shape-group3.svg";
import ah1 from "./assets/img/heads/open-ah-1.png";
import ah2 from "./assets/img/heads/open-ah-2.png";
import oh1 from "./assets/img/heads/open-oh-1.png";
import oh2 from "./assets/img/heads/open-oh-2.png";
import r from "./assets/img/heads/open-r.png";
import closed from "./assets/img/heads/closed-2.png";
import distracted from "./assets/img/heads/distracted.png";

const adamHeads1 = [ah1, ah2, oh1, r];
const adamHeads2 = [oh1 , ah2, ah1];
const adamHeads3 = [oh2, ah2, r, ah1];

type ProjectNames = "headGame" | "homeBank" | "miscApps" | "goNoodle";

export default function App() {
  const [projectName, setProjectName] = useState<ProjectNames | null>(null);
  const project = projects[projectName as ProjectNames];
  const showCloseAction = !!project?.title;
  var projectIsOpen = !!project?.title;
  function closeProject() {
    setProjectName(null);
    console.log("projectIsOpen: " + projectIsOpen)
  }

  return (
    <div className="flex bg-repeat dot-bg overflow-hidden">
      {/* Left Nav */}
      <div className="hidden sm:block sm:w-20 md:w-24 bg-coral"></div>
      <div className={`z-50 fixed w-full sm:w-20 md:w-24 flex sm:flex-col items-center justify-between h-20 sm:h-screen p-sm sm:border-r-2 transition-colors transform duration-500 ease-in-out ${showCloseAction ? "border-gray bg-gray-light" : "border-aqua bg-aqua-light"}`}>
      {/* <div className="z-10 fixed w-full sm:w-20 md:w-24 flex sm:flex-col items-center justify-between h-20 sm:h-screen p-sm sm:border-r-2 border-aqua bg-aqua-light"> */}
        <div id="logo" className="flex flex-row sm:flex-col">
          <div className="">
            <svg 
              style={{
                cursor: "pointer",
                height: showCloseAction ? undefined : 0,
                width: showCloseAction ? undefined : 0,
                transitionProperty: "all",
                transitionDuration: "500ms",
                transitionTimingFunction: "ease-out",
              }}
              className="w-16 sm:w-full sm:h-20 mr-sm sm:ml-0 px-sm self-center"
              onClick={closeProject} width="55" height="48" viewBox="0 0 55 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M53 24L4 24" stroke="#333333" stroke-width="4" stroke-linecap="round"/>
              <path d="M23 46L2.42184 25.0364C2.28811 24.9004 2.18202 24.7388 2.10964 24.561C2.03726 24.3832 2 24.1925 2 24C2 23.8075 2.03726 23.6168 2.10964 23.439C2.18202 23.2612 2.28811 23.0996 2.42184 22.9636L23 2" stroke="#333333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>  
          </div>
          <LogoVert className={`w-full ${projectIsOpen ? "hidden" : "hidden sm:block"}`}/>
          <LogoSide className={`w-10 sm:w-20 ${projectIsOpen ? "hidden" : "block sm:hidden"}`}/>
        </div>

        <div className="w-full hidden sm:block">
          <h1 className="font-little-buddy text-center">Adam Howard</h1>
          <img src={SketchLine} alt="sketched line" />
          <h1 className="font-tiny text-center py-xs">UX DESIGN</h1>
        </div>
        
        <a className="tiny-button font-tiny text-center py-xs" href="mailto:howard.adamp@gmail.com?subject=Hi, Adam!">Contact</a>
      </div>
      {/* Page Container */}
      <div className={`container relative mx-auto transition delay-500 ${showCloseAction ? "opacity-0" : "opacity-100"}`}>
        <div className="relative flex flex-col items-center space-y-sm p-md py-lg sm:p-lg md:p-xl lg:px-2xl lg:py-xl mt-md md:mt-0 text-center">
          <img className="absolute -right-0 md:-right-1/4 -top-0 w-1/3" src={sketchCircle} alt="sketched circle"/>
          <ChatBubble direction="right">
          Hello! I'm Adam. If you're looking for an experienced designer to help reach your business objectives, we should talk. I operate in the paradigm of <em>'designer as facilitator'</em>. I drive the end-to-end design process with cross-functional teams to create products for the&nbsp;people.  
          </ChatBubble>
          <img className="absolute left-1/3 -bottom-1/4 w-6 md:w-16" src={sketchArrow} alt="sketched arrow"/>
        </div>
        <div className="flex flex-col items-center p-md sm:py-lg sm:p-md md:p-lg lg:p-2xl text-center">
          <DesignPlanning className="w-full mb-xs md:mb-sm px-sm" />
          <h2 className="font-big-buddy mb-sm">Design Thinking</h2>
          <p className="font-speech lg:px-md">
            I bring creativity and idea generation to design projects. Quick, inexpensive, and disposable artifacts like sketches help serve as a catalyst for meaningful conversations between teams and stakeholders. 
          </p>
        </div>

        <div className="flex flex-col items-center p-md sm:py-lg sm:p-md md:p-lg lg:p-2xl text-center">
          <DesignInterfaceTop className="w-full mb-sm md:mb-md px-sm" />
          <h2 className="font-big-buddy mb-sm">Interface Design</h2>
          <p className="font-speech lg:px-md">
            I design experiences using human-centered design principles, creating distinct options that help facilitate meaningful discussion. I strive for an ego-free attitude where no work is precious and iteration is key to good work.
          </p>
          <DesignInterfaceBottom className="w-full mt-sm md:mt-md" />
        </div>

        <div className="relative flex flex-col items-center p-md sm:py-lg sm:p-md md:p-lg lg:p-2xl text-center">
          <DesignSystem className="w-full mb-xs md:mb-sm" />
          <h2 className="font-big-buddy mb-sm">Design Systems</h2>
          <p className="font-speech lg:px-md">
          I understand that design work isn't done once something has shipped. I enjoy working with engineering and design teams to make sure design systems are well documented, implemented, and maintained - using tools like Figma, Storybook, and Github.
          </p>
          <img className="absolute right-0 -bottom-16 w-32 md:w-60" src={sketchShow} alt="sketched arrow"/>
        </div>
        {/* <div className="flex flex-col items-center p-md py-lg sm:p-lg md:p-xl lg:p-2xl text-center">
          <ChatBubble className="mb-lg" frames={adamHeads2}>Take a look at some of my work!</ChatBubble>
        </div> */}
        {/* <iframe style={{"border": "1px solid rgba(0, 0, 0, 0.1);"}} width="100%" height="750" src="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Ffile%2FCdTDvUhRE0QYEQ0oWBSa5K%2FBank-of-Dad%3Fnode-id%3D268%253A624"></iframe> */}
        <div className="grid grid-flow-row grid-cols-1 grid-rows-2 gap-sm p-sm text-center pt-lg">
          {/* <img
            style={{ cursor: "pointer", filter: "saturate(0)" }}
            src={Bball1}
            className="transition duration-700 ease-in-out transform hover:scale-95"
            onClick={() => setProjectName("headGame")}
            alt="Sports + Mindfullness for Young Athletes"
          /> */}
          <img
            style={{ cursor: "pointer"}}
            src={GnT}
            className="transition duration-700 ease-in-out transform scale-95 hover:scale-100"
            onClick={() => setProjectName("goNoodle")}
            alt="Design System for GoNoodle"
          />
          <img
            style={{ cursor: "pointer"}}
            src={BankT}
            className="transition duration-700 ease-in-out transform scale-95 hover:scale-100"
            onClick={() => setProjectName("homeBank")}
            alt="Fintech for kids and families"
          />
          <img
            style={{ cursor: "pointer", filter: "saturate(0)" }}
            src={Signal3}
            className="transition duration-700 ease-in-out transform scale-95 hover:scale-100"
            onClick={() => setProjectName("miscApps")}
            alt="Misc App Designs"
          />
          
        </div>
        {/* <div className="relative p-md py-lg sm:p-lg md:p-lg lg:p-2xl">
          <ChatBubble className="mb-3xl">
            Right now, I’m looking to help a team make great products for kids
            and families. I am helping raise two kids and I care deeply about
            the challenges and opportunities to use technology to improve their
            lives. So if..
          </ChatBubble>
          <img className="absolute -left-32 top-0 w-2/12" src={shapeStack2} />
          <ChatBubble className="mb-3xl sm:w-3/4" direction="right">
            Dad, Can I have a 50 hundred dollars?
          </ChatBubble>
          <ChatBubble frames={adamHeads3} className="mb-3xl">
            I'm in the middle of talking with this nice person. Be patient and
            we'll talk about it soon.
          </ChatBubble>
        </div> */}
        <div className="relative p-md py-lg sm:p-lg md:p-lg lg:p-2xl">
          {/* <img className="absolute -right-52 top-0 w-2/12" src={shapeStack3} /> */}
          <ChatBubble frames={adamHeads3} className="mb-3xl">
            After 10+ years of working in agencies, I'm now working with product teams. I'd like to join a team that values design and truly cares about the people who use their products. If that sounds like you, please get in touch and let's talk about it!
          </ChatBubble>
          <div className="flex flex-col sm:flex-row items-center justify-center w-full space-y-sm sm:space-y-0 sm:space-x-sm pt-xl mt-xl">
            <img className="absolute object-center w-full md:w-1/2 transform transition hover:scale-105" src={sketchBigCircle} alt="Sketched Circle"/>
            <Button email="howard.adamp@gmail.com?subject=Hi, Adam!" className="mt-2xl z-10" text="Get in Touch" />
          </div>
          <p className="font-base px-md"></p>
        </div>
        <div className="relative">
          <img className="ml-auto" src={shapeStackBottom} alt="stack of shapes along the bottom of page"/>
        </div>
        
      </div>
      
      <Project
        title={project?.title}
        description={project?.description}
        images={project?.images}
        background={project?.background}
        caption={project?.caption}
        onClose={closeProject}
        url={project?.url}
      />
    </div>
  );
}

interface TProject {
  title: string;
  description: string;
  images: string[];
  caption: string;
  background: string;
  url?: string;
}
type Projects = { [key in ProjectNames]: TProject };
var projects: Projects = {
  headGame: {
    title: "Sports + Mindfulness for Young Athletes",
    description:
      "These are some mixed-fidelity prototypes for a service that combines mindfulness training with basketball. These were inspired by interviews with Hall of Famer Bill Walton. His journey and approach to mindfulness inspired the Empathy stage of Design Thinking. I spent a few cycles generating ideas and protoyping.",
    images: [Bball1, Bball2],
    background: BankBg,
    caption: "Ideation, Mixed-Fidelity Prototypes, In Progress",
    url: "http://www.google.com",
  },
  homeBank: {
    title: "Financial Literacy for Kids and Families",
    description:
      "As a parent, I want my child to view money unemotionally, so they can use it as a practical tool for improving their lives. To that end, I wanted to explore a product that borrows from traditional chore/reward model while helping parents teach their children how to grow their money over time and give back. I've spent a few cycles generating ideas, protoyping, and testing.",
    images: [BankL],
    background: "",
    caption: "Ideation, Hi-Fidelity Prototypes, Work-In-Progress",
    url: "https://glimmer-glitter-2bd.notion.site/Rags-to-Riches-cf77cbcdf22946a8bd5f36a7cacf27ba",
  },
  miscApps: {
    title: "30,000 Hours of Design Experience",
    description:
      "These slides represent the hundreds of projects that I worked on as a UX/UI Designer at Signal in Raleigh, NC. Notable clients include GE Power, John Deere, Mack Trucks, Blue Cross Blue Shield of N.C., Ingersoll Rand and Syngenta.",
    images: [Signal0, Signal1, Signal2, Signal3],
    background: "",
    caption: "Ideation/Sketching, Lo-Fidelity Prototypes, Hi-Fidelity Prototypes, User-Testing, CSS",
  },
  goNoodle: {
    title: "GoNoodle.com Redesign",
    description:
      "I worked with Product Design and Engineering to launch a new product and updated design system. I worked in and maintained the Figma library, and contributed to the React codebase using Tailwind and Storybook",
    images: [Gn0, Gn2],
    background: "",
    caption: "Design System Contribution and Documentation, Interface Design, CSS Implementation",
    url: "https://glimmer-glitter-2bd.notion.site/GoNoodle-2dea30ccaa5347209cb9a876b212449a",
  },
};
