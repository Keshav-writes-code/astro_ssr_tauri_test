import 'kleur/colors';
import { f as decodeKey } from './chunks/astro/server_BpXOG-d3.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_j-HOdrPG.mjs';
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

const manifest = deserializeManifest({"hrefRoot":"file:///home/keshav/Programmer%20Stuff/Projects/zztemp/android_app_with_ssr/","cacheDir":"file:///home/keshav/Programmer%20Stuff/Projects/zztemp/android_app_with_ssr/node_modules/.astro/","outDir":"file:///home/keshav/Programmer%20Stuff/Projects/zztemp/android_app_with_ssr/dist/","srcDir":"file:///home/keshav/Programmer%20Stuff/Projects/zztemp/android_app_with_ssr/src/","publicDir":"file:///home/keshav/Programmer%20Stuff/Projects/zztemp/android_app_with_ssr/public/","buildClientDir":"file:///home/keshav/Programmer%20Stuff/Projects/zztemp/android_app_with_ssr/dist/client/","buildServerDir":"file:///home/keshav/Programmer%20Stuff/Projects/zztemp/android_app_with_ssr/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BlcMWzfk.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://Keshav-writes-code.github.io","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/keshav/Programmer Stuff/Projects/zztemp/android_app_with_ssr/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/home/keshav/Programmer Stuff/Projects/zztemp/android_app_with_ssr/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_D7dhWfag.mjs","\u0000@astrojs-manifest":"manifest_K7k2c6Zd.mjs","/home/keshav/Programmer Stuff/Projects/zztemp/android_app_with_ssr/src/components/counter.svelte":"_astro/counter.CTcjoS8p.js","@astrojs/svelte/client.js":"_astro/client.svelte.wxWAHz-n.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.BlcMWzfk.css","/favicon.png","/_astro/client.svelte.wxWAHz-n.js","/_astro/counter.CTcjoS8p.js","/_astro/render.CmyFPymh.js","/assets/fonts/0ba5d32a.woff","/assets/fonts/20b87e84.woff","/assets/fonts/41f3baaf.woff","/assets/fonts/4bbc67e1.woff","/assets/fonts/576fb0d7.woff","/assets/fonts/5ea10ee5.woff2","/assets/fonts/6413fc0a.woff","/assets/fonts/72e7b536.woff","/assets/fonts/73c57e73.woff2","/assets/fonts/8a9b0995.woff2","/assets/fonts/8f68ac83.woff2","/assets/fonts/92a0ad07.woff2","/assets/fonts/9394ab85.woff2","/assets/fonts/9b87b57f.woff2","/assets/fonts/b3c5fe07.woff","/assets/fonts/b5d74798.woff2","/assets/fonts/be76fee3.woff2","/assets/fonts/c9784008.woff2","/assets/fonts/d521d977.woff","/assets/fonts/e2eb62fc.woff","/assets/fonts/f56672c7.woff2","/assets/fonts/fb92c613.woff"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"VAlVUbO3rugy96cBMhos130VX4wFfNGHf/8d73eMWKA="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
