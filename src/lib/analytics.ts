type AnalyticsParameters = Record<string, string | number | boolean>;

type GoogleTag = (
  command: "event",
  eventName: string,
  parameters?: AnalyticsParameters,
) => void;

const TRACKED_HOSTS = new Set(["axioware.tech", "www.axioware.tech"]);

export function trackAnalyticsEvent(
  eventName: string,
  parameters: AnalyticsParameters = {},
) {
  if (typeof window === "undefined") return;
  if (!TRACKED_HOSTS.has(window.location.hostname)) return;

  const googleTag = (window as Window & { gtag?: GoogleTag }).gtag;
  googleTag?.("event", eventName, parameters);
}
