import type { RouteComponent } from "@tanstack/react-router";
import { createRootRoute, createRoute, createRouter, Outlet } from "@tanstack/react-router";
import type { LazyExoticComponent } from "react";
import { lazy, Suspense } from "react";
import { ShowcaseLayout } from "~/components/layouts/ShowcaseLayout";

// フォーム基本
const ButtonPage = lazy(() => import("~/components/pages/ui/ButtonPage"));
const InputPage = lazy(() => import("~/components/pages/ui/InputPage"));
const CheckboxPage = lazy(() => import("~/components/pages/ui/CheckboxPage"));
const SwitchPage = lazy(() => import("~/components/pages/ui/SwitchPage"));
const RadioGroupPage = lazy(() => import("~/components/pages/ui/RadioGroupPage"));
const SelectPage = lazy(() => import("~/components/pages/ui/SelectPage"));

// 表示・フィードバック
const ActivityIndicatorPage = lazy(() => import("~/components/pages/ui/ActivityIndicatorPage"));
const SnackbarPage = lazy(() => import("~/components/pages/ui/SnackbarPage"));

// オーバーレイ
const PopoverPage = lazy(() => import("~/components/pages/ui/PopoverPage"));

const rootRoute = createRootRoute({
  component: () => (
    <Suspense
      fallback={
        <div className="flex min-h-svh items-center justify-center text-gray-500">
          読み込み中...
        </div>
      }
    >
      <Outlet />
    </Suspense>
  ),
});

const uiLayoutRoute = createRoute({
  id: "ui-layout",
  getParentRoute: () => rootRoute,
  component: () => (
    <ShowcaseLayout>
      <Outlet />
    </ShowcaseLayout>
  ),
});

function uiRoute(path: string, component: LazyExoticComponent<RouteComponent>) {
  return createRoute({
    component,
    getParentRoute: () => uiLayoutRoute,
    path: `/ui/${path}`,
  });
}

const indexRoute = createRoute({
  getParentRoute: () => uiLayoutRoute,
  path: "/",
  component: () => (
    <div className="flex min-h-full items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary-700">ReUI Showcase</h1>
        <p className="mt-3 text-gray-600">左のサイドバーからコンポーネントを選択してください。</p>
      </div>
    </div>
  ),
});

const uiChildRoutes = [
  uiRoute("button", ButtonPage),
  uiRoute("input", InputPage),
  uiRoute("checkbox", CheckboxPage),
  uiRoute("switch", SwitchPage),
  uiRoute("radio-group", RadioGroupPage),
  uiRoute("select", SelectPage),
  uiRoute("activity-indicator", ActivityIndicatorPage),
  uiRoute("snackbar", SnackbarPage),
  uiRoute("popover", PopoverPage),
];

const uiLayout = uiLayoutRoute.addChildren([indexRoute, ...uiChildRoutes]);

const routeTree = rootRoute.addChildren([uiLayout]);

export const router = createRouter({ routeTree });
