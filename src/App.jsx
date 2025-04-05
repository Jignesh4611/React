import React from "react";
import Data from './components/About';
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
  <div>
    <Routes>
      <Route path='/About' element={<Data/>}/>
    </Routes>
  </div>
  )
};
export default App;
