import {
  Breadcrumb,
  BreadcrumbPage as BreadcrumbCurrentPage,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";

export default function BreadcrumbPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Breadcrumb</h1>
        <p className="mt-2 text-muted-foreground">
          ページの階層構造を表示するパンくずリストコンポーネント。ナビゲーションの現在地を示すのに便利です。
        </p>
      </div>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">基本的なパンくずリスト</h2>
        <p className="text-sm text-muted-foreground">
          Home &gt; Products &gt; Product 1 の階層を表示
        </p>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink render={<a href="/">Home</a>} />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink render={<a href="/products">Products</a>} />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbCurrentPage>Product 1</BreadcrumbCurrentPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">深い階層の例</h2>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink render={<a href="/">Home</a>} />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink render={<a href="/docs">Documentation</a>} />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink render={<a href="/docs/components">Components</a>} />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbCurrentPage>Breadcrumb</BreadcrumbCurrentPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>
    </div>
  );
}
