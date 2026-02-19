import Link from "next/link";

const categories = [
  { icon: "🩺", title: "Clinical Cases", threads: 142 },
  { icon: "📚", title: "Basic Sciences", threads: 89 },
  { icon: "🛠️", title: "Surgical Techniques", threads: 76 },
  { icon: "💉", title: "Anesthesia & Medicine", threads: 64 },
  { icon: "🔬", title: "Research & Publications", threads: 53 },
  { icon: "🎓", title: "Residency & Career", threads: 41 },
];

const discussions = [
  {
    title: "Management of Impacted Third Molars",
    tag: "Surgical Techniques",
    author: "Dr. Michael Lee",
    replies: 12,
    views: "1.4k",
    time: "2h ago",
  },
  {
    title: "Mandibular Fracture Fixation - Case Review",
    tag: "Clinical Cases",
    author: "Dr. Sarah Post",
    replies: 8,
    views: "928",
    time: "5h ago",
  },
  {
    title: "Airway Protocols in Trauma Patients",
    tag: "Anesthesia & Medicine",
    author: "Dr. James Wilson",
    replies: 15,
    views: "2.1k",
    time: "1d ago",
  },
];

const activity = [
  {
    title: "Dr. Smith replied",
    subtitle: "Mandibular plating",
    time: "10 min ago",
    icon: "🧑‍⚕️",
  },
  {
    title: "New topic posted",
    subtitle: "Airway algorithms",
    time: "1 hour ago",
    icon: "🟢",
  },
  {
    title: "5 new posts",
    subtitle: "Clinical Cases",
    time: "3 hours ago",
    icon: "🎓",
  },
];

export default function CommunityPage() {
  return (
    <main className="bg-slate-100 pb-14">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(59,130,246,0.45),transparent_32%),radial-gradient(circle_at_90%_10%,rgba(34,211,238,0.4),transparent_28%),linear-gradient(135deg,#06143a_0%,#0b2f75_45%,#073e8c_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.18)_1px,transparent_1px)] bg-[size:10px_10px] opacity-25" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 text-white">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">Community</p>
          <h1 className="mt-3 text-5xl font-bold md:text-6xl">Learn. Discuss. Collaborate.</h1>
          <p className="mt-4 max-w-3xl text-xl text-slate-200">
            A private forum for OMS professionals and students.
          </p>

          <div className="mt-8 flex flex-col gap-3 md:flex-row">
            <button
              type="button"
              className="rounded-full bg-gradient-to-r from-blue-700 to-cyan-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-cyan-900/30 transition hover:brightness-110"
            >
              + Start New Discussion
            </button>
            <div className="flex w-full max-w-xl items-center gap-3 rounded-full bg-white px-5 py-3 text-slate-500 shadow-lg">
              <span className="text-xl">🔎</span>
              <input
                type="text"
                placeholder="Search discussions..."
                className="w-full bg-transparent text-base text-slate-800 outline-none placeholder:text-slate-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto -mt-6 max-w-7xl px-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {categories.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cyan-50 text-3xl">
                {c.icon}
              </div>
              <h3 className="mt-3 text-2xl font-semibold leading-tight text-slate-900">{c.title}</h3>
              <p className="mt-2 text-xl text-blue-700">{c.threads} Threads</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 grid max-w-7xl gap-6 px-4 lg:grid-cols-[2fr_1fr]">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-4xl font-bold text-slate-900">Latest Discussions</h2>
            <div className="flex gap-4 text-base font-medium text-slate-500">
              <button type="button" className="text-blue-700">Latest</button>
              <button type="button">Top</button>
              <button type="button">Unanswered</button>
            </div>
          </div>

          <div className="space-y-3">
            {discussions.map((d) => (
              <article
                key={d.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-3xl font-semibold text-slate-900">{d.title}</h3>
                    <div className="mt-2 flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-blue-100 px-4 py-1 text-base text-blue-800">
                        {d.tag}
                      </span>
                      <span className="text-lg text-slate-600">{d.author}</span>
                    </div>
                  </div>
                  <div className="flex gap-7 text-center">
                    <div>
                      <p className="text-3xl font-bold text-slate-900">{d.replies}</p>
                      <p className="text-sm uppercase tracking-wide text-slate-500">Replies</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-slate-900">{d.views}</p>
                      <p className="text-sm uppercase tracking-wide text-slate-500">Views</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-slate-700">{d.time}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-4xl font-bold text-slate-900">Latest Activity</h3>
          <div className="mt-5 space-y-5">
            {activity.map((a) => (
              <div key={a.title + a.time} className="flex gap-3">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-lg">
                  {a.icon}
                </div>
                <div>
                  <p className="text-xl text-slate-900">{a.title}</p>
                  <p className="text-xl font-semibold text-blue-700">{a.subtitle}</p>
                  <p className="text-base text-slate-500">{a.time}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7">
            <Link
              href="/resources"
              className="inline-block rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white"
            >
              Visit Research Hub
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}
