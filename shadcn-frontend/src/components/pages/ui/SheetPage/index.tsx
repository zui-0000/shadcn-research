import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";

export default function SheetPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Sheet</h1>
        <p className="mt-2 text-muted-foreground">
          画面の端からスライドして表示されるサイドパネルです。メニューや詳細情報の表示に使用します。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">右側から表示</h2>
        <div className="flex flex-wrap gap-2">
          <Sheet>
            <SheetTrigger>
              <Button>右から開く</Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>右側パネル</SheetTitle>
                <SheetDescription>
                  画面の右側からスライドして表示されるシートです。
                </SheetDescription>
              </SheetHeader>
              <div className="py-4">
                <p className="text-sm text-muted-foreground">
                  ここにサイドメニューや詳細情報などのコンテンツを配置できます。
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">左側から表示</h2>
        <div className="flex flex-wrap gap-2">
          <Sheet>
            <SheetTrigger>
              <Button variant="outline">左から開く</Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>左側パネル</SheetTitle>
                <SheetDescription>
                  画面の左側からスライドして表示されるシートです。
                </SheetDescription>
              </SheetHeader>
              <div className="py-4">
                <p className="text-sm text-muted-foreground">
                  ナビゲーションメニューやフィルターなどに適しています。
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </section>
    </div>
  );
}
