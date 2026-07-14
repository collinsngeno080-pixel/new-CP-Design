import { useEffect } from "react";

export function useFavicon(faviconPath: string) {
  useEffect(() => {
    const favicon = document.querySelector(
      "link[rel~='icon']",
    ) as HTMLLinkElement;
    const originalHref = favicon?.href;

    if (favicon) {
      favicon.href = faviconPath;
    }

    return () => {
      if (favicon && originalHref) {
        favicon.href = originalHref;
      }
    };
  }, [faviconPath]);
}
