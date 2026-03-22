import type { ClassValue } from "clsx";
import { clsx } from "clsx";

/** shadcn 風の `cn` と同様。ReUI コンポーネントに追加クラスを足すときに利用可能。 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
