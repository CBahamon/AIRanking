import { e as createComponent, g as addAttribute, l as renderScript, r as renderTemplate, h as createAstro, n as renderSlot, o as renderHead, k as renderComponent } from './astro/server_D8noONNE.mjs';
import 'piccolore';
/* empty css                           */
import 'clsx';

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/bahamon/Documents/Personal/IA/Dashboard IAs/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/bahamon/Documents/Personal/IA/Dashboard IAs/node_modules/astro/components/ClientRouter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "AI Ranking - The best place to find and compare AI tools."
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", '</title><meta property="og:title"', '><meta property="og:description"', '><meta property="og:type" content="website">', '<script>\n            // On page load or when changing themes, best to add inline in `head` to avoid FOUC\n            const savedMode = localStorage.getItem("theme-mode") || "system";\n            const savedTheme =\n                localStorage.getItem("theme-palette") || "default";\n\n            // Apply Palette\n            if (savedTheme !== "default") {\n                document.documentElement.setAttribute("data-theme", savedTheme);\n            }\n\n            // Apply Mode\n            const isDark =\n                savedMode === "dark" ||\n                (savedMode === "system" &&\n                    window.matchMedia("(prefers-color-scheme: dark)").matches);\n            if (isDark) {\n                document.documentElement.classList.add("dark");\n            } else {\n                document.documentElement.classList.remove("dark");\n            }\n        <\/script>', '</head> <body class="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans min-h-screen flex flex-col antialiased selection:bg-blue-100 selection:text-blue-900">  ', " </body></html>"], ['<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", '</title><meta property="og:title"', '><meta property="og:description"', '><meta property="og:type" content="website">', '<script>\n            // On page load or when changing themes, best to add inline in \\`head\\` to avoid FOUC\n            const savedMode = localStorage.getItem("theme-mode") || "system";\n            const savedTheme =\n                localStorage.getItem("theme-palette") || "default";\n\n            // Apply Palette\n            if (savedTheme !== "default") {\n                document.documentElement.setAttribute("data-theme", savedTheme);\n            }\n\n            // Apply Mode\n            const isDark =\n                savedMode === "dark" ||\n                (savedMode === "system" &&\n                    window.matchMedia("(prefers-color-scheme: dark)").matches);\n            if (isDark) {\n                document.documentElement.classList.add("dark");\n            } else {\n                document.documentElement.classList.remove("dark");\n            }\n        <\/script>', '</head> <body class="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans min-h-screen flex flex-col antialiased selection:bg-blue-100 selection:text-blue-900">  ', " </body></html>"])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), title, addAttribute(title, "content"), addAttribute(description, "content"), renderComponent($$result, "ClientRouter", $$ClientRouter, {}), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/Users/bahamon/Documents/Personal/IA/Dashboard IAs/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
