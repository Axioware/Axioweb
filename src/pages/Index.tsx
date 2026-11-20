import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  Clock3,
  Headphones,
  Pause,
  Phone,
  Play,
  ShieldCheck,
  UserRoundPlus,
  Users,
} from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useBookCallHref } from "@/lib/booking";
import VoiceAgentDemo from "@/components/VoiceAgentDemo";
import { trackAnalyticsEvent } from "@/lib/analytics";

const faqs = [
  {
    question: "Will callers know they are speaking with an AI receptionist?",
    answer:
      "The greeting and call flow are agreed with you. We recommend being transparent with callers and can configure the introduction to identify Remi as an AI receptionist.",
  },
  {
    question: "Can Remi book adjustments in my calendar?",
    answer:
      "We confirm your calendar and booking rules before setup. If direct scheduling is not supported for your system, Remi can collect the caller's preferred time for your team to confirm.",
  },
  {
    question: "What happens when Remi cannot answer a question?",
    answer:
      "Remi follows the approved clinic information and can take a message or route the caller to your team according to the handoff rules you choose.",
  },
  {
    question: "Does Remi give chiropractic or medical advice?",
    answer:
      "No. Remi does not diagnose, recommend treatment, or give clinical advice. You can define how clinical or urgent calls should be escalated to your staff.",
  },
  {
    question: "Will it work with my phone system and practice software?",
    answer:
      "We review your phone, calendar, and practice-management setup before recommending an approach. Compatibility is confirmed for your specific systems before you decide.",
  },
  {
    question: "How is patient information handled?",
    answer:
      "The information collected, access, retention, and recording settings should be agreed before launch. Review our privacy policy and discuss your clinic's requirements with us before sharing patient data.",
  },
];

const painPoints = [
  {
    icon: Phone,
    title: "Calls missed during adjustments",
    description:
      "Your front desk is checking in a patient or helping someone in the clinic when a new-patient call comes through.",
  },
  {
    icon: Clock3,
    title: "After-hours voicemails",
    description:
      "Someone ready to book may not leave a message or wait until the next business day to hear back.",
  },
  {
    icon: Users,
    title: "An overloaded front desk",
    description:
      "Phones, scheduling, questions, and in-person patients all compete for your team's attention.",
  },
];

const features = [
  {
    id: "new-patient-intake",
    icon: UserRoundPlus,
    title: "New-patient intake",
    description:
      "Capture a caller's name, phone number, reason for calling, and preferred time.",
  },
  {
    id: "appointment-booking",
    icon: CalendarCheck,
    title: "Booking and rescheduling",
    description:
      "Handle appointment requests and changes based on your calendar access and clinic rules.",
  },
  {
    id: "common-questions",
    icon: Check,
    title: "Common questions",
    description:
      "Answer approved questions about your hours, location, first visit, and services.",
  },
  {
    id: "after-hours",
    icon: Clock3,
    title: "After-hours coverage",
    description:
      "Give callers a way to reach your clinic outside the hours your team is at the desk.",
  },
  {
    id: "staff-handoff",
    icon: Headphones,
    title: "Staff handoff",
    description:
      "Pass urgent or complex calls to a person using the escalation instructions you set.",
  },
  {
    id: "call-summaries",
    icon: ShieldCheck,
    title: "Call summaries",
    description:
      "Give your team a record of the caller's request through the delivery method agreed for your setup.",
  },
  {
    id: "reminders",
    icon: CalendarCheck,
    title: "Reminders and no-show follow-up",
    description:
      "Confirm appointments, send reminders, and follow up with patients who miss a visit.",
  },
];

