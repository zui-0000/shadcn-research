import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "~/components/ui/collapsible";

export default function CollapsiblePage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Collapsible</h1>
        <p className="mt-2 text-muted-foreground">
          クリックで展開・折りたたみができるセクションコンポーネント。アコーディオンや詳細表示に活用できます。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">非制御モード（内部状態）</h2>
        <div className="w-full max-w-md">
          <Collapsible>
            <CollapsibleTrigger className="flex h-8 w-full items-center justify-between rounded-lg border border-input bg-background px-2.5 py-1.5 text-sm font-medium outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring">
              詳細を見る
              <ChevronDownIcon className="size-4 transition-transform [[data-panel-open]_&]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="rounded-b-lg border border-t-0 border-border bg-muted/30 px-4 py-3">
                <p className="text-sm text-muted-foreground">
                  折りたたみ可能なコンテンツです。トリガーをクリックすると表示・非表示が切り替わります。
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">制御モード（useState）</h2>
        <div className="w-full max-w-md space-y-2">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => setOpen(!open)}>
              {open ? "閉じる" : "開く"}
            </Button>
            <span className="flex items-center text-sm text-muted-foreground">
              状態: {open ? "開" : "閉"}
            </span>
          </div>
          <Collapsible open={open} onOpenChange={setOpen}>
            <CollapsibleTrigger className="flex h-8 w-full items-center justify-between rounded-lg border border-input bg-background px-2.5 py-1.5 text-sm font-medium hover:bg-muted">
              制御されたコンテンツ
              <ChevronDownIcon className="size-4 transition-transform [[data-state=open]_&]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="rounded-b-lg border border-t-0 border-border bg-muted/30 px-4 py-3">
                <p className="text-sm text-muted-foreground">
                  親コンポーネントのuseStateで開閉状態を制御しています。
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>
    </div>
  );
}
