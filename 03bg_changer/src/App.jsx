import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen " style={{ backgroundColor: color }}>
        <h1 className="text-center text-3xl  font-bold">BG CHANGER</h1>
        <div className="flex justify-center my-3 ">
          <button
            onClick={() => {
              setColor("red");
            }}
            className="rounded-md mx-3 bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            RED
          </button>
          <button
            onClick={() => {
              setColor("green");
            }}
            className="rounded-md mx-3 bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            GREEN
          </button>
          <button
            onClick={() => {
              setColor("blue");
            }}
            className="rounded-md mx-3 bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            BLUE
          </button>
          <button
            onClick={() => {
              setColor("black");
            }}
            className="rounded-md mx-3 bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Black
          </button>
          <button
            onClick={() => {
              setColor("purple");
            }}
            className="rounded-md mx-3 bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            PURPLE
          </button>
          <button
            onClick={() => {
              setColor("yellow");
            }}
            className="rounded-md mx-3 bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            YELLOW
          </button>
          <button
            onClick={() => {
              setColor("pink");
            }}
            className="rounded-md mx-3 bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            PINK
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
