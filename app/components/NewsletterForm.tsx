"use client";

export default function NewsletterForm() {
  return (
    <form
      className="mt-5 flex max-w-xl flex-col gap-3 sm:flex-row"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Demo form — connect Mailchimp or another email service later.");
      }}
    >
      <input
        type="email"
        required
        placeholder="you@example.com"
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2"
      />
      <button
        type="submit"
        className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
      >
        Subscribe
      </button>
    </form>
  );
}