import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import css from "rollup-plugin-import-css";
import svgr from "@svgr/rollup";
import url from "rollup-plugin-url";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const extensions = [".js", ".jsx", ".ts", ".tsx"];
const name = "RollupTutorial"

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/bundle.js",
      format: "cjs",
    },
    {
      file: "dist/bundle.es.js",
      format: "es",
    },
    {
      file: "dist/bundle.min.js",
      format: "iife",
      name,
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
    peerDepsExternal()
  ],
};
