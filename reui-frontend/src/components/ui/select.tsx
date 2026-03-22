/**
 * ReUI の SelectField。IconProvider（ReUiIconProvider）がルートに必要。
 * SelectField の TypeScript 型は AriaSelectOptions (children なし) だが、
 * 実装では useSelectState に children を渡す必要があるため型を修正している。
 */
import type { AriaSelectProps } from "react-aria";

export { SelectField as SelectFieldBase } from "@reui/reui";
export { Item } from "react-stately";

import { SelectField as _SelectField } from "@reui/reui";
import type { ReactElement } from "react";
export const Select = _SelectField as unknown as <T extends Record<string, unknown>>(
  props: AriaSelectProps<T>,
) => ReactElement;
export const SelectField = Select;
