// Be sure to install the @jscad/* packages as "devDependencies",
// externalize them in `vite.config.ts`, and add them to the 
// "peerDependencies" in the `package.json` file.

import { primitives } from "@jscad/modeling";

const { cuboid } = primitives;

export function cube({ length }: { length: number }) {
  return cuboid({ size: [length, length, length] });
}
