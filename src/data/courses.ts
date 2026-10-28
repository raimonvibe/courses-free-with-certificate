/**
 * Every course on the site, in one place.
 *
 * Adding or fixing a course is a data change here; the page only renders this.
 * `lastVerified` is the day the link, the price and the credential were last
 * checked by hand. The weekly link check (.github/workflows/link-check.yml)
 * reads the URLs from this file and opens an issue when one breaks.
 */

/** What you actually get at the end. */
export type Credential =
  | "certificate" // a certificate you can share or download
  | "badge" // a digital badge on a profile (Credly, Skillshop, Microsoft Learn)
  | "trophy" // Microsoft Learn's completion trophy for a learning path
  | "paid-exam"; // the course is free; the official certification exam costs money

/** `legacy`: still claimable, but replaced by a newer version (see `successor`). */
export type Status = "current" | "legacy";

export interface Course {
  id: string;
  title: string;
  provider: string;
  category: CategoryId;
  topics: string[];
  url: string;
  credential: Credential;
  cost: string;
  status: Status;
  duration?: string;
  note?: string;
  successor?: { title: string; url: string };
  lastVerified: string;
}

export type CategoryId =
  | "frontend"
  | "backend"
  | "security"
  | "data"
  | "cloud"
  | "devops"
  | "databases"
  | "ai"
  | "marketing"
  | "career";

export const CATEGORIES: { id: CategoryId; title: string; gradient: string }[] = [
  { id: "frontend", title: "Frontend Development", gradient: "from-blue-500 to-purple-600" },
  { id: "backend", title: "Backend Development", gradient: "from-green-500 to-teal-600" },
  { id: "security", title: "Security & Cybersecurity", gradient: "from-red-500 to-pink-600" },
  { id: "data", title: "Data Science & Visualization", gradient: "from-teal-500 to-cyan-600" },
  { id: "cloud", title: "Cloud Computing", gradient: "from-sky-500 to-blue-600" },
  { id: "devops", title: "DevOps", gradient: "from-orange-500 to-red-600" },
  { id: "databases", title: "Database Management", gradient: "from-emerald-500 to-green-600" },
  { id: "ai", title: "Machine Learning & AI", gradient: "from-violet-500 to-purple-600" },
  { id: "marketing", title: "Digital Marketing", gradient: "from-amber-500 to-orange-600" },
  { id: "career", title: "Career Skills", gradient: "from-slate-500 to-gray-600" },
];

export const CREDENTIAL_LABELS: Record<Credential, string> = {
  certificate: "Free certificate",
  badge: "Free badge",
  trophy: "Free trophy",
  "paid-exam": "Free course · paid exam",
};

const V = "2026-10-28";
const FCC = "freeCodeCamp";
const MS = "Microsoft Learn";
const FCC_FREE = "Free (projects + exam)";
const FCC_LEGACY = "Free (legacy, still claimable)";

