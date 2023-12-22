import React from "react";

const IndexComponent = (props) => {
  const { name } = props;
  return <h4>展示一段内容的组件，重要数据来自hoc的{name}</h4>;
};

export default IndexComponent;
