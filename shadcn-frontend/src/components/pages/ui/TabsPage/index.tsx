import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

export default function TabsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Tabs</h1>
        <p className="mt-2 text-muted-foreground">
          コンテンツをタブで切り替えて表示するコンポーネント。アカウント設定やフォームのセクション分けに活用できます。
        </p>
      </div>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">基本のタブ</h2>
        <p className="text-sm text-muted-foreground">
          Account、Password、Settings の3つのタブパネル
        </p>
        <Tabs defaultValue="account" className="w-full max-w-md">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <div className="mt-4 space-y-3 rounded-lg border p-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="山田 太郎" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="example@email.com" />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="password">
            <div className="mt-4 space-y-3 rounded-lg border p-4">
              <div className="space-y-2">
                <Label htmlFor="current">Current Password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new">New Password</Label>
                <Input id="new" type="password" />
              </div>
              <Button>Update Password</Button>
            </div>
          </TabsContent>
          <TabsContent value="settings">
            <div className="mt-4 rounded-lg border p-4">
              <p className="text-sm text-muted-foreground">
                通知、プライバシー、その他の設定をここで管理できます。
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Line バリアント</h2>
        <Tabs defaultValue="tab1" className="w-full max-w-md">
          <TabsList variant="line">
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <p className="mt-4 text-sm">Line スタイルのタブコンテンツ 1</p>
          </TabsContent>
          <TabsContent value="tab2">
            <p className="mt-4 text-sm">Line スタイルのタブコンテンツ 2</p>
          </TabsContent>
          <TabsContent value="tab3">
            <p className="mt-4 text-sm">Line スタイルのタブコンテンツ 3</p>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