const sampleCalls = [
  {
    id: "new-patient",
    title: "New patient booking a first visit",
    lines: [
      ["Caller", "Hi, I'm new to the clinic and would like to book an adjustment."],
      ["Remi", "Welcome. I can help with an appointment request. What day and time usually work best for you?"],
      ["Caller", "Thursday afternoon, if possible."],
      ["Remi", "I'll check the appointment options available to me and confirm the next step for your visit."],
    ],
  },
  {
    id: "clinic-question",
    title: "A question about the clinic",
    lines: [
      ["Caller", "What time do you open tomorrow, and where are you located?"],
      ["Remi", "I can help with that. The clinic's hours and location are shared using the information your team has approved."],
      ["Caller", "Can I ask about treatment for my back?"],
      ["Remi", "I can't provide clinical advice, but I can take your details or help connect you with the clinic team."],
    ],
  },
  {
    id: "after-hours",
    title: "After-hours appointment request",
    lines: [
      ["Caller", "I missed my appointment and need to reschedule."],
      ["Remi", "I can help start that request. May I have your name and the best number for the clinic to reach you?"],
      ["Caller", "It's Jordan, and you can call me tomorrow."],
      ["Remi", "Thank you, Jordan. I'll pass your request to the team following the clinic's after-hours process."],
    ],
  },
];

const clinicHighlights = [
  "Built for solo chiropractors and multi-location clinics",
  "24/7 call coverage",
  "Works alongside your front desk",
  "Setup handled for you",
];

