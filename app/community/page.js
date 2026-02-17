import Link from "next/link";

export default function CommunityPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-4xl font-bold text-slate-900">Community</h1>
      <p className="mt-4 text-lg text-slate-700">
        Community features are coming soon. In the meantime, explore training
        and resources.
      </p>
      <div className="mt-8 flex gap-3">
        <Link
          href="/training"
          className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
        >
          Go to Training
        </Link>
        <Link
          href="/resources"
          className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900"
        >
          Go to Resources
        </Link>
      </div>
    </main>
  );
}
