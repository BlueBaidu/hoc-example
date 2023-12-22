import React, { useState } from "react";

const renderHOC = (WrapComponent) => (props) => {
  const [visible, setVisible] = useState(true);
  const inverseVisible = (params) => {
    console.log("点击事件已执行");
    setVisible(params);
  };
  return (
    <div>
      <button onClick={() => inverseVisible(true)}> 挂载组件 </button>
      {visible ? (
        <WrapComponent {...props} setVisible={() => inverseVisible(false)} />
      ) : (
        <div className="icon">
          <div>组件已卸载....</div>
        </div>
      )}
    </div>
  );
};

export default renderHOC;
