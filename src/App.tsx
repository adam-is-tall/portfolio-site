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

        <h3 className="">Hello world!!!!!</h3>
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
