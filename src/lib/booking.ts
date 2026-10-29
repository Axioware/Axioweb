import { useLocation } from "react-router-dom";

export function getBookCallHref(search = "") {
  return `/contact${search}#book`;
}

export function useBookCallHref() {
  const { search } = useLocation();
  return getBookCallHref(search);
}
