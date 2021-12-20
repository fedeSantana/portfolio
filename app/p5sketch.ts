import path from "path";
import fs from "fs/promises";

export const getSketch = async (filename: string) => {
  const sketchesPath = path.join(__dirname, "..", "sketches");

  const filepath = path.join(sketchesPath, filename + ".p5js");
  const file = await fs.readFile(filepath);
  const fileContent = file.toString();

  return fileContent;
};
