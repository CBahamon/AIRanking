import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro } from '../../chunks/astro/server_D8noONNE.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_CKDiyded.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { id } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Detalles del Modelo - DirectorioIA" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ModelDetailView", null, { "client:only": "react", "modelId": id || "", "client:component-hydration": "only", "client:component-path": "/Users/bahamon/Documents/Personal/IA/Dashboard IAs/src/components/ia-hub/ModelDetailView", "client:component-export": "default" })} ` })}`;
}, "/Users/bahamon/Documents/Personal/IA/Dashboard IAs/src/pages/models/[...id].astro", void 0);

const $$file = "/Users/bahamon/Documents/Personal/IA/Dashboard IAs/src/pages/models/[...id].astro";
const $$url = "/models/[...id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
