import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

export default function AvatarPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Avatar</h1>
        <p className="mt-2 text-muted-foreground">
          ユーザーのプロフィール画像を表示するコンポーネント。画像の読み込みに失敗した場合はフォールバック（イニシャル等）を表示できます。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">画像付きアバター</h2>
        <div className="flex flex-wrap gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">フォールバック（イニシャル）</h2>
        <div className="flex flex-wrap gap-4">
          <Avatar>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">サイズバリエーション</h2>
        <div className="flex flex-wrap items-end gap-4">
          <Avatar size="sm">
            <AvatarImage src="https://github.com/shadcn.png" alt="small" />
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
          <Avatar size="default">
            <AvatarImage src="https://github.com/shadcn.png" alt="default" />
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarImage src="https://github.com/shadcn.png" alt="large" />
            <AvatarFallback>LG</AvatarFallback>
          </Avatar>
        </div>
      </section>
    </div>
  );
}
