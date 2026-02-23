export default function Page() {
  return (
    <main className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            News
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-700">
            Latest updates for events, career opportunities, and specialty news.
          </p>
        </div>
      </section>

      <section id="events" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-3xl font-semibold text-slate-900">Events</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            "OMFS Education Symposium - March 15",
            "Resident Case Review Webinar - April 2",
          ].map((item) => (
            <article key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">{item}</h3>
              <p className="mt-2 text-slate-700">Registration details and agenda published soon.</p>
            </article>
          ))}
        </div>
      </section>

      <section id="jobs" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-3xl font-semibold text-slate-900">Job Opportunities</h2>
          <div className="mt-4 space-y-3">
            {[
              "Clinical Educator - Maxillofacial Surgery",
              "Research Associate - Surgical Outcomes",
              "Curriculum Coordinator - Digital Learning",
            ].map((item) => (
              <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-lg font-semibold text-slate-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
