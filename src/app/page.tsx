"use client";

import { useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
  Moon, Sun, ExternalLink, BookOpen, Code, Shield, Database, Cloud, GitBranch, Brain,
  BarChart3, Megaphone, Server, Briefcase, Search, Award, CalendarCheck, ArrowRight,
} from "lucide-react";
import {
  CATEGORIES, COURSES, CREDENTIAL_LABELS, LAST_VERIFIED,
  type CategoryId, type Course, type Credential,
} from "@/data/courses";
import { BrandIcon, type BrandName } from "@/components/BrandIcon";

const CATEGORY_ICONS: Record<CategoryId, React.ReactNode> = {
  frontend: <Code className="w-6 h-6" />,
  backend: <Server className="w-6 h-6" />,
  security: <Shield className="w-6 h-6" />,
  data: <BarChart3 className="w-6 h-6" />,
  cloud: <Cloud className="w-6 h-6" />,
  devops: <GitBranch className="w-6 h-6" />,
  databases: <Database className="w-6 h-6" />,
  ai: <Brain className="w-6 h-6" />,
  marketing: <Megaphone className="w-6 h-6" />,
  career: <Briefcase className="w-6 h-6" />,
};

const CREDENTIAL_STYLES: Record<Credential, string> = {
  certificate: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
  badge: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  trophy: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  "paid-exam": "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
};

const SOCIAL: { href: string; label: string; icon: BrandName; tile: string }[] = [
  { href: "https://x.com/raimonvibe/", label: "X", icon: "x", tile: "from-blue-500 to-purple-600" },
  { href: "https://www.youtube.com/channel/UCDGDNuYb2b2Ets9CYCNVbuA/videos/", label: "YouTube", icon: "youtube", tile: "from-red-500 to-red-600" },
  { href: "https://www.tiktok.com/@raimonvibe/", label: "TikTok", icon: "tiktok", tile: "from-gray-800 to-black" },
  { href: "https://www.instagram.com/raimonvibe/", label: "Instagram", icon: "instagram", tile: "from-pink-500 to-orange-500" },
  { href: "https://medium.com/@raimonvibe/", label: "Medium", icon: "medium", tile: "from-gray-700 to-gray-900" },
  { href: "https://github.com/raimonvibe/", label: "GitHub", icon: "github", tile: "from-gray-700 to-gray-900" },
  { href: "https://www.linkedin.com/in/raimonvibe/", label: "LinkedIn", icon: "linkedin", tile: "from-blue-600 to-blue-700" },
  { href: "https://www.facebook.com/profile.php?id=61563450007849", label: "Facebook", icon: "facebook", tile: "from-blue-500 to-blue-600" },
];

const FILTERS: { id: "all" | Credential; label: string }[] = [
  { id: "all", label: "All" },
  { id: "certificate", label: "Certificates" },
  { id: "badge", label: "Badges" },
  { id: "trophy", label: "Trophies" },
  { id: "paid-exam", label: "Paid exam" },
];

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

