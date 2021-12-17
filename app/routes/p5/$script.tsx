import type { LoaderFunction } from "remix";
import invariant from "tiny-invariant";
import path from "path";
import fs from "fs/promises";

const sketchesPath = path.join(__dirname, "..", "sketches");

export const loader: LoaderFunction = async ({ params, request }) => {
  invariant(params.script, "expected params.script");

  const url = new URL(request.url);
  invariant(url.searchParams.get("id"), "expected query param id");

  const filepath = path.join(sketchesPath, params.script + ".p5js");
  const file = await fs.readFile(filepath);
  const fileContent = file.toString();

  const id = url.searchParams.get("id");

  const sketch = fileContent.replace(
    /(createCanvas\(\d+, ?\d+\))/,
    `const canvas = $1;\n  canvas.parent('${id}')`
  );

  return new Response(sketch);
};
