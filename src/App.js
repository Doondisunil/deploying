import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Navigation from "./Navigation";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement } from "./actions";

// export default function App() {
//   const count = useSelector((state) => state.counter);
//   const dispatch = useDispatch();
//   return (
//     <div>
//       <h1>Count is:{count}</h1>
//       <button onClick={() => dispatch(increment())}>+</button>
//       <button onClick={() => dispatch(decrement())}>-</button>
//     </div>
//   );
// }
