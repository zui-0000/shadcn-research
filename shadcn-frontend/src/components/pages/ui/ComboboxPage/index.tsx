import {
  Combobox,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "~/components/ui/combobox";

const FRAMEWORKS = ["React", "Vue", "Angular", "Svelte", "Next.js"];

export default function ComboboxPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Combobox</h1>
        <p className="mt-2 text-muted-foreground">
          検索・フィルタリング可能なオプションリスト付き入力コンポーネント。入力で候補を絞り込み、リストから選択できる。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">基本的なコンボボックス（検索付き）</h2>
        <div className="flex w-[280px] flex-wrap gap-2">
          <Combobox items={FRAMEWORKS}>
            <ComboboxInput placeholder="フレームワークを検索..." aria-label="フレームワーク選択" />
            <ComboboxContent>
              <ComboboxList>
                <ComboboxCollection>
                  {(item) => <ComboboxItem value={item}>{item}</ComboboxItem>}
                </ComboboxCollection>
                <ComboboxEmpty>該当する選択肢がありません</ComboboxEmpty>
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>
      </section>
    </div>
  );
}
