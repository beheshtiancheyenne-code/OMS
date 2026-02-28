"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getSession, logout } from "@/app/lib/clientAuth";
import { slugifySegment, subtopicContent } from "@/app/basic-sciences/components/subtopicData";

const staticSearchItems = [
  { name: "Home", href: "/", tags: ["home", "omfs", "nexus"] },
  { name: "About", href: "/about", tags: ["about", "contact"] },
  { name: "Community", href: "/community", tags: ["community", "discussion", "forum"] },
  { name: "Lectures", href: "/training", tags: ["lectures", "training", "webinars"] },
  { name: "Basic Sciences", href: "/basic-sciences", tags: ["lectures", "basic sciences"] },
  { name: "Anatomy and Radiology", href: "/anatomy", tags: ["lectures", "anatomy", "radiology", "imaging"] },
  { name: "Surgery and Anesthesiology", href: "/surgery", tags: ["lectures", "surgery", "anesthesiology"] },
  { name: "Pharmacology", href: "/pharmacology", tags: ["lectures", "pharmacology", "drugs"] },
  { name: "Research Hub", href: "/resources", tags: ["resources", "research", "hub"] },
  { name: "Resources - Digital Toolbox", href: "/resources#toolbox", tags: ["resources", "toolbox"] },
  { name: "Resources - IRB Resources", href: "/resources#irb", tags: ["resources", "irb", "ethics"] },
  { name: "News", href: "/news", tags: ["news", "updates"] },
  { name: "News - Job Opportunities", href: "/news#jobs", tags: ["news", "jobs", "careers"] },
  { name: "News - Events", href: "/news#events", tags: ["news", "events"] },
  { name: "Login", href: "/login", tags: ["auth", "signin", "login"] },
  { name: "Sign Up", href: "/signup", tags: ["auth", "register", "create account"] },
  { name: "Account", href: "/account", tags: ["profile", "dashboard", "account"] },
];

const chapterSearchItems = Object.entries(subtopicContent).flatMap(([subtopicSlug, section]) => {
  const sectionItem = {
    name: `Basic Sciences - ${section.title}`,
    href: `/basic-sciences/${subtopicSlug}`,
    tags: ["basic sciences", section.title, section.subtitle],
  };
  const chapterItems = section.chapters.map((chapter) => ({
    name: `${section.title}: ${chapter.title}`,
    href: `/basic-sciences/${subtopicSlug}/${slugifySegment(chapter.title)}`,
    tags: [
      "basic sciences",
      section.title,
      chapter.title,
      chapter.desc,
      "chapter",
    ],
  }));
  return [sectionItem, ...chapterItems];
});

const searchItems = [...staticSearchItems, ...chapterSearchItems];

