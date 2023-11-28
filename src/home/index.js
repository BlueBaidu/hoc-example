// HomePage 组件
import React from "react";
import { Outlet, Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h2>HOC 案例集合</h2>
      <ul>
        <li>
          <Link to="/hookhoc">
            使用HOC的方式实现给TodoList hook组件添加log日志
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default HomePage;
