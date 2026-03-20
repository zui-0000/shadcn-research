import { useEffect, useState } from "react";
import { Progress } from "~/components/ui/progress";

export default function ProgressPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Progress</h1>
        <p className="mt-2 text-muted-foreground">
          タスクの進行状況や読み込みの進捗を表示するプログレスバーコンポーネントです。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">進捗のバリエーション</h2>
        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <span className="text-sm text-muted-foreground">0%</span>
            <Progress value={0} />
          </div>
          <div className="space-y-2">
            <span className="text-sm text-muted-foreground">33%</span>
            <Progress value={33} />
          </div>
          <div className="space-y-2">
            <span className="text-sm text-muted-foreground">66%</span>
            <Progress value={66} />
          </div>
          <div className="space-y-2">
            <span className="text-sm text-muted-foreground">100%</span>
            <Progress value={100} />
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">アニメーション例</h2>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">
            useEffect で自動的に進捗が増加するデモ（100% で 0% にリセット）
          </p>
          <Progress value={progress} />
        </div>
      </section>
    </div>
  );
}
