// 路由配置
import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("../home/index"));
const GitHoc = lazy(() => import("../git_hook_hoc/index"));

const routes = [
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "hookhoc",
        element: (
          <Suspense fallback="Loading">
            <GitHoc />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
