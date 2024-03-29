import React, { useState } from "react";
import { ReactComponent as LogoVert } from "./assets/img/AH2-vert.svg";
import { ReactComponent as LogoSide } from "./assets/img/AH2-horiz.svg";
import { ReactComponent as DesignSystem } from "./assets/img/design-system.svg";
import { ReactComponent as DesignInterfaceTop } from "./assets/img/design-interface-top.svg";
import { ReactComponent as DesignInterfaceBottom } from "./assets/img/design-interface-bottom.svg";
import { ReactComponent as DesignPlanning } from "./assets/img/design-planning.svg";
import { ReactComponent as SpotCollabLofi } from "./assets/img/collab-lofi.svg";
import { ReactComponent as SpotCollabHifi } from "./assets/img/collab-hifi.svg";
import Omni from "./assets/img/p-thumbs/Omni.jpg";
import GoNoodle from "./assets/img/p-thumbs/GoNoodle.jpg";
import StrandRx from "./assets/img/p-thumbs/StrandRx.png";
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
import SignalT from "./assets/img/p-thumb-vert-sig.jpg";
import Signal0 from "./assets/img/p-signal.jpg";
import Signal1 from "./assets/img/p-signal-1.jpg";
import Signal2 from "./assets/img/p-signal-2.jpg";
import Signal3 from "./assets/img/p-signal-3.jpg";
import Signal4 from "./assets/img/p-signal-4.jpg";
import GnT from "./assets/img/p-thumb-vert-gn.jpg";
import Gn2_1 from "./assets/img/p-gn2-1.jpg";
import Gn2_2 from "./assets/img/p-gn2-figjam-screenshot.png";
import Gn0 from "./assets/img/p-gn.jpg";
import Gn1 from "./assets/img/p-gn-system.jpg";
import Gn2 from "./assets/img/p-gn-screens.jpg";
import Gn3 from "./assets/img/p-gn-components.jpg";
import OmniT from "./assets/img/p-thumb-vert-omni.jpg";
import Omni1 from "./assets/img/omnisys-journey.png";
import sketchBigCircle from "./assets/img/sketch-bigcircle.png";
import sketchCircle from "./assets/img/sketch-circle.png";
import sketchArrow from "./assets/img/sketch-down-arrow.png";
import sketchShow from "./assets/img/sketch-showwork.png";
import sketchCTA from "./assets/img/cta-sketch.png";
import { Button } from "./cmpts/Button";
import { IconButton } from "./cmpts/IconButton";
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
import rs from "./assets/img/heads/open-r-stache.png";
import closed from "./assets/img/heads/closed-2.png";
import distracted from "./assets/img/heads/distracted.png";

import rest from "./assets/img/heads/new/head-rest.png";
import ah from "./assets/img/heads/new/head-ah.png";
import w from "./assets/img/heads/new/head-w.png";
import sh from "./assets/img/heads/new/head-sh.png";
import o from "./assets/img/heads/new/head-o.png";
import mm from "./assets/img/heads/new/head-mm.png";
import eh from "./assets/img/heads/new/head-eh.png";
import ff from "./assets/img/heads/new/head-ff.png";
import smile from "./assets/img/heads/new/head-smile.png";
import quiet from "./assets/img/heads/new/head-muted.png";

const adamHeads4 = [r, oh2, ah2, ah1];
const adamHeads1 = [rest, w, ah, ff, mm];
const adamHeads2 = [sh, o, w, eh, rest, smile];
const adamHeads3 = [sh, w, rest, smile];

