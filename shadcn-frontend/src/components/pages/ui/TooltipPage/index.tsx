import { Button } from "~/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~/components/ui/tooltip";

export default function TooltipPage() {
  return (
    <TooltipProvider>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Tooltip</h1>
          <p className="mt-2 text-muted-foreground">
            ホバー時に補足説明を表示するツールチップコンポーネント。アイコンやボタンの用途を説明する際に便利です。
          </p>
        </div>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">ボタンにホバー</h2>
          <div className="flex flex-wrap gap-2">
            <Tooltip>
              <TooltipTrigger>
                <Button variant="outline">ホバーでツールチップ表示</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>これはツールチップの内容です</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">表示位置（side prop）</h2>
          <div className="flex flex-wrap gap-4">
            <Tooltip>
              <TooltipTrigger>
                <Button variant="outline">上 (top)</Button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>上に表示</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <Button variant="outline">下 (bottom)</Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>下に表示</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <Button variant="outline">左 (left)</Button>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>左に表示</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <Button variant="outline">右 (right)</Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>右に表示</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </section>
      </div>
    </TooltipProvider>
  );
}
