import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { Toaster } from "~/components/ui/sonner";

export default function SonnerPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Sonner (Toast)</h1>
        <p className="mt-2 text-muted-foreground">
          画面上に一時的な通知メッセージを表示するトーストコンポーネント。成功・エラー・情報など様々な種類の通知を表示できます。
        </p>
      </div>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">基本のトースト</h2>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" onClick={() => toast("ボタンからトーストを表示しました")}>
            トーストを表示
          </Button>
        </div>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">成功・エラートースト</h2>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" onClick={() => toast.success("保存が完了しました")}>
            成功トースト
          </Button>
          <Button variant="outline" onClick={() => toast.error("エラーが発生しました")}>
            エラートースト
          </Button>
          <Button variant="outline" onClick={() => toast.info("情報メッセージです")}>
            情報トースト
          </Button>
          <Button variant="outline" onClick={() => toast.warning("警告メッセージです")}>
            警告トースト
          </Button>
        </div>
      </section>
      <Toaster />
    </div>
  );
}
