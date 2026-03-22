import { Radio, RadioGroup } from "~/components/ui/radio-group";

export default function RadioGroupPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Radio Group</h1>
        <p className="mt-2 text-gray-600">
          複数の選択肢から1つを選ぶラジオボタングループコンポーネント。
          <code className="mx-1 rounded bg-gray-100 px-1 text-sm">RadioGroup</code> と
          <code className="mx-1 rounded bg-gray-100 px-1 text-sm">Radio</code> をセットで使用する。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">基本</h2>
        <RadioGroup label="お好みの連絡方法">
          <Radio value="email">メール</Radio>
          <Radio value="phone">電話</Radio>
          <Radio value="sms">SMS</Radio>
        </RadioGroup>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">デフォルト値あり</h2>
        <RadioGroup label="配送方法" defaultValue="standard">
          <Radio value="standard">通常配送（3〜5営業日）</Radio>
          <Radio value="express">速達配送（翌日）</Radio>
          <Radio value="same-day">当日配送（追加料金あり）</Radio>
        </RadioGroup>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">無効化</h2>
        <RadioGroup label="プラン選択" isDisabled defaultValue="free">
          <Radio value="free">フリープラン</Radio>
          <Radio value="pro">Proプラン</Radio>
          <Radio value="enterprise">Enterpriseプラン</Radio>
        </RadioGroup>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">個別無効化</h2>
        <RadioGroup label="サブスクリプション">
          <Radio value="monthly">月払い</Radio>
          <Radio value="yearly">年払い（20% お得）</Radio>
          <Radio value="lifetime" isDisabled>
            買い切り（現在非対応）
          </Radio>
        </RadioGroup>
      </section>
    </div>
  );
}
