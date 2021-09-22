import React from "react";
import { ReactComponent as LogoVert } from './assets/img/AH-vert.svg';
import { ReactComponent as LogoHoriz } from './assets/img/AH-horiz.svg';
import { ReactComponent as LogoSide } from './assets/img/AH-sidebyside.svg';
import { ReactComponent as DesignSystem } from './assets/img/design-system.svg';
import { ReactComponent as DesignInterface } from './assets/img/design-interface.svg';
import { ReactComponent as DesignPlanning } from './assets/img/design-planning.svg';
import Portfolio1 from './assets/img/p-mindfullness.jpg';
import Portfolio2 from './assets/img/p-gn.jpg';
import Portfolio3 from './assets/img/p-mya.jpg';
import Portfolio4 from './assets/img/p-bod.jpg';
import Sketch1 from './assets/img/p-sketch1.jpg';
import Sketch2 from './assets/img/p-sketch2.jpg';
import Sketch3 from './assets/img/p-sketch3.jpg';
import Sketch4 from './assets/img/p-sketch4.jpg';
import { Button } from "./cmpts/Button";
import { Project } from "./cmpts/Project";
import { ChatBubble } from "./cmpts/ChatBubble";

import SketchLine from './assets/img/sketch-line.png';

export default function App() {
  return (
    <div className="flex">
      {/* Left Nav */}
      <div className="hidden sm:block sm:w-20 md:w-24 bg-coral"></div>
      <div className="z-10 fixed w-full sm:w-20 md:w-24 flex sm:flex-col items-center justify-between h-20 sm:h-screen p-sm sm:border-r-2 border-aqua bg-aqua-light">
       <div className="flex flex-row sm:flex-col">
        <div className="w-full h-auto sm:h-20 bg-magenta mr-sm sm:mb-sm sm:ml-0"></div>
        <LogoVert className="w-full hidden sm:block"/>
        <LogoSide className="w-20 block sm:hidden"/>
       </div>
       
       <div className="w-full hidden sm:block">
          <h1 className="font-little-buddy text-center">Adam Howard</h1>
          <img src={SketchLine}/>
          {/* <h1 className="font-tiny text-center py-xs">RESUME</h1> */}
          <h1 className="font-tiny text-center py-xs">UX DESIGN</h1>
       </div>
       <h1 className="font-tiny text-center py-xs">CONTACT</h1>
      </div> 
      {/* Page Container */}
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-sm p-md py-lg sm:p-lg md:p-2xl text-center">
          <ChatBubble direction="right">Hello! My name is Adam. I’ve designed things on the internet for 16 years. I should be tired of it by now, but I’m not! I still love the process and the result. Start scrolling to see what I can do.</ChatBubble>
        </div>
        <div className="flex flex-col items-center space-y-sm p-md sm:py-lg sm:p-lg md:p-2xl text-center">
          <DesignPlanning className="w-full mb-xs md:mb-sm"/>
          <h2 className="font-big-buddy">Design Planning</h2>
          <p className="font-base lg:px-xl">I believe this is a critical step in the design process. It’s quick, inexpensive, and disposable. It can provide the appropriate level of refinement for the current stage and provide a catalyst for conversations between stakeholders</p>
          {/* <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-3 grid-rows-1 gap-sm p-sm text-center">
            <img src={Sketch1}/>
            <img src={Sketch2}/>
            <img src={Sketch4}/>
          </div> */}
        </div>
        
        <div className="flex flex-col items-center space-y-sm p-md py-lg sm:p-lg md:p-2xl text-center">
          <DesignInterface className="w-full mb-xs md:mb-sm"/>
          <h2 className="font-big-buddy">Interface Design</h2>
          <p className="font-base lg:px-xl">I bring creativity into enumerating meaningfully distinct options from which to choose. From prototypes to high-fidelity designs.</p>
        </div>
        
        <div className="flex flex-col items-center space-y-sm p-md py-lg sm:p-lg md:p-2xl text-center">
          <DesignSystem className="w-full mb-xs md:mb-sm"/>
          <h2 className="font-big-buddy">Design Systems</h2>
          <p className="font-base lg:px-xl">Distilling designs down to elements and tokens that can be organized into reusable components that scale. Experience working in development teams, helping maintain visual integrity between mockups and production-ready code. Figma, Storybook, Github</p>
        </div>
        
        <div className="flex flex-col items-center space-y-sm p-md py-lg sm:p-lg md:p-2xl text-center">
          <ChatBubble>Take a look at some of my work!</ChatBubble>
        </div>
        <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-sm p-sm text-center">
            <img src={Portfolio1}/>
            <img src={Portfolio2}/>
            <img src={Portfolio3}/>
            <img src={Portfolio4}/>
        </div>
        <div className="p-md py-lg sm:p-lg md:p-2xl">
          <ChatBubble className="mb-3xl">Right now, I’m looking to help a team make great products for kids and families. I am helping raise two kids and I care deeply about the challenges and opportunities to use technology to improve their lives. So if..</ChatBubble>
          <ChatBubble className="mb-3xl w-3/4" direction="right">Dad, Can I have a 50 hundred dollars?</ChatBubble>
          <ChatBubble className="mb-3xl">I'm in the middle of talking with this nice person. Be patient and we'll talk about it soon.</ChatBubble>
          <ChatBubble className="mb-3xl">So if you're interested in working together, get in touch! You can find me on LinkedIn or just send me an email.</ChatBubble>

          <div className="flex flex-col sm:p-md sm:py-xl text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center w-full space-y-sm sm:space-y-0 sm:space-x-sm">
              <Button text="Email Me"/>
              <Button text="Connect on LinkedIn"/>
            </div>
            <p className="font-base px-md"></p>
          </div>
        </div>
        
        {/* <div className="flex flex-col items-center space-y-sm p-sm text-center">
          This site was built with Figma, React, my iPhone, and my cousin. I'm not even sure I need this
        </div> */}
      </div>
      <Project title={projects.test.title} description={projects.test.description} images={projects.test.images} captions={projects.test.captions}/>
    </div>
  );
}

var projects = {
  test: {
    title: "Head in the Game",
    description: "After learning about the life and journey of basketball legend Bill Walton, I put together some concepts for a service that takes the meditation training of Headspace and embeds it in the world of basketball. When I played basketball as a kid and a high school student, I wish there were programs like this to help me deal with the anxiety and pressure - both internal and external. And with the movement led by Simone Biles and Naomi Osaka, it's now becoming part of our collective conciousness. It's proven that sports can help kids learn life skills beyond the game - like teamwork and sportsmanship, but the potential for mindfullness seems to be untapped. The design of this product leans heavily on non-tradtional aesthetics. The color pallette and graphics are a nod to the ... ",
    images: [Portfolio1, Portfolio1, Portfolio1],
    captions: ["test1", "test2", "test3"]
  }
}