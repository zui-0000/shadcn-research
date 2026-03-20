import { Label } from "~/components/ui/label";
import { Switch } from "~/components/ui/switch";

export default function SwitchPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Switch</h1>
        <p className="mt-2 text-muted-foreground">
          オン・オフを切り替えるトグルスイッチコンポーネント。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">ラベル付き（デフォルト）</h2>
        <div className="flex items-center gap-2">
          <Switch id="default-switch" />
          <Label htmlFor="default-switch">通知を有効にする</Label>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">チェック済み</h2>
        <div className="flex items-center gap-2">
          <Switch id="checked-switch" defaultChecked />
          <Label htmlFor="checked-switch">ダークモード（ON）</Label>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">無効化</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Switch id="disabled-switch" disabled />
            <Label htmlFor="disabled-switch">無効（OFF）</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="disabled-checked-switch" disabled defaultChecked />
            <Label htmlFor="disabled-checked-switch">無効（ON）</Label>
          </div>
        </div>
      </section>
    </div>
  );
}
