import { ActivityIndicator } from "~/components/ui/activity-indicator";

export default function ActivityIndicatorPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Activity Indicator</h1>
        <p className="mt-2 text-gray-600">
          処理中を示すスピナーコンポーネント。
          <code className="mx-1 rounded bg-gray-100 px-1 text-sm">isIndeterminate</code>{" "}
          で無限ループのアニメーションになる。
          <code className="mx-1 rounded bg-gray-100 px-1 text-sm">Spinner</code>{" "}
          という別名でもエクスポートされている。
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">不定 (isIndeterminate)</h2>
        <div className="flex items-center gap-6">
          <ActivityIndicator isIndeterminate aria-label="読み込み中" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">進捗率あり (value)</h2>
        <div className="flex items-center gap-6">
          <ActivityIndicator value={25} aria-label="25%" />
          <ActivityIndicator value={50} aria-label="50%" />
          <ActivityIndicator value={75} aria-label="75%" />
          <ActivityIndicator value={100} aria-label="100%" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">ラベルなし（アクセシビリティ用途）</h2>
        <div className="flex items-center gap-4 rounded-lg border border-gray-200 bg-gray-50 p-4">
          <ActivityIndicator isIndeterminate aria-label="データを読み込んでいます" />
          <span className="text-sm text-gray-600">データを読み込んでいます...</span>
        </div>
      </section>
    </div>
  );
}
