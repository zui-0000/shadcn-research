import { Spinner } from "~/components/ui/spinner";

export default function SpinnerPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Spinner</h1>
        <p className="mt-2 text-muted-foreground">
          読み込み中の状態を表示するためのローディングインジケーターです。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">デフォルトのスピナー</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Spinner />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">ローディングテキスト付き</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Spinner className="size-5" />
          <span className="text-sm text-muted-foreground">読み込み中...</span>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">サイズバリエーション</h2>
        <div className="flex flex-wrap items-center gap-6">
          <Spinner className="size-3" />
          <Spinner className="size-4" />
          <Spinner className="size-6" />
          <Spinner className="size-8" />
        </div>
      </section>
    </div>
  );
}
