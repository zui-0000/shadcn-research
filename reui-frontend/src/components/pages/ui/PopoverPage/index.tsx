import { useRef, useState } from "react";
import { Button } from "~/components/ui/button";
import { Popover } from "~/components/ui/popover";

export default function PopoverPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonRef2 = useRef<HTMLButtonElement>(null);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Popover</h1>
        <p className="mt-2 text-gray-600">
          トリガー要素の近くに小さなオーバーレイを表示するコンポーネント。
          <code className="mx-1 rounded bg-gray-100 px-1 text-sm">isOpen</code> と
          <code className="mx-1 rounded bg-gray-100 px-1 text-sm">onClose</code> で開閉を制御する。
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">基本</h2>
        <div className="relative inline-block">
          <button ref={buttonRef} type="button" onClick={() => setIsOpen(true)}>
            <Button>ポップオーバーを開く</Button>
          </button>
          <Popover isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <div className="w-64 p-4">
              <h3 className="font-semibold text-gray-900">ポップオーバーの内容</h3>
              <p className="mt-1 text-sm text-gray-600">
                任意のコンテンツをここに配置できます。 外側をクリックすると閉じます。
              </p>
              <button
                type="button"
                className="mt-3 text-sm text-primary-600 hover:underline"
                onClick={() => setIsOpen(false)}
              >
                閉じる
              </button>
            </div>
          </Popover>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">フォーム入力付き</h2>
        <div className="relative inline-block">
          <button ref={buttonRef2} type="button" onClick={() => setIsOpen2(true)}>
            <Button buttonStyle="secondary">フィルターを設定</Button>
          </button>
          <Popover isOpen={isOpen2} onClose={() => setIsOpen2(false)}>
            <div className="w-72 p-4">
              <h3 className="font-semibold text-gray-900">フィルター</h3>
              <div className="mt-3 space-y-2">
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input type="checkbox" className="rounded" />
                  アクティブなもののみ
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input type="checkbox" className="rounded" />
                  最近追加されたもの
                </label>
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <button
                  type="button"
                  className="text-sm text-gray-500 hover:text-gray-700"
                  onClick={() => setIsOpen2(false)}
                >
                  キャンセル
                </button>
                <button
                  type="button"
                  className="rounded bg-primary-600 px-3 py-1 text-sm text-white hover:bg-primary-700"
                  onClick={() => setIsOpen2(false)}
                >
                  適用
                </button>
              </div>
            </div>
          </Popover>
        </div>
      </section>
    </div>
  );
}
