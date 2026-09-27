import { useEffect } from "react";

const SITE_NAME = "Blessed Hope SDA Church";

const usePageMeta = (title, description) => {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (description) {
      if (metaDesc) {
        metaDesc.setAttribute("content", description);
      } else {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = description;
        document.head.appendChild(meta);
      }
    }

    return () => {
      document.title = SITE_NAME;
    };
  }, [title, description]);
};

export default usePageMeta;
