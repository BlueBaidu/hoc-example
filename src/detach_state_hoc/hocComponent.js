import React, { useState } from "react";

// 高阶组件
function hookHOC(WrapComponent) {
  return function IndexWrapper(props) {
    const [name, setName] = useState("alien");

    const changeName = (newName) => {
      setName(newName);
    };

    return <WrapComponent {...props} name={name} changeName={changeName} />;
  };
}

// 函数式组件
function Index(props) {
  const [value, setValue] = useState(null);
  const { name, changeName } = props;

  return (
    <div>
      <div>hello, world, my name is {name}</div>
      改变name <input onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => changeName(value)}>确定</button>
    </div>
  );
}

// 使用高阶组件包裹函数式组件
const WrappedIndex = hookHOC(Index);

export default WrappedIndex;
