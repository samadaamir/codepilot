import {
  Bot,
  Zap,
  Bug,
  ShieldCheck,
  Lightbulb,
  BarChart3,
  BookOpen,
  Globe,
  Code2,
  GitCompare,
  Gauge,
  Cloud,
} from "lucide-react";
const features = [
      {
        icon: Bot,
        title: "AI Code Review",
        description:
          "Analyze your code instantly and receive professional feedback on quality, readability, and maintainability.",
      },
      {
        icon: Zap,
        title: "Code Optimization",
        description:
          "Generate cleaner, faster, and more efficient code using AI-powered optimization.",
      },
      {
        icon: Bug,
        title: "Bug Detection",
        description:
          "Detect syntax errors, logical mistakes, and potential issues before deployment.",
      },
      {
        icon: ShieldCheck,
        title: "Security Analysis",
        description:
          "Identify common security vulnerabilities and improve application safety.",
      },
      {
        icon: Lightbulb,
        title: "Smart Suggestions",
        description:
          "Receive intelligent recommendations to improve structure, naming, and code quality.",
      },
      {
        icon: BarChart3,
        title: "Code Quality Score",
        description:
          "Get an overall quality score based on readability, security, and performance.",
      },
      {
        icon: BookOpen,
        title: "Detailed Explanations",
        description:
          "Understand every optimization with simple and easy-to-follow AI explanations.",
      },
      {
        icon: Globe,
        title: "Multi-Language Support",
        description:
          "Supports JavaScript, TypeScript, Python, Java, C++, Go, PHP, Rust, and more.",
      },
      {
        icon: Code2,
        title: "Monaco Editor",
        description:
          "Write code in a powerful editor with syntax highlighting and an IDE-like experience.",
      },
      {
        icon: GitCompare,
        title: "Side-by-Side Comparison",
        description:
          "Compare your original code with the optimized AI version in real time.",
      },
      {
        icon: Gauge,
        title: "Performance Insights",
        description:
          "Improve execution speed and reduce resource usage with AI recommendations.",
      },
      {
        icon: Cloud,
        title: "Cloud-Powered AI",
        description:
          "Fast, reliable, and scalable AI processing directly from the cloud.",
      },
    ];

  export default function Features() {
    return (
      <section className="bg-slate-950 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-white">
              Powerful Features
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              Everything you need to write cleaner, smarter, and more secure
              code with AI.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/20"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 transition-all duration-300 group-hover:bg-indigo-500 group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
    

