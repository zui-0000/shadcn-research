import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

export default function SelectPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Select</h1>
        <p className="mt-2 text-muted-foreground">
          ドロップダウンから1つのオプションを選択するセレクトコンポーネント。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">基本的なセレクト</h2>
        <Select defaultValue="apple">
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="選択してください" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">りんご</SelectItem>
            <SelectItem value="banana">バナナ</SelectItem>
            <SelectItem value="orange">オレンジ</SelectItem>
            <SelectItem value="grape">ぶどう</SelectItem>
          </SelectContent>
        </Select>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">プレースホルダー付き</h2>
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="果物を選択..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="mango">マンゴー</SelectItem>
            <SelectItem value="strawberry">いちご</SelectItem>
            <SelectItem value="peach">もも</SelectItem>
          </SelectContent>
        </Select>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">無効化</h2>
        <Select disabled defaultValue="disabled-value">
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="無効なセレクト" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="disabled-value">無効（選択済み）</SelectItem>
            <SelectItem value="option2">オプション2</SelectItem>
          </SelectContent>
        </Select>
      </section>
    </div>
  );
}
