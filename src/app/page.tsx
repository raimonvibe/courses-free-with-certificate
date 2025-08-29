"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, ExternalLink, BookOpen, Code, Shield, Database, Cloud, GitBranch, Brain, Users, Palette, BarChart3, TestTube, Calculator } from "lucide-react";

interface Course {
  title: string;
  provider: string;
  topics: string[];
  duration?: string;
  url: string;
  description: string;
}

interface CourseCategory {
  title: string;
  icon: React.ReactNode;
  courses: Course[];
  gradient: string;
}

export default function Home() {
  const { theme, setTheme } = useTheme();

  const toggleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const courseCategories: CourseCategory[] = [
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      gradient: "from-blue-500 to-purple-600",
      courses: [
        {
          title: "Responsive Web Design Certification",
          provider: "freeCodeCamp",
          topics: ["HTML", "CSS", "Responsive Design", "Web Accessibility"],
          url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
          description: "Completely free with certificate upon completion"
        },
        {
          title: "Front End Development Libraries Certification",
          provider: "freeCodeCamp",
          topics: ["Bootstrap", "jQuery", "SASS", "React", "Redux"],
          url: "https://www.freecodecamp.org/learn/front-end-development-libraries/",
          description: "Completely free with certificate upon completion"
        }
      ]
    },
    {
      title: "Backend Development",
      icon: <Database className="w-6 h-6" />,
      gradient: "from-green-500 to-teal-600",
      courses: [
        {
          title: "Back End Development and APIs Certification",
          provider: "freeCodeCamp",
          topics: ["Node.js", "Express.js", "MongoDB", "APIs"],
          url: "https://www.freecodecamp.org/learn/back-end-development-and-apis/",
          description: "Completely free with certificate upon completion"
        },
        {
          title: "JavaScript Algorithms and Data Structures",
          provider: "freeCodeCamp",
          topics: ["JavaScript", "ES6", "Regular Expressions", "Debugging", "Data Structures"],
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/",
          description: "Completely free with certificate upon completion"
        },
        {
          title: "Foundational C# with Microsoft Certification",
          provider: "freeCodeCamp",
          topics: ["C#", ".NET", "Object-Oriented Programming"],
          url: "https://www.freecodecamp.org/learn/foundational-c-sharp-with-microsoft/",
          description: "Completely free with certificate upon completion"
        }
      ]
    },
    {
      title: "Security & Cybersecurity",
      icon: <Shield className="w-6 h-6" />,
      gradient: "from-red-500 to-pink-600",
      courses: [
        {
          title: "Information Security Certification",
          provider: "freeCodeCamp",
          topics: ["HelmetJS", "Python for Penetration Testing", "Information Security"],
          url: "https://www.freecodecamp.org/learn/information-security/",
          description: "Completely free with certificate upon completion"
        },
        {
          title: "Microsoft Security, Compliance, and Identity Fundamentals",
          provider: "Microsoft Learn",
          topics: ["Security Fundamentals", "Compliance", "Identity Management"],
          duration: "1 day",
          url: "https://learn.microsoft.com/en-us/training/courses/sc-900t00/",
          description: "Completely free with completion certificate"
        },
        {
          title: "Azure Identity and Access Security",
          provider: "Microsoft Learn",
          topics: ["Azure Security", "Identity Management", "Access Control"],
          duration: "43 minutes",
          url: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/",
          description: "Completely free with completion certificate"
        },
        {
          title: "Microsoft 365 Security and Compliance",
          provider: "Microsoft Learn",
          topics: ["Cloud Security", "Compliance Management", "Security Tools"],
          duration: "2 hours 46 minutes",
          url: "https://learn.microsoft.com/en-us/training/paths/m365-security-compliance-capabilities/",
          description: "Completely free with completion certificate"
        },
        {
          title: "Microsoft Copilot for Security",
          provider: "Microsoft Learn",
          topics: ["Security AI", "Threat Detection", "Security Analysis"],
          duration: "24 minutes",
          url: "https://learn.microsoft.com/en-us/training/modules/security-copilot-getting-started/",
          description: "Completely free with completion certificate"
        }
      ]
    },
    {
      title: "Data Science",
      icon: <BarChart3 className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-600",
      courses: [
        {
          title: "Data Analysis with Python Certification",
          provider: "freeCodeCamp",
          topics: ["NumPy", "Pandas", "Matplotlib", "Data Analysis"],
          url: "https://www.freecodecamp.org/learn/data-analysis-with-python/",
          description: "Completely free with certificate upon completion"
        }
      ]
    },
    {
      title: "Cloud Computing",
      icon: <Cloud className="w-6 h-6" />,
      gradient: "from-cyan-500 to-blue-600",
      courses: [
        {
          title: "AWS Cloud Quest: Cloud Practitioner",
          provider: "AWS",
          topics: ["Cloud Fundamentals", "AWS Services"],
          url: "https://explore.skillbuilder.aws/learn/course/external/view/elearning/11458/aws-cloud-quest-cloud-practitioner",
          description: "Free with AWS account, includes completion certificate"
        },
        {
          title: "AWS SimuLearn: Cloud Computing Essentials",
          provider: "AWS",
          topics: ["Cloud Architecture", "AWS Services"],
          url: "https://explore.skillbuilder.aws/learn",
          description: "Free with AWS account, includes completion certificate"
        },
        {
          title: "Azure Fundamentals: Cloud Concepts",
          provider: "Microsoft Learn",
          topics: ["Cloud Computing", "Azure Services", "Cloud Architecture"],
          duration: "52 minutes",
          url: "https://learn.microsoft.com/en-us/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/",
          description: "Completely free with completion certificate"
        },
        {
          title: "Azure Fundamentals: Architecture and Services",
          provider: "Microsoft Learn",
          topics: ["Cloud Infrastructure", "Azure Services", "Cloud Solutions"],
          duration: "3 hours 30 minutes",
          url: "https://learn.microsoft.com/en-us/training/paths/azure-fundamentals-describe-azure-architecture-services/",
          description: "Completely free with completion certificate"
        },
        {
          title: "Azure Fundamentals: Security, Privacy, and Compliance",
          provider: "Microsoft Learn",
          topics: ["Cloud Security", "Identity Services", "Network Security"],
          duration: "2 hours 30 minutes",
          url: "https://learn.microsoft.com/en-us/training/paths/describe-azure-management-governance/",
          description: "Completely free with completion certificate"
        }
      ]
    },
    {
      title: "DevOps",
      icon: <GitBranch className="w-6 h-6" />,
      gradient: "from-purple-500 to-indigo-600",
      courses: [
        {
          title: "AWS SimuLearn: Auto-Healing and Scaling Applications",
          provider: "AWS",
          topics: ["Auto Scaling", "Application Management"],
          url: "https://explore.skillbuilder.aws/learn",
          description: "Free with AWS account, includes completion certificate"
        },
        {
          title: "DevOps Engineer Introduction",
          provider: "Microsoft Learn",
          topics: ["DevOps Practices", "CI/CD", "Infrastructure as Code"],
          duration: "3 hours",
          url: "https://learn.microsoft.com/en-us/training/paths/az-400-get-started-devops-transformation-journey/",
          description: "Completely free with completion certificate"
        },
        {
          "title": "Define and implement continuous integration",
          "provider": "Microsoft Learn",
          "topics": ["Continuous Integration", "Continuous Deployment", "Azure DevOps"],
          "duration": "4 hours",
          "url": "https://learn.microsoft.com/en-us/training/paths/az-400-define-implement-continuous-integration/",
          "description": "Completely free with completion certificate"
        }
      ]
    },
    {
      title: "Database Management",
      icon: <Database className="w-6 h-6" />,
      gradient: "from-emerald-500 to-green-600",
      courses: [
        {
          title: "Relational Database Certification",
          provider: "freeCodeCamp",
          topics: ["PostgreSQL", "SQL", "Database Design"],
          url: "https://www.freecodecamp.org/learn/relational-database/",
          description: "Completely free with certificate upon completion"
        },
        {
          "title": "Azure Data Fundamentals: Explore relational data in Azure",
          "provider": "Microsoft Learn",
          "topics": ["Azure SQL Database", "Database Administration", "Data Storage"],
          "duration": "3 hours 45 minutes",
          "url": "https://learn.microsoft.com/en-us/training/paths/azure-data-fundamentals-explore-relational-data/",
          "description": "Completely free with completion certificate"
        },
        {
          title: "Azure Cosmos DB Development",
          provider: "Microsoft Learn",
          topics: ["NoSQL Databases", "Cloud Database Development", "Data Modeling"],
          duration: "6 hours 13 minutes",
          url: "https://learn.microsoft.com/en-us/training/paths/az-204-develop-solutions-that-use-azure-cosmos-db/",
          description: "Completely free with completion certificate"
        }
      ]
    },
    {
      title: "Machine Learning & AI",
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-violet-500 to-purple-600",
      courses: [
        {
          title: "Machine Learning with Python Certification",
          provider: "freeCodeCamp",
          topics: ["TensorFlow", "Neural Networks", "Natural Language Processing"],
          url: "https://www.freecodecamp.org/learn/machine-learning-with-python/",
          description: "Completely free with certificate upon completion"
        },
        {
          title: "Azure AI Fundamentals",
          provider: "Microsoft Learn",
          topics: ["AI Fundamentals", "Machine Learning Basics", "Azure AI Services"],
          duration: "1 day",
          url: "https://learn.microsoft.com/en-us/training/courses/ai-900t00/",
          description: "Completely free with completion certificate"
        },
        {
          title: "Create Machine Learning Models",
          provider: "Microsoft Learn",
          topics: ["Machine Learning", "Model Training", "Python"],
          duration: "5 hours 20 minutes",
          url: "https://learn.microsoft.com/en-us/training/paths/create-machine-learn-models/",
          description: "Completely free with completion certificate"
        },
        {
          title: "Generative AI Models in Azure Machine Learning",
          provider: "Microsoft Learn",
          topics: ["Generative AI", "Azure ML", "AI Models"],
          duration: "2 hours 26 minutes",
          url: "https://learn.microsoft.com/en-us/training/paths/work-with-generative-models-azure-machine-learning/",
          description: "Completely free with completion certificate"
        },
        {
          title: "Machine Learning Fundamentals",
          provider: "Microsoft Learn",
          topics: ["Machine Learning Basics", "Data Science", "AI Concepts"],
          duration: "1 hour 54 minutes",
          url: "https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/",
          description: "Completely free with completion certificate"
        }
      ]
    },
    {
      title: "Agile Project Management",
      icon: <Users className="w-6 h-6" />,
      gradient: "from-pink-500 to-rose-600",
      courses: [
        {
          title: "Choose an Agile approach to software development",
          provider: "Microsoft Learn",
          topics: ["Agile Methodology", "Software Development", "Project Management"],
          duration: "40 minutes",
          url: "https://learn.microsoft.com/en-us/training/paths/choose-an-agile-approach/",
          description: "Completely free with completion certificate"
        },
        {
          title: "Manage Agile software delivery plans across teams",
          provider: "Microsoft Learn",
          topics: ["Team Management", "Agile Planning", "Software Delivery"],
          duration: "43 minutes",
          url: "https://learn.microsoft.com/en-us/training/paths/manage-agile-software-delivery-plans-across-teams/",
          description: "Completely free with completion certificate"
        }
      ]
    },
    {
      title: "UX Design",
      icon: <Palette className="w-6 h-6" />,
      gradient: "from-amber-500 to-orange-600",
      courses: [
        {
          title: "Fundamentals of Digital Marketing",
          provider: "Google Digital Garage",
          topics: ["UX Principles", "Digital Marketing"],
          url: "https://learndigital.withgoogle.com/digitalgarage/course/digital-marketing",
          description: "Completely free with completion certificate"
        }
      ]
    },
    {
      title: "Data Visualization",
      icon: <BarChart3 className="w-6 h-6" />,
      gradient: "from-teal-500 to-cyan-600",
      courses: [
        {
          title: "Data Visualization Certification",
          provider: "freeCodeCamp",
          topics: ["D3.js", "JSON", "APIs", "Data Visualization Libraries"],
          url: "https://www.freecodecamp.org/learn/data-visualization/",
          description: "Completely free with certificate upon completion"
        }
      ]
    },
    {
      title: "Quality Assurance",
      icon: <TestTube className="w-6 h-6" />,
      gradient: "from-indigo-500 to-blue-600",
      courses: [
        {
          title: "Quality Assurance Certification",
          provider: "freeCodeCamp",
          topics: ["Chai", "Automated Testing", "Node.js Testing"],
          url: "https://www.freecodecamp.org/learn/quality-assurance/",
          description: "Completely free with certificate upon completion"
        }
      ]
    },
    {
      title: "Scientific Computing",
      icon: <Calculator className="w-6 h-6" />,
      gradient: "from-slate-500 to-gray-600",
      courses: [
        {
          title: "Scientific Computing with Python Certification",
          provider: "freeCodeCamp",
          topics: ["Python", "Scientific Computing Libraries", "Data Processing"],
          url: "https://www.freecodecamp.org/learn/scientific-computing-with-python/",
          description: "Completely free with certificate upon completion"
        },
        {
          title: "College Algebra with Python Certification",
          provider: "freeCodeCamp",
          topics: ["Algebra", "Python Programming", "Mathematical Computing"],
          url: "https://www.freecodecamp.org/learn/college-algebra-with-python/",
          description: "Completely free with certificate upon completion"
        }
      ]
    }
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 bg-[var(--background)]`}
      suppressHydrationWarning
    >
      <div className="container mx-auto px-4 py-8 text-[var(--foreground)]">
        <header className="text-center mb-12">
          <div className="flex justify-between items-center mb-8">
            <div className="flex-1"></div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-950" />
              )}
            </button>
          </div>

          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Free Software Development Courses
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold">with Certificates</h2>
          </div>

          <p className="text-lg text-[var(--muted-foreground)] mt-6 max-w-3xl mx-auto">
            A curated collection of completely free software development courses that offer certificates upon completion.
            All courses are organized by topic and cover various aspects of software development.
          </p>

          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-[var(--muted-foreground)]">
            <BookOpen className="w-4 h-4" />
            <span>
              {courseCategories.reduce((total, category) => total + category.courses.length, 0)} courses available
            </span>
          </div>
        </header>

        <div className="grid gap-8 md:gap-12">
          {courseCategories.map((category, categoryIndex) => (
            <section key={categoryIndex} className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} text-white shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-3xl font-bold text-[var(--foreground)]">{category.title}</h3>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.courses.map((course, courseIndex) => (
                  <div
                    key={courseIndex}
                    className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
                  >
                    <div className={`h-2 bg-gradient-to-r ${category.gradient}`}></div>

                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-xl font-semibold text-gray-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {course.title}
                        </h4>
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0 ml-2" />
                      </div>

                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Provider:</span>
                          <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{course.provider}</span>
                        </div>

                        {course.duration && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Duration:</span>
                            <span className="text-sm text-gray-800 dark:text-gray-300">{course.duration}</span>
                          </div>
                        )}

                        <div className="flex flex-wrap gap-1">
                          {course.topics.map((topic, topicIndex) => (
                            <span
                              key={topicIndex}
                              className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-400 rounded-full"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>

                      <p className="text-sm text-gray-700 dark:text-gray-400 mb-4">{course.description}</p>

                      <a
                        href={course.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${category.gradient} text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium w-full justify-center`}
                      >
                        <BookOpen className="w-4 h-4" />
                        Start Course
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-12 sm:mt-16 bg-white/10 dark:bg-black/30 dark:backdrop-blur-sm rounded-xl border border-gray-200 dark:border-purple-500/20 p-6 sm:p-8">
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-white mb-4 sm:mb-6">
              Connect with Raimon
            </h3>
            <ul className="flex flex-wrap justify-center gap-3 sm:gap-4 icons social-grid">
              <li>
                <a
                  href="https://x.com/raimonvibe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-110"
                >
                  <i className="fab fa-x-twitter text-base sm:text-lg"></i>
                  <span className="sr-only">X</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCDGDNuYb2b2Ets9CYCNVbuA/videos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white hover:from-red-600 hover:to-red-700 transition-all duration-300 hover:scale-110"
                >
                  <i className="fab fa-youtube text-base sm:text-lg"></i>
                  <span className="sr-only">YouTube</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@raimonvibe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-gray-800 to-black rounded-lg flex items-center justify-center text-white hover:from-gray-700 hover:to-gray-900 transition-all duration-300 hover:scale-110"
                >
                  <i className="fab fa-tiktok text-base sm:text-lg"></i>
                  <span className="sr-only">TikTok</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/raimonvibe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center text-white hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:scale-110"
                >
                  <i className="fab fa-instagram text-base sm:text-lg"></i>
                  <span className="sr-only">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@raimonvibe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center justify-center text-white hover:from-gray-600 hover:to-gray-700 transition-all duration-300 hover:scale-110"
                >
                  <i className="fab fa-medium text-base sm:text-lg"></i>
                  <span className="sr-only">Medium</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/raimonvibe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg flex items-center justify-center text-white hover:from-gray-500 hover:to-gray-600 transition-all duration-300 hover:scale-110"
                >
                  <i className="fab fa-github text-base sm:text-lg"></i>
                  <span className="sr-only">GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/raimonvibe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-110"
                >
                  <i className="fab fa-linkedin-in text-base sm:text-lg"></i>
                  <span className="sr-only">LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61563450007849"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-110"
                >
                  <i className="fab fa-facebook-f text-base sm:text-lg"></i>
                  <span className="sr-only">Facebook</span>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}
