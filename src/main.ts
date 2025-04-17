import "./style.css";

import html from "nanohtml";
import { Console, Effect } from "effect";

const value = "Ping pong";
const el = html`<div class="text-red-600">${value}</div>`;

const program = Effect.gen(function* () {
  yield* Console.log("Effect!!!");
});

Effect.runPromise(program);

document.querySelector<HTMLDivElement>("#app")!.appendChild(el);
