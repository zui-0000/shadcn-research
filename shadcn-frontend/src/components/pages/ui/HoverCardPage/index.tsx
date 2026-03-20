import { HoverCard, HoverCardContent, HoverCardTrigger } from "~/components/ui/hover-card";

export default function HoverCardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Hover Card</h1>
        <p className="mt-2 text-muted-foreground">
          ホバー時にカード形式で詳細情報を表示するコンポーネント。ユーザープロフィールのプレビューなどに活用できます。
        </p>
      </div>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">リンク・テキストにホバー</h2>
        <div className="flex flex-wrap gap-2">
          <HoverCard>
            <HoverCardTrigger>
              <a href="#" className="text-primary underline underline-offset-4 hover:no-underline">
                @username
              </a>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-lg font-bold text-primary">
                    U
                  </div>
                  <div>
                    <h4 className="font-semibold">username</h4>
                    <p className="text-xs text-muted-foreground">@username</p>
                  </div>
                </div>
                <p className="text-sm">
                  サンプルユーザーのプロフィールプレビューです。ホバー時に表示されます。
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </section>
    </div>
  );
}
