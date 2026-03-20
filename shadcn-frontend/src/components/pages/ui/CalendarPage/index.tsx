import { useState } from "react";
import { Calendar } from "~/components/ui/calendar";

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Calendar</h1>
        <p className="mt-2 text-muted-foreground">
          日付を選択するためのカレンダーコンポーネント。単一の日付や日付範囲の選択に対応する。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">基本的なカレンダー</h2>
        <div className="flex flex-wrap gap-2">
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">選択された日付</h2>
        <p className="text-sm text-muted-foreground">
          {date ? date.toLocaleDateString("ja-JP") : "日付が選択されていません"}
        </p>
      </section>
    </div>
  );
}
