import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToPageTop() {
  const { pathname, search } = useLocation();

  // fix annoying issue where pages are not loaded at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
}
