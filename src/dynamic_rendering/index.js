import React from "react";
import renderHOC from "./hoc";

const Index = ({ setVisible }) => {
  return (
    <div className="box">
      <p>hello,my name is Mia, 组件已经挂载</p>
      <img
        src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=294206908,2427609994&fm=26&gp=0.jpg"
        alt=""
      />
      <button onClick={setVisible}> 卸载当前组件 </button>
    </div>
  );
};
const DynamicallyMountedComponents = renderHOC(Index);
export default DynamicallyMountedComponents;
