import { Item } from "react-stately";
import { Select } from "~/components/ui/select";

export default function SelectPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Select (SelectField)</h1>
        <p className="mt-2 text-gray-600">
          ドロップダウンリストから1つを選択するコンポーネント。
          <code className="mx-1 rounded bg-gray-100 px-1 text-sm">Item</code>{" "}
          コンポーネントで選択肢を定義する。 アイコンの提供には{" "}
          <code className="mx-1 rounded bg-gray-100 px-1 text-sm">ReUiIconProvider</code> が必要。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">基本</h2>
        <div className="max-w-sm">
          <Select label="都道府県" placeholder="選択してください">
            <Item key="tokyo">東京都</Item>
            <Item key="osaka">大阪府</Item>
            <Item key="kanagawa">神奈川県</Item>
            <Item key="aichi">愛知県</Item>
            <Item key="fukuoka">福岡県</Item>
          </Select>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">デフォルト値あり</h2>
        <div className="max-w-sm">
          <Select label="言語" defaultSelectedKey="ja">
            <Item key="ja">日本語</Item>
            <Item key="en">English</Item>
            <Item key="zh">中文</Item>
            <Item key="ko">한국어</Item>
          </Select>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">無効化</h2>
        <div className="max-w-sm">
          <Select label="カテゴリ" isDisabled placeholder="選択できません">
            <Item key="a">カテゴリ A</Item>
            <Item key="b">カテゴリ B</Item>
          </Select>
        </div>
      </section>
    </div>
  );
}