type ProjectNames = "goNoodleAgain";

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
      <div className={`z-50 fixed w-full sm:w-24 flex sm:flex-col items-center justify-between h-20 sm:h-screen p-sm sm:border-r-0 transition-colors transform duration-500 ease-in-out ${showCloseAction ? "border-gray bg-gray-light" : "border-gray bg-gray-light"}`}>
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
                display: "none",
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
          <h1 className="font-little-buddy-sans-bold text-center">Adam Howard</h1>
          <img src={SketchLine} alt="sketched line" />
          <h1 className="font-little-buddy-sans text-center py-xs">Product Designer</h1>
        </div>
        
        {/* <a className="tiny-button font-tiny text-center py-xs" href="mailto:howard.adamp@gmail.com?subject=Hi, Adam!">Contact</a> */}
        <div className="w-1/8 sm:w-full my-sm">
          <IconButton text="Email Adam" email="howard.adamp@gmail.com?subject=Hi, Adam!"/>
        </div>
      </div>
      {/* Page Container */}
      <div className={`container relative mx-auto transition delay-500 ${showCloseAction ? "opacity-0" : "opacity-100"}`}>
        <div className="relative flex flex-col items-center space-y-sm p-md py-lg sm:p-lg md:p-xl lg:px-2xl lg:py-xl lg:pt-lg mt-md md:mt-0 text-center">
          <img className="hidden sm:block absolute -right-0 md:-right-1/4 -top-0 w-1/3" src={sketchCircle} alt="sketched circle"/>
          <ChatBubble direction="right" frames={adamHeads1}>
          Hello! I'm a product designer who leads confidently in strategy and visual design craft. I believe design is essential in creating solutions that help people in a way that's good for business.
          </ChatBubble>
          <img className="hidden sm:block absolute left-1/3 -bottom-6 w-6 md:w-10" src={sketchArrow} alt="sketched arrow"/>
        </div>
        <div className="flex flex-col items-center p-lg sm:py-lg sm:p-md md:p-lg lg:p-2xl text-center">
          <p className="font-speech font-quote lg:px-md">
          "Creativity is not a talent, it is a way of operating."
          </p>
          <p className="font-tiny-buddy mt-sm lg:px-md">
          - John Cleese
          </p> 
        </div>
        {/* <div className="flex flex-col items-center p-md sm:py-lg sm:p-md md:p-lg lg:p-2xl lg:pb-lg lg:pt-md text-left">
          <p className="font-speech">
          I'm fascinated by the creative process - how ideas become reality. I'm also fully aware that I'm not making products for myself and my own artistic expression. We have to find the balance between what the business needs and what the users want. Thats what makes product work so exciting and what gets me out of bed. 
          </p>
        </div> */}

        <div className="flex flex-col items-center p-md py-lg sm:p-lg md:p-xl lg:p-2xl text-center">
          {/* <ChatBubble className="mb-lg" frames={adamHeads2}>I'm fascinated by the creative process - turning ideas into reality. I'm fully aware that I'm not making products for my own artistic expression. I work to find the balance between what the business wants and what the users need.</ChatBubble> */}
          <ChatBubble className="mb-lg" frames={adamHeads2}>I want to help engineering-led organizations get better at User-Centered Design. Let's talk about that!</ChatBubble>
        </div>
        
        {/* <div className="flex flex-col items-center p-md py-lg sm:p-lg md:p-xl lg:p-2xl text-center relative">
          <ChatBubble direction="right" className="mb-lg" frames={adamHeads3}>These work samples represent a few projects I've done, but I believe my best work is always ahead of me.</ChatBubble>
          <img className="absolute left-1/2 -bottom-6 w-6 md:w-10" src={sketchArrow} alt="sketched arrow"/>
        </div> */}

        <div className="relative flex flex-col p-md sm:p-lg text-center m-sm rounded-md">
          <a target="_blank" href="https://www.figma.com/proto/WXjLZPh850XB86Ah9fhCJB/adam-portfolio?page-id=1175%3A15974&type=design&node-id=1180-17017&viewport=928%2C1321%2C1.1&t=OYDICEZf5lxCeZWk-1&scaling=scale-down&starting-point-node-id=1175%3A15996&mode=design" className="">
            <h2 className="font-medium-buddy mb-sm text-royal">Enhanced Flows for Provider&nbsp;Pros</h2>
            <img
            style={{ cursor: "pointer", margin: "auto" }}
            src={StrandRx}
            className="transition duration-700 ease-in-out transform w-full md:w-2/3 hover:scale-105"
            alt="Low fidelity prototype of pharmacy communicating with patient"
          />
          </a>
          <div className="flex flex-col md:flex-row items-center space-x-sm mt-sm justify-center">
            <p className="font-skills text-black mb-sm">Industry: Healthcare</p>
            <p className="font-skills text-black mb-sm">Skills: UX/UI Design, Research</p>
          </div>
        </div>
        <div className="relative flex flex-col p-md sm:p-lg text-center m-sm rounded-md">
          <a target="_blank" href="https://www.figma.com/proto/WXjLZPh850XB86Ah9fhCJB/Adam-Howard---Portfolio?page-id=1175%3A15974&node-id=1180-16806&starting-point-node-id=1175%3A15996&scaling=scale-down&mode=design&t=fd6CShAJxxkgrm4y-1" className="">
            <h2 className="font-medium-buddy mb-sm text-royal">Designing Features for Kids and Teachers</h2>
            <img
            style={{ cursor: "pointer", margin: "auto" }}
            src={GoNoodle}
            className="transition duration-700 ease-in-out transform w-full md:w-2/3 hover:scale-105"
            alt="Image of a screen where teachers can select their champs"
          />
          </a>
          <div className="flex flex-col md:flex-row items-center space-x-sm mt-sm justify-center">
            <p className="font-skills text-black mb-sm">Industry: Education</p>
            <p className="font-skills text-black mb-sm">Skills: Discovery, UX/UI Design, Research</p>
          </div>
        </div>
        <div className="relative flex flex-col p-md sm:p-lg text-center m-sm rounded-md">
          <a target="_blank" href="https://www.figma.com/proto/WXjLZPh850XB86Ah9fhCJB/Adam-Howard---Portfolio?page-id=1175%3A15974&node-id=1180-16790&starting-point-node-id=1175%3A15996&scaling=scale-down&mode=design&t=fd6CShAJxxkgrm4y-1" className="">
            <h2 className="font-medium-buddy mb-sm text-royal">Improving Patient Care for Retail Pharmacy</h2>
            <img
            style={{ cursor: "pointer", margin: "auto" }}
            src={Omni}
            className="transition duration-700 ease-in-out transform w-full md:w-2/3 hover:scale-105"
            alt="Image of an EHR Application Design"
          />
          </a>
          <div className="flex flex-col md:flex-row items-center space-x-sm mt-sm justify-center">
            <p className="font-skills text-black mb-sm">Industry: Healthcare</p>
            <p className="font-skills text-black mb-sm">Skills: Facilitation, Discovery</p>
          </div>
        </div>
        
        <div className="flex flex-col items-center p-md">
          <img
          src={quiet}
          alt="Adam's Silly Face"
          className="w-1/6"
          />
        </div>

        <div className="p-md sm:py-lg sm:p-md md:p-lg lg:p-2xl lg:pb-lg lg:pt-md text-left">
          <p className="font-speech">
          "No matter what daunting challenge confronted us, Adam was always able to stretch to adapt and overcome and have fun throughout the process. I've been inspired by his unique perspective and the standard of excellence he continually pursues."
          </p>
          <br/>
          <em>Head of Design</em>
        </div>
        <div className="p-md sm:py-lg sm:p-md md:p-lg lg:p-2xl lg:pb-lg lg:pt-md text-left">
          <p className="font-speech">
          "Behind every great design is purposeful intent, and Adam has a talent for understanding and driving at the intent of the end-consumer, and then translating that into beautifully curated user experiences and interfaces. He communicates well, provides honest feedback, and is a fast learner / worker. His collaboration skills are also a strength, as he has demonstrated successful projects working with engineers and developers."
          </p>
          <br/>
          <em>Lead Front-End Engineer</em>
        </div>
        <div className="p-md sm:py-lg sm:p-md md:p-lg lg:p-2xl lg:pb-lg lg:pt-md text-left">
          <p className="font-speech">
          "Adam is such a joy to work with! At GoNoodle he's jumped in quickly and proved invaluable toward getting an MVP across the finish line on time, then seamlessly transitioned into cleaning up our design system for scale, and leading collaboration to improve some complex internal product workflows."
          </p>
          <br/>
          <em>Head of Design</em>
        </div>
        <div className="p-md sm:py-lg sm:p-md md:p-lg lg:p-2xl lg:pb-lg lg:pt-md text-left">
          <p className="font-speech">
          "The collaboration and guidance you have provided over the last 2+ years has really enhanced and elevated my thought process, attention to detail and reasoning, and overall quality of work. You are a fantastic designer, but more importantly you have a super inquisitive mind and always strive to find the best solution."
          </p>
          <br/>
          <em>Junior Designer</em>
        </div>
        <div className="p-md sm:py-lg sm:p-md md:p-lg lg:p-2xl lg:pb-lg lg:pt-md text-left">
          <p className="font-speech">
          "You've always been very patient and helpful, and I appreciate your willingness to teach. The thing I will miss most about working with you is your uncanny ability to burst into song at the drop of a single word that inspires you."
          </p>
          <br/>
          <em>Delivery Manager</em>
        </div>
        <div className="p-md sm:py-lg sm:p-md md:p-lg lg:p-2xl lg:pb-lg lg:pt-md text-left">
          <p className="font-speech">
          "Adam's attitude and aptitude for learning new skills is rare, and makes him an invaluable asset to any team."
          </p>
          <br/>
          <em>Product Manager</em>
        </div>
        <div className="p-md sm:py-lg sm:p-md md:p-lg lg:p-2xl lg:pb-lg lg:pt-md text-left">
          <p className="font-speech">
          "I loved working with Adam so much, that I asked him if he would consider working with me on a project to increase diversity in Nashville's tech scene and he has again done remarkable work with his approach and respect to the UX and design disciplines."
          </p>
          <br/>
          <em>Product and Tech Leader</em>
        </div>

        

        <DesignSystem className="w-full md:mt-lg" />


        {/* <iframe style={{"border": "1px solid rgba(0, 0, 0, 0.1);"}} width="100%" height="750" src="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Ffile%2FCdTDvUhRE0QYEQ0oWBSa5K%2FBank-of-Dad%3Fnode-id%3D268%253A624"></iframe> */}
        <div className="grid grid-flow-row grid-cols-3 grid-rows-1 gap-sm p-sm text-center">
          {/* <img
            style={{ cursor: "pointer", filter: "saturate(0)" }}
            src={Bball1}
            className="transition duration-700 ease-in-out transform hover:scale-95"
            onClick={() => setProjectName("headGame")}
            alt="Sports + Mindfullness for Young Athletes"
          /> */}
          
          {/* <img
            style={{ cursor: "pointer", filter: "saturate(0)"}}
            src={GnT}
            className="transition duration-700 ease-in-out transform scale-95 hover:scale-100"
            onClick={() => setProjectName("goNoodle")}
            alt="Design System for GoNoodle"
          /> */}
          {/* <img
            style={{ cursor: "pointer"}}
            src={GnT}
            className="transition duration-700 ease-in-out transform scale-95 hover:scale-100 sm:p-sm"
            onClick={() => setProjectName("goNoodleAgain")}
            alt="Understanding Classroom Moments"
          /> */}
          
        </div>
        {/* <div className="relative p-md py-lg sm:p-lg md:p-lg lg:p-2xl">
          <ChatBubble frames={adamHeads3} className="mb-lg">
          Hey! Thanks again for scrolling all the way down here!   
          </ChatBubble>
          <div className="flex flex-col sm:flex-row items-center justify-center w-full space-y-sm sm:space-y-0 sm:space-x-sm pt-xl mt-sm mb-xl">
            <img className="absolute object-center w-full md:w-1/2 transform" src={sketchCTA} alt="Sketched Circle"/>
            <Button email="howard.adamp@gmail.com?subject=Hi, Adam!" className="mt-2xl z-10" text="Get in Touch w/ Adam" />
          </div>
        </div> */}
        {/* <div className="flex flex-col items-center p-md py-lg sm:p-lg md:p-xl lg:p-xl text-center">
          <ChatBubble className="mb-lg" frames={adamHeads3}>If you made it this far (and we're not related) we should definitely talk!</ChatBubble>
        </div> */}
        <div className="flex flex-col items-center p-md sm:py-lg sm:p-md md:p-lg lg:p-2xl lg:pb-lg lg:pt-xl text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center w-full space-y-sm sm:space-y-0 sm:space-x-sm sm:pt-xl mt-sm mb-xl">
            <img className="hidden sm:block absolute object-center w-full md:w-1/2 transform" src={sketchCTA} alt="Sketched Circle"/>
            <Button email="howard.adamp@gmail.com?subject=Hi, Adam!" className="mt-2xl z-10" text="Email Adam" />
            <a className="block z-10 items-center px-md py-sm font-btn rounded transform transition hover:scale-105 text-white hover:text-white bg-royal hover:bg-royal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-royal-light" href="https://calendly.com/adam_howard/meet-adam">Schedule a Meeting</a>
          </div>
          {/* <DesignInterfaceTop className="w-full mt-md" /> */}
        </div>
        <div className="relative">
          {/* <img className="ml-auto" src={shapeStackBottom} alt="stack of shapes along the bottom of page"/> */}
        </div>
        
      </div>
      
      <Project
        title={project?.title}
        description={project?.description}
        images={project?.images}
        background={project?.background}
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
  background: string;
  url?: string;
}
type Projects = { [key in ProjectNames]: TProject };
var projects: Projects = {
  // headGame: {
  //   title: "Sports + Mindfulness for Young Athletes",
  //   description:
  //     "These are some mixed-fidelity prototypes for a service that combines mindfulness training with basketball. These were inspired by interviews with Hall of Famer Bill Walton. His journey and approach to mindfulness inspired the Empathy stage of Design Thinking. I spent a few cycles generating ideas and protoyping.",
  //   images: [Bball1, Bball2],
  //   background: BankBg,
  //   caption: "Ideation, Mixed-Fidelity Prototypes, In Progress",
  //   url: "http://www.google.com",
  // },
  // homeBank: {
  //   title: "Can you teach a kid to grow their money?",
  //   description:
  //     "As a parent, I want my child to view money as a practical tool for improving their lives. To that end, I wanted to explore a product that borrows from traditional chore/reward model while helping parents teach their children how to grow their money over time and give back.",
  //   images: [BankL],
  //   background: "",
  //   caption: "Ideation, Hi-Fidelity Prototypes, Work-In-Progress",
  //   url: "https://glimmer-glitter-2bd.notion.site/Rags-to-Riches-cf77cbcdf22946a8bd5f36a7cacf27ba",
  // },
  // miscApps: {
  //   title: "Zero to One",
  //   description:
  //     "I have deep experience designing 0 to 1 applications for Startups and Large Companies. As the lead UX Designer at an agency for over 10 years, I developed my ability to ask the right questions to understand context and to work well with everyone from users, to stakeholders, to engineers.",
  //   images: [Signal3, Signal0, Signal2, Signal1],
  //   background: "",
  //   caption: "Discovery, Prototyping, UI Design, UX Design, User Testing",
  //   url: "https://glimmer-glitter-2bd.notion.site/Quantity-and-quality-76acb68d11ec4f47bcce3d93b52ec935",
  // },
  goNoodleAgain: {
    title: "Enhancing Features during a Migration",
    description:
      "Consumer brand in the School space. ",
    images: [Gn2_2],
    background: "",
    url: "https://glimmer-glitter-2bd.notion.site/Improving-a-much-loved-feature-ebf55c7869ae49daad93063e92b338a4",
  },
  // goNoodle: {
  //   title: "GoNoodle.com Redesign",
  //   description:
  //     "I worked with Product Design and Engineering to launch a new product and updated design system. I worked in and maintained the Figma library, and contributed to the React codebase using Tailwind and Storybook",
  //   images: [Gn0, Gn2],
  //   background: "",
  //   caption: "Design System Contribution and Documentation, Interface Design, CSS Implementation",
  //   url: "https://glimmer-glitter-2bd.notion.site/GoNoodle-2dea30ccaa5347209cb9a876b212449a",
  // },
};
