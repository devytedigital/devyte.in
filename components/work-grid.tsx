import { projects } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";

export function WorkGrid() {
  return (
    <section className="bg-black text-white pt-32 pb-32 overflow-hidden min-h-screen">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer flex flex-col space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-1000"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle Overlay on Hover */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Text Content */}
              <div className="flex flex-col space-y-1">
                <h3 className="text-lg md:text-xl font-medium tracking-widest uppercase transition-colors duration-300 group-hover:text-zinc-400">
                  {project.title}
                </h3>
                {project.category && (
                  <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-light">
                    {project.category}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
