import React, { useEffect, useState } from "react";

const withCompoentWrapper =
  (Component) =>
  ({ ...props }) => {
    const [name, setName] = useState("Mia");
    useEffect(() => {
      console.log("执行高阶组件");
    }, []);

    return <Component {...props} {...name} />;
  };

export default withCompoentWrapper;
