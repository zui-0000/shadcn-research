import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";
import { IconProvider } from "@reui/reui";
import type { ReactNode } from "react";

const iconValue = {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronUpDownIcon,
};

/**
 * ReUI の Select 等で必要な SVG アイコンを Heroicons で供給する。
 * @see https://reui.dev/docs/getting-started
 */
export function ReUiIconProvider({ children }: { children: ReactNode }) {
  return <IconProvider value={iconValue}>{children}</IconProvider>;
}
