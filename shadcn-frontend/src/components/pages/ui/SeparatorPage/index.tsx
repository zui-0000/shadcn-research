import { Separator } from "~/components/ui/separator";

export default function SeparatorPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Separator</h1>
        <p className="mt-2 text-muted-foreground">
          コンテンツを視覚的に区切るための水平・垂直の区切り線コンポーネントです。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">水平セパレーター</h2>
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">区切り線の上のコンテンツ</p>
          <Separator orientation="horizontal" />
          <p className="text-sm text-muted-foreground">区切り線の下のコンテンツ</p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">垂直セパレーター（flex レイアウト）</h2>
        <div className="flex h-10 items-center gap-2">
          <span className="text-sm">ホーム</span>
          <Separator orientation="vertical" />
          <span className="text-sm">ドキュメント</span>
          <Separator orientation="vertical" />
          <span className="text-sm">設定</span>
        </div>
      </section>
    </div>
  );
}
