import React from 'react';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex items-center w-12">
          <Block />
          <Block />
          <Block />
        </div>

        <h3 className="">Hello world!</h3>
      </header>
    </div>
  );
}

const Block = () => <div style={{width: 10, height: 10, borderColor: "lime", borderWidth: 1}} />