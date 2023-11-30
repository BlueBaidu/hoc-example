// 路由配置
import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const HomeLayout = lazy(() => import("../home/index"));
const GitHoc = lazy(() => import("../git_hook_hoc/index"));
const DetachStateHoc = lazy(() => import("../detach_state_hoc/index"));

const routes = [
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "hookhoc",
        element: (
          <Suspense fallback="Loading">
            <GitHoc />
          </Suspense>
        ),
      },
      {
        path: "detachstateHoc",
        element: (
          <Suspense fallback="Loading">
            <DetachStateHoc />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
