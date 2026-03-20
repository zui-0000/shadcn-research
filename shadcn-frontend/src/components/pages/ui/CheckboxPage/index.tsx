import { useState } from "react";
import { Checkbox } from "~/components/ui/checkbox";
import { Label } from "~/components/ui/label";

export default function CheckboxPage() {
  const [controlledChecked, setControlledChecked] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Checkbox</h1>
        <p className="mt-2 text-muted-foreground">
          オン・オフの二択選択を受け付けるチェックボックスコンポーネント。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">ラベル付き（デフォルト）</h2>
        <div className="flex items-center gap-2">
          <Checkbox id="default-checkbox" />
          <Label htmlFor="default-checkbox">同意する</Label>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">チェック済み</h2>
        <div className="flex items-center gap-2">
          <Checkbox id="checked-checkbox" defaultChecked />
          <Label htmlFor="checked-checkbox">チェック済みの状態</Label>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">無効化</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Checkbox id="disabled-checkbox" disabled />
            <Label htmlFor="disabled-checkbox">無効（未チェック）</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="disabled-checked-checkbox" disabled defaultChecked />
            <Label htmlFor="disabled-checked-checkbox">無効（チェック済み）</Label>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">制御された例（useState）</h2>
        <div className="flex items-center gap-2">
          <Checkbox
            id="controlled-checkbox"
            checked={controlledChecked}
            onCheckedChange={(checked) => setControlledChecked(checked === true)}
          />
          <Label htmlFor="controlled-checkbox">
            制御されたチェックボックス: {controlledChecked ? "ON" : "OFF"}
          </Label>
        </div>
      </section>
    </div>
  );
}
