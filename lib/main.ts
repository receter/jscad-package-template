// Be sure to install the @jscad/* packages as "devDependencies",
// externalize them in `vite.config.ts`, and add them to the 
// "peerDependencies" in the `package.json` file.

import { primitives } from "@jscad/modeling";

const { cube } = primitives;

export function randomCube({ minSize = 2, maxSize = 4 }: { minSize?: number, maxSize?: number }) {
  if (minSize > maxSize) throw new Error('minSize must be less than maxSize');
  const size = minSize + Math.random() * (maxSize - minSize);
  return cube({ size });
}
