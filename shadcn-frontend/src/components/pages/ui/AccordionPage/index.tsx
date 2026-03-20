import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

export default function AccordionPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Accordion</h1>
        <p className="mt-2 text-muted-foreground">
          クリックで展開・折りたたみができるアコーディオンコンポーネント。FAQや設定セクションの表示に最適です。
        </p>
      </div>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">基本的なアコーディオン</h2>
        <p className="text-sm text-muted-foreground">
          3つの項目を持つアコーディオン。各項目に異なるコンテンツを表示
        </p>
        <Accordion className="w-full max-w-xl">
          <AccordionItem value="item-1">
            <AccordionTrigger>プロジェクトについて</AccordionTrigger>
            <AccordionContent>
              このプロジェクトは shadcn UI コンポーネントのリサーチ用です。 React + TypeScript +
              Vite で構築されています。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>インストール方法</AccordionTrigger>
            <AccordionContent>
              npx shadcn@latest add コマンドでコンポーネントを追加できます。
              必要な依存関係は自動的にインストールされます。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>カスタマイズ</AccordionTrigger>
            <AccordionContent>
              コンポーネントのソースは src/components/ui/ に配置されているため、
              自由にカスタマイズできます。Tailwind CSS でスタイルを調整してください。
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">複数展開可能</h2>
        <p className="text-sm text-muted-foreground">
          multiple プロップで複数の項目を同時に展開可能
        </p>
        <Accordion multiple className="w-full max-w-xl">
          <AccordionItem value="multi-1">
            <AccordionTrigger>項目 A</AccordionTrigger>
            <AccordionContent>項目 A の内容です。</AccordionContent>
          </AccordionItem>
          <AccordionItem value="multi-2">
            <AccordionTrigger>項目 B</AccordionTrigger>
            <AccordionContent>項目 B の内容です。</AccordionContent>
          </AccordionItem>
          <AccordionItem value="multi-3">
            <AccordionTrigger>項目 C</AccordionTrigger>
            <AccordionContent>項目 C の内容です。</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}
