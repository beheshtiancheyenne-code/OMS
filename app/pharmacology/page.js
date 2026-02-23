"use client";

import Link from "next/link";

const coreModules = [
  {
    title: "Drug Classes",
    subtitle: "50+ classes",
    description: "Broad-spectrum review from antimicrobials to endocrine agents.",
    tone:
      "from-cyan-300/25 via-blue-300/18 to-indigo-300/20 border-cyan-200/35",
    titleTone: "text-sky-100",
  },
  {
    title: "Mechanisms of Action",
    subtitle: "Receptors and pathways",
    description: "Map molecular targets, signaling effects, and downstream outcomes.",
    tone:
      "from-emerald-300/25 via-teal-300/20 to-cyan-300/16 border-emerald-200/35",
    titleTone: "text-emerald-100",
  },
  {
    title: "Pharmacokinetics",
    subtitle: "ADME framework",
    description: "Absorption, distribution, metabolism, and excretion in practice.",
    tone:
      "from-amber-300/25 via-orange-300/18 to-rose-300/18 border-amber-200/35",
    titleTone: "text-amber-100",
  },
  {
    title: "Pharmacodynamics",
    subtitle: "Effects and toxicity",
    description: "Dose-response, potency, efficacy, and adverse event profiles.",
    tone:
      "from-violet-300/25 via-fuchsia-300/18 to-indigo-300/20 border-violet-200/35",
    titleTone: "text-violet-100",
  },
  {
    title: "Clinical Applications",
    subtitle: "Guideline-focused",
    description: "Indications, contraindications, and case-based prescribing logic.",
    tone:
      "from-orange-300/25 via-amber-300/18 to-rose-300/18 border-orange-200/35",
    titleTone: "text-orange-100",
  },
  {
    title: "High-Yield Tables",
    subtitle: "Charts and mnemonics",
    description: "Rapid review matrices for wards, oral boards, and exam prep.",
    tone:
      "from-blue-300/25 via-sky-300/18 to-indigo-300/20 border-blue-200/35",
    titleTone: "text-blue-100",
  },
];

const featuredContent = [
  { title: "Antibiotics", href: "/pharmacology" },
  { title: "Pain Management", href: "/pharmacology" },
  { title: "Anticoagulants", href: "/pharmacology" },
  { title: "Oncology Drugs", href: "/pharmacology" },
];

const quickTools = [
  "Flashcards",
  "Practice Questions",
  "Drug Interactions",
  "Case Studies",
];

const recentTopics = [
  "Antibiotics",
  "Cardiovascular Drugs",
  "CNS Agents",
  "Anti-inflammatories",
];

