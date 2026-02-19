import Link from "next/link";
import { slugifySegment } from "./subtopicData";

export default function SubtopicChaptersPage({
  title,
  subtitle,
  chapters,
  subtopic,
}) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const resolveImage = (path) =>
    path && path.startsWith("/") ? `${basePath}${path}` : path;
  const totalLessons = chapters.length * 2;
  const avgProgress = chapters.length
    ? Math.round(
        chapters.reduce((sum, chapter) => sum + (85 - chapter.id * 8), 0) /
          chapters.length
      )
    : 0;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.25),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(6,182,212,0.2),transparent_22%),linear-gradient(135deg,#030b2a_0%,#0a225d_45%,#0a1d45_100%)] pb-14">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.2),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(59,130,246,0.24),transparent_30%),linear-gradient(120deg,rgba(2,6,23,0.5),rgba(4,19,58,0.35))]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.13)_1px,transparent_1px)] bg-[size:10px_10px] opacity-30" />

        <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-14 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/90">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">▸</span>
            <Link href="/training" className="hover:text-white">Lectures</Link>
            <span className="mx-2">▸</span>
            <Link href="/basic-sciences" className="hover:text-white">Basic Sciences</Link>
            <span className="mx-2">▸</span>
            <span className="text-white">{title}</span>
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">{title}</h1>
          <p className="mt-3 max-w-3xl text-xl text-slate-200">{subtitle}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/community"
              className="rounded-xl border border-cyan-300/40 bg-gradient-to-r from-blue-700 to-cyan-600 px-6 py-3 text-lg font-semibold text-white shadow-lg shadow-cyan-900/30 hover:brightness-110"
            >
              + Start New Discussion
            </Link>
            <Link
              href="/basic-sciences"
              className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-lg font-semibold text-white backdrop-blur hover:bg-white/15"
            >
              All Basic Sciences
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-2">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {chapters.map((chapter) => (
            <Link
              key={chapter.id}
              href={
                chapter.href !== "#"
                  ? chapter.href
                  : `/basic-sciences/${subtopic}/${slugifySegment(chapter.title)}`
              }
              className="group relative overflow-hidden rounded-2xl border border-cyan-200/20 bg-[linear-gradient(150deg,rgba(16,30,76,0.82),rgba(8,20,58,0.92))] p-5 shadow-[0_15px_50px_-20px_rgba(8,145,178,0.8)] transition-all duration-200 hover:-translate-y-1 hover:border-cyan-200/40"
            >
              <div
                className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-20 transition group-hover:opacity-30"
                style={{ backgroundImage: `url('${resolveImage(chapter.bgImage)}')` }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))]" />
              <div className="relative z-10 flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-lg bg-cyan-500 px-2 text-sm font-bold text-white">
                    {chapter.id}
                  </span>
                  <span className="text-3xl">{chapter.icon}</span>
                </div>
                <span className="text-2xl text-cyan-200/80 transition group-hover:translate-x-1">›</span>
              </div>
              <h2 className="relative z-10 mt-4 text-3xl font-bold leading-tight text-white">
                {chapter.title}
              </h2>
              <p className="relative z-10 mt-3 text-lg leading-relaxed text-slate-200">{chapter.desc}</p>
              <p className="relative z-10 mt-4 text-sm uppercase tracking-wide text-cyan-200">
                📘 {Math.max(6, 14 - chapter.id)} lessons • {Math.max(40, 88 - chapter.id * 7)}% complete
              </p>
              <div className="relative z-10 mt-2 h-2.5 rounded-full bg-slate-900/60">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"
                  style={{ width: `${Math.max(40, 88 - chapter.id * 7)}%` }}
                />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-cyan-200/20 bg-[linear-gradient(150deg,rgba(16,30,76,0.82),rgba(8,20,58,0.92))] px-6 py-5 text-white shadow-[0_15px_50px_-20px_rgba(8,145,178,0.8)]">
          <div className="grid gap-4 text-center md:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-wide text-cyan-200">Topics</p>
              <p className="mt-1 text-4xl font-bold">{chapters.length}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wide text-cyan-200">Lessons</p>
              <p className="mt-1 text-4xl font-bold">{totalLessons}+</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wide text-cyan-200">Avg Completion</p>
              <p className="mt-1 text-4xl font-bold">{avgProgress}%</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