export const COURSES: Course[] = [
  // ── Frontend ────────────────────────────────────────────────────────────
  { id: "fcc-responsive-web-design", title: "Responsive Web Design", provider: FCC, category: "frontend",
    topics: ["HTML", "CSS", "Responsive Design", "Accessibility"], url: "https://www.freecodecamp.org/learn/responsive-web-design-v9/",
    credential: "certificate", cost: FCC_FREE, status: "current", lastVerified: V },
  { id: "fcc-javascript", title: "JavaScript", provider: FCC, category: "frontend",
    topics: ["JavaScript", "ES6+", "Debugging", "Data Structures"], url: "https://www.freecodecamp.org/learn/javascript-v9/",
    credential: "certificate", cost: FCC_FREE, status: "current", lastVerified: V },
  { id: "fcc-frontend-libraries", title: "Frontend Development Libraries", provider: FCC, category: "frontend",
    topics: ["React", "CSS frameworks", "TypeScript"], url: "https://www.freecodecamp.org/learn/front-end-development-libraries-v9/",
    credential: "certificate", cost: FCC_FREE, status: "current", lastVerified: V },
  { id: "fcc-full-stack", title: "Certified Full-Stack Developer", provider: FCC, category: "frontend",
    topics: ["Frontend", "Backend", "Databases", "Capstone"], url: "https://www.freecodecamp.org/learn/full-stack-developer-v9/",
    credential: "certificate", cost: "Free (long path, final exam)", status: "current",
    note: "The capstone of the six certifications above and below; around 1,800 hours.", lastVerified: V },
  { id: "fcc-rwd-legacy", title: "Responsive Web Design (V8)", provider: FCC, category: "frontend",
    topics: ["HTML", "CSS"], url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
    credential: "certificate", cost: FCC_LEGACY, status: "legacy",
    successor: { title: "Responsive Web Design", url: "https://www.freecodecamp.org/learn/responsive-web-design-v9/" }, lastVerified: V },
  { id: "fcc-js-legacy", title: "JavaScript Algorithms and Data Structures (V8)", provider: FCC, category: "frontend",
    topics: ["JavaScript", "Algorithms"], url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/",
    credential: "certificate", cost: FCC_LEGACY, status: "legacy",
    successor: { title: "JavaScript", url: "https://www.freecodecamp.org/learn/javascript-v9/" }, lastVerified: V },
  { id: "fcc-fedl-legacy", title: "Front End Development Libraries (V8)", provider: FCC, category: "frontend",
    topics: ["Bootstrap", "jQuery", "Sass", "React", "Redux"], url: "https://www.freecodecamp.org/learn/front-end-development-libraries/",
    credential: "certificate", cost: FCC_LEGACY, status: "legacy",
    successor: { title: "Frontend Development Libraries", url: "https://www.freecodecamp.org/learn/front-end-development-libraries-v9/" }, lastVerified: V },

  // ── Backend ─────────────────────────────────────────────────────────────
  { id: "fcc-backend-apis", title: "Backend Development and APIs", provider: FCC, category: "backend",
    topics: ["Node.js", "Express", "APIs"], url: "https://www.freecodecamp.org/learn/back-end-development-and-apis-v9/",
    credential: "certificate", cost: FCC_FREE, status: "current", lastVerified: V },
  { id: "fcc-python", title: "Python", provider: FCC, category: "backend",
    topics: ["Python", "Data structures", "OOP"], url: "https://www.freecodecamp.org/learn/python-v9/",
    credential: "certificate", cost: FCC_FREE, status: "current", lastVerified: V },
  { id: "fcc-csharp", title: "Foundational C# with Microsoft", provider: FCC, category: "backend",
    topics: ["C#", ".NET", "OOP"], url: "https://www.freecodecamp.org/learn/foundational-c-sharp-with-microsoft/",
    credential: "certificate", cost: "Free", status: "current", lastVerified: V },
  { id: "fcc-backend-legacy", title: "Back End Development and APIs (V8)", provider: FCC, category: "backend",
    topics: ["Node.js", "Express", "MongoDB"], url: "https://www.freecodecamp.org/learn/back-end-development-and-apis/",
    credential: "certificate", cost: FCC_LEGACY, status: "legacy",
    successor: { title: "Backend Development and APIs", url: "https://www.freecodecamp.org/learn/back-end-development-and-apis-v9/" }, lastVerified: V },
  { id: "fcc-scicomp-legacy", title: "Scientific Computing with Python", provider: FCC, category: "backend",
    topics: ["Python"], url: "https://www.freecodecamp.org/learn/scientific-computing-with-python/",
    credential: "certificate", cost: FCC_LEGACY, status: "legacy",
    successor: { title: "Python", url: "https://www.freecodecamp.org/learn/python-v9/" }, lastVerified: V },
  { id: "fcc-algebra-legacy", title: "College Algebra with Python", provider: FCC, category: "backend",
    topics: ["Algebra", "Python"], url: "https://www.freecodecamp.org/learn/college-algebra-with-python/",
    credential: "certificate", cost: FCC_LEGACY, status: "legacy", lastVerified: V },

  // ── Security ────────────────────────────────────────────────────────────
  { id: "ms-sci-concepts", title: "Introduction to Security, Compliance, and Identity Concepts", provider: MS, category: "security",
    topics: ["Zero Trust", "Identity", "Compliance"], url: "https://learn.microsoft.com/en-us/training/paths/describe-concepts-of-security-compliance-identity/",
    credential: "trophy", cost: "Free", status: "current",
    note: "Prepares for the SC-900 exam, which is paid (about $99).", lastVerified: V },
  { id: "ms-azure-identity", title: "Describe Azure Identity, Access, and Security", provider: MS, category: "security",
    topics: ["Microsoft Entra ID", "Access Control", "Zero Trust"], url: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/",
    credential: "badge", cost: "Free", status: "current", lastVerified: V },
  { id: "ms-security-copilot", title: "Describe Microsoft Security Copilot", provider: MS, category: "security",
    topics: ["AI Security", "Threat Detection"], url: "https://learn.microsoft.com/en-us/training/modules/security-copilot-getting-started/",
    credential: "badge", cost: "Free", status: "current", lastVerified: V },
  { id: "fcc-infosec-legacy", title: "Information Security", provider: FCC, category: "security",
    topics: ["Helmet.js", "Penetration Testing", "Python"], url: "https://www.freecodecamp.org/learn/information-security/",
    credential: "certificate", cost: FCC_LEGACY, status: "legacy", lastVerified: V },

  // ── Data ────────────────────────────────────────────────────────────────
  { id: "fcc-data-analysis-legacy", title: "Data Analysis with Python", provider: FCC, category: "data",
    topics: ["NumPy", "Pandas", "Matplotlib"], url: "https://www.freecodecamp.org/learn/data-analysis-with-python/",
    credential: "certificate", cost: FCC_LEGACY, status: "legacy", lastVerified: V },
  { id: "fcc-data-vis-legacy", title: "Data Visualization", provider: FCC, category: "data",
    topics: ["D3.js", "JSON", "APIs"], url: "https://www.freecodecamp.org/learn/data-visualization/",
    credential: "certificate", cost: FCC_LEGACY, status: "legacy", lastVerified: V },

  // ── Cloud ───────────────────────────────────────────────────────────────
  { id: "aws-cloud-quest", title: "AWS Cloud Quest: Cloud Practitioner", provider: "AWS Skill Builder", category: "cloud",
    topics: ["AWS Basics", "Cloud Architecture", "Hands-on Labs"], url: "https://skillbuilder.aws/search?searchText=cloud%20quest%20cloud%20practitioner",
    credential: "badge", cost: "Free (AWS Skill Builder account)", status: "current",
    note: "A role-playing game: fix cloud problems in a virtual city. The Cloud Practitioner role is the free one.", lastVerified: V },
  { id: "aws-simulearn-cp", title: "AWS SimuLearn: Cloud Practitioner", provider: "AWS Skill Builder", category: "cloud",
    topics: ["AWS Basics", "Simulated Customer Scenarios"], url: "https://skillbuilder.aws/search?searchText=simulearn%20cloud%20practitioner",
    credential: "badge", cost: "Free learning plan", status: "current",
    note: "Badge issued through Credly. Most other SimuLearn plans need a paid subscription.", lastVerified: V },
  { id: "ms-cloud-concepts", title: "Introduction to Cloud Infrastructure: Describe Cloud Concepts", provider: MS, category: "cloud",
    topics: ["Cloud Models", "Benefits", "Service Types"], url: "https://learn.microsoft.com/en-us/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/",
    credential: "trophy", cost: "Free", status: "current", note: "Part of the AZ-900 path; the exam itself is paid.", lastVerified: V },
  { id: "ms-azure-architecture", title: "Describe Azure Architecture and Services", provider: MS, category: "cloud",
    topics: ["Azure Core Services", "Compute", "Networking"], url: "https://learn.microsoft.com/en-us/training/paths/azure-fundamentals-describe-azure-architecture-services/",
    credential: "trophy", cost: "Free", status: "current", lastVerified: V },
  { id: "ms-azure-governance", title: "Describe Azure Management and Governance", provider: MS, category: "cloud",
    topics: ["Cost Management", "Governance", "Compliance"], url: "https://learn.microsoft.com/en-us/training/paths/describe-azure-management-governance/",
    credential: "trophy", cost: "Free", status: "current", lastVerified: V },
  { id: "ms-applied-skills", title: "Microsoft Applied Skills", provider: MS, category: "cloud",
    topics: ["Azure", "AI", "Security", "Data"], url: "https://learn.microsoft.com/en-us/credentials/applied-skills/",
    credential: "badge", cost: "Free", status: "current",
    note: "Microsoft's free official credential: a hands-on lab assessment instead of an exam.", lastVerified: V },

  // ── DevOps ──────────────────────────────────────────────────────────────
  { id: "ms-az400-git", title: "AZ-400: Development for Enterprise DevOps", provider: MS, category: "devops",
    topics: ["Git", "GitHub", "Azure DevOps"], url: "https://learn.microsoft.com/en-us/training/paths/az-400-work-git-for-enterprise-devops/",
    credential: "trophy", cost: "Free", status: "current", lastVerified: V },
  { id: "ms-az400-ci", title: "Define and Implement Continuous Integration", provider: MS, category: "devops",
    topics: ["Continuous Integration", "Azure Pipelines", "GitHub Actions"], url: "https://learn.microsoft.com/en-us/training/paths/az-400-define-implement-continuous-integration/",
    credential: "trophy", cost: "Free", status: "current", duration: "4 hours", lastVerified: V },

  // ── Databases ───────────────────────────────────────────────────────────
  { id: "fcc-relational-db", title: "Relational Databases", provider: FCC, category: "databases",
    topics: ["PostgreSQL", "SQL", "Bash", "Git"], url: "https://www.freecodecamp.org/learn/relational-databases-v9/",
    credential: "certificate", cost: FCC_FREE, status: "current", lastVerified: V },
  { id: "ms-relational-data", title: "Explore Relational Data in Azure", provider: MS, category: "databases",
    topics: ["Azure SQL Database", "Data Storage"], url: "https://learn.microsoft.com/en-us/training/paths/azure-data-fundamentals-explore-relational-data/",
    credential: "trophy", cost: "Free", status: "current", lastVerified: V },
  { id: "fcc-relational-db-legacy", title: "Relational Database (V8)", provider: FCC, category: "databases",
    topics: ["PostgreSQL", "SQL"], url: "https://www.freecodecamp.org/learn/relational-database/",
    credential: "certificate", cost: FCC_LEGACY, status: "legacy",
    successor: { title: "Relational Databases", url: "https://www.freecodecamp.org/learn/relational-databases-v9/" }, lastVerified: V },

  // ── AI ──────────────────────────────────────────────────────────────────
  { id: "ms-ml-concepts", title: "Introduction to Machine Learning Concepts", provider: MS, category: "ai",
    topics: ["Machine Learning", "Model Training"], url: "https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/",
    credential: "badge", cost: "Free", status: "current", lastVerified: V },
  { id: "ms-create-ml-models", title: "Create Machine Learning Models", provider: MS, category: "ai",
    topics: ["Regression", "Classification", "Python"], url: "https://learn.microsoft.com/en-us/training/paths/create-machine-learn-models/",
    credential: "trophy", cost: "Free", status: "current", lastVerified: V },
  { id: "ms-genai-azure-ml", title: "Work with Generative AI Models in Azure Machine Learning", provider: MS, category: "ai",
    topics: ["Generative AI", "Prompt Flow", "Azure ML"], url: "https://learn.microsoft.com/en-us/training/paths/work-with-generative-models-azure-machine-learning/",
    credential: "trophy", cost: "Free", status: "current", lastVerified: V },
  { id: "ms-azure-ai-fundamentals", title: "Microsoft Certified: Azure AI Fundamentals", provider: MS, category: "ai",
    topics: ["AI Workloads", "Azure AI Services"], url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/",
    credential: "paid-exam", cost: "Free study path · exam about $99", status: "current",
    note: "AI-900 retired on 30 June 2026; this certification is now earned with AI-901.", lastVerified: V },
  { id: "fcc-ml-legacy", title: "Machine Learning with Python", provider: FCC, category: "ai",
    topics: ["TensorFlow", "Neural Networks", "NLP"], url: "https://www.freecodecamp.org/learn/machine-learning-with-python/",
    credential: "certificate", cost: FCC_LEGACY, status: "legacy", lastVerified: V },

  // ── Marketing ───────────────────────────────────────────────────────────
  { id: "google-digital-marketing", title: "Fundamentals of Digital Marketing", provider: "Google Skillshop", category: "marketing",
    topics: ["SEO", "Social Media", "Analytics", "E-commerce"], url: "https://skillshop.exceedlms.com/student/collection/1830706",
    credential: "badge", cost: "Free", status: "current", duration: "About 40 hours",
    note: "Formerly on Google Digital Garage; now on Skillshop, with a Skillshop badge.", lastVerified: V },

  // ── Career skills ───────────────────────────────────────────────────────
  { id: "fcc-a2-english", title: "A2 English for Developers", provider: FCC, category: "career",
    topics: ["English", "Workplace Communication"], url: "https://www.freecodecamp.org/learn/a2-english-for-developers/",
    credential: "certificate", cost: "Free", status: "current", lastVerified: V },
  { id: "fcc-b1-english", title: "B1 English for Developers", provider: FCC, category: "career",
    topics: ["English", "Technical Communication"], url: "https://www.freecodecamp.org/learn/b1-english-for-developers/",
    credential: "certificate", cost: "Free", status: "current", lastVerified: V },
];

/** The newest date any course was checked, shown on the page. */
export const LAST_VERIFIED = COURSES.map((c) => c.lastVerified).sort().at(-1) ?? V;