export default function PharmacologyPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.14),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(6,182,212,0.12),transparent_22%),linear-gradient(135deg,#050c2f_0%,#0b2150_45%,#101938_100%)] pb-14">
      <section className="relative overflow-hidden border-b border-cyan-200/25">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.12),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(59,130,246,0.14),transparent_30%),linear-gradient(120deg,rgba(2,6,23,0.22),rgba(4,19,58,0.18))]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:10px_10px] opacity-25" />

        <div className="relative mx-auto max-w-[1700px] px-6 pb-10 pt-12 text-white xl:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/90">
                <Link href="/" className="hover:text-white">Home</Link>
                <span className="mx-2 text-cyan-300">▸</span>
                <Link href="/training" className="hover:text-white">Lectures</Link>
                <span className="mx-2 text-cyan-300">▸</span>
                <span className="text-white">Pharmacology</span>
              </p>
              <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
                Pharmacology
              </h1>
              <p className="mt-3 max-w-3xl text-xl text-slate-200">
                Drugs, mechanisms, and clinical application pathways for OMFS-focused training.
              </p>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
              <div className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3">
                <span className="text-lg text-slate-300">🔎</span>
                <input
                  type="text"
                  placeholder="Search topics..."
                  className="w-full border-none bg-transparent text-base text-white outline-none placeholder:text-slate-300"
                />
              </div>
              <div className="mt-3 flex items-center justify-end gap-2">
                <button type="button" className="rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-slate-200 hover:bg-white/15">
                  Alerts
                </button>
                <button type="button" className="rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-slate-200 hover:bg-white/15">
                  Saved
                </button>
                <button type="button" className="rounded-full bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white">
                  CM
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-7 max-w-[1700px] px-6 xl:px-8">
        <div className="grid gap-6 xl:grid-cols-[1fr_340px]">
          <div className="space-y-7">
            <div>
              <div className="mb-4 flex items-center gap-4">
                <h2 className="text-4xl font-semibold tracking-tight text-white">Core Modules</h2>
                <div className="h-px flex-1 bg-cyan-200/20" />
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {coreModules.map((module) => (
                  <Link
                    key={module.title}
                    href="/pharmacology"
                    className={`group rounded-2xl border bg-gradient-to-br ${module.tone} p-5 shadow-[0_12px_32px_-20px_rgba(56,189,248,0.75)] backdrop-blur transition-all duration-200 hover:-translate-y-1 hover:border-cyan-200/50`}
                  >
                    <h3 className={`text-2xl font-bold leading-tight ${module.titleTone}`}>
                      {module.title}
                    </h3>
                    <p className="mt-2 text-base font-semibold text-slate-100">{module.subtitle}</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-200/95">{module.description}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-4">
                <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Learning Path
                </h2>
                <div className="h-px flex-1 bg-cyan-200/20" />
              </div>
              <div className="rounded-2xl border border-cyan-200/25 bg-white/8 p-3 backdrop-blur">
                <div className="flex flex-wrap items-center gap-2">
                  {[
                    { id: "01", label: "Basics" },
                    { id: "02", label: "Mechanisms" },
                    { id: "03", label: "Clinical Use" },
                    { id: "04", label: "Boards" },
                  ].map((step, index, arr) => (
                    <div key={step.id} className="flex items-center gap-2">
                      <span className="rounded-full border border-cyan-200/35 bg-gradient-to-r from-cyan-400/15 to-blue-500/15 px-4 py-2 text-sm font-semibold text-cyan-100">
                        {step.id} {step.label}
                      </span>
                      {index < arr.length - 1 ? (
                        <span className="text-lg font-semibold text-cyan-300/80">›</span>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-4">
                <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Featured Content
                </h2>
                <div className="h-px flex-1 bg-cyan-200/20" />
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {featuredContent.map((item, idx) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group overflow-hidden rounded-2xl border border-cyan-200/25 bg-white/10 shadow-[0_12px_30px_-20px_rgba(56,189,248,0.7)] backdrop-blur transition-all duration-200 hover:-translate-y-1 hover:border-cyan-200/45"
                  >
                    <div
                      className={`h-24 bg-gradient-to-br transition duration-200 group-hover:h-[6.5rem] ${
                        idx % 4 === 0
                          ? "from-emerald-300/25 via-sky-300/18 to-blue-300/25"
                          : idx % 4 === 1
                          ? "from-orange-300/25 via-rose-300/18 to-amber-300/25"
                          : idx % 4 === 2
                          ? "from-rose-300/25 via-pink-300/18 to-fuchsia-300/25"
                          : "from-violet-300/25 via-indigo-300/18 to-blue-300/25"
                      }`}
                    />
                    <div className="p-4">
                      <h3 className="text-[2rem] font-semibold leading-tight text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm uppercase tracking-wide text-cyan-200/85">
                        Curated Module
                      </p>
                      <p className="mt-3 inline-flex items-center gap-1 text-xl font-semibold text-cyan-200">
                        Start <span className="transition group-hover:translate-x-0.5">›</span>
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <aside className="h-fit space-y-4 rounded-2xl border border-cyan-200/25 bg-white/10 p-5 shadow-[0_16px_38px_-24px_rgba(56,189,248,0.75)] backdrop-blur">
            <section>
              <h2 className="text-4xl font-semibold tracking-tight text-white">Your Progress</h2>
              <div className="mt-4 space-y-3">
                <div className="h-3 rounded-full bg-slate-900/45">
                  <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-emerald-400 to-sky-500" />
                </div>
                <div className="h-3 rounded-full bg-slate-900/45">
                  <div className="h-full w-[38%] rounded-full bg-gradient-to-r from-lime-400 to-emerald-400" />
                </div>
                <p className="text-right text-3xl font-semibold text-slate-100">68% Complete</p>
              </div>
            </section>

            <section className="border-t border-cyan-200/20 pt-4">
              <h2 className="text-4xl font-semibold tracking-tight text-white">Quick Tools</h2>
              <div className="mt-3 space-y-2">
                {quickTools.map((tool) => (
                  <Link
                    key={tool}
                    href="/resources"
                    className="flex items-center justify-between rounded-xl border border-cyan-200/25 bg-white/10 px-4 py-3 text-2xl font-semibold text-slate-100 hover:bg-white/15"
                  >
                    <span>{tool}</span>
                    <span className="text-cyan-300">{">"}</span>
                  </Link>
                ))}
              </div>
            </section>

            <section className="border-t border-cyan-200/20 pt-4">
              <h2 className="text-4xl font-semibold tracking-tight text-white">Recent Topics</h2>
              <div className="mt-3 space-y-2">
                {recentTopics.map((topic) => (
                  <Link
                    key={topic}
                    href="/pharmacology"
                    className="block rounded-xl border border-cyan-200/25 bg-white/10 px-4 py-3 text-2xl font-medium text-slate-100 hover:bg-white/15"
                  >
                    {topic}
                  </Link>
                ))}
              </div>
              <Link
                href="/pharmacology"
                className="mt-4 block rounded-xl border border-cyan-200/25 bg-white/10 px-4 py-3 text-center text-2xl font-semibold text-slate-100 hover:bg-white/15"
              >
                View All
              </Link>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}
