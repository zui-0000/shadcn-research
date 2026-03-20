import { ExternalLinkIcon } from "lucide-react";

export default function SidebarPage() {
  const subComponents = [
    "SidebarProvider",
    "Sidebar",
    "SidebarTrigger",
    "SidebarRail",
    "SidebarInset",
    "SidebarInput",
    "SidebarHeader",
    "SidebarFooter",
    "SidebarContent",
    "SidebarSeparator",
    "SidebarGroup",
    "SidebarGroupLabel",
    "SidebarGroupAction",
    "SidebarGroupContent",
    "SidebarMenu",
    "SidebarMenuItem",
    "SidebarMenuButton",
    "SidebarMenuAction",
    "SidebarMenuBadge",
    "SidebarMenuSkeleton",
    "SidebarMenuSub",
    "SidebarMenuSubItem",
    "SidebarMenuSubButton",
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Sidebar</h1>
        <p className="mt-2 text-muted-foreground">
          アプリケーションのナビゲーション用サイドバーコンポーネント。レスポンシブ対応、折りたたみ、モバイル時はシート表示など、豊富な機能を提供します。
          SidebarProviderでラップする必要があり、レイアウト全体のコンテキストに依存するため、単体でのデモ表示は複雑です。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">サブコンポーネント一覧</h2>
        <div className="flex flex-wrap gap-2">
          {subComponents.map((name) => (
            <code
              key={name}
              className="rounded-md border border-border bg-muted/50 px-2 py-1 text-sm"
            >
              {name}
            </code>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">公式ドキュメント</h2>
        <a
          href="https://ui.shadcn.com/docs/components/sidebar"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary underline underline-offset-4 hover:no-underline"
        >
          shadcn Sidebar ドキュメント
          <ExternalLinkIcon className="size-4" />
        </a>
      </section>
    </div>
  );
}
