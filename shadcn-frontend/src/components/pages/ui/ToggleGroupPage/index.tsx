import { AlignCenterIcon, AlignJustifyIcon, AlignLeftIcon, AlignRightIcon } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";

export default function ToggleGroupPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Toggle Group</h1>
        <p className="mt-2 text-muted-foreground">
          複数のトグルをグループ化し、単一選択または複数選択の排他的な選択UIを実現するコンポーネント。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">単一選択</h2>
        <div className="flex flex-wrap gap-2">
          <ToggleGroup>
            <ToggleGroupItem value="left" aria-label="左揃え">
              <AlignLeftIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="中央揃え">
              <AlignCenterIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="右揃え">
              <AlignRightIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="justify" aria-label="両端揃え">
              <AlignJustifyIcon />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">複数選択</h2>
        <div className="flex flex-wrap gap-2">
          <ToggleGroup multiple>
            <ToggleGroupItem value="left" aria-label="左揃え">
              <AlignLeftIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="中央揃え">
              <AlignCenterIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="右揃え">
              <AlignRightIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="justify" aria-label="両端揃え">
              <AlignJustifyIcon />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">outline バリアント</h2>
        <div className="flex flex-wrap gap-2">
          <ToggleGroup variant="outline">
            <ToggleGroupItem value="left" aria-label="左揃え">
              <AlignLeftIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="中央揃え">
              <AlignCenterIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="右揃え">
              <AlignRightIcon />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </section>
    </div>
  );
}
