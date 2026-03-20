import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";

export default function RadioGroupPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">RadioGroup</h1>
        <p className="mt-2 text-muted-foreground">
          複数選択肢から1つを選ぶラジオボタングループコンポーネント。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">基本的なラジオグループ</h2>
        <RadioGroup defaultValue="option1" className="space-y-2">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option1" id="option1" />
            <Label htmlFor="option1">オプション 1</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option2" id="option2" />
            <Label htmlFor="option2">オプション 2</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option3" id="option3" />
            <Label htmlFor="option3">オプション 3</Label>
          </div>
        </RadioGroup>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">無効化</h2>
        <RadioGroup defaultValue="disabled2" disabled className="space-y-2">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="disabled1" id="disabled1" />
            <Label htmlFor="disabled1">無効なオプション 1</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="disabled2" id="disabled2" />
            <Label htmlFor="disabled2">無効なオプション 2（選択済み）</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="disabled3" id="disabled3" />
            <Label htmlFor="disabled3">無効なオプション 3</Label>
          </div>
        </RadioGroup>
      </section>
    </div>
  );
}
