"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const lectureCards = [
  {
    title: "Basic Sciences",
    subtitle: "Fundamentals of Medical Science",
    href: "/basic-sciences",
    tone: "from-sky-500 via-blue-500 to-cyan-300",
    buttonTone: "from-blue-700 to-sky-600",
    keywords: "all popular new basic science fundamentals",
    icon: "🧬",
  },
  {
    title: "Anatomy & Radiology",
    subtitle: "Anatomy, Imaging, and Diagnostics",
    href: "/anatomy",
    tone: "from-indigo-700 via-violet-600 to-purple-400",
    buttonTone: "from-indigo-700 to-violet-600",
    keywords: "all popular new anatomy radiology imaging diagnostics",
    icon: "💀",
  },
  {
    title: "Surgery & Anesthesiology",
    subtitle: "Surgical Procedures and Anesthesia",
    href: "/surgery",
    tone: "from-cyan-600 via-teal-500 to-emerald-300",
    buttonTone: "from-cyan-700 to-teal-600",
    keywords: "all popular new surgery anesthesia procedures",
    icon: "🩺",
  },
  {
    title: "Pharmacology",
    subtitle: "Medications and Therapeutics",
    href: "/pharmacology",
    tone: "from-red-500 via-orange-500 to-amber-300",
    buttonTone: "from-orange-600 to-red-500",
    keywords: "all popular new pharmacology medications therapeutics drugs",
    icon: "💊",
  },
];

const filters = ["All", "Popular", "New"];

export default function Page() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCards = useMemo(() => {
    const q = query.trim().toLowerCase();
    return lectureCards.filter((card) => {
      const matchesQuery =
        !q ||
        `${card.title} ${card.subtitle} ${card.keywords}`
          .toLowerCase()
          .includes(q);
      const matchesFilter =
        activeFilter === "All" ||
        card.keywords.toLowerCase().includes(activeFilter.toLowerCase());
      return matchesQuery && matchesFilter;
    });
  }, [query, activeFilter]);

  return (
    <main className="min-h-screen bg-[#f3f4f6]">
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-14">
        <div className="text-center">
          <h1 className="bg-gradient-to-r from-sky-500 via-blue-600 to-fuchsia-500 bg-clip-text text-5xl font-extrabold text-transparent md:text-7xl">
            Lectures
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-xl text-slate-600">
            Explore our lecture categories in maxillofacial surgery and medical education.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-300 bg-white px-4 py-3 shadow-sm">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="flex flex-1 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
              <span className="text-2xl text-slate-400">⌕</span>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search lectures..."
                className="w-full bg-transparent text-lg text-slate-700 outline-none placeholder:text-slate-400"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-xl border px-5 py-2 text-sm font-semibold transition ${
                    activeFilter === filter
                      ? "border-slate-300 bg-slate-200 text-slate-900"
                      : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {filter}
                </button>
              ))}
              <button
                type="button"
                className="rounded-xl border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Filter
              </button>
            </div>
          </div>
        </div>

        <div className="mt-9 grid gap-6 md:grid-cols-2">
          {filteredCards.map((card) => (
            <article
              key={card.title}
              className="overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-sm"
            >
              <div className={`relative bg-gradient-to-r ${card.tone} p-7`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.35),transparent_35%),radial-gradient(circle_at_20%_85%,rgba(255,255,255,0.22),transparent_40%)]" />
                <div className="relative flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-4xl font-bold leading-tight text-white">{card.title}</h2>
                    <p className="mt-3 text-xl text-white/90">{card.subtitle}</p>
                  </div>
                  <span className="text-6xl">{card.icon}</span>
                </div>
              </div>

              <div className="p-6">
                <Link
                  href={card.href}
                  className={`inline-flex rounded-xl bg-gradient-to-r ${card.buttonTone} px-6 py-3 text-lg font-semibold text-white shadow-md transition hover:brightness-110`}
                >
                  View Topics
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
