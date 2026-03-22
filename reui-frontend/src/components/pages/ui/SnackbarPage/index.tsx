import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Snack, useSnacks } from "~/components/ui/snackbar";

function SnackbarDemo() {
  const { addSnack } = useSnacks();
  const [count, setCount] = useState(0);

  const showSnack = (message: string) => {
    addSnack({ children: <Snack>{message}</Snack> });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Snackbar</h1>
        <p className="mt-2 text-gray-600">
          画面の端に一時的なメッセージを表示するコンポーネント。
          <code className="mx-1 rounded bg-gray-100 px-1 text-sm">SnackProvider</code> でラップし、
          <code className="mx-1 rounded bg-gray-100 px-1 text-sm">useSnacks</code>{" "}
          フックで表示を制御する。
          <code className="mx-1 rounded bg-gray-100 px-1 text-sm">SnackBar</code>{" "}
          コンポーネントが表示エリア。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">基本的な使い方</h2>
        <p className="text-sm text-gray-500">
          ボタンをクリックするとスナックバーが画面下部に表示されます。
        </p>
        <div className="flex flex-wrap gap-2">
          <Button onPress={() => showSnack("操作が完了しました")}>成功メッセージを表示</Button>
          <Button buttonStyle="secondary" onPress={() => showSnack("エラーが発生しました")}>
            エラーメッセージを表示
          </Button>
          <Button
            buttonStyle="plain"
            onPress={() => {
              setCount((c) => c + 1);
              showSnack(`通知 #${count + 1} が届きました`);
            }}
          >
            通知を表示 ({count})
          </Button>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">使い方</h2>
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <pre className="text-sm text-gray-700 overflow-x-auto">{`// App.tsx や layout でラップ
<SnackProvider>
  <SnackBar position="bottom-center" />
  {children}
</SnackProvider>

// コンポーネント内で使用
const { addSnack } = useSnacks();
addSnack({
  children: <Snack>メッセージです</Snack>
});`}</pre>
        </div>
      </section>
    </div>
  );
}

export default SnackbarDemo;
