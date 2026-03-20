import { Mail } from "lucide-react";
import { Button } from "~/components/ui/button";

export default function ButtonPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Button</h1>
        <p className="mt-2 text-muted-foreground">
          ユーザーのアクションを受け付けるボタンコンポーネント。複数のバリアントとサイズを持つ。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">バリアント</h2>
        <div className="flex flex-wrap gap-2">
          <Button variant="default">Default</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">サイズ</h2>
        <div className="flex flex-wrap items-center gap-2">
          <Button size="default">Default</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">
            <Mail className="size-4" />
          </Button>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">無効化</h2>
        <div className="flex flex-wrap gap-2">
          <Button disabled>Disabled</Button>
          <Button variant="outline" disabled>
            Disabled Outline
          </Button>
        </div>
      </section>
    </div>
  );
}
