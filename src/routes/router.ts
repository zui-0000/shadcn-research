import { createRootRoute, createRoute, createRouter } from "@tanstack/react-router";
import { lazy } from "react";

const TestPage = lazy(() =>
  import("~/components/pages/Test").then((module) => ({
    default: module.default,
  })),
);

const rootRoute = createRootRoute();
const testRoute = createRoute({
  component: TestPage,
  getParentRoute: () => rootRoute,
  path: "/test",
});

const routeTree = rootRoute.addChildren([testRoute]);

export const router = createRouter({ routeTree });
