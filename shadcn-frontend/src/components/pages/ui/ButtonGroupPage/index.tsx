import { Button } from "~/components/ui/button";
import { ButtonGroup } from "~/components/ui/button-group";

export default function ButtonGroupPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Button Group</h1>
        <p className="mt-2 text-muted-foreground">
          複数のボタンを視覚的にグループ化し、関連する操作をまとめて表示するコンポーネント。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">ボタングループ</h2>
        <div className="flex flex-wrap gap-2">
          <ButtonGroup>
            <Button>ボタン 1</Button>
            <Button>ボタン 2</Button>
            <Button>ボタン 3</Button>
          </ButtonGroup>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">outline バリアント</h2>
        <div className="flex flex-wrap gap-2">
          <ButtonGroup>
            <Button variant="outline">保存</Button>
            <Button variant="outline">下書き</Button>
            <Button variant="outline">キャンセル</Button>
          </ButtonGroup>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">縦方向</h2>
        <div className="flex flex-wrap gap-2">
          <ButtonGroup orientation="vertical">
            <Button>上</Button>
            <Button>中</Button>
            <Button>下</Button>
          </ButtonGroup>
        </div>
      </section>
    </div>
  );
}
