import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";

export default function ScrollAreaPage() {
  const items = Array.from({ length: 30 }, (_, i) => `項目 ${i + 1}`);
  const horizontalItems = Array.from({ length: 15 }, (_, i) => (
    <div
      key={i}
      className="flex size-24 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/50"
    >
      {i + 1}
    </div>
  ));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Scroll Area</h1>
        <p className="mt-2 text-muted-foreground">
          カスタムスクロールバー付きのスクロールエリア。長いリストやコンテンツの表示に適しています。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">縦スクロール</h2>
        <div className="h-[200px] w-full max-w-xs rounded-lg border border-border">
          <ScrollArea className="h-full">
            <div className="space-y-1 p-4">
              {items.map((item) => (
                <div
                  key={item}
                  className="rounded-md border border-border bg-muted/30 px-3 py-2 text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">横スクロール</h2>
        <div className="w-full max-w-md rounded-lg border border-border">
          <ScrollAreaPrimitive.Root className="relative">
            <ScrollAreaPrimitive.Viewport className="h-28 w-full">
              <div className="flex gap-2 p-4">{horizontalItems}</div>
            </ScrollAreaPrimitive.Viewport>
            <ScrollBar orientation="horizontal" />
            <ScrollAreaPrimitive.Corner />
          </ScrollAreaPrimitive.Root>
        </div>
      </section>
    </div>
  );
}
