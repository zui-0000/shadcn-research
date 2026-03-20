import { BoldIcon, ItalicIcon, StrikethroughIcon } from "lucide-react";
import { Toggle } from "~/components/ui/toggle";

export default function TogglePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Toggle</h1>
        <p className="mt-2 text-muted-foreground">
          オン・オフの2状態を切り替えるトグルボタンコンポーネント。アイコンやテキストと組み合わせて使用できる。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">デフォルト</h2>
        <div className="flex flex-wrap gap-2">
          <Toggle aria-label="太字">
            <BoldIcon />
          </Toggle>
          <Toggle aria-label="斜体">
            <ItalicIcon />
          </Toggle>
          <Toggle aria-label="取り消し線">
            <StrikethroughIcon />
          </Toggle>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">押下状態（aria-pressed）</h2>
        <div className="flex flex-wrap gap-2">
          <Toggle aria-label="太字" aria-pressed>
            <BoldIcon />
          </Toggle>
          <Toggle aria-label="斜体" aria-pressed>
            <ItalicIcon />
          </Toggle>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">outline バリアント</h2>
        <div className="flex flex-wrap gap-2">
          <Toggle variant="outline" aria-label="太字">
            <BoldIcon />
          </Toggle>
          <Toggle variant="outline" aria-label="斜体">
            <ItalicIcon />
          </Toggle>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">無効化</h2>
        <div className="flex flex-wrap gap-2">
          <Toggle disabled aria-label="太字">
            <BoldIcon />
          </Toggle>
          <Toggle disabled aria-label="斜体">
            <ItalicIcon />
          </Toggle>
        </div>
      </section>
    </div>
  );
}
