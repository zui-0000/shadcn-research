import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "~/components/ui/context-menu";

export default function ContextMenuPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Context Menu</h1>
        <p className="mt-2 text-muted-foreground">
          右クリックで表示されるコンテキストメニュー。要素に対するコンテキストに応じたアクションを提供します。
        </p>
      </div>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">右クリックでメニュー表示</h2>
        <div>
          <ContextMenu>
            <ContextMenuTrigger
              render={
                <div className="flex h-[180px] w-full cursor-context-menu items-center justify-center rounded-lg border border-dashed bg-muted/50 text-muted-foreground">
                  このエリアを右クリックしてください
                </div>
              }
            />
            <ContextMenuContent>
              <ContextMenuItem>開く</ContextMenuItem>
              <ContextMenuItem>新しいタブで開く</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>名前を変更</ContextMenuItem>
              <ContextMenuItem>コピー</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuSub>
                <ContextMenuSubTrigger>さらに表示</ContextMenuSubTrigger>
                <ContextMenuSubContent>
                  <ContextMenuItem>詳細を表示</ContextMenuItem>
                  <ContextMenuItem>プロパティ</ContextMenuItem>
                  <ContextMenuItem>フォルダへ移動</ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
              <ContextMenuSeparator />
              <ContextMenuItem variant="destructive">削除</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </div>
      </section>
    </div>
  );
}
