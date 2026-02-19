import Link from "next/link";
import { notFound } from "next/navigation";
import {
  slugifySegment,
  subtopicContent,
} from "../../components/subtopicData";

function buildDefaultDetails(subtopicTitle, chapter, nextChapter) {
  return {
    duration: "18-25 min",
    level: "Foundational",
    tags: [subtopicTitle, "Clinical Recall", "Board Prep"],
    progress: 40,
    objectives: [
      `Differentiate the core mechanisms in ${chapter.title.toLowerCase()}.`,
      `Apply high-yield concepts from ${chapter.title.toLowerCase()} to case-based reasoning.`,
      "Connect foundational science to OMFS clinical decisions.",
    ],
    pearl:
      "When you're stuck, anchor your answer to function first, then structure, then pathology.",
    rapidMapTitle: `${chapter.title} (rapid map)`,
    rapidMapNotes: chapter.desc,
    clinicalConnection:
      "Clinical connection: use this framework to structure oral exam reasoning and perioperative planning.",
    resources: ["Express Review PDF", "Resident Note Sheet", "Practice MCQs"],
    quickCheck: [
      "Which statement is most accurate for this topic?",
      "What is the highest-yield concept for exams?",
      "Which mechanism links this topic to OMFS care?",
    ],
    nextTopic: nextChapter?.title || "Return to Basic Sciences",
  };
}

const chapterOverrides = {
  "cell-biology/cell-structure-and-organization": {
    duration: "18-25 min",
    level: "Foundational",
    tags: ["Cell Biology", "Anatomy of the Cell", "Boards"],
    progress: 40,
    objectives: [
      "Differentiate major eukaryotic organelles and their core functions.",
      "Explain how cytoskeletal elements support shape, transport, and motility.",
      "Connect ECM and junction biology to healing and disease.",
    ],
    pearl:
      "When questions feel similar, ask: Which organelle failure best explains the phenotype?",
    rapidMapTitle: "Organelles (rapid map)",
    rapidMapNotes:
      "Membrane systems, nucleus, mitochondria, cytoskeleton, and extracellular matrix at a glance.",
    clinicalConnection:
      "Clinical connection: mitochondrial dysfunction and cytoskeletal disruption can directly affect healing and tissue resilience.",
    resources: [
      "Express: Cell Structure Review",
      "Resident Flashcards",
      "Annotated Cell Atlas",
    ],
    quickCheck: [
      "Which organelle is primarily responsible for ATP production?",
      "What cytoskeletal filament is dominant in intracellular transport?",
      "Which adhesion structure anchors cells to extracellular matrix?",
    ],
    nextTopic: "Cell Membrane & Transport",
  },
};

export function generateStaticParams() {
  return Object.entries(subtopicContent).flatMap(([subtopic, content]) =>
    content.chapters.map((chapter) => ({
      subtopic,
      chapter: slugifySegment(chapter.title),
    }))
  );
}

