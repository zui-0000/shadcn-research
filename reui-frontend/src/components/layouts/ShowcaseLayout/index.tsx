import { Link, useRouterState } from "@tanstack/react-router";
import type { FC, ReactNode } from "react";
import { cn } from "~/lib/utils";

const componentGroups = [
  {
    label: "フォーム基本",
    items: [
      { name: "Button", path: "/ui/button" },
      { name: "Input (TextField)", path: "/ui/input" },
      { name: "Checkbox", path: "/ui/checkbox" },
      { name: "Switch", path: "/ui/switch" },
      { name: "Radio Group", path: "/ui/radio-group" },
      { name: "Select", path: "/ui/select" },
    ],
  },
  {
    label: "表示・フィードバック",
    items: [
      { name: "Activity Indicator", path: "/ui/activity-indicator" },
      { name: "Snackbar", path: "/ui/snackbar" },
    ],
  },
  {
    label: "オーバーレイ",
    items: [{ name: "Popover", path: "/ui/popover" }],
  },
];

export const ShowcaseLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <div className="flex min-h-svh">
      <aside className="w-60 shrink-0 border-r border-gray-200 bg-gray-50 overflow-y-auto">
        <div className="p-4 border-b border-gray-200">
          <Link to="/" className="text-lg font-bold text-primary-700">
            ReUI Showcase
          </Link>
          <p className="mt-0.5 text-xs text-gray-500">@reui/reui コンポーネント一覧</p>
        </div>
        <nav className="px-2 py-3">
          {componentGroups.map((group) => (
            <div key={group.label} className="mb-4">
              <h3 className="mb-1 px-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
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
                          ? "bg-primary-600 text-white font-medium"
                          : "text-gray-600 hover:bg-gray-200 hover:text-gray-900",
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
      <main className="flex-1 overflow-y-auto p-8 bg-white">{children}</main>
    </div>
  );
};
