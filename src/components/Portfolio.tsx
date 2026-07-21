import { useState, useEffect, useCallback } from "react";
import { X, MapPin, Ruler, ChevronLeft, ChevronRight } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

type Project = {
  images: [string, ...string[]];
  name: string;
  type: "Residencial" | "Comercial" | "Público" | "Industrial";
  area: string;
  location: string;
  desc: string;
  span?: string;
};

// Para adicionar uma galeria, importe novas imagens e inclua no array images.
const projects: Project[] = [
  {
    images: [p1],
    name: "Residencial Floresta Viva",
    type: "Residencial",
    area: "3.200 m²",
    location: "Curitiba, PR",
    desc: "Edifício residencial de 5 pavimentos em estrutura híbrida CLT-glulam, com fachada ventilada em madeira termotratada.",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    images: [p2],
    name: "Sede Corporativa Vértice",
    type: "Comercial",
    area: "8.450 m²",
    location: "São Paulo, SP",
    desc: "Sede de 7 andares com sistema híbrido madeira-concreto, vencendo vãos de 12m com vigas glulam protendidas.",
  },
  {
    images: [p3],
    name: "Pavilhão Cultural Itaim",
    type: "Público",
    area: "1.850 m²",
    location: "São Paulo, SP",
    desc: "Cobertura em arcos glulam de grande vão livre (28m), expressão estrutural integrada à arquitetura.",
  },
  {
    images: [p4],
    name: "Escola Verde Atibaia",
    type: "Público",
    area: "2.700 m²",
    location: "Atibaia, SP",
    desc: "Complexo educacional em CLT com pré-fabricação total, executado em 6 meses de obra.",
    span: "md:col-span-2",
  },
  {
    images: [p5],
    name: "Casa Mata Atlântica",
    type: "Residencial",
    area: "680 m²",
    location: "Campos do Jordão, SP",
    desc: "Residência em pórticos glulam com balanços de 6m, integração radical com a topografia.",
  },
  {
    images: [p6],
    name: "Galpão Logístico Tarumã",
    type: "Industrial",
    area: "12.000 m²",
    location: "Tarumã, SP",
    desc: "Treliças em glulam vencendo 30m de vão livre, alternativa de baixo carbono ao aço estrutural.",
  },
];

const Portfolio = () => {
  const [active, setActive] = useState<Project | null>(null);
  const [slide, setSlide] = useState(0);

  const activeImages = active?.images ?? [];
  const total = activeImages.length;
  const hasGallery = total > 1;
  const currentImage = activeImages[slide] ?? activeImages[0];

  const next = useCallback(() => {
    if (!hasGallery) return;
    setSlide((s) => (s + 1) % total);
  }, [hasGallery, total]);

  const prev = useCallback(() => {
    if (!hasGallery) return;
    setSlide((s) => (s - 1 + total) % total);
  }, [hasGallery, total]);

  const openProject = (project: Project) => {
    setActive(project);
    setSlide(0);
  };

  const close = () => {
    setActive(null);
    setSlide(0);
  };

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, next, prev]);

  useEffect(() => {
    if (!active) return;
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [active]);

  return (
    <section id="portfolio" className="py-24 md:py-36 bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              03 — Portfólio
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-balance leading-[1.05]">
              Projetos que demonstram o estado da arte.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Uma seleção de obras nas quais nossa engenharia viabilizou
            arquiteturas ambiciosas em madeira.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[260px]">
          {projects.map((p) => (
            <button
              key={p.name}
              onClick={() => openProject(p)}
              className={`group relative overflow-hidden rounded-2xl bg-muted text-left ${
                p.span || ""
              }`}
            >
              <img
                src={p.images[0]}
                alt={p.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-expo group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/90 text-foreground backdrop-blur-md">
                  {p.type}
                </span>
                {p.images.length > 1 && (
                  <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-foreground/80 text-background backdrop-blur-md">
                    +{p.images.length - 1}
                  </span>
                )}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h3 className="font-display text-xl md:text-2xl font-semibold">
                  {p.name}
                </h3>
                <div className="mt-2 flex items-center gap-4 text-xs text-white/80">
                  <span className="inline-flex items-center gap-1.5">
                    <Ruler className="h-3.5 w-3.5" /> {p.area}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" /> {p.location}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-up"
          onClick={close}
        >
          <div
            className="relative max-w-3xl w-full max-h-[90vh] bg-card rounded-3xl overflow-hidden shadow-card flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              className="absolute top-4 right-4 z-20 h-10 w-10 rounded-full bg-background/90 hover:bg-background flex items-center justify-center"
              aria-label="Fechar"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative h-72 md:h-80 bg-muted overflow-hidden shrink-0">
              <img
                key={currentImage}
                src={currentImage}
                alt={`${active.name} — foto ${slide + 1}`}
                className="w-full h-full object-cover animate-fade-in"
              />

              {hasGallery && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-background/90 hover:bg-background flex items-center justify-center shadow-md"
                    aria-label="Foto anterior"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-background/90 hover:bg-background flex items-center justify-center shadow-md"
                    aria-label="Próxima foto"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-md">
                    {activeImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setSlide(i)}
                        aria-label={`Ir para foto ${i + 1}`}
                        aria-current={i === slide ? "true" : undefined}
                        className={`h-1.5 rounded-full transition-all ${
                          i === slide ? "w-6 bg-primary" : "w-1.5 bg-foreground/30"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="absolute top-4 left-4 px-2.5 py-1 text-xs font-medium rounded-full bg-background/80 backdrop-blur-md">
                    {slide + 1} / {total}
                  </div>
                </>
              )}
            </div>

            <div className="p-8 md:p-10 overflow-y-auto">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent text-accent-foreground">
                {active.type}
              </span>
              <h3 className="mt-4 font-display text-3xl font-semibold">
                {active.name}
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {active.desc}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 pt-6 border-t border-border">
                <div>
                  <div className="text-xs text-muted-foreground mb-1 inline-flex items-center gap-1.5">
                    <Ruler className="h-3.5 w-3.5" /> Área
                  </div>
                  <div className="font-display font-semibold">{active.area}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1 inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" /> Local
                  </div>
                  <div className="font-display font-semibold">
                    {active.location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
