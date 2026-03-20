import { FileQuestionIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "~/components/ui/empty";

export default function EmptyPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Empty</h1>
        <p className="mt-2 text-muted-foreground">
          データが存在しない場合の空状態を表示するコンポーネントです。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">基本的な空状態</h2>
        <div className="flex flex-wrap gap-4">
          <Empty className="min-h-[200px] w-full max-w-md border">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <FileQuestionIcon />
              </EmptyMedia>
              <EmptyTitle>データがありません</EmptyTitle>
              <EmptyDescription>
                まだアイテムが追加されていません。新しいアイテムを追加して始めましょう。
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button size="sm">アイテムを追加</Button>
            </EmptyContent>
          </Empty>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">ミニマルな空状態</h2>
        <div className="flex flex-wrap gap-4">
          <Empty className="min-h-[150px] w-full max-w-sm border">
            <EmptyHeader>
              <EmptyTitle>結果が見つかりません</EmptyTitle>
              <EmptyDescription>検索条件を変更して再度お試しください。</EmptyDescription>
            </EmptyHeader>
          </Empty>
        </div>
      </section>
    </div>
  );
}
