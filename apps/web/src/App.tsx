import { Routes, Route, NavLink } from "react-router-dom";
import { Bolt, TerminalSquare } from "lucide-react";
import { QueryProvider } from "@/components/providers/query-provider";
import { cn } from "@/lib/utils";
import { HomePage } from "./pages/HomePage";
import { ProjectPage } from "./pages/ProjectPage";

const navItems = [
  { to: "/", label: "Overview", end: true },
  { to: "/project", label: "Project Console" },
];

export default function App() {
  return (
    <QueryProvider>
      <div className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,rgba(88,131,255,0.14),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(148,163,255,0.12),transparent_20%)]">
        <header className="sticky top-0 z-10 border-b border-white/10 bg-[#081122]/85 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-12">
            <div className="flex items-center gap-3 text-white">
              <div className="rounded-xl bg-blue-400/15 p-2 text-blue-200">
                <Bolt className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-medium">NEXA</div>
                <div className="text-xs text-white/60">Vite workspace</div>
              </div>
            </div>

            <nav className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    cn(
                      "rounded-full px-3 py-1.5 text-sm text-white/70 transition hover:text-white",
                      isActive && "bg-white/10 text-white",
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden items-center gap-2 text-xs text-white/60 md:flex">
              <TerminalSquare className="h-4 w-4 text-emerald-200" />
              Frontend on Vite, backend on plain Node services
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={<ProjectPage />} />
        </Routes>
      </div>
    </QueryProvider>
  );
}
