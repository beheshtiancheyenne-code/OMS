export default function Page() {
  return (
    <main className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Resources
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-700">
            Practical tools and references to support research, documentation,
            and evidence-based learning.
          </p>
        </div>
      </section>

      <section id="toolbox" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-3xl font-semibold text-slate-900">Digital Toolbox</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            "Literature Search Templates",
            "Critical Appraisal Checklists",
            "Reference Manager Workflows",
          ].map((item) => (
            <article key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">{item}</h3>
              <p className="mt-2 text-slate-700">
                Ready-to-use templates to streamline your academic workflow.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="irb" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-3xl font-semibold text-slate-900">IRB Resources</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-xl font-semibold text-slate-900">Protocol Checklist</h3>
              <p className="mt-2 text-slate-700">
                Core sections required for compliant and review-ready protocols.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-xl font-semibold text-slate-900">Consent Guidance</h3>
              <p className="mt-2 text-slate-700">
                Patient-friendly consent structure and common review pitfalls.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
