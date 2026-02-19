"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const basicScienceCards = [
  {
    title: "Cell Biology",
    track: "Fundamental",
    lessons: 12,
    progress: 80,
    href: "/basic-sciences/cell-biology",
    image: "/cellbio1.png",
  },
  {
    title: "Immunology",
    track: "Clinical",
    lessons: 10,
    progress: 60,
    href: "/basic-sciences/immunology",
    image: "/immuno1.png",
  },
  {
    title: "Pathology",
    track: "Clinical",
    lessons: 8,
    progress: 70,
    href: "/basic-sciences/pathology",
    image: "/pathology1.png",
  },
  {
    title: "Hematology-Oncology",
    track: "Advanced",
    lessons: 11,
    progress: 55,
    href: "/basic-sciences/hematology-oncology",
    image: "/logo2.png",
  },
  {
    title: "Inflammation and Healing",
    track: "Clinical",
    lessons: 9,
    progress: 50,
    href: "/basic-sciences/inflammation-healing",
    image: "/logo2.png",
  },
  {
    title: "Microbiology",
    track: "Fundamental",
    lessons: 7,
    progress: 45,
    href: "/basic-sciences/microbiology",
    image: "/logo_nobackground.png",
  },

  {
    title: "Microbiology Essentials",
    track: "Advanced",
    lessons: 10,
    progress: 65,
    href: "/basic-sciences/microbiology-essentials",
    image: "/logo_nobackground.png",
  },
];

export default function BasicSciencesPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const resolveImage = (path) =>
    path && path.startsWith("/") ? `${basePath}${path}` : path;

  const [keyword, setKeyword] = useState("");
  const [selectedTrack, setSelectedTrack] = useState("All");

  const tracks = ["All", "Fundamental", "Clinical", "Advanced"];

  const filteredCards = useMemo(() => {
    const q = keyword.trim().toLowerCase();
    return basicScienceCards.filter((card) => {
      const matchesKeyword =
        !q ||
        `${card.title} ${card.track}`
          .toLowerCase()
          .includes(q);
      const matchesTrack =
        selectedTrack === "All" || card.track === selectedTrack;
      return matchesKeyword && matchesTrack;
    });
  }, [keyword, selectedTrack]);

  const totalLessons = filteredCards.reduce((sum, card) => sum + card.lessons, 0);
  const avgProgress = filteredCards.length
    ? Math.round(
        filteredCards.reduce((sum, card) => sum + card.progress, 0) /
          filteredCards.length
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
            <span className="mx-2 text-cyan-300">▸</span>
            <Link href="/training" className="hover:text-white">Lectures</Link>
            <span className="mx-2 text-cyan-300">▸</span>
            <span className="text-white">Basic Sciences</span>
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">Basic Sciences</h1>
          <p className="mt-3 max-w-3xl text-xl text-slate-200">
            Build your foundation with structured topics, chapter progression,
            and high-yield modules for OMFS training.
          </p>

          <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center">
            <Link
              href="/community"
              className="rounded-xl border border-cyan-300/40 bg-gradient-to-r from-blue-700 to-cyan-600 px-6 py-3 text-lg font-semibold text-white shadow-lg shadow-cyan-900/30 hover:brightness-110"
            >
              + Start New Discussion
            </Link>
            <div className="flex max-w-xl flex-1 items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur">
              <span className="text-xl">🔎</span>
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search topics..."
                className="w-full bg-transparent text-base text-white outline-none placeholder:text-slate-300"
              />
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {tracks.map((track) => (
              <button
                key={track}
                type="button"
                onClick={() => setSelectedTrack(track)}
                className={`rounded-lg border px-4 py-2 text-sm font-semibold transition ${
                  selectedTrack === track
                    ? "border-cyan-300 bg-cyan-500/25 text-white"
                    : "border-white/20 bg-white/5 text-slate-200 hover:bg-white/10"
                }`}
              >
                {track}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-2">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group relative overflow-hidden rounded-2xl border border-cyan-200/20 bg-[linear-gradient(150deg,rgba(16,30,76,0.82),rgba(8,20,58,0.92))] p-5 shadow-[0_15px_50px_-20px_rgba(8,145,178,0.8)] transition-all duration-200 hover:-translate-y-1 hover:border-cyan-200/40"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20 transition group-hover:opacity-30"
                style={{ backgroundImage: `url('${resolveImage(card.image)}')` }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))]" />
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-3">
                  <span className="rounded-full border border-cyan-200/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-200">
                    {card.track}
                  </span>
                  <span className="text-2xl text-cyan-200/80 transition group-hover:translate-x-1">›</span>
                </div>
                <h2 className="mt-4 text-3xl font-bold leading-tight text-white">{card.title}</h2>
                <p className="mt-4 text-lg text-slate-200">
                  📘 {card.lessons} Lessons • {card.progress}% Complete
                </p>
                <div className="mt-3 h-2.5 rounded-full bg-slate-900/60">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"
                    style={{ width: `${card.progress}%` }}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-cyan-200/20 bg-[linear-gradient(150deg,rgba(16,30,76,0.82),rgba(8,20,58,0.92))] px-6 py-5 text-white shadow-[0_15px_50px_-20px_rgba(8,145,178,0.8)]">
          <div className="grid gap-4 text-center md:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-wide text-cyan-200">Topics</p>
              <p className="mt-1 text-4xl font-bold">{filteredCards.length}</p>
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
