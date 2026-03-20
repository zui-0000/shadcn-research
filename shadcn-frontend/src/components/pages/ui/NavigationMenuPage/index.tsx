import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu";

export default function NavigationMenuPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Navigation Menu</h1>
        <p className="mt-2 text-muted-foreground">
          サイトの主要ナビゲーションを提供するメニューコンポーネント。ドロップダウン付きのアイテムやリンクを表示できます。
        </p>
      </div>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">基本メニュー</h2>
        <div>
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col sm:flex-row gap-2">
              <NavigationMenuItem>
                <NavigationMenuLink href="#home">ホーム</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>製品</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-2 p-2">
                    <li>
                      <NavigationMenuLink href="#products/web">ウェブアプリ</NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#products/mobile">
                        モバイルアプリ
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#products/api">API</NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>サポート</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-2 p-2">
                    <li>
                      <NavigationMenuLink href="#docs">ドキュメント</NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#contact">お問い合わせ</NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#about">会社概要</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </section>
    </div>
  );
}
