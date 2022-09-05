
import fs from 'fs/promises'
import { preprocess, parse } from "svelte/compiler";
import ifProcess from "./ifProcess.js";

const app = await fs.readFile("./src/App.svelte", "utf-8");



const result = await preprocess(
  app,
  ifProcess,
  {
    filename: "App.svelte",
  }
);

console.log(result);
