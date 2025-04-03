import React, { useState } from "react";

const App = () => {
  const [state, setState] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(state);
    setState('') };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          value={state}
          onChange={(e) => {
            setState(e.target.value);
          }}
          className="px-4 py-3 text-xl m-5"
          type="text"
          placeholder="Enter Your name "
        />
        <button className="px-4 py-3 m-5 text-xl font-semibold bg-emerald-500 rounded ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
