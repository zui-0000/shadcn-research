import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { Button } from "~/components/ui/button";

export default function AlertDialogPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Alert Dialog</h1>
        <p className="mt-2 text-muted-foreground">
          重要な確認や警告を行うためのモーダルダイアログです。削除確認などに使用します。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">確認ダイアログ（ボタンで開く）</h2>
        <div className="flex flex-wrap gap-2">
          <AlertDialog>
            <AlertDialogTrigger>
              <Button variant="destructive">削除する</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>本当に削除しますか？</AlertDialogTitle>
                <AlertDialogDescription>
                  この操作は取り消せません。ファイルが完全に削除されます。
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>キャンセル</AlertDialogCancel>
                <AlertDialogAction>削除</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </section>
    </div>
  );
}
