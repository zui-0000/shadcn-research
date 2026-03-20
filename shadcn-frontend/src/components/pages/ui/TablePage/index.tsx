import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

const invoiceData = [
  { invoice: "INV001", status: "支払済", method: "クレジットカード", amount: "¥25,000" },
  { invoice: "INV002", status: "処理中", method: "PayPal", amount: "¥18,500" },
  { invoice: "INV003", status: "未払い", method: "銀行振込", amount: "¥32,100" },
  { invoice: "INV004", status: "支払済", method: "クレジットカード", amount: "¥12,000" },
  { invoice: "INV005", status: "キャンセル", method: "-", amount: "¥8,900" },
];

export default function TablePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Table</h1>
        <p className="mt-2 text-muted-foreground">
          データを行と列で構造化して表示するテーブルコンポーネント。請求書、一覧、データグリッドなどに利用できます。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">請求書サンプル</h2>
        <div className="flex flex-wrap gap-4">
          <Table>
            <TableCaption>2024年1月の請求一覧</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoiceData.map((row) => (
                <TableRow key={row.invoice}>
                  <TableCell>{row.invoice}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.method}</TableCell>
                  <TableCell className="text-right">{row.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  );
}
