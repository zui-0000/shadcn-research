import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "~/components/ui/resizable";

export default function ResizablePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Resizable</h1>
        <p className="mt-2 text-muted-foreground">
          ドラッグでサイズ変更できるペインレイアウト。ダッシュボードやエディタの分割ペインに活用できます。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">水平分割（2ペイン）</h2>
        <div className="h-[200px] w-full max-w-3xl rounded-lg border border-border">
          <ResizablePanelGroup orientation="horizontal">
            <ResizablePanel defaultSize={50} minSize={20}>
              <div className="flex h-full items-center justify-center bg-muted/30 p-4">
                <span className="text-sm text-muted-foreground">左ペイン</span>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50} minSize={20}>
              <div className="flex h-full items-center justify-center bg-muted/30 p-4">
                <span className="text-sm text-muted-foreground">右ペイン</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">垂直分割（2ペイン）</h2>
        <div className="h-[250px] w-full max-w-3xl rounded-lg border border-border">
          <ResizablePanelGroup orientation="vertical">
            <ResizablePanel defaultSize={50} minSize={20}>
              <div className="flex h-full items-center justify-center bg-muted/30 p-4">
                <span className="text-sm text-muted-foreground">上ペイン</span>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50} minSize={20}>
              <div className="flex h-full items-center justify-center bg-muted/30 p-4">
                <span className="text-sm text-muted-foreground">下ペイン</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </section>
    </div>
  );
}
