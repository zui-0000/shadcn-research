import { CheckBox, CheckBoxGroup } from "~/components/ui/checkbox";

export default function CheckboxPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Checkbox</h1>
        <p className="mt-2 text-gray-600">
          単体または複数選択のチェックボックスコンポーネント。
          <code className="mx-1 rounded bg-gray-100 px-1 text-sm">CheckBoxGroup</code>{" "}
          でグループ化できる。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">単体チェックボックス</h2>
        <div className="space-y-2">
          <CheckBox value="terms">利用規約に同意する</CheckBox>
          <CheckBox value="newsletter" defaultSelected>
            メールマガジンを受け取る
          </CheckBox>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">チェックボックスグループ</h2>
        <CheckBoxGroup label="好きなフルーツを選んでください">
          <CheckBox value="apple">りんご</CheckBox>
          <CheckBox value="banana">バナナ</CheckBox>
          <CheckBox value="orange">オレンジ</CheckBox>
          <CheckBox value="grape">ぶどう</CheckBox>
        </CheckBoxGroup>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">説明文付き</h2>
        <CheckBox value="admin" description="管理者権限を付与します。慎重に選択してください。">
          管理者として設定する
        </CheckBox>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">エラー状態</h2>
        <CheckBox value="required" isInvalid errorMessage="この項目は必須です">
          必須項目に同意する
        </CheckBox>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">無効化</h2>
        <div className="space-y-2">
          <CheckBox value="disabled" isDisabled>
            無効化（未選択）
          </CheckBox>
          <CheckBox value="disabled-checked" isDisabled defaultSelected>
            無効化（選択済み）
          </CheckBox>
        </div>
      </section>
    </div>
  );
}
