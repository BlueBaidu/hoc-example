import React from "react";
import renderHOC from "./hoc";

class Index extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>react</li>
          <li>vue</li>
          <li>Angular</li>
        </ul>
      </div>
    );
  }
}

const RenderHijacking = renderHOC(Index);
export default RenderHijacking;
