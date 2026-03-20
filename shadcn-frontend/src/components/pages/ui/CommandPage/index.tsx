import { useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "~/components/ui/command";

export default function CommandPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Command</h1>
        <p className="mt-2 text-muted-foreground">
          キーボードで操作可能なコマンドパレット。検索とグループ化された項目で素早くアクションを実行できます。
        </p>
      </div>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">コマンドパレット</h2>
        <div>
          <Button onClick={() => setOpen(true)}>コマンドを開く（⌘K）</Button>
          <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="コマンドを検索..." />
            <CommandList>
              <CommandEmpty>検索結果がありません</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <span>プロフィールを表示</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <span>設定を開く</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <span>新しいタブで開く</span>
                  <CommandShortcut>⌘T</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <span>テーマを変更</span>
                </CommandItem>
                <CommandItem>
                  <span>キーボードショートカット</span>
                </CommandItem>
                <CommandItem>
                  <span>言語設定</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </CommandDialog>
        </div>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">インラインコマンド</h2>
        <div>
          <Command className="max-w-md rounded-lg border">
            <CommandInput placeholder="入力して検索..." />
            <CommandList>
              <CommandEmpty>結果なし</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>カレンダー</CommandItem>
                <CommandItem>検索</CommandItem>
                <CommandItem>ダッシュボード</CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>プロフィール</CommandItem>
                <CommandItem>バックアップ</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </section>
    </div>
  );
}
