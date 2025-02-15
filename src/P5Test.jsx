/* eslint-disable react/prop-types */
import Sketch from "react-p5";

import "leaflet/dist/leaflet.css";

export function P5Test({ width, height }) {
  let _width = width;
  let _height = height;

  let x = 50;
  let y = 50;

  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(_width, _height).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background("none");
    p5.fill("#6c757d");
    p5.stroke("0");
    p5.ellipse(x, y, 70, 70);
    // NOTE: Do not use setState in the draw function or in functions that are executed
    // in the draw function...
    // please use normal variables or class properties for these purposes
    x++;
  };

  return (
    <div className="">
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}
