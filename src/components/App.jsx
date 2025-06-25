import React from "react";
import Entry from "Entry";
import emojipedia from "../emojipedia"


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(Entry)}
    </div>
  );
}

export default App;
