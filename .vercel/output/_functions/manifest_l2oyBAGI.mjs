import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_D8noONNE.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_D9sj4Cz4.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/bahamon/Documents/Personal/IA/Dashboard%20IAs/","cacheDir":"file:///Users/bahamon/Documents/Personal/IA/Dashboard%20IAs/node_modules/.astro/","outDir":"file:///Users/bahamon/Documents/Personal/IA/Dashboard%20IAs/dist/","srcDir":"file:///Users/bahamon/Documents/Personal/IA/Dashboard%20IAs/src/","publicDir":"file:///Users/bahamon/Documents/Personal/IA/Dashboard%20IAs/public/","buildClientDir":"file:///Users/bahamon/Documents/Personal/IA/Dashboard%20IAs/dist/client/","buildServerDir":"file:///Users/bahamon/Documents/Personal/IA/Dashboard%20IAs/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"compare/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/compare","isIndex":false,"type":"page","pattern":"^\\/compare\\/?$","segments":[[{"content":"compare","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/compare.astro","pathname":"/compare","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"explore/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/explore","isIndex":false,"type":"page","pattern":"^\\/explore\\/?$","segments":[[{"content":"explore","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/explore.astro","pathname":"/explore","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"models/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/models","isIndex":false,"type":"page","pattern":"^\\/models\\/?$","segments":[[{"content":"models","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/models.astro","pathname":"/models","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"prompts/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/prompts","isIndex":false,"type":"page","pattern":"^\\/prompts\\/?$","segments":[[{"content":"prompts","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/prompts.astro","pathname":"/prompts","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/compare.D_7CWkzp.css"}],"routeData":{"route":"/models/[...id]","isIndex":false,"type":"page","pattern":"^\\/models(?:\\/(.*?))?\\/?$","segments":[[{"content":"models","dynamic":false,"spread":false}],[{"content":"...id","dynamic":true,"spread":true}]],"params":["...id"],"component":"src/pages/models/[...id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/bahamon/Documents/Personal/IA/Dashboard IAs/src/pages/compare.astro",{"propagation":"none","containsHead":true}],["/Users/bahamon/Documents/Personal/IA/Dashboard IAs/src/pages/explore.astro",{"propagation":"none","containsHead":true}],["/Users/bahamon/Documents/Personal/IA/Dashboard IAs/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/bahamon/Documents/Personal/IA/Dashboard IAs/src/pages/models.astro",{"propagation":"none","containsHead":true}],["/Users/bahamon/Documents/Personal/IA/Dashboard IAs/src/pages/models/[...id].astro",{"propagation":"none","containsHead":true}],["/Users/bahamon/Documents/Personal/IA/Dashboard IAs/src/pages/prompts.astro",{"propagation":"none","containsHead":true}],["/Users/bahamon/Documents/Personal/IA/Dashboard IAs/src/pages/tool/[id].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/compare@_@astro":"pages/compare.astro.mjs","\u0000@astro-page:src/pages/explore@_@astro":"pages/explore.astro.mjs","\u0000@astro-page:src/pages/models@_@astro":"pages/models.astro.mjs","\u0000@astro-page:src/pages/models/[...id]@_@astro":"pages/models/_---id_.astro.mjs","\u0000@astro-page:src/pages/prompts@_@astro":"pages/prompts.astro.mjs","\u0000@astro-page:src/pages/tool/[id]@_@astro":"pages/tool/_id_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_l2oyBAGI.mjs","/Users/bahamon/Documents/Personal/IA/Dashboard IAs/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Dkc_IeX3.mjs","/Users/bahamon/Documents/Personal/IA/Dashboard IAs/src/components/ia-hub/CompareView":"_astro/CompareView.DPZnYAZy.js","/Users/bahamon/Documents/Personal/IA/Dashboard IAs/src/components/ia-hub/ModelsView":"_astro/ModelsView.CG_a_4_Q.js","/Users/bahamon/Documents/Personal/IA/Dashboard IAs/src/components/ia-hub/ExploreView":"_astro/ExploreView.DbkHMH4H.js","/Users/bahamon/Documents/Personal/IA/Dashboard IAs/src/components/ia-hub/PromptsView":"_astro/PromptsView.CpKcmZXA.js","/Users/bahamon/Documents/Personal/IA/Dashboard IAs/src/components/ia-hub/ToolDetailView":"_astro/ToolDetailView.jMsoweXI.js","/Users/bahamon/Documents/Personal/IA/Dashboard IAs/src/components/ia-hub/IAHub":"_astro/IAHub.DnoTRUJY.js","/Users/bahamon/Documents/Personal/IA/Dashboard IAs/src/components/ia-hub/ModelDetailView":"_astro/ModelDetailView.Bmp1SIGl.js","@astrojs/react/client.js":"_astro/client.Dc9Vh3na.js","/Users/bahamon/Documents/Personal/IA/Dashboard IAs/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CDGfc0hd.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/outfit-latin-ext-500-normal.zeox_O30.woff2","/_astro/outfit-latin-ext-600-normal.B85nYjL1.woff2","/_astro/outfit-latin-500-normal.DKnIMDSk.woff2","/_astro/outfit-latin-600-normal.B7SfZ07L.woff2","/_astro/outfit-latin-ext-700-normal.CI4iH74K.woff2","/_astro/outfit-latin-ext-400-normal.5tcqmc2S.woff2","/_astro/outfit-latin-700-normal.Cu9v6i1X.woff2","/_astro/outfit-latin-400-normal.BGsTXAXT.woff2","/_astro/outfit-latin-ext-600-normal.CWJcPgd7.woff","/_astro/outfit-latin-ext-500-normal.DrCvqoFD.woff","/_astro/outfit-latin-500-normal.ClnHRwRh.woff","/_astro/outfit-latin-ext-700-normal.fjS8-Gm7.woff","/_astro/outfit-latin-600-normal.BEfTtDA7.woff","/_astro/outfit-latin-400-normal.DMwTpYkH.woff","/_astro/outfit-latin-ext-400-normal.DHm7mdGe.woff","/_astro/outfit-latin-700-normal.D4itBLBr.woff","/_astro/compare.D_7CWkzp.css","/ads.txt","/favicon.ico","/favicon.svg","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.CDGfc0hd.js","/_astro/CompareView.DPZnYAZy.js","/_astro/DashboardLayout.CLukeCOu.js","/_astro/ExploreView.DbkHMH4H.js","/_astro/IACard.CeLopksg.js","/_astro/IAHub.DnoTRUJY.js","/_astro/ModelDetailView.Bmp1SIGl.js","/_astro/ModelsView.CG_a_4_Q.js","/_astro/PromptsView.CpKcmZXA.js","/_astro/ToolDetailView.jMsoweXI.js","/_astro/arrow-left.D6aDrV__.js","/_astro/client.Dc9Vh3na.js","/_astro/heart.DuyTi_sJ.js","/_astro/index.DiEladB3.js","/_astro/loader-circle.B1RbsS0f.js","/_astro/sparkles.CuyYK2Ko.js","/_astro/star.CX9jA2in.js","/_astro/terminal.DUAhiXCp.js","/_astro/useUserLocation.D9T1lWGg.js","/compare/index.html","/explore/index.html","/models/index.html","/prompts/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"vxvtv9iC1iCAuImS6QQHWDLyOqSxE6NTWdJTdndQwm8="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
