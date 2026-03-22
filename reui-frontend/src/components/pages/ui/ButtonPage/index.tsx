import { Button } from "~/components/ui/button";

export default function ButtonPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Button</h1>
        <p className="mt-2 text-gray-600">
          ユーザーのアクションを受け付けるボタンコンポーネント。
          <code className="mx-1 rounded bg-gray-100 px-1 text-sm">buttonStyle</code> と
          <code className="mx-1 rounded bg-gray-100 px-1 text-sm">color</code>{" "}
          で見た目を変更できる。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">スタイル (buttonStyle)</h2>
        <div className="flex flex-wrap gap-2">
          <Button buttonStyle="primary">Primary</Button>
          <Button buttonStyle="secondary">Secondary</Button>
          <Button buttonStyle="plain">Plain</Button>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">カラー (color)</h2>
        <div className="flex flex-wrap gap-2">
          <Button color="primary">Primary</Button>
          <Button color="green">Green</Button>
          <Button color="red">Red</Button>
          <Button color="gray">Gray</Button>
        </div>
        <p className="text-sm text-gray-500">Secondary スタイルとの組み合わせ</p>
        <div className="flex flex-wrap gap-2">
          <Button buttonStyle="secondary" color="primary">
            Primary
          </Button>
          <Button buttonStyle="secondary" color="green">
            Green
          </Button>
          <Button buttonStyle="secondary" color="red">
            Red
          </Button>
          <Button buttonStyle="secondary" color="gray">
            Gray
          </Button>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">無効化 (isDisabled)</h2>
        <div className="flex flex-wrap gap-2">
          <Button isDisabled>Primary Disabled</Button>
          <Button buttonStyle="secondary" isDisabled>
            Secondary Disabled
          </Button>
          <Button buttonStyle="plain" isDisabled>
            Plain Disabled
          </Button>
        </div>
      </section>
    </div>
  );
}
