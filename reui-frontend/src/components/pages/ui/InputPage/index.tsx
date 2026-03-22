import { EnvelopeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Input } from "~/components/ui/input";

export default function InputPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Input (TextField)</h1>
        <p className="mt-2 text-gray-600">
          テキスト入力フィールドコンポーネント。label や description、errorMessage などを props
          で指定できる。
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">基本</h2>
        <div className="max-w-sm space-y-3">
          <Input label="名前" placeholder="山田 太郎" />
          <Input label="メールアドレス" type="email" placeholder="you@example.com" />
          <Input label="パスワード" type="password" placeholder="••••••••" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">説明文付き</h2>
        <div className="max-w-sm">
          <Input
            label="ユーザー名"
            placeholder="username"
            description="3〜20文字の英数字で入力してください"
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">エラー状態</h2>
        <div className="max-w-sm">
          <Input
            label="メールアドレス"
            type="email"
            defaultValue="invalid-email"
            isInvalid
            errorMessage="有効なメールアドレスを入力してください"
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">アイコン付き</h2>
        <div className="max-w-sm space-y-3">
          <Input label="検索" placeholder="キーワードを入力" leadingIcon={MagnifyingGlassIcon} />
          <Input
            label="メールアドレス"
            type="email"
            placeholder="you@example.com"
            trailingIcon={EnvelopeIcon}
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">無効化・読み取り専用</h2>
        <div className="max-w-sm space-y-3">
          <Input label="無効化" defaultValue="編集不可" isDisabled />
          <Input label="読み取り専用" defaultValue="読み取り専用の値" isReadOnly />
        </div>
      </section>
    </div>
  );
}
