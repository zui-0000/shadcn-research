import { Textarea } from "~/components/ui/textarea";

export default function TextareaPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Textarea</h1>
        <p className="mt-2 text-muted-foreground">
          複数行のテキスト入力を受け付けるエリアコンポーネント。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">デフォルト</h2>
        <Textarea className="max-w-sm" />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">プレースホルダー付き</h2>
        <Textarea className="max-w-sm" placeholder="メッセージを入力してください..." />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">無効化</h2>
        <Textarea className="max-w-sm" disabled placeholder="無効なテキストエリア" />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">デフォルト値付き</h2>
        <Textarea
          className="max-w-sm"
          defaultValue="これは事前に入力されたテキストです。"
          rows={4}
        />
      </section>
    </div>
  );
}
