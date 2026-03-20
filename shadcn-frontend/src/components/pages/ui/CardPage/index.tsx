import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function CardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Card</h1>
        <p className="mt-2 text-muted-foreground">
          コンテンツを整理して表示するためのカードコンポーネント。ヘッダー、本文、フッターのセクションで構成され、通知やアイテム表示などに利用できます。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">基本的なカード</h2>
        <div className="flex flex-wrap gap-4">
          <Card className="w-80">
            <CardHeader>
              <CardTitle>カードタイトル</CardTitle>
              <CardDescription>カードの説明文をここに記述します。</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                ここがカードのメインコンテンツ領域です。テキストや画像、その他の要素を配置できます。
              </p>
            </CardContent>
            <CardFooter>
              <Button size="sm">アクション</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">通知風カード</h2>
        <div className="flex flex-wrap gap-4">
          <Card className="w-80 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="flex size-2 rounded-full bg-primary" />
                新しいお知らせ
              </CardTitle>
              <CardDescription>システムからの通知メッセージです。</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                アップデートが完了しました。アプリを再起動して最新の機能をご利用ください。
              </p>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button size="sm">確認する</Button>
              <Button size="sm" variant="outline">
                後で
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
}
