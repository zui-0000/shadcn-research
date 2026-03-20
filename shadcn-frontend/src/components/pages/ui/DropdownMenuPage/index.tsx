import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

export default function DropdownMenuPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dropdown Menu</h1>
        <p className="mt-2 text-muted-foreground">
          ボタンやトリガーで開くドロップダウンメニュー。アイテム、区切り線、サブメニューで複雑なメニューを構築できます。
        </p>
      </div>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">基本ドロップダウン</h2>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline">メニューを開く</Button>} />
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuLabel>マイアカウント</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  プロフィール
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  設定
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  キーボードショートカット
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>さらにオプション</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>チームを招待</DropdownMenuItem>
                  <DropdownMenuItem>新規プロジェクト</DropdownMenuItem>
                  <DropdownMenuItem>テンプレート</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">ログアウト</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>
    </div>
  );
}
