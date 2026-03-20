import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export default function DialogPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dialog</h1>
        <p className="mt-2 text-muted-foreground">
          モーダルウィンドウでコンテンツを表示するダイアログコンポーネントです。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">フォーム付きダイアログ（プロフィール編集）</h2>
        <div className="flex flex-wrap gap-2">
          <Dialog>
            <DialogTrigger>
              <Button>プロフィールを編集</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>プロフィールを編集</DialogTitle>
                <DialogDescription>
                  名前とメールアドレスを変更できます。変更内容は保存後に反映されます。
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">名前</Label>
                  <Input id="name" defaultValue="山田 太郎" placeholder="お名前を入力" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">メールアドレス</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="yamada@example.com"
                    placeholder="メールアドレスを入力"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">保存</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </div>
  );
}
