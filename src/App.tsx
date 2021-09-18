import React from "react";
import { ReactComponent as LogoVert } from './assets/img/AH-vert.svg';
import { ReactComponent as LogoHoriz } from './assets/img/AH-horiz.svg';
import { ReactComponent as DesignSystem } from './assets/img/design-system.svg';
import { ReactComponent as DesignInterface } from './assets/img/design-interface.svg';
import { ReactComponent as DesignIntegration } from './assets/img/design-integration.svg';

import SketchLine from './assets/img/sketch-line.png';

export default function App() {
  return (
    <div className="flex">
      {/* Left Nav */}
      <div className="hidden sm:block sm:w-20 md:w-24 bg-coral"></div>
      <div className="fixed w-full sm:w-20 md:w-24 flex sm:flex-col items-center justify-center sm:justify-between sm:h-screen p-sm bg-gradient-to-l from-aqua via-aqua-light to-aqua-light">
       <LogoVert className="w-full hidden sm:block"/>
       <LogoHoriz className="w-32 block sm:hidden"/>
       <div className="w-full hidden sm:block">
          <h1 className="font-little-buddy text-center">Adam Howard</h1>
          <img src={SketchLine}/>
          <h1 className="font-little-buddy text-center"><span className="text-4xl">UX</span> Design</h1>
       </div>
      </div> 
      {/* Page Container */}
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-sm p-2xl text-center">
          <DesignSystem/>
          <h2 className="font-big-buddy">Design Systems</h2>
          <p className="font-base px-xl">Experience creating component libraries in Figma that can be translated to Storybook blah blah tokens.</p>
        </div>
        <div className="flex flex-col items-center space-y-sm p-2xl text-center">
          <DesignInterface className="mb-sm"/>
          <h2 className="font-big-buddy">Interface Design</h2>
          <p className="font-base px-xl">Protoyping, Divergent Thinking, Iteration using modern tools.</p>
          <DesignInterface className="transform rotate-180 pb-sm"/>
        </div>
        <div className="flex flex-col items-center space-y-sm p-2xl text-center">
          <h2 className="font-big-buddy">Design Integration</h2>
          <p className="font-base px-xl">Experience working in development teams, helping maintain visual integrity between mockups and production-ready code.</p>
          <DesignIntegration/>
        </div>
      </div>
      
    </div>
  );
}