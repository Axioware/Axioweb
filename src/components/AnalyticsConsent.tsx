import { useEffect, useRef, useState } from "react";
import { isProductionAnalyticsHost, trackAnalyticsEvent } from "@/lib/analytics";

type ConsentChoice = {
  analytics: boolean;
  marketing: boolean;
};

const CONSENT_KEY = "axioware-cookie-preferences-v1";
const GA_MEASUREMENT_ID = "G-HSFQR2VB7V";
const GTM_CONTAINER_ID = "GTM-PM9T3HLH";

function readConsent(): ConsentChoice | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentChoice>;
    return {
      analytics: parsed.analytics === true,
      marketing: parsed.marketing === true,
    };
  } catch {
    return null;
  }
}

function loadAnalyticsTag() {
  if (window.gtag) return;

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.dataset.axiowareAnalytics = "true";
  document.head.appendChild(script);
}

function loadMarketingTags() {
  if (document.querySelector(`script[data-axioware-gtm="true"]`)) return;

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_CONTAINER_ID}`;
  script.dataset.axiowareGtm = "true";
  document.head.appendChild(script);
}

function sendInitialPageView() {
  const pagePath = `${window.location.pathname}${window.location.search}`;
  trackAnalyticsEvent("page_view", {
    page_title: document.title,
    page_location: `${window.location.origin}${pagePath}`,
    page_path: pagePath,
    page_referrer: document.referrer,
  });
}

function clearOptionalCookies() {
  const removableNames = document.cookie
    .split(";")
    .map((entry) => entry.split("=")[0].trim())
    .filter((name) => /^_ga(?:_|$)/.test(name) || /^li_/i.test(name) || /^(?:lidc|bcookie|UserMatchHistory|AnalyticsSyncHistory)$/i.test(name));

  for (const name of removableNames) {
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=axioware.tech; SameSite=Lax`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=.axioware.tech; SameSite=Lax`;
  }
}

export default function AnalyticsConsent() {
  const [choice, setChoice] = useState<ConsentChoice>({ analytics: false, marketing: false });
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);
  const initialPageViewSent = useRef(false);

  useEffect(() => {
    const stored = readConsent();
    if (stored) {
      setChoice(stored);
    } else {
      setVisible(true);
    }
    setReady(true);

    const openPreferences = () => setVisible(true);
    window.addEventListener("axioware:open-cookie-preferences", openPreferences);
    return () => window.removeEventListener("axioware:open-cookie-preferences", openPreferences);
  }, []);

  useEffect(() => {
    if (!ready || !isProductionAnalyticsHost()) return;

    if (choice.analytics) {
      loadAnalyticsTag();
      if (!initialPageViewSent.current) {
        initialPageViewSent.current = true;
        window.requestAnimationFrame(sendInitialPageView);
      }
    }

    if (choice.marketing) loadMarketingTags();
  }, [choice, ready]);

  const saveChoice = (nextChoice: ConsentChoice) => {
    const previousChoice = readConsent();
    localStorage.setItem(CONSENT_KEY, JSON.stringify(nextChoice));

    const withdrawingConsent = previousChoice && (
      (previousChoice.analytics && !nextChoice.analytics) ||
      (previousChoice.marketing && !nextChoice.marketing)
    );
    if (withdrawingConsent) {
      clearOptionalCookies();
      window.location.reload();
      return;
    }

    setChoice(nextChoice);
    setVisible(false);
  };

  if (!ready || !visible) return null;

  return (
    <aside
      role="dialog"
      aria-labelledby="cookie-preferences-title"
      aria-describedby="cookie-preferences-description"
      className="fixed bottom-4 left-4 right-4 z-[100] mx-auto max-w-2xl rounded-2xl border border-border bg-card p-5 shadow-2xl md:bottom-6 md:left-auto md:right-6"
    >
      <h2 id="cookie-preferences-title" className="font-display text-lg font-semibold text-foreground">
        Cookie preferences
      </h2>
      <p id="cookie-preferences-description" className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Choose whether to allow optional analytics and marketing tags. You can change your choices at any time.
        <a href="/privacy" className="ml-1 text-accent underline underline-offset-2">Read the Privacy Policy.</a>
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <label className="flex items-start gap-3 rounded-lg border border-border/70 p-3 text-sm text-foreground">
          <input
            type="checkbox"
            checked={choice.analytics}
            onChange={(event) => setChoice((current) => ({ ...current, analytics: event.target.checked }))}
            className="mt-1 accent-accent"
          />
          <span><strong className="block">Analytics</strong>Google Analytics measures visits and page activity.</span>
        </label>
        <label className="flex items-start gap-3 rounded-lg border border-border/70 p-3 text-sm text-foreground">
          <input
            type="checkbox"
            checked={choice.marketing}
            onChange={(event) => setChoice((current) => ({ ...current, marketing: event.target.checked }))}
            className="mt-1 accent-accent"
          />
          <span><strong className="block">Marketing</strong>LinkedIn Insight Tag measures outreach activity.</span>
        </label>
      </div>

      <div className="mt-4 flex flex-wrap justify-end gap-2">
        <button
          type="button"
          onClick={() => saveChoice({ analytics: false, marketing: false })}
          className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary"
        >
          Reject optional
        </button>
        <button
          type="button"
          onClick={() => saveChoice(choice)}
          className="rounded-lg border border-accent px-4 py-2 text-sm font-medium text-accent hover:bg-accent/10"
        >
          Save choices
        </button>
        <button
          type="button"
          onClick={() => saveChoice({ analytics: true, marketing: true })}
          className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:bg-accent/90"
        >
          Accept all
        </button>
      </div>
    </aside>
  );
}
