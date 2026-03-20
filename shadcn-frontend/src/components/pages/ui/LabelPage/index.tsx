import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export default function LabelPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Label</h1>
        <p className="mt-2 text-muted-foreground">
          フォーム要素にラベルを関連付けるコンポーネント。アクセシビリティ向上に役立つ。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Input と組み合わせ</h2>
        <div className="max-w-sm space-y-2">
          <Label htmlFor="email-input">メールアドレス</Label>
          <Input id="email-input" type="email" placeholder="email@example.com" />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Checkbox と組み合わせ</h2>
        <div className="flex items-center gap-2">
          <Checkbox id="terms-checkbox" />
          <Label htmlFor="terms-checkbox">利用規約に同意する</Label>
        </div>
      </section>
    </div>
  );
}
