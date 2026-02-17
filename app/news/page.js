import Link from "next/link";

const newsItems = [
  {
    id: "events",
    title: "Events",
    text: "Upcoming workshops and webinars will be posted here.",
  },
  {
    id: "jobs",
    title: "Job Opportunities",
    text: "Open positions and academic opportunities will be listed here.",
  },
  {
    id: "updates",
    title: "News of Interest",
    text: "Latest updates from OMS Academy and related research.",
  },
];

export default function NewsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-4xl font-bold text-slate-900">News</h1>
      <p className="mt-4 text-lg text-slate-700">
        Latest announcements, events, and opportunities.
      </p>

      <div className="mt-8 space-y-6">
        {newsItems.map((item) => (
          <section key={item.id} id={item.id} className="rounded-2xl border p-6">
            <h2 className="text-2xl font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-2 text-slate-700">{item.text}</p>
          </section>
        ))}
      </div>

      <div className="mt-10">
        <Link
          href="/"
          className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
