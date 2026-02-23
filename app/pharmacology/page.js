import Link from "next/link";

const coreModules = [
  {
    title: "Drug Classes",
    subtitle: "50+ classes",
    description: "Broad-spectrum review from antimicrobials to endocrine agents.",
    tone: "from-blue-100 via-sky-50 to-cyan-100",
    titleTone: "text-blue-800",
  },
  {
    title: "Mechanisms of Action",
    subtitle: "Receptors and pathways",
    description: "Map molecular targets, signaling effects, and downstream outcomes.",
    tone: "from-emerald-100 via-teal-50 to-cyan-100",
    titleTone: "text-emerald-800",
  },
  {
    title: "Pharmacokinetics",
    subtitle: "ADME framework",
    description: "Absorption, distribution, metabolism, and excretion in practice.",
    tone: "from-orange-100 via-amber-50 to-rose-100",
    titleTone: "text-orange-800",
  },
  {
    title: "Pharmacodynamics",
    subtitle: "Effects and toxicity",
    description: "Dose-response, potency, efficacy, and adverse event profiles.",
    tone: "from-violet-100 via-fuchsia-50 to-indigo-100",
    titleTone: "text-violet-800",
  },
  {
    title: "Clinical Applications",
    subtitle: "Guideline-focused",
    description: "Indications, contraindications, and case-based prescribing logic.",
    tone: "from-amber-100 via-orange-50 to-rose-100",
    titleTone: "text-amber-900",
  },
  {
    title: "High-Yield Tables",
    subtitle: "Charts and mnemonics",
    description: "Rapid review matrices for wards, oral boards, and exam prep.",
    tone: "from-sky-100 via-blue-50 to-indigo-100",
    titleTone: "text-blue-800",
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
    <main className="min-h-screen bg-[linear-gradient(160deg,#f2f7ff_0%,#f7f9ff_45%,#eef3fb_100%)] pb-12">
      <section className="relative overflow-hidden border-b border-blue-100/70 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.2),transparent_32%),radial-gradient(circle_at_78%_12%,rgba(56,189,248,0.2),transparent_26%),linear-gradient(120deg,#f9fbff_0%,#eef4ff_42%,#e6edff_100%)]">
        <div className="absolute left-1/3 top-8 h-36 w-36 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute right-20 top-2 h-28 w-28 rounded-full bg-cyan-200/40 blur-2xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-10 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700/80">
                <Link href="/" className="hover:text-blue-900">Home</Link>
                <span className="mx-2 text-blue-500">/</span>
                <Link href="/training" className="hover:text-blue-900">Lectures</Link>
                <span className="mx-2 text-blue-500">/</span>
                <span className="text-blue-900">Pharmacology</span>
              </p>
              <h1 className="mt-3 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
                Pharmacology
              </h1>
              <p className="mt-4 text-xl text-slate-700">
                Drugs · Mechanisms · Clinical Application
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-white/85 p-4 shadow-lg shadow-blue-200/45 backdrop-blur">
              <div className="flex items-center gap-3 rounded-xl border border-blue-100 bg-white px-4 py-3">
                <span className="text-lg text-slate-400">Search</span>
                <input
                  type="text"
                  placeholder="Search topics..."
                  className="w-full border-none bg-transparent text-base text-slate-700 outline-none placeholder:text-slate-400"
                />
              </div>
              <div className="mt-3 flex items-center justify-end gap-3 text-sm font-medium text-slate-500">
                <button type="button" className="rounded-lg border border-blue-100 bg-white px-3 py-1.5 hover:text-slate-800">Alerts</button>
                <button type="button" className="rounded-lg border border-blue-100 bg-white px-3 py-1.5 hover:text-slate-800">Saved</button>
                <button type="button" className="rounded-full bg-blue-600 px-3 py-1.5 text-white">CM</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-7 max-w-7xl px-4">
        <div className="grid gap-6 xl:grid-cols-[1fr_330px]">
          <div className="space-y-7">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-4xl font-semibold tracking-tight text-slate-900">Core Modules</h2>
                <div className="h-px flex-1 bg-blue-100 ml-4" />
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {coreModules.map((module) => (
                  <Link
                    key={module.title}
                    href="/pharmacology"
                    className={`group rounded-2xl border border-white/70 bg-gradient-to-br ${module.tone} p-5 shadow-[0_10px_25px_-15px_rgba(59,130,246,0.6)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_35px_-18px_rgba(59,130,246,0.75)]`}
                  >
                    <h3 className={`text-2xl font-bold leading-tight ${module.titleTone}`}>{module.title}</h3>
                    <p className="mt-2 text-base font-semibold text-slate-700">{module.subtitle}</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{module.description}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-4xl font-semibold tracking-tight text-slate-900">Learning Path</h2>
                <div className="h-px flex-1 bg-blue-100 ml-4" />
              </div>
              <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-blue-100 bg-white/80 p-3 shadow-sm">
                {["1 Basics", "2 Mechanisms", "3 Clinical Use", "4 Boards"].map((step, index) => (
                  <div key={step} className="flex items-center">
                    <span className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800">
                      {step}
                    </span>
                    {index < 3 && <span className="px-2 text-blue-500">{">"}</span>}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-4xl font-semibold tracking-tight text-slate-900">Featured Content</h2>
                <div className="h-px flex-1 bg-blue-100 ml-4" />
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {featuredContent.map((item, idx) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className={`h-28 bg-gradient-to-br ${
                      idx % 4 === 0
                        ? "from-emerald-100 via-sky-50 to-blue-100"
                        : idx % 4 === 1
                          ? "from-orange-100 via-rose-50 to-amber-100"
                          : idx % 4 === 2
                            ? "from-rose-100 via-red-50 to-pink-100"
                            : "from-violet-100 via-purple-50 to-fuchsia-100"
                    }`} />
                    <div className="p-4">
                      <h3 className="text-3xl font-semibold leading-tight text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-xl font-semibold text-blue-700">Start {">"}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <aside className="h-fit space-y-4 rounded-2xl border border-blue-100 bg-white/85 p-5 shadow-lg shadow-blue-200/35">
            <section>
              <h2 className="text-4xl font-semibold tracking-tight text-slate-900">Your Progress</h2>
              <div className="mt-4 space-y-3">
                <div className="h-3 rounded-full bg-slate-100">
                  <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-emerald-400 to-sky-500" />
                </div>
                <div className="h-3 rounded-full bg-slate-100">
                  <div className="h-full w-[38%] rounded-full bg-gradient-to-r from-lime-400 to-emerald-400" />
                </div>
                <p className="text-right text-3xl font-semibold text-slate-800">68% Complete</p>
              </div>
            </section>

            <section className="border-t border-blue-100 pt-4">
              <h2 className="text-4xl font-semibold tracking-tight text-slate-900">Quick Tools</h2>
              <div className="mt-3 space-y-2">
                {quickTools.map((tool) => (
                  <Link
                    key={tool}
                    href="/resources"
                    className="flex items-center justify-between rounded-xl border border-blue-100 bg-blue-50/35 px-4 py-3 text-2xl font-semibold text-slate-800 hover:bg-blue-50"
                  >
                    <span>{tool}</span>
                    <span className="text-blue-600">{">"}</span>
                  </Link>
                ))}
              </div>
            </section>

            <section className="border-t border-blue-100 pt-4">
              <h2 className="text-4xl font-semibold tracking-tight text-slate-900">Recent Topics</h2>
              <div className="mt-3 space-y-2">
                {recentTopics.map((topic) => (
                  <Link
                    key={topic}
                    href="/pharmacology"
                    className="block rounded-xl border border-blue-100 bg-white px-4 py-3 text-2xl font-medium text-slate-800 hover:bg-blue-50/40"
                  >
                    {topic}
                  </Link>
                ))}
              </div>
              <Link
                href="/pharmacology"
                className="mt-4 block rounded-xl border border-blue-200 bg-slate-100/70 px-4 py-3 text-center text-2xl font-semibold text-slate-800 hover:bg-slate-200/70"
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