function RoiCalculator() {
  const bookingHref = useBookCallHref();
  const [callsPerDay, setCallsPerDay] = useState<number | null>(25);
  const [missedPercent, setMissedPercent] = useState<number | null>(15);
  const [appointmentValue, setAppointmentValue] = useState<number | null>(40);
  const valuesAreSet =
    callsPerDay !== null &&
    callsPerDay >= 5 &&
    callsPerDay <= 100 &&
    missedPercent !== null &&
    missedPercent >= 5 &&
    missedPercent <= 100 &&
    appointmentValue !== null &&
    appointmentValue >= 10 &&
    appointmentValue <= 1000;
  const monthlyEstimate = valuesAreSet
    ? callsPerDay * (missedPercent / 100) * appointmentValue * 22
    : null;
  const annualEstimate = monthlyEstimate === null ? null : monthlyEstimate * 12;
  const formatAmount = (amount: number) =>
    new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(Math.round(amount));
  const validMissedPercent =
    missedPercent !== null && missedPercent >= 5 && missedPercent <= 100
      ? missedPercent
      : null;
  const donutBackground =
    validMissedPercent === null
      ? "conic-gradient(hsl(var(--border)) 0% 100%)"
      : `conic-gradient(hsl(var(--accent)) 0% ${100 - validMissedPercent}%, #f97316 ${100 - validMissedPercent}% 100%)`;
  const parseInput = (value: string) => {
    if (value === "") return null;
    const parsed = Number(value);
    return Number.isFinite(parsed) && parsed >= 0 ? parsed : null;
  };
  const controls = [
    {
      id: "calls-per-day",
      label: "Calls per day",
      unit: "calls",
      minimum: 5,
      maximum: 100,
      minimumLabel: "5 calls",
      maximumLabel: "100 calls",
      value: callsPerDay,
      onChange: setCallsPerDay,
    },
    {
      id: "missed-percent",
      label: "Estimated missed-call rate",
      unit: "%",
      minimum: 5,
      maximum: 100,
      minimumLabel: "5%",
      maximumLabel: "100%",
      value: missedPercent,
      onChange: setMissedPercent,
    },
    {
      id: "appointment-value",
      label: "Average revenue per appointment",
      unit: "USD",
      minimum: 10,
      maximum: 1000,
      minimumLabel: "$10",
      maximumLabel: "$1,000",
      value: appointmentValue,
      onChange: setAppointmentValue,
    },
  ];

  return (
    <div className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-card">
      <div className="grid lg:grid-cols-2">
        <div className="p-6 md:p-8 lg:p-10">
          <p className="mb-2 text-lg font-semibold">Your practice details</p>
          <p className="mb-7 text-sm leading-relaxed text-muted-foreground">
            Adjust the sliders or enter your own values. Use the same currency
            for each amount.
          </p>
          <div className="space-y-7">
            {controls.map(
              ({
                id,
                label,
                unit,
                minimum,
                maximum,
                minimumLabel,
                maximumLabel,
                value,
                onChange,
              }) => (
              <div key={id}>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <label htmlFor={`${id}-value`} className="text-sm font-medium">
                    {label}
                  </label>
                  <div className="flex shrink-0 items-center gap-2">
                    <input
                      id={`${id}-value`}
                      type="number"
                      min={minimum}
                      max={maximum}
                      step="1"
                      value={value ?? ""}
                      onChange={(event) => onChange(parseInput(event.currentTarget.value))}
                      className="w-24 rounded-lg border border-input bg-background px-2.5 py-1.5 text-right text-sm text-foreground"
                      placeholder="—"
                    />
                    <span className="text-xs text-muted-foreground">{unit}</span>
                  </div>
                </div>
                <input
                  type="range"
                  aria-label={`${label} slider`}
                  min={minimum}
                  max={maximum}
                  step="1"
                  value={Math.min(maximum, Math.max(minimum, value ?? minimum))}
                  onChange={(event) => onChange(Number(event.currentTarget.value))}
                  className="mt-4 w-full cursor-pointer accent-accent"
                />
                <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                  <span>{minimumLabel}</span>
                  <span>{maximumLabel}</span>
                </div>
              </div>
              ),
            )}
          </div>
        </div>

        <div className="border-t border-border/70 bg-background/70 p-6 md:p-8 lg:border-l lg:border-t-0 lg:p-10">
          <h3 className="font-display text-xl font-bold">Your illustrative estimate</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Based only on the values you enter.
          </p>

          <div className="mt-7 grid items-center gap-7 sm:grid-cols-[160px_minmax(0,1fr)]">
            <div className="flex flex-col items-center">
              <div
                className="relative h-40 w-40 rounded-full p-3"
                style={{ background: donutBackground }}
                role="img"
                aria-label={
                  validMissedPercent === null
                    ? "Missed-call percentage has not been entered"
                    : `${validMissedPercent}% estimated missed-call rate`
                }
              >
                <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-card text-center">
                  <span className="font-display text-3xl font-bold text-foreground">
                    {validMissedPercent === null ? "—" : `${validMissedPercent}%`}
                  </span>
                  <span className="text-xs text-muted-foreground">missed</span>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
                  Not missed
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-orange-500" aria-hidden="true" />
                  Missed
                </span>
              </div>
            </div>

            <div className="space-y-3" aria-live="polite">
              <div className="rounded-2xl border border-border/70 bg-card p-4">
                <p className="text-sm text-muted-foreground">
                  Monthly value at one appointment per missed call
                </p>
                <p className="mt-1 font-display text-2xl font-bold text-orange-600">
                  {monthlyEstimate === null ? "—" : formatAmount(monthlyEstimate)}
                </p>
                <p className="text-xs text-muted-foreground">USD</p>
              </div>
              <div className="rounded-2xl border border-border/70 bg-card p-4">
                <p className="text-sm text-muted-foreground">
                  12-month equivalent at the same rate
                </p>
                <p className="mt-1 font-display text-2xl font-bold text-orange-600">
                  {annualEstimate === null ? "—" : formatAmount(annualEstimate)}
                </p>
                <p className="text-xs text-muted-foreground">USD</p>
              </div>
            </div>
          </div>

          <Button
            asChild
            className="mt-7 w-full bg-[#FFB703] text-[#102A43] hover:bg-[#E6A500]"
          >
            <Link to={bookingHref}>
              Book a free demo <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            Uses 22 working days per month and assumes every missed call could
            become one appointment. This is an illustration, not a forecast or
            promise of recovered revenue.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Index() {
  const bookingHref = useBookCallHref();
  const [playingCall, setPlayingCall] = useState<string | null>(null);
  const [playbackMessage, setPlaybackMessage] = useState("");

  useEffect(() => () => window.speechSynthesis?.cancel(), []);

  const toggleSampleCall = (sample: (typeof sampleCalls)[number]) => {
    if (!("speechSynthesis" in window)) {
      setPlaybackMessage("Audio playback is not supported in this browser. Read the transcript below instead.");
      return;
    }

    if (playingCall === sample.id) {
      window.speechSynthesis.cancel();
      setPlayingCall(null);
      setPlaybackMessage("");
      return;
    }

    window.speechSynthesis.cancel();
    const text = sample.lines.map(([speaker, line]) => `${speaker}: ${line}`).join(". ");
    const narration = new SpeechSynthesisUtterance(text);
    narration.lang = "en-US";
    narration.onend = () => {
      setPlayingCall(null);
      setPlaybackMessage("");
    };
    narration.onerror = () => {
      setPlayingCall(null);
      setPlaybackMessage("Audio playback could not start. Please read the transcript below.");
    };

    trackAnalyticsEvent("sample_call_play", { sample_id: sample.id, page_path: "/" });
    setPlaybackMessage("Playing browser-generated narration of an illustrative script.");
    setPlayingCall(sample.id);
    window.speechSynthesis.speak(narration);
  };

  return (
    <Layout>
      <SEO
        title="Chiropractor AI Receptionist | Answer Every New Patient Call"
        description="Remi answers new-patient calls, handles common questions, and helps chiropractic clinics book visits when the front desk is busy or closed."
        keywords="chiropractor AI receptionist, AI receptionist for chiropractors, chiropractic answering service"
        canonical="/"
        structuredData={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "Axioware",
              url: "https://axioware.tech",
            },
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            },
          ],
        }}
      />

      <section className="relative flex min-h-[calc(100svh-4rem)] items-center justify-center overflow-hidden bg-primary py-16 text-center text-white md:min-h-[calc(100svh-5rem)] md:py-24">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source
            src="https://videos.pexels.com/video-files/5793310/5793310-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-slate-950/75"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,hsl(175_55%_45%_/_0.22),transparent_65%)]"
        />
        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-5xl">
            <span className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium">
              Built for chiropractic clinics
            </span>
            <h1 className="mx-auto mb-6 max-w-5xl font-display text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Book More New Patients{" "}
              <span className="text-primary-light lg:inline-block lg:whitespace-nowrap lg:text-6xl">
                Lose Fewer to No Shows
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-white/85 md:text-xl">
              Remi answers every call, helps book visits, and sends reminders
              before appointments are due, so your schedule stays fuller and
              your team can focus on care.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="xl" className="bg-[#FFB703] text-[#102A43] hover:bg-[#E6A500]">
                <Link to={bookingHref}>
                  Book a free 20-minute demo <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="hero-outline">
                <Link to="/#call-answering">
                  <Headphones className="mr-2 h-5 w-5" />
                  Hear Remi in action
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-white/75">
              Built for solo chiropractors and multi-location clinics
            </p>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-border bg-card py-5">
        <p className="sr-only">{clinicHighlights.join(". ")}</p>
        <div aria-hidden="true" className="overflow-hidden">
          <div className="clinic-marquee-track flex w-max motion-reduce:animate-none">
            {[0, 1, 2, 3].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center gap-8 px-4">
                {clinicHighlights.map((highlight) => (
                  <span key={highlight} className="flex items-center gap-8 whitespace-nowrap">
                    <span className="font-medium text-foreground">{highlight}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="call-answering" className="scroll-mt-24">
        <VoiceAgentDemo showPromo clinicType="chiropractic" />
      </div>

      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
              See how answering missed calls can create more booking opportunities.
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              A hypothetical comparison using the same booking rate before and after missed calls are handled.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-stretch gap-5 md:grid-cols-[1fr_auto_1fr]">
            <Card className="border-border">
              <CardHeader>
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Before
                </p>
                <CardTitle className="font-display text-xl">80 of 100 callers reached</CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  role="img"
                  aria-label="Out of 100 new-patient calls, 80 are answered and 20 are missed"
                  className="flex h-5 overflow-hidden rounded-full bg-muted"
                >
                  <div className="w-4/5 bg-blue-600" />
                  <div className="w-1/5 bg-slate-300" />
                </div>
                <div className="mt-3 flex justify-between gap-3 text-xs text-muted-foreground">
                  <span><span className="mr-1.5 inline-block h-2.5 w-2.5 rounded-full bg-blue-600" />80 answered</span>
                  <span><span className="mr-1.5 inline-block h-2.5 w-2.5 rounded-full bg-slate-300" />20 missed</span>
                </div>
                <div className="mt-6 flex items-end justify-between border-t border-border pt-4">
                  <p className="text-sm text-muted-foreground">Bookings at 50%</p>
                  <p className="font-display text-3xl font-bold text-foreground">40</p>
                </div>
              </CardContent>
            </Card>
            <div className="flex items-center justify-center" aria-hidden="true">
              <ArrowRight className="h-7 w-7 rotate-90 text-accent md:rotate-0" />
            </div>
            <Card className="border-accent/40 bg-accent/5">
              <CardHeader>
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                  After missed calls are handled
                </p>
                <CardTitle className="font-display text-xl">100 of 100 callers reached</CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  role="img"
                  aria-label="In this example, all 100 new-patient calls receive a response"
                  className="h-5 overflow-hidden rounded-full bg-muted"
                >
                  <div className="h-full w-full rounded-full bg-accent" />
                </div>
                <div className="mt-3 flex justify-between gap-3 text-xs text-muted-foreground">
                  <span><span className="mr-1.5 inline-block h-2.5 w-2.5 rounded-full bg-accent" />100 answered or captured</span>
                  <span>0 missed</span>
                </div>
                <div className="mt-6 flex items-end justify-between border-t border-border pt-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Bookings at the same 50%</p>
                    <p className="mt-1 text-xs font-medium text-accent">+10 in this example</p>
                  </div>
                  <p className="font-display text-3xl font-bold text-foreground">50</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <p className="mx-auto mt-6 max-w-5xl text-center text-xs leading-relaxed text-muted-foreground">
            Hypothetical example only—not a customer result, forecast, or guarantee. It assumes 100 calls per month,
            a 20% missed-call rate, and that every handled caller books at a 50% rate. Real outcomes vary; bookings
            depend on your clinic’s call flow, staff rules, and calendar setup.
          </p>
        </div>
      </section>

      <section id="sample-calls" className="section-padding scroll-mt-24 bg-background">
        <div className="container-custom">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
              Hear a sample call
            </p>
            <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
              Sample call scenarios
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              These scripts are illustrative, not recordings from real patients
              or customers. Actual call handling depends on your clinic's
              approved information, systems, and handoff rules.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {sampleCalls.map((sample) => (
              <Card key={sample.id} className="flex h-full flex-col">
                <CardHeader className="items-center text-center">
                  <CardTitle className="text-xl">{sample.title}</CardTitle>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => toggleSampleCall(sample)}
                    aria-label={`${playingCall === sample.id ? "Stop" : "Play"} ${sample.title} sample narration`}
                    className="mt-4 w-fit"
                  >
                    {playingCall === sample.id ? (
                      <><Pause className="mr-2 h-4 w-4" /> Stop sample</>
                    ) : (
                      <><Play className="mr-2 h-4 w-4" /> Play sample</>
                    )}
                  </Button>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-4">
                    {sample.lines.map(([speaker, line], index) => (
                      <li key={`${sample.id}-${index}`} className="text-sm leading-relaxed">
                        <span className="font-semibold text-black dark:text-foreground">
                          {speaker}:{" "}
                        </span>
                        <span
                          className={
                            speaker === "Caller"
                              ? "text-blue-700 dark:text-blue-400"
                              : "text-green-700 dark:text-green-400"
                          }
                        >
                          {line}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-6 min-h-5 text-center text-sm text-muted-foreground" aria-live="polite">
            {playbackMessage}
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom grid items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="relative min-h-[420px] overflow-hidden rounded-3xl bg-primary shadow-card lg:min-h-full">
            <img
              src="/images/chiropractic-phone-background.png"
              alt="A clinician assessing a patient's spine during a chiropractic visit"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/15 to-transparent" />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-primary/65 p-5 text-white backdrop-blur-sm sm:inset-x-6 sm:bottom-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                While your team cares for patients
              </p>
              <p className="mt-2 font-display text-xl font-semibold">
                New callers still need a clear next step.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-7">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                The missed-call problem
              </p>
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                Every missed call could be a missed new patient.
              </h2>
            </div>

            <div className="space-y-3">
              {painPoints.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="flex gap-4 rounded-2xl border border-border/70 bg-card p-4 shadow-sm sm:p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-border/70 bg-card p-4">
                <p className="font-display text-2xl font-bold text-accent">More than 8 in 10</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  missed calls across businesses end without a voicemail, based on
                  Quo's July–September 2026 analysis of more than 18 million calls.
                </p>
              </div>
              <div className="rounded-2xl border border-border/70 bg-card p-4">
                <p className="font-display text-2xl font-bold text-accent">69%</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  of those missed calls received no callback within 48 hours in the
                  same Quo analysis. These are general-business figures, not clinic data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section-padding scroll-mt-24 bg-background">
        <div className="container-custom grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                How it works
              </p>
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                From clinic details to a tested call flow.
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                A collaborative setup shaped around your clinic's services,
                scheduling rules, and preferred patient handoffs.
              </p>
            </div>
            <div className="relative mt-8 space-y-4">
              <div
                aria-hidden="true"
                className="absolute bottom-6 left-[21px] top-6 w-px bg-accent/25"
              />
              {[
                ["We learn your clinic", "Share your services, hours, FAQs, booking rules, and handoff preferences."],
                ["We configure and test Remi", "We build the call flow around your information and test common scenarios together."],
                ["Calls follow agreed rules", "Bookings and summaries go to the agreed destination when supported by your setup."],
              ].map(([title, description], index) => (
                <div key={title} className="relative flex items-start gap-4">
                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-background font-display text-sm font-bold text-accent">
                    0{index + 1}
                  </div>
                  <div className="flex-1 rounded-2xl border border-border/70 bg-card p-4 shadow-sm sm:p-5">
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button asChild className="bg-[#FFB703] text-[#102A43] hover:bg-[#E6A500]">
                <Link to="/how-it-works">See the setup process</Link>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -left-5 -top-5 h-32 w-32 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/60 bg-primary shadow-card">
              <img
                src="/images/chiropractor-treatment.png"
                alt="A clinician guiding a patient through a posture assessment"
                loading="lazy"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/5 to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-white/90 p-4 shadow-lg backdrop-blur-sm sm:inset-x-6 sm:bottom-6">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <Check className="h-5 w-5 text-accent" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Built around your clinic</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      Hours, FAQs, booking rules, and handoffs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section-padding scroll-mt-24 bg-secondary/30">
        <div className="container-custom">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
              Designed around patient calls
            </p>
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              The front-desk tasks Remi can help with.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ id, icon: Icon, title, description }) => (
              <Card key={id} id={id} className="scroll-mt-28">
                <CardHeader>
                  <Icon className="mb-2 h-6 w-6 text-accent" aria-hidden="true" />
                  <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild className="bg-[#FFB703] text-[#102A43] hover:bg-[#E6A500]">
              <Link to={bookingHref}>Book a free demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="results-and-roi" className="section-padding scroll-mt-24 bg-secondary/30">
        <div className="container-custom">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
              Results and ROI
            </p>
            <h2 className="mb-5 font-display text-3xl font-bold md:text-4xl">
              Start with your own call and patient values.
            </h2>
            <p className="mb-5 leading-relaxed text-muted-foreground">
              We do not publish chiropractic clinic results until they are
              verified. Use the calculator as a simple way to think about the
              calls your clinic may be missing, then review the assumptions with
              your team.
            </p>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 font-medium text-accent underline-offset-4 hover:underline"
            >
              View Axioware case studies from other projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <RoiCalculator />
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom grid gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
              Compatibility
            </p>
            <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
              Confirm your systems before you commit.
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              We review your practice software, calendar, and phone setup with
              you. We will confirm what can connect for your clinic and explain
              alternatives where direct booking is not available.
            </p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-card md:p-8">
            <ShieldCheck className="mb-4 h-7 w-7 text-accent" aria-hidden="true" />
            <h3 className="mb-3 font-display text-xl font-bold">
              Patient privacy matters.
            </h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Data handling, access, retention, and recording settings need to
              be reviewed for your specific setup. We do not claim healthcare
              certifications that have not been confirmed.
            </p>
            <Link
              to="/privacy"
              className="font-medium text-accent underline-offset-4 hover:underline"
            >
              Read the privacy policy
            </Link>
          </div>
        </div>
        <div className="container-custom mt-8">
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            Practice and scheduling software
          </p>
          <div className="grid gap-3 rounded-3xl border border-border/60 bg-card p-5 text-sm sm:grid-cols-2 md:grid-cols-3">
            {[
              "ChiroTouch",
              "ChiroHD",
              "Jane",
              "ChiroFusion",
              "CHIROSPRING",
              "Platinum System",
              "Genesis Chiropractic Software",
              "EZBIS",
              "Tebra",
              "Zanda",
            ].map((name) => (
              <div key={name} className="flex items-center justify-between gap-3 rounded-xl bg-secondary/40 px-4 py-3">
                <span className="font-medium">{name}</span>
                <span className="text-xs text-muted-foreground">Coming soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
              Clinic results
            </p>
            <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
              Verified stories will replace placeholder claims.
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              We do not publish testimonials or revenue claims before they are
              supported by a real clinic and a verified result.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["Pilot clinics", "Run the call flow through real clinic scenarios before launch."],
              ["Written review", "Secure a specific, attributable review after the pilot."],
              ["Verified outcome", "Publish only results that the clinic confirms."],
            ].map(([title, description]) => (
              <Card key={title}>
                <CardHeader>
                  <CardTitle className="text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild className="bg-[#FFB703] text-[#102A43] hover:bg-[#E6A500]">
              <Link to={bookingHref}>Discuss a clinic pilot</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="pricing" className="section-padding scroll-mt-24 bg-secondary/30">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl rounded-3xl border border-border/60 bg-card p-7 shadow-card md:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
              Pricing
            </p>
            <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
              Get a quote for your clinic's call flow.
            </h2>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Pricing depends on the coverage, call volume, scheduling workflow,
              and any required connections. We will review the setup with you
              and explain the quote before you decide. No made-up plan prices or
              feature limits.
            </p>
            <Button asChild className="bg-[#FFB703] text-[#102A43] hover:bg-[#E6A500]">
              <Link to="/pricing">See pricing details</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Questions chiropractors ask.
            </h2>
            <Link to="/faq" className="hidden text-sm font-medium text-accent hover:underline sm:block">
              All FAQs
            </Link>
          </div>
          <div className="space-y-5">
            {faqs.slice(0, 4).map((faq) => (
              <div key={faq.question} className="border-b border-border pb-5">
                <h3 className="font-semibold">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-center text-white">
        <div className="container-custom max-w-3xl">
          <h2 className="mb-5 font-display text-3xl font-bold md:text-4xl">
            Ready to stop missing patient calls?
          </h2>
          <p className="mb-8 leading-relaxed text-white/75">
            Book a free 20-minute demo and see how Remi could answer calls for
            your chiropractic clinic.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="xl" className="bg-[#FFB703] text-[#102A43] hover:bg-[#E6A500]">
              <Link to={bookingHref}>Book a demo</Link>
            </Button>
            <Button asChild size="xl" variant="hero-outline">
              <Link to="/#sample-calls">Hear a sample call</Link>
            </Button>
          </div>
          <a
            href="tel:+923258988683"
            className="mt-6 inline-block text-sm text-white/75 underline underline-offset-4 hover:text-white"
          >
            Call Axioware: +92 325 8988683
          </a>
        </div>
      </section>
    </Layout>
  );
}
