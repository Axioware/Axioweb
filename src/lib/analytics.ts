type AnalyticsParameters = Record<string, string | number | boolean>;

type GoogleTag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GoogleTag;
  }
}

const TRACKED_HOSTS = new Set(["axioware.tech", "www.axioware.tech"]);

export function isProductionAnalyticsHost() {
  return typeof window !== "undefined" && TRACKED_HOSTS.has(window.location.hostname);
}

export function trackAnalyticsEvent(
  eventName: string,
  parameters: AnalyticsParameters = {},
) {
  if (typeof window === "undefined") return;
  if (!isProductionAnalyticsHost()) return;

  window.gtag?.("event", eventName, parameters);
}
