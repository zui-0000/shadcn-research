import { Field, FieldContent, FieldError, FieldLabel } from "~/components/ui/field";
import { Input } from "~/components/ui/input";

export default function FieldPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Field</h1>
        <p className="mt-2 text-muted-foreground">
          ラベル、説明、エラーメッセージを統合したフォームフィールドのラッパーコンポーネント。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">ラベル付き入力</h2>
        <div className="flex flex-wrap gap-2">
          <Field className="max-w-sm">
            <FieldLabel>メールアドレス</FieldLabel>
            <FieldContent>
              <Input type="email" placeholder="email@example.com" />
            </FieldContent>
          </Field>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">エラーメッセージ付き</h2>
        <div className="flex flex-wrap gap-2">
          <Field className="max-w-sm" data-invalid>
            <FieldLabel>パスワード</FieldLabel>
            <FieldContent>
              <Input type="password" placeholder="8文字以上で入力" aria-invalid />
              <FieldError>パスワードは8文字以上で入力してください</FieldError>
            </FieldContent>
          </Field>
        </div>
      </section>
    </div>
  );
}
