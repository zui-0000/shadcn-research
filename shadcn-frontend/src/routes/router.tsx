import type { RouteComponent } from "@tanstack/react-router";
import { Outlet, createRootRoute, createRoute, createRouter } from "@tanstack/react-router";
import type { LazyExoticComponent } from "react";
import { Suspense, lazy } from "react";
import { ShowcaseLayout } from "~/components/layouts/ShowcaseLayout";

// Form basics
const ButtonPage = lazy(() => import("~/components/pages/ui/ButtonPage"));
const InputPage = lazy(() => import("~/components/pages/ui/InputPage"));
const TextareaPage = lazy(() => import("~/components/pages/ui/TextareaPage"));
const CheckboxPage = lazy(() => import("~/components/pages/ui/CheckboxPage"));
const RadioGroupPage = lazy(() => import("~/components/pages/ui/RadioGroupPage"));
const SelectPage = lazy(() => import("~/components/pages/ui/SelectPage"));
const SwitchPage = lazy(() => import("~/components/pages/ui/SwitchPage"));
const SliderPage = lazy(() => import("~/components/pages/ui/SliderPage"));
const LabelPage = lazy(() => import("~/components/pages/ui/LabelPage"));

// Form advanced
const InputOtpPage = lazy(() => import("~/components/pages/ui/InputOtpPage"));
const InputGroupPage = lazy(() => import("~/components/pages/ui/InputGroupPage"));
const ComboboxPage = lazy(() => import("~/components/pages/ui/ComboboxPage"));
const NativeSelectPage = lazy(() => import("~/components/pages/ui/NativeSelectPage"));
const FieldPage = lazy(() => import("~/components/pages/ui/FieldPage"));
const CalendarPage = lazy(() => import("~/components/pages/ui/CalendarPage"));
const TogglePage = lazy(() => import("~/components/pages/ui/TogglePage"));
const ToggleGroupPage = lazy(() => import("~/components/pages/ui/ToggleGroupPage"));
const ButtonGroupPage = lazy(() => import("~/components/pages/ui/ButtonGroupPage"));

// Display & Data
const CardPage = lazy(() => import("~/components/pages/ui/CardPage"));
const TablePage = lazy(() => import("~/components/pages/ui/TablePage"));
const BadgePage = lazy(() => import("~/components/pages/ui/BadgePage"));
const AvatarPage = lazy(() => import("~/components/pages/ui/AvatarPage"));
const SeparatorPage = lazy(() => import("~/components/pages/ui/SeparatorPage"));
const SkeletonPage = lazy(() => import("~/components/pages/ui/SkeletonPage"));
const SpinnerPage = lazy(() => import("~/components/pages/ui/SpinnerPage"));
const EmptyPage = lazy(() => import("~/components/pages/ui/EmptyPage"));
const KbdPage = lazy(() => import("~/components/pages/ui/KbdPage"));
const AspectRatioPage = lazy(() => import("~/components/pages/ui/AspectRatioPage"));
const ProgressPage = lazy(() => import("~/components/pages/ui/ProgressPage"));

// Overlay & Feedback
const AlertPage = lazy(() => import("~/components/pages/ui/AlertPage"));
const AlertDialogPage = lazy(() => import("~/components/pages/ui/AlertDialogPage"));
const DialogPage = lazy(() => import("~/components/pages/ui/DialogPage"));
const DrawerPage = lazy(() => import("~/components/pages/ui/DrawerPage"));
const SheetPage = lazy(() => import("~/components/pages/ui/SheetPage"));
const SonnerPage = lazy(() => import("~/components/pages/ui/SonnerPage"));
const TooltipPage = lazy(() => import("~/components/pages/ui/TooltipPage"));
const HoverCardPage = lazy(() => import("~/components/pages/ui/HoverCardPage"));
const PopoverPage = lazy(() => import("~/components/pages/ui/PopoverPage"));

