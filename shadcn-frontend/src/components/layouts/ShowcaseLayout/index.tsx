import { Link, useRouterState } from "@tanstack/react-router";
import type { FC, ReactNode } from "react";
import { cn } from "~/lib/utils";

const componentGroups = [
  {
    label: "フォーム基本",
    items: [
      { name: "Button", path: "/ui/button" },
      { name: "Input", path: "/ui/input" },
      { name: "Textarea", path: "/ui/textarea" },
      { name: "Checkbox", path: "/ui/checkbox" },
      { name: "Radio Group", path: "/ui/radio-group" },
      { name: "Select", path: "/ui/select" },
      { name: "Switch", path: "/ui/switch" },
      { name: "Slider", path: "/ui/slider" },
      { name: "Label", path: "/ui/label" },
    ],
  },
  {
    label: "フォーム応用",
    items: [
      { name: "Input OTP", path: "/ui/input-otp" },
      { name: "Input Group", path: "/ui/input-group" },
      { name: "Combobox", path: "/ui/combobox" },
      { name: "Native Select", path: "/ui/native-select" },
      { name: "Field", path: "/ui/field" },
      { name: "Calendar", path: "/ui/calendar" },
      { name: "Toggle", path: "/ui/toggle" },
      { name: "Toggle Group", path: "/ui/toggle-group" },
      { name: "Button Group", path: "/ui/button-group" },
    ],
  },
  {
    label: "表示・データ",
    items: [
      { name: "Card", path: "/ui/card" },
      { name: "Table", path: "/ui/table" },
      { name: "Badge", path: "/ui/badge" },
      { name: "Avatar", path: "/ui/avatar" },
      { name: "Separator", path: "/ui/separator" },
      { name: "Skeleton", path: "/ui/skeleton" },
      { name: "Spinner", path: "/ui/spinner" },
      { name: "Empty", path: "/ui/empty" },
      { name: "Kbd", path: "/ui/kbd" },
      { name: "Aspect Ratio", path: "/ui/aspect-ratio" },
      { name: "Progress", path: "/ui/progress" },
    ],
  },
  {
    label: "オーバーレイ・フィードバック",
    items: [
      { name: "Alert", path: "/ui/alert" },
      { name: "Alert Dialog", path: "/ui/alert-dialog" },
      { name: "Dialog", path: "/ui/dialog" },
      { name: "Drawer", path: "/ui/drawer" },
      { name: "Sheet", path: "/ui/sheet" },
      { name: "Sonner (Toast)", path: "/ui/sonner" },
      { name: "Tooltip", path: "/ui/tooltip" },
      { name: "Hover Card", path: "/ui/hover-card" },
      { name: "Popover", path: "/ui/popover" },
    ],
  },
  {
    label: "ナビゲーション",
    items: [
      { name: "Tabs", path: "/ui/tabs" },
      { name: "Accordion", path: "/ui/accordion" },
      { name: "Breadcrumb", path: "/ui/breadcrumb" },
      { name: "Pagination", path: "/ui/pagination" },
      { name: "Navigation Menu", path: "/ui/navigation-menu" },
      { name: "Menubar", path: "/ui/menubar" },
      { name: "Command", path: "/ui/command" },
      { name: "Context Menu", path: "/ui/context-menu" },
      { name: "Dropdown Menu", path: "/ui/dropdown-menu" },
    ],
  },
  {
    label: "レイアウト・その他",
    items: [
      { name: "Collapsible", path: "/ui/collapsible" },
      { name: "Resizable", path: "/ui/resizable" },
      { name: "Scroll Area", path: "/ui/scroll-area" },
      { name: "Carousel", path: "/ui/carousel" },
      { name: "Chart", path: "/ui/chart" },
      { name: "Sidebar", path: "/ui/sidebar" },
    ],
  },
];

export const ShowcaseLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <div className="flex min-h-svh">
      <aside className="w-64 shrink-0 border-r border-border bg-muted/30 overflow-y-auto">
        <div className="p-4">
          <Link to="/test" className="text-lg font-bold text-foreground">
            shadcn UI Showcase
          </Link>
        </div>
        <nav className="px-2 pb-4">
          {componentGroups.map((group) => (
            <div key={group.label} className="mb-4">
              <h3 className="mb-1 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {group.label}
              </h3>
              <ul className="space-y-0.5">
                {group.items.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={cn(
                        "block rounded-md px-2 py-1.5 text-sm transition-colors",
                        currentPath === item.path
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground",
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
      <main className="flex-1 overflow-y-auto p-8">{children}</main>
    </div>
  );
};
