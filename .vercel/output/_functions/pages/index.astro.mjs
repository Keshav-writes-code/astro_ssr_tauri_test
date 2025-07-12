/* empty css                                 */
import { c as createAstro, a as createComponent, b as addAttribute, r as renderHead, d as renderComponent, e as renderTemplate } from '../chunks/astro/server_BpXOG-d3.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const CONTENT_REGEX = /[&<]/g;

/**
 * @template V
 * @param {V} value
 * @param {boolean} [is_attr]
 */
function escape_html(value, is_attr) {
	const str = String(value);

	const pattern = CONTENT_REGEX;
	pattern.lastIndex = 0;

	let escaped = '';
	let last = 0;

	while (pattern.test(str)) {
		const i = pattern.lastIndex - 1;
		const ch = str[i];
		escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : ch === '"' ? '&quot;' : '&lt;');
		last = i + 1;
	}

	return escaped + str.substring(last);
}

function Counter($$payload) {
	let count = 0;

	$$payload.out += `<button class="btn btn-lg btn-primary">${escape_html(count)} <div class="i-tabler:click size-5"></div></button>`;
}

const $$Astro = createAstro("https://Keshav-writes-code.github.io");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro</title>${renderHead()}</head> <body class="grid place-items-center h-screen"> ${renderComponent($$result, "Counter", Counter, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/keshav/Programmer Stuff/Projects/zztemp/android_app_with_ssr/src/components/counter.svelte", "client:component-export": "default" })} </body></html>`;
}, "/home/keshav/Programmer Stuff/Projects/zztemp/android_app_with_ssr/src/pages/index.astro", void 0);

const $$file = "/home/keshav/Programmer Stuff/Projects/zztemp/android_app_with_ssr/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