function CourseCard({ course, gradient }: { course: Course; gradient: string }) {
  const legacy = course.status === "legacy";
  return (
    <article
      id={course.id}
      className={`min-w-0 flex flex-col rounded-xl border shadow-lg transition-shadow duration-300 hover:shadow-2xl overflow-hidden ${
        legacy ? "bg-gray-50 dark:bg-gray-800/60 border-gray-200 dark:border-gray-700 opacity-90" : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
      }`}
    >
      <div className={`h-2 bg-gradient-to-r ${legacy ? "from-gray-400 to-gray-500" : gradient}`} />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${CREDENTIAL_STYLES[course.credential]}`}>
            {CREDENTIAL_LABELS[course.credential]}
          </span>
          {legacy && (
            <span className="rounded-full bg-gray-200 px-2.5 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-300">
              Legacy
            </span>
          )}
        </div>

        <h4 className="text-xl font-semibold text-gray-950 dark:text-white [overflow-wrap:anywhere]">{course.title}</h4>

        <dl className="mt-3 space-y-1.5 text-sm">
          <div className="flex gap-2">
            <dt className="font-medium text-gray-700 dark:text-gray-300">Provider:</dt>
            <dd className="font-medium text-blue-700 dark:text-blue-400">{course.provider}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-medium text-gray-700 dark:text-gray-300">Cost:</dt>
            <dd className="text-gray-800 dark:text-gray-300">{course.cost}</dd>
          </div>
          {course.duration && (
            <div className="flex gap-2">
              <dt className="font-medium text-gray-700 dark:text-gray-300">Duration:</dt>
              <dd className="text-gray-800 dark:text-gray-300">{course.duration}</dd>
            </div>
          )}
        </dl>

        <ul className="mt-3 flex flex-wrap gap-1" aria-label="Topics">
          {course.topics.map((topic) => (
            <li key={topic} className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-900 dark:bg-gray-700 dark:text-gray-300">
              {topic}
            </li>
          ))}
        </ul>

        {course.note && <p className="mt-3 text-sm text-gray-700 dark:text-gray-400">{course.note}</p>}

        {course.successor && (
          <a
            href={course.successor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-700 hover:underline dark:text-blue-400"
          >
            New version: {course.successor.title} <ArrowRight className="h-4 w-4" />
          </a>
        )}

        <a
          href={course.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-5 inline-flex items-center justify-center gap-2 self-start rounded-lg bg-gradient-to-r px-4 py-2 text-white transition-all duration-300 hover:shadow-lg ${
            legacy ? "from-gray-500 to-gray-600" : gradient
          }`}
        >
          <BookOpen className="h-4 w-4" />
          {legacy ? "Open legacy course" : "Start course"}
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

export default function Home() {
  const { resolvedTheme, setTheme } = useTheme();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | Credential>("all");
  const [showLegacy, setShowLegacy] = useState(false);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return COURSES.filter((c) => {
      if (!showLegacy && c.status === "legacy") return false;
      if (filter !== "all" && c.credential !== filter) return false;
      if (!q) return true;
      return [c.title, c.provider, ...c.topics].some((s) => s.toLowerCase().includes(q));
    });
  }, [query, filter, showLegacy]);

  const current = COURSES.filter((c) => c.status === "current").length;
  const legacyCount = COURSES.length - current;

  return (
    <div className="min-h-screen bg-[var(--background)] transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 text-[var(--foreground)]">
        <header className="mb-10 text-center">
          <div className="mb-8 flex items-center justify-end">
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="rounded-lg border border-gray-200 bg-white p-2 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
              aria-label="Toggle dark mode"
            >
              {resolvedTheme === "dark" ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-950" />}
            </button>
          </div>

          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">Free Software Development Courses</h1>
            <h2 className="text-2xl font-semibold md:text-3xl">with Certificates &amp; Badges</h2>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-[var(--muted-foreground)]">
            A curated list of free courses from freeCodeCamp, Microsoft Learn, AWS and Google. Every card says honestly
            what you get at the end: a certificate, a badge, a trophy, or a free course that prepares for a paid exam.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[var(--muted-foreground)]">
            <span className="flex items-center gap-2"><BookOpen className="h-4 w-4" />{current} current courses · {legacyCount} legacy</span>
            <span className="flex items-center gap-2"><CalendarCheck className="h-4 w-4" />Links and prices last verified on {formatDate(LAST_VERIFIED)}</span>
          </div>
        </header>

        <section aria-label="Find a course" className="mx-auto mb-10 max-w-4xl space-y-4">
          <label className="relative block">
            <span className="sr-only">Search courses</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title, provider or topic (e.g. React, Azure, SQL)"
              className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-10 pr-4 text-base text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
            />
          </label>
          <div className="flex flex-wrap items-center gap-2">
            <Award className="h-5 w-5 text-[var(--muted-foreground)]" aria-hidden="true" />
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                aria-pressed={filter === f.id}
                className={`rounded-full border px-3 py-1.5 text-sm transition ${
                  filter === f.id
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-gray-300 bg-white text-gray-800 hover:border-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
                }`}
              >
                {f.label}
              </button>
            ))}
            <label className="ml-auto flex cursor-pointer items-center gap-2 text-sm text-[var(--muted-foreground)]">
              <input type="checkbox" checked={showLegacy} onChange={(e) => setShowLegacy(e.target.checked)} className="h-4 w-4 accent-blue-600" />
              Show legacy courses ({legacyCount})
            </label>
          </div>
        </section>

        <div className="grid gap-12">
          {CATEGORIES.map((category) => {
            const courses = visible.filter((c) => c.category === category.id);
            if (courses.length === 0) return null;
            return (
              <section key={category.id} id={category.id} className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className={`rounded-xl bg-gradient-to-r p-3 text-white shadow-lg ${category.gradient}`}>{CATEGORY_ICONS[category.id]}</div>
                  <h3 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">{category.title}</h3>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {courses.map((course) => (
                    <CourseCard key={course.id} course={course} gradient={category.gradient} />
                  ))}
                </div>
              </section>
            );
          })}
          {visible.length === 0 && (
            <p className="text-center text-[var(--muted-foreground)]">No courses match. Try another search or filter.</p>
          )}
        </div>

        <footer className="mt-12 rounded-xl border border-gray-200 bg-white/10 p-6 sm:mt-16 sm:p-8 dark:border-purple-500/20 dark:bg-black/30 dark:backdrop-blur-sm">
          <div className="text-center">
            <p className="mb-4 text-lg font-semibold text-neutral-700 sm:mb-6 sm:text-xl dark:text-white">
              All courses listed are free to take. The label on each card says what you receive when you finish.
            </p>
            <h3 className="mb-4 text-lg font-semibold text-neutral-900 sm:mb-6 sm:text-xl dark:text-white">Connect with Raimon</h3>
            <ul className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {SOCIAL.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r text-white transition-all duration-300 hover:scale-110 sm:h-12 sm:w-12 ${s.tile}`}
                  >
                    <BrandIcon name={s.icon} className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="sr-only">{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}