export default async function ChapterDetailPage({ params }) {
  const resolvedParams = await params;
  const subtopic = resolvedParams?.subtopic;
  const chapterSlug = resolvedParams?.chapter;
  const subtopicData = subtopicContent[subtopic];

  if (!subtopicData) notFound();

  const chapterIndex = subtopicData.chapters.findIndex(
    (ch) => slugifySegment(ch.title) === chapterSlug
  );

  if (chapterIndex < 0) notFound();

  const chapter = subtopicData.chapters[chapterIndex];
  const nextChapter = subtopicData.chapters[chapterIndex + 1];
  const overrideKey = `${subtopic}/${chapterSlug}`;
  const details =
    chapterOverrides[overrideKey] ||
    buildDefaultDetails(subtopicData.title, chapter, nextChapter);

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const chapterImage =
    chapter.bgImage && chapter.bgImage.startsWith("/")
      ? `${basePath}${chapter.bgImage}`
      : chapter.bgImage;
  const nextHref = nextChapter
    ? `/basic-sciences/${subtopic}/${slugifySegment(nextChapter.title)}`
    : `/basic-sciences/${subtopic}`;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.18),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(37,99,235,0.2),transparent_30%),linear-gradient(180deg,#f6fbff_0%,#eff5ff_42%,#e8f1ff_100%)] pb-12">
      <section className="mx-auto max-w-7xl px-4 pt-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700/80">
          <Link href="/" className="hover:text-blue-900">Home</Link>
          <span className="mx-2">▸</span>
          <Link href="/training" className="hover:text-blue-900">Lectures</Link>
          <span className="mx-2">▸</span>
          <Link href="/basic-sciences" className="hover:text-blue-900">Basic Sciences</Link>
          <span className="mx-2">▸</span>
          <Link href={`/basic-sciences/${subtopic}`} className="hover:text-blue-900">
            {subtopicData.title}
          </Link>
          <span className="mx-2">▸</span>
          <span className="text-slate-700">{chapter.title}</span>
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
          {chapter.title}
        </h1>
        <p className="mt-3 max-w-3xl text-2xl text-slate-700">{chapter.desc}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full border border-blue-200 bg-white px-4 py-1.5 text-sm font-semibold text-blue-700">
            ⏱ {details.duration}
          </span>
          <span className="rounded-full border border-blue-200 bg-white px-4 py-1.5 text-sm font-semibold text-blue-700">
            {details.level}
          </span>
          {details.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-6 grid max-w-7xl gap-5 px-4 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-5">
          <div className="overflow-hidden rounded-3xl border border-white/70 bg-white/85 p-3 shadow-xl">
            <div
              className="relative h-72 overflow-hidden rounded-2xl bg-cover bg-center md:h-[26rem]"
              style={{ backgroundImage: `url('${chapterImage}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-cyan-400/10" />
              <button
                type="button"
                className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-white/90 text-3xl text-blue-700 shadow-2xl"
              >
                ▶
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/70 bg-white p-6 shadow-md">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-4xl font-bold text-slate-900">Lecture Focus</h2>
              <p className="text-lg font-semibold text-blue-700">{details.progress}% complete</p>
            </div>
            <div className="mt-3 h-2.5 rounded-full bg-blue-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"
                style={{ width: `${details.progress}%` }}
              />
            </div>
            <ul className="mt-5 space-y-3">
              {details.objectives.map((point) => (
                <li key={point} className="flex items-start gap-3 text-lg text-slate-700">
                  <span className="mt-1 text-blue-600">✔</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-cyan-100 bg-gradient-to-r from-cyan-50 to-blue-50 p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">Pearl</p>
            <p className="mt-2 text-2xl font-semibold text-slate-800">{details.pearl}</p>
          </div>

          <div className="rounded-3xl border border-white/70 bg-white p-6 shadow-md">
            <h3 className="text-4xl font-bold text-slate-900">{details.rapidMapTitle}</h3>
            <p className="mt-2 text-lg text-slate-600">{details.rapidMapNotes}</p>
            <div
              className="mt-4 h-64 rounded-2xl bg-cover bg-center"
              style={{ backgroundImage: `url('${chapterImage}')` }}
            />
            <div className="mt-4 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 px-5 py-4 text-white">
              <p className="text-xl font-semibold">Clinical connection</p>
              <p className="mt-1 text-lg text-blue-100">{details.clinicalConnection}</p>
            </div>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-white/70 bg-white p-5 shadow-sm">
            <h3 className="text-3xl font-bold text-slate-900">Progress</h3>
            <ul className="mt-4 space-y-2 text-lg text-slate-700">
              {details.objectives.map((objective) => (
                <li key={objective}>• {objective}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/70 bg-white p-5 shadow-sm">
            <h3 className="text-3xl font-bold text-slate-900">Table of Contents</h3>
            <ul className="mt-4 space-y-2 text-lg text-slate-700">
              <li>• High-yield overview</li>
              <li>• Core concepts</li>
              <li>• Clinical links</li>
              <li>• Rapid recall</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/70 bg-white p-5 shadow-sm">
            <h3 className="text-3xl font-bold text-slate-900">Resources</h3>
            <ul className="mt-4 space-y-2 text-lg text-slate-700">
              {details.resources.map((resource) => (
                <li key={resource}>☑ {resource}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/70 bg-white p-5 shadow-sm">
            <h3 className="text-3xl font-bold text-slate-900">Quick Check</h3>
            <ul className="mt-4 space-y-3 text-lg text-slate-700">
              {details.quickCheck.map((q) => (
                <li key={q}>• {q}</li>
              ))}
            </ul>
            <Link
              href={nextHref}
              className="mt-5 inline-block w-full rounded-xl bg-gradient-to-r from-blue-700 to-cyan-600 px-4 py-3 text-center text-lg font-semibold text-white"
            >
              Next Topic: {details.nextTopic}
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}
