import { NativeSelect, NativeSelectOption } from "~/components/ui/native-select";

export default function NativeSelectPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Native Select</h1>
        <p className="mt-2 text-muted-foreground">
          ネイティブの select
          要素をスタイルしたコンポーネント。軽量でアクセシビリティに優れ、フォーム送信もそのまま利用できる。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">基本</h2>
        <div className="flex flex-wrap gap-2">
          <NativeSelect defaultValue="vue" className="min-w-[160px]">
            <NativeSelectOption value="">フレームワークを選択</NativeSelectOption>
            <NativeSelectOption value="react">React</NativeSelectOption>
            <NativeSelectOption value="vue">Vue</NativeSelectOption>
            <NativeSelectOption value="angular">Angular</NativeSelectOption>
            <NativeSelectOption value="svelte">Svelte</NativeSelectOption>
          </NativeSelect>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">無効化</h2>
        <div className="flex flex-wrap gap-2">
          <NativeSelect disabled defaultValue="angular" className="min-w-[160px]">
            <NativeSelectOption value="react">React</NativeSelectOption>
            <NativeSelectOption value="vue">Vue</NativeSelectOption>
            <NativeSelectOption value="angular">Angular</NativeSelectOption>
          </NativeSelect>
        </div>
      </section>
    </div>
  );
}
