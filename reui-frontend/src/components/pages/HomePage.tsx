import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

/**
 * ReUI を `components/ui` 経由で使うサンプル。
 */
export function HomePage() {
  return (
    <main className="mx-auto max-w-lg space-y-8 px-4 py-10">
      <div>
        <h1 className="text-2xl font-bold text-primary-800">reui-frontend</h1>
        <p className="mt-2 text-sm text-gray-600">
          shadcn-frontend と同様に{" "}
          <code className="rounded bg-gray-200 px-1">src/components/ui</code> から ReUI
          コンポーネントを import しています。
        </p>
      </div>

      <section className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Button</h2>
        <div className="flex flex-wrap gap-2">
          <Button>Primary</Button>
          <Button buttonStyle="secondary">Secondary</Button>
          <Button buttonStyle="plain">Plain</Button>
        </div>
      </section>

      <section className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">TextField（Input）</h2>
        <Input label="メールアドレス" type="email" placeholder="you@example.com" />
      </section>

      <section className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">CheckBox</h2>
        <Checkbox value="terms">利用規約に同意する</Checkbox>
      </section>

      <section className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Switch</h2>
        <Switch>通知を受け取る</Switch>
      </section>
    </main>
  );
}
