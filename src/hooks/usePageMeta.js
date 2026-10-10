import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PAGES, NOT_FOUND, SITE, fullTitle } from "../data/pageMeta";

// Find or create a <meta>/<link> tag and set its value.
const upsert = (tag, keyAttr, key, valueAttr, value) => {
  let el = document.head.querySelector(`${tag}[${keyAttr}="${key}"]`);
  if (!el) {
    el = document.createElement(tag);
    el.setAttribute(keyAttr, key);
    document.head.appendChild(el);
  }
  el.setAttribute(valueAttr, value);
};

// Keeps the document head in sync with src/data/pageMeta.js during client-side
// navigation. The initial HTML for each page is prerendered with the same values.
const usePageMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
    const meta = PAGES[path];
    const { title, description } = meta || NOT_FOUND;
    const pageTitle = meta ? fullTitle(path, meta) : `${title} | ${SITE.name}`;
    const url = `${SITE.url}${path === "/" ? "/" : path}`;

    document.title = pageTitle;
    upsert("meta", "name", "description", "content", description);
    upsert("meta", "property", "og:title", "content", pageTitle);
    upsert("meta", "property", "og:description", "content", description);
    upsert("meta", "property", "og:url", "content", url);
    upsert("meta", "name", "twitter:title", "content", pageTitle);
    upsert("meta", "name", "twitter:description", "content", description);

    if (meta) {
      upsert("link", "rel", "canonical", "href", url);
      document.head.querySelector('meta[name="robots"]')?.remove();
    } else {
      document.head.querySelector('link[rel="canonical"]')?.remove();
      upsert("meta", "name", "robots", "content", "noindex");
    }
  }, [pathname]);
};

export default usePageMeta;
