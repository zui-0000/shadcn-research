import { Badge } from "~/components/ui/badge";

export default function BadgePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Badge</h1>
        <p className="mt-2 text-muted-foreground">
          ステータスやタグを表す小さなラベルコンポーネント。カウント表示、バリアント選択、状態表示などに利用できます。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">バリアント</h2>
        <div className="flex flex-wrap gap-3">
          <Badge variant="default">default</Badge>
          <Badge variant="secondary">secondary</Badge>
          <Badge variant="outline">outline</Badge>
          <Badge variant="destructive">destructive</Badge>
          <Badge variant="ghost">ghost</Badge>
          <Badge variant="link">link</Badge>
        </div>
      </section>
    </div>
  );
}
