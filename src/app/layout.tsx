import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Free Software Development Courses with Certificates",
  description:
    "A curated collection of completely free software development courses that offer certificates upon completion. Covering frontend, backend, security, data science, cloud computing, and more.",
};

// Zet theme vóór React hydrate om FOUC/hydration mismatch te voorkomen.
const noFlashTheme = `
(function () {
  try {
    var ls = localStorage.getItem('darkMode');
    var wantDark = ls === 'true' || (ls === null && window.matchMedia('(prefers-color-scheme: dark)').matches);
    var el = document.documentElement;
    if (wantDark) el.classList.add('dark'); else el.classList.remove('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <script dangerouslySetInnerHTML={{ __html: noFlashTheme }} />
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
