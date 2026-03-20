import { Input } from "~/components/ui/input";

export default function InputPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Input</h1>
        <p className="mt-2 text-muted-foreground">
          テキスト入力を受け付けるフィールドコンポーネント。様々なタイプの入力に対応する。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">デフォルト</h2>
        <Input className="max-w-sm" />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">プレースホルダー付き</h2>
        <Input className="max-w-sm" placeholder="入力してください..." />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">無効化</h2>
        <Input className="max-w-sm" disabled placeholder="無効な入力欄" />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">入力タイプ</h2>
        <div className="flex max-w-sm flex-col gap-3">
          <Input type="email" placeholder="email@example.com" />
          <Input type="password" placeholder="パスワードを入力" />
          <Input type="file" />
        </div>
      </section>
    </div>
  );
}
