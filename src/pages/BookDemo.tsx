import { Link, useLocation } from "react-router-dom";
import { CalendarDays } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const FALLBACK_CALENDAR_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2TfRZRR7I_uTI6zZg509Az5X8M1BiXooiHdsxSnP3FP6u844Z3ucQxxO9v-Mn2PBkn83juFg9_?gv=true";

export default function BookDemo() {
  const location = useLocation();
  const calendarUrl = new URL(import.meta.env.VITE_BOOKING_CALENDAR_URL || FALLBACK_CALENDAR_URL);
  new URLSearchParams(location.search).forEach((value, key) => calendarUrl.searchParams.set(key, value));

  return (
    <Layout>
      <SEO
        title="Book a Chiropractic Receptionist Demo"
        description="Choose a time to discuss how Remi can help your chiropractic clinic answer calls and handle appointment requests."
        canonical="/book-demo"
      />
      <section className="bg-primary py-12 text-white md:py-14">
        <div className="container-custom text-center">
          <CalendarDays className="mx-auto mb-4 h-8 w-8 text-primary-light" aria-hidden="true" />
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-primary-light">
            Book a demo
          </p>
          <h1 className="mx-auto mb-4 max-w-3xl font-display text-4xl font-bold md:text-5xl">
            Choose a time to talk with us.
          </h1>
          <p className="mx-auto max-w-2xl text-white/75">
            Pick an available time to discuss your clinic’s calls, scheduling, and setup.
          </p>
        </div>
      </section>
      <section className="bg-background pb-12 pt-6 md:pb-16 md:pt-8">
        <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
            <iframe
              title="Choose a time for your chiropractic receptionist demo"
              src={calendarUrl.toString()}
              className="h-[720px] w-full border-0 md:h-[760px]"
              loading="lazy"
            />
            <div className="border-t border-border p-4 text-center text-sm text-muted-foreground">
              Having trouble booking?{" "}
              <a
                href={calendarUrl.toString()}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-accent underline underline-offset-4"
              >
                Open the calendar in a new tab
              </a>
              {" or "}
              <Link to="/contact" className="font-medium text-accent underline underline-offset-4">
                contact us
              </Link>
              .
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
