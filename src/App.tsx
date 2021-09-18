import React from "react";
import { ReactComponent as LogoVert } from './assets/img/AH-vert.svg';
import { ReactComponent as LogoHoriz } from './assets/img/AH-horiz.svg';
import { ReactComponent as LogoSide } from './assets/img/AH-sidebyside.svg';
import { ReactComponent as DesignSystem } from './assets/img/design-system.svg';
import { ReactComponent as DesignInterface } from './assets/img/design-interface.svg';
import { ReactComponent as DesignIntegration } from './assets/img/design-integration.svg';
import { Button } from "./cmpts/Button";

import SketchLine from './assets/img/sketch-line.png';

export default function App() {
  return (
    <div className="flex">
      {/* Left Nav */}
      <div className="hidden sm:block sm:w-20 md:w-24 bg-coral"></div>
      <div className="fixed w-full sm:w-20 md:w-24 flex sm:flex-col items-center justify-center sm:justify-between sm:h-screen p-sm bg-gradient-to-t md:bg-gradient-to-l from-aqua via-aqua-light to-aqua-light">
       <LogoVert className="w-full hidden sm:block"/>
       <LogoSide className="w-10 block sm:hidden"/>
       <div className="w-full hidden sm:block">
          <h1 className="font-little-buddy text-center">Adam Howard</h1>
          <img src={SketchLine}/>
          <h1 className="font-little-buddy text-center"><span className="text-4xl">UX</span> Design</h1>
       </div>
      </div> 
      {/* Page Container */}
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-sm p-md py-lg sm:p-lg md:p-2xl text-center">
          <DesignSystem className="w-full mb-xs md:mb-sm"/>
          <h2 className="font-big-buddy">Design Systems</h2>
          <p className="font-base lg:px-xl">Experience creating component libraries in Figma that can be translated to Storybook blah blah tokens.</p>
        </div>
        <div className="flex flex-col items-center space-y-sm p-md py-lg sm:p-lg md:p-2xl text-center">
          <DesignInterface className="w-full mb-xs md:mb-sm"/>
          <h2 className="font-big-buddy">Interface Design</h2>
          <p className="font-base lg:px-xl">Protoyping, Divergent Thinking, Iteration using modern tools.</p>
          <DesignInterface className="w-full transform rotate-180 mb-xs md:mb-sm"/>
        </div>
        <div className="flex flex-col items-center space-y-sm p-md py-lg sm:p-lg md:p-2xl text-center">
          <h2 className="font-big-buddy">Design Integration</h2>
          <p className="font-base lg:px-xl">Experience working in development teams, helping maintain visual integrity between mockups and production-ready code.</p>
          <DesignIntegration className="w-full"/>
        </div>
        <div className="flex flex-col items-center space-y-sm p-md py-lg sm:p-lg md:p-2xl text-center">
          <Button text="Contact"/>
          <p className="font-base lg:px-xl">My LinkedIn profile is OK too</p>
        </div>
        <div className="flex flex-col items-center space-y-sm p-sm text-center">
          This site was built with Figma, React, my iPhone, and my cousin. I'm not even sure I need this
        </div>
      </div>
      
    </div>
  );
}