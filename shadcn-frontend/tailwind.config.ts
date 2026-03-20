import type { Config } from "tailwindcss";
import { colors } from "./src/styles/colors";
import { zIndex } from "./src/styles/z-index";

export default {
  theme: {
    extend: {
      zIndex: zIndex,
      colors: colors,
    },
  },
} satisfies Config;
