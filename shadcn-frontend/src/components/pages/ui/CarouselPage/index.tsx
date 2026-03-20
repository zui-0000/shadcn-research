import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

export default function CarouselPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Carousel</h1>
        <p className="mt-2 text-muted-foreground">
          スライド形式でコンテンツを表示するカルーセルコンポーネント。画像ギャラリーやプロモーション表示に活用できます。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5枚のスライド</h2>
        <div className="mx-auto w-full max-w-md px-8">
          <Carousel>
            <CarouselContent>
              {[1, 2, 3, 4, 5].map((num) => (
                <CarouselItem key={num}>
                  <div className="flex aspect-square items-center justify-center rounded-lg border border-border bg-muted/50 text-4xl font-bold">
                    {num}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </div>
  );
}
