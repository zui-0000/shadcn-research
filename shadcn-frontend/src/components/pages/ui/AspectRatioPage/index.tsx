import { AspectRatio } from "~/components/ui/aspect-ratio";

export default function AspectRatioPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Aspect Ratio</h1>
        <p className="mt-2 text-muted-foreground">
          コンテンツの縦横比を固定して表示するためのコンポーネントです。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">16:9 比率</h2>
        <div className="flex flex-wrap gap-4">
          <AspectRatio ratio={16 / 9} className="w-full max-w-md">
            <div className="flex h-full w-full items-center justify-center rounded-lg bg-muted text-muted-foreground">
              16:9
            </div>
          </AspectRatio>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4:3 比率</h2>
        <div className="flex flex-wrap gap-4">
          <AspectRatio ratio={4 / 3} className="w-full max-w-md">
            <div className="flex h-full w-full items-center justify-center rounded-lg bg-muted text-muted-foreground">
              4:3
            </div>
          </AspectRatio>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1:1 比率（正方形）</h2>
        <div className="flex flex-wrap gap-4">
          <AspectRatio ratio={1} className="w-48">
            <div className="flex h-full w-full items-center justify-center rounded-lg bg-muted text-muted-foreground">
              1:1
            </div>
          </AspectRatio>
        </div>
      </section>
    </div>
  );
}
