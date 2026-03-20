import { Slider } from "~/components/ui/slider";

export default function SliderPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Slider</h1>
        <p className="mt-2 text-muted-foreground">
          数値の範囲をドラッグで選択するスライダーコンポーネント。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">デフォルト</h2>
        <div className="max-w-sm">
          <Slider />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">デフォルト値付き</h2>
        <div className="max-w-sm">
          <Slider defaultValue={[50]} />
          <p className="mt-2 text-sm text-muted-foreground">初期値: 50</p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">ステップ付き</h2>
        <div className="max-w-sm">
          <Slider defaultValue={[25]} max={100} step={25} />
          <p className="mt-2 text-sm text-muted-foreground">ステップ: 25 (0, 25, 50, 75, 100)</p>
        </div>
      </section>
    </div>
  );
}
