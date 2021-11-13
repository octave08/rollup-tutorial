import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import css from "rollup-plugin-import-css";
import svgr from "@svgr/rollup";
import url from "rollup-plugin-url";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default {
  input: ["src/index.ts", "src/themes/theme.ts", "src/icons/index.tsx"],
  output: [
    {
      format: "es",
      dir: "dist",
      exports: "auto",
      preserveModules: true,
      preserveModulesRoot: "src",
      sourcemap: true,
      plugins: [terser()],
    },
  ],
  plugins: [
    resolve({ extensions }),
    commonjs(),
    json(),
    babel({
      extensions,
      include: ["src/**/*"],
      exclude: "node_modules/**",
      babelHelpers: "bundled",
    }),
    css(),
    svgr(),
    url(),
    peerDepsExternal(),
  ],
};
