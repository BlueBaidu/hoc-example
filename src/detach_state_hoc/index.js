import react from "react";
import WrappedIndex from "./hocComponent";

const DetachStateHoc = () => {
  return (
    <>
      <h3>
        这种用法在react-redux中connect高阶组件中用到过，用于处理因为
        redux中state的更改，带来的订阅更新作用
      </h3>
      <WrappedIndex />
    </>
  );
};
export default DetachStateHoc;
