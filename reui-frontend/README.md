# reui-frontend

[ReUI](https://reui.dev)（`@reui/reui`）を使う Vite + React 18 プロジェクトです。

## 構成

- **Tailwind CSS v3** … ReUI の peer 要件（`tailwindcss: ^3`）に合わせ PostCSS 経由で利用
- **`src/components/ui/`** … shadcn-frontend と同様、ここから ReUI を再エクスポートしてアプリから import
- **`ReUiIconProvider`** … `IconProvider` に Heroicons を渡す（Select 等で必須）

## コマンド

```bash
pnpm install
pnpm dev
pnpm build
```

## UI コンポーネントの import 例

```tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
```

一覧は `src/components/ui/index.ts` を参照。
