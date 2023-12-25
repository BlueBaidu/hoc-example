// HomePage 组件
import React from "react";
import { Outlet, Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h2>HOC 常见功能-- 强化props</h2>
      <ul>
        <li>
          <Link to={"/withstateHoc"}>混入props</Link>
        </li>
        <li>
          <Link to={"/detachstateHoc"}>抽离state控制更新</Link>
        </li>
      </ul>
      <h2>HOC 案例集合</h2>
      <ul>
        <li>
          <Link to="/hookhoc">
            使用HOC的方式实现给TodoList hook组件添加log日志
          </Link>
        </li>
        <li>
          <Link to="/dynamicMount">HOC动态挂载组件</Link>
        </li>
        <li>
          <Link to="/renderHijacking">
            HOC反向继承模式，实现渲染劫持，劫持render函数，替换子节点
          </Link>
        </li>
      </ul>
      <hr></hr>
      <Outlet />
    </>
  );
};

export default HomePage;
