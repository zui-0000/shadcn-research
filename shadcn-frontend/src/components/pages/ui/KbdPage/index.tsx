import { Kbd, KbdGroup } from "~/components/ui/kbd";

export default function KbdPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Kbd</h1>
        <p className="mt-2 text-muted-foreground">
          キーボードショートカットやキー操作を視覚的に表示するためのコンポーネントです。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">単一キー</h2>
        <div className="flex flex-wrap gap-2">
          <Kbd>⌘</Kbd>
          <Kbd>Shift</Kbd>
          <Kbd>Enter</Kbd>
          <Kbd>Esc</Kbd>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">キーボードショートカット</h2>
        <div className="flex flex-wrap items-center gap-4">
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <span className="px-0.5 text-muted-foreground">+</span>
            <Kbd>K</Kbd>
          </KbdGroup>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <span className="px-0.5 text-muted-foreground">+</span>
            <Kbd>S</Kbd>
          </KbdGroup>
          <KbdGroup>
            <Kbd>Alt</Kbd>
            <span className="px-0.5 text-muted-foreground">+</span>
            <Kbd>F4</Kbd>
          </KbdGroup>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">その他の例</h2>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">検索:</span>
            <Kbd>⌘</Kbd>
            <span className="text-muted-foreground">+</span>
            <Kbd>F</Kbd>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">保存:</span>
            <Kbd>⌘</Kbd>
            <span className="text-muted-foreground">+</span>
            <Kbd>S</Kbd>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">コピー:</span>
            <Kbd>⌘</Kbd>
            <span className="text-muted-foreground">+</span>
            <Kbd>C</Kbd>
          </div>
        </div>
      </section>
    </div>
  );
}
