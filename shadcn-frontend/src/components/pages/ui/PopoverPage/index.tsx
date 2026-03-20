import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";

export default function PopoverPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Popover</h1>
        <p className="mt-2 text-muted-foreground">
          クリックで開閉するポップオーバーコンポーネント。フォームや設定をインラインで表示する際に使用します。
        </p>
      </div>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">フォーム付きポップオーバー（寸法入力）</h2>
        <div className="flex flex-wrap gap-2">
          <Popover>
            <PopoverTrigger>
              <Button variant="outline">寸法を設定</Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium">画像のサイズ</h4>
                  <p className="text-sm text-muted-foreground">幅と高さを入力してください</p>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-2">
                      <Label htmlFor="width">幅</Label>
                      <Input id="width" type="number" placeholder="1920" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="height">高さ</Label>
                      <Input id="height" type="number" placeholder="1080" />
                    </div>
                  </div>
                  <Button size="sm" className="w-full">
                    適用
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </section>
    </div>
  );
}
