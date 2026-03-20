import { Skeleton } from "~/components/ui/skeleton";

export default function SkeletonPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Skeleton</h1>
        <p className="mt-2 text-muted-foreground">
          コンテンツの読み込み中に表示するプレースホルダー。パルスアニメーションでローディング状態を示します。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">カードレイアウトのスケルトン</h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col gap-3 rounded-xl border p-4 w-64">
            <div className="flex items-center gap-3">
              <Skeleton className="size-10 shrink-0 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-3 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </div>
            <Skeleton className="h-20 w-full" />
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">テキストブロックのスケルトン</h2>
        <div className="flex flex-wrap gap-4">
          <div className="w-96 space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        </div>
      </section>
    </div>
  );
}
