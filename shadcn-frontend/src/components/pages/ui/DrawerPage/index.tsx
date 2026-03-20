import { Button } from "~/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";

export default function DrawerPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Drawer</h1>
        <p className="mt-2 text-muted-foreground">
          画面の端からスライドして表示されるドロワーコンポーネントです。モバイル向けのUIに最適です。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">下から表示するドロワー</h2>
        <div className="flex flex-wrap gap-2">
          <Drawer direction="bottom">
            <DrawerTrigger asChild>
              <Button>開く</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>ドロワータイトル</DrawerTitle>
                <DrawerDescription>ここにドロワーの説明文を表示できます。</DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">
                  ドロワー内に任意のコンテンツを配置できます。
                </p>
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">閉じる</Button>
                </DrawerClose>
                <Button>確定</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </section>
    </div>
  );
}
