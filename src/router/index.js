// 路由配置
import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const HomeLayout = lazy(() => import("../home/index"));
const GitHoc = lazy(() => import("../git_hook_hoc/index"));
const DetachStateHoc = lazy(() => import("../detach_state_hoc/index"));
const WithStateHoc = lazy(() => import("../with_state_hoc/page"));
const DynamicMount = lazy(() => import("../dynamic_rendering/index"));
const RenderHijacking = lazy(() => import("../renderHijacking/index"));

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
        path: "withstateHoc",
        element: (
          <Suspense fallback="Loading">
            <WithStateHoc />
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
      {
        path: "dynamicMount",
        element: (
          <Suspense fallback="Loading">
            <DynamicMount />
          </Suspense>
        ),
      },
      {
        path: "renderHijacking",
        element: (
          <Suspense fallback="Loading">
            <RenderHijacking />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
