import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {files: ["**/*.js","**/*.html"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];