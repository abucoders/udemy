// eslint.config.mjs

// npm install -D eslint @eslint/eslintrc eslint-config-next eslint-config-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import

import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends(
    "next/core-web-vitals", // Next.js qoidalari
    "next/typescript", // TypeScript qoidalari
    "plugin:@typescript-eslint/recommended", // Qo‘shimcha TS qoidalari
    "plugin:import/recommended", // import tartibi
    "plugin:import/typescript", // TS import qo‘llab-quvvatlash
    "prettier", // Prettier eng oxirida bo‘lishi kerak
  ),
  {
    rules: {
      // Prettier bilan ziddiyatli bo‘lishi mumkin bo‘lgan qoidalar
      semi: ["error", "always"],
      quotes: ["error", "double"],

      // TypeScript qo‘shimcha qoidalar
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/explicit-module-boundary-types": "off",

      // Import tartibini sozlash
      "import/order": [
        "error",
        {
          groups: [
            "builtin", // Node.js modullari (fs, path, va h.k.)
            "external", // npm paketlari
            "internal", // ichki fayllar
            ["parent", "sibling", "index"], // nisbiy importlar
          ],
          pathGroups: [
            {
              pattern: "@/**",
              group: "internal",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
    },
  },
];
