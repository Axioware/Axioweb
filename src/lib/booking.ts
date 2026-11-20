import { useLocation } from "react-router-dom";

export function getBookCallHref(search = "") {
  return `/book-demo${search}`;
}

export function useBookCallHref() {
  const { search } = useLocation();
  return getBookCallHref(search);
}
