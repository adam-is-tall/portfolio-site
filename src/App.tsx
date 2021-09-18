import React from "react";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex items-center w-full justify-between">
          <Block />
          <Block />
          <Block />
        </div>

        <h3 className="font-big-buddy">Hello big-buddy!!!!!</h3>
        <h3 className="font-speech">Hello font-speech!!!!!</h3>
        <h3 className="font-base">Hello font-base!!!!!</h3>
      </header>
    </div>
  );
}

const size = 100;
const Block = () => (
  <div
    className="bg-aqua"
    style={{ width: size, height: size, borderColor: "lime", borderWidth: 1 }}
  />
);
