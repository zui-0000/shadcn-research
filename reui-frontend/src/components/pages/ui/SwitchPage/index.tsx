import { Switch } from "~/components/ui/switch";

export default function SwitchPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Switch</h1>
        <p className="mt-2 text-gray-600">
          オン/オフを切り替えるスイッチコンポーネント。
          <code className="mx-1 rounded bg-gray-100 px-1 text-sm">labelPosition</code>{" "}
          でラベルの位置を変更できる。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">基本</h2>
        <div className="space-y-3">
          <Switch>通知を受け取る</Switch>
          <Switch defaultSelected>ダークモードを有効にする</Switch>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">ラベル位置 (labelPosition)</h2>
        <div className="space-y-3">
          <Switch labelPosition="after">ラベルが後ろ（デフォルト）</Switch>
          <Switch labelPosition="before">ラベルが前</Switch>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">無効化 (isDisabled)</h2>
        <div className="space-y-3">
          <Switch isDisabled>無効化（オフ）</Switch>
          <Switch isDisabled defaultSelected>
            無効化（オン）
          </Switch>
        </div>
      </section>
    </div>
  );
}
