import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "~/components/ui/input-group";

export default function InputGroupPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Input Group</h1>
        <p className="mt-2 text-muted-foreground">
          入力欄にプレフィックスやサフィックス（テキストやボタン）を付与できるグループコンポーネント。URL入力や金額入力などに利用できる。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">プレフィックス付き</h2>
        <div className="flex flex-wrap gap-2">
          <InputGroup className="max-w-sm">
            <InputGroupAddon align="inline-start">
              <InputGroupText>https://</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder="example.com" />
          </InputGroup>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">サフィックス付き</h2>
        <div className="flex flex-wrap gap-2">
          <InputGroup className="max-w-sm">
            <InputGroupInput placeholder="username" />
            <InputGroupAddon align="inline-end">
              <InputGroupText>.com</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </section>
    </div>
  );
}