function normalizeSearch(value = "") {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function scoreItem(item, normalizedQuery, tokens) {
  const normalizedName = normalizeSearch(item.name);
  const normalizedTags = normalizeSearch(item.tags.join(" "));
  let score = 0;

  if (normalizedName === normalizedQuery) score += 100;
  if (normalizedName.startsWith(normalizedQuery)) score += 50;
  if (normalizedName.includes(normalizedQuery)) score += 35;
  if (normalizedTags.includes(normalizedQuery)) score += 20;
  score += tokens.reduce((sum, token) => {
    if (normalizedName.startsWith(token)) return sum + 5;
    if (normalizedName.includes(token)) return sum + 3;
    if (normalizedTags.includes(token)) return sum + 1;
    return sum;
  }, 0);

  return score;
}

function Dropdown({ label, items, href }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {href ? (
        <Link
          href={href}
          className="block rounded-md px-4 py-2.5 text-base font-medium text-gray-700 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/70 hover:text-red-600"
        >
          {label}
        </Link>
      ) : (
        <button className="rounded-md px-4 py-2.5 text-base font-medium text-gray-700 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/70 hover:text-red-600">
          {label}
        </button>
      )}

      {open && (
        <div className="absolute left-0 top-full z-50 w-64 pt-2 animate-dropdown-in">
          <div className="rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
            {items.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                className="block rounded-lg px-3 py-2.5 text-base text-gray-700 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-gray-100 hover:text-blue-600"
              >
                {it.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const pathname = usePathname();
  const router = useRouter();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [authUser, setAuthUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const hasQuery = query.trim().length > 0;

  const filteredItems = useMemo(() => {
    const normalizedQuery = normalizeSearch(query);
    const tokens = normalizedQuery.split(" ").filter(Boolean);
    if (!tokens.length) return [];

    return searchItems
      .filter((item) => {
        const haystack = normalizeSearch(`${item.name} ${item.tags.join(" ")}`);
        return tokens.every((token) => haystack.includes(token));
      })
      .sort((a, b) => scoreItem(b, normalizedQuery, tokens) - scoreItem(a, normalizedQuery, tokens))
      .slice(0, 40);
  }, [query]);

  useEffect(() => {
    const onKeyDown = (e) => {
      const target = e.target;
      const isTypingTarget =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target?.isContentEditable;
      if (e.key === "Escape") {
        setSearchOpen(false);
        return;
      }
      if (isTypingTarget) return;
      if (e.key === "/" || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k")) {
        e.preventDefault();
        setQuery("");
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    function syncSession() {
      setAuthUser(getSession());
      setAuthLoading(false);
    }
    syncSession();
    window.addEventListener("storage", syncSession);
    return () => window.removeEventListener("storage", syncSession);
  }, [pathname]);

  async function handleLogout() {
    logout();
    setAuthUser(null);
    router.push("/");
    router.refresh();
  }

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-gray-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* LEFT — LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src={`${basePath}/logo2.png`}
            alt="Logo"
            className="h-14 w-14 rounded-full object-cover"
          />
          <span className="text-3xl font-semibold text-gray-800">
            OMS Nexus
          </span>
        </Link>

        {/* CENTER — MENU */}
        <nav className="hidden md:flex items-center gap-2 text-base font-medium text-gray-700">
          <Link
            href="/"
            className={`rounded-md px-4 py-2.5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/70 hover:text-red-600 ${
              pathname === "/" ? "text-black underline underline-offset-4" : ""
            }`}
          >
            Home
          </Link>

          <Dropdown
            label="Lectures"
            href="/training"
            items={[
              { name: "Basic Sciences", href: "/basic-sciences" },
              { name: "Anatomy and Radiology", href: "/anatomy" },
              { name: "Surgery and Anesthesiology", href: "/surgery" },
              { name: "Pharmacology", href: "/pharmacology" },
            ]}
          />

          <Link
            href="/resources"
            className="rounded-md px-4 py-2.5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/70 hover:text-red-600"
          >
            Research Hub
          </Link>

          <Dropdown
            label="Resources"
            items={[
              { name: "Digital Toolbox", href: "/resources#toolbox" },
              { name: "IRB Resources", href: "/resources#irb" },
            ]}
          />

          <Dropdown
            label="About"
            items={[
              { name: "About", href: "/about" },
              { name: "Contact Us", href: "/about#contact" },
            ]}
          />

          <Link
            href="/community"
            className="rounded-md px-4 py-2.5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/70 hover:text-red-600"
          >
            Community
          </Link>
        </nav>

        {/* RIGHT — ICONS */}
        <div className="flex items-center gap-5 text-gray-700">
          {!authLoading && !authUser && (
            <>
              <Link
                href="/login"
                className="hidden rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 md:inline-block"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="hidden rounded-md bg-blue-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-600 md:inline-block"
              >
                Sign Up
              </Link>
            </>
          )}
          {!authLoading && authUser && (
            <>
              <Link
                href="/account"
                className="hidden rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 md:inline-block"
              >
                Account
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="hidden rounded-md bg-slate-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-800 md:inline-block"
              >
                Log Out
              </button>
            </>
          )}
          <button
            type="button"
            className={`text-2xl transition-all duration-200 hover:scale-110 hover:text-black active:scale-95 ${
              searchOpen ? "animate-search-click-flash scale-110 text-red-600" : ""
            }`}
            onClick={() => {
              setQuery("");
              setSearchOpen(true);
            }}
            aria-label="Search"
          >
            🔍
          </button>
          <button
            type="button"
            className="text-2xl hover:text-black md:hidden"
            onClick={() => alert("Mobile menu coming soon")}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>

      </div>

      {searchOpen && (
        <div
          className="animate-search-backdrop fixed inset-0 z-[100] bg-black/45 px-4 py-10"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSearchOpen(false);
          }}
        >
          <div className="animate-search-modal mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white shadow-2xl">
            <div className="flex items-center gap-3 border-b border-gray-200 px-4 py-3">
              <span className="text-xl text-gray-500">🔍</span>
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages, lectures, resources..."
                className="w-full border-none bg-transparent text-base text-gray-900 outline-none placeholder:text-gray-500"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-800"
              >
                Esc
              </button>
            </div>

            <div className="max-h-80 overflow-y-auto p-2">
              {!hasQuery && (
                <p className="px-3 py-4 text-sm text-gray-500">Start typing to search.</p>
              )}
              {hasQuery && filteredItems.length === 0 && (
                <p className="px-3 py-4 text-sm text-gray-500">No matches found.</p>
              )}
              {hasQuery && filteredItems.map((item) => (
                <Link
                  key={`${item.href}-${item.name}`}
                  href={item.href}
                  onClick={() => setSearchOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
