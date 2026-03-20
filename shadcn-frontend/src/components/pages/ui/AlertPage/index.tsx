import { AlertCircle, Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";

export default function AlertPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Alert</h1>
        <p className="mt-2 text-muted-foreground">
          重要な情報や注意事項をユーザーに伝えるためのアラートコンポーネントです。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">デフォルトアラート</h2>
        <div className="flex flex-wrap gap-2">
          <Alert>
            <Terminal />
            <AlertTitle>接続成功</AlertTitle>
            <AlertDescription>サーバーへの接続が正常に確立されました。</AlertDescription>
          </Alert>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">エラーアラート（destructive）</h2>
        <div className="flex flex-wrap gap-2">
          <Alert variant="destructive">
            <AlertCircle />
            <AlertTitle>エラーが発生しました</AlertTitle>
            <AlertDescription>
              データの読み込みに失敗しました。しばらくしてから再度お試しください。
            </AlertDescription>
          </Alert>
        </div>
      </section>
    </div>
  );
}
