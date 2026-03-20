import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "~/components/ui/chart";

const chartData = [
  { month: "1月", value: 120 },
  { month: "2月", value: 180 },
  { month: "3月", value: 150 },
  { month: "4月", value: 210 },
  { month: "5月", value: 190 },
  { month: "6月", value: 250 },
];

const chartConfig = {
  value: {
    label: "値",
  },
  month: {
    label: "月",
  },
};

export default function ChartPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Chart</h1>
        <p className="mt-2 text-muted-foreground">
          Rechartsをベースにしたチャートコンポーネント。棒グラフ、折れ線グラフなど多様なデータ可視化が可能です。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">棒グラフ（1月〜6月）</h2>
        <div className="w-full max-w-2xl">
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <BarChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </div>
      </section>
    </div>
  );
}