// Navigation
const TabsPage = lazy(() => import("~/components/pages/ui/TabsPage"));
const AccordionPage = lazy(() => import("~/components/pages/ui/AccordionPage"));
const BreadcrumbPage = lazy(() => import("~/components/pages/ui/BreadcrumbPage"));
const PaginationPage = lazy(() => import("~/components/pages/ui/PaginationPage"));
const NavigationMenuPage = lazy(() => import("~/components/pages/ui/NavigationMenuPage"));
const MenubarPage = lazy(() => import("~/components/pages/ui/MenubarPage"));
const CommandPage = lazy(() => import("~/components/pages/ui/CommandPage"));
const ContextMenuPage = lazy(() => import("~/components/pages/ui/ContextMenuPage"));
const DropdownMenuPage = lazy(() => import("~/components/pages/ui/DropdownMenuPage"));

// Layout & Others
const CollapsiblePage = lazy(() => import("~/components/pages/ui/CollapsiblePage"));
const ResizablePage = lazy(() => import("~/components/pages/ui/ResizablePage"));
const ScrollAreaPage = lazy(() => import("~/components/pages/ui/ScrollAreaPage"));
const CarouselPage = lazy(() => import("~/components/pages/ui/CarouselPage"));
const ChartPage = lazy(() => import("~/components/pages/ui/ChartPage"));
const SidebarPage = lazy(() => import("~/components/pages/ui/SidebarPage"));

const rootRoute = createRootRoute({
  component: () => (
    <Suspense
      fallback={<div className="flex min-h-svh items-center justify-center">読み込み中...</div>}
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

const uiChildRoutes = [
  uiRoute("button", ButtonPage),
  uiRoute("input", InputPage),
  uiRoute("textarea", TextareaPage),
  uiRoute("checkbox", CheckboxPage),
  uiRoute("radio-group", RadioGroupPage),
  uiRoute("select", SelectPage),
  uiRoute("switch", SwitchPage),
  uiRoute("slider", SliderPage),
  uiRoute("label", LabelPage),
  uiRoute("input-otp", InputOtpPage),
  uiRoute("input-group", InputGroupPage),
  uiRoute("combobox", ComboboxPage),
  uiRoute("native-select", NativeSelectPage),
  uiRoute("field", FieldPage),
  uiRoute("calendar", CalendarPage),
  uiRoute("toggle", TogglePage),
  uiRoute("toggle-group", ToggleGroupPage),
  uiRoute("button-group", ButtonGroupPage),
  uiRoute("card", CardPage),
  uiRoute("table", TablePage),
  uiRoute("badge", BadgePage),
  uiRoute("avatar", AvatarPage),
  uiRoute("separator", SeparatorPage),
  uiRoute("skeleton", SkeletonPage),
  uiRoute("spinner", SpinnerPage),
  uiRoute("empty", EmptyPage),
  uiRoute("kbd", KbdPage),
  uiRoute("aspect-ratio", AspectRatioPage),
  uiRoute("progress", ProgressPage),
  uiRoute("alert", AlertPage),
  uiRoute("alert-dialog", AlertDialogPage),
  uiRoute("dialog", DialogPage),
  uiRoute("drawer", DrawerPage),
  uiRoute("sheet", SheetPage),
  uiRoute("sonner", SonnerPage),
  uiRoute("tooltip", TooltipPage),
  uiRoute("hover-card", HoverCardPage),
  uiRoute("popover", PopoverPage),
  uiRoute("tabs", TabsPage),
  uiRoute("accordion", AccordionPage),
  uiRoute("breadcrumb", BreadcrumbPage),
  uiRoute("pagination", PaginationPage),
  uiRoute("navigation-menu", NavigationMenuPage),
  uiRoute("menubar", MenubarPage),
  uiRoute("command", CommandPage),
  uiRoute("context-menu", ContextMenuPage),
  uiRoute("dropdown-menu", DropdownMenuPage),
  uiRoute("collapsible", CollapsiblePage),
  uiRoute("resizable", ResizablePage),
  uiRoute("scroll-area", ScrollAreaPage),
  uiRoute("carousel", CarouselPage),
  uiRoute("chart", ChartPage),
  uiRoute("sidebar", SidebarPage),
];

const uiLayout = uiLayoutRoute.addChildren(uiChildRoutes);

const routeTree = rootRoute.addChildren([uiLayout]);

export const router = createRouter({ routeTree });
