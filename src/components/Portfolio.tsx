import { useState, useEffect, useCallback } from "react";
import { X, MapPin, Ruler, ChevronLeft, ChevronRight } from "lucide-react";

type Project = {
  images: [string, ...string[]];
  name: string;
  type: "Residencial" | "Comercial" | "Público" | "Industrial";
  area: string;
  location: string;
  desc: string;
  span?: string;
};

// Fotos em src/assets/projects, nomeadas <slug>-NN.jpg (NN = 01 é a capa).
// Para adicionar uma foto a uma galeria, basta salvar o arquivo seguindo o padrão.
const projectImages = import.meta.glob("@/assets/projects/*.jpg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const gallery = (slug: string): [string, ...string[]] =>
  Object.keys(projectImages)
    .filter((k) => k.includes(`/${slug}-`))
    .sort()
    .map((k) => projectImages[k]) as [string, ...string[]];

const projects: Project[] = [
  {
    images: gallery("planetario"),
    name: "Planetário do Parque da Ciência Newton Freire Maia",
    type: "Público",
    area: "5.500 m²",
    location: "Pinhais, PR",
    desc: `Localizado em Pinhais, na Região Metropolitana de Curitiba (PR), o Planetário do Parque da Ciência Newton Freire Maia é um marco da engenharia em madeira no Brasil, demonstrando o potencial da Madeira Laminada Colada (MLC) em obras de grande porte e elevada complexidade arquitetônica.

A estrutura principal foi concebida integralmente em MLC (Madeira Laminada Colada) e CLT (Madeira Laminada Cruzada), material engenheirado que combina alta capacidade estrutural, precisão industrial e excelente desempenho ambiental. Fabricados em ambiente controlado, os elementos estruturais proporcionam maior qualidade construtiva, rapidez na montagem, redução de resíduos e significativa diminuição da pegada de carbono da edificação.

O projeto é composto por 18 pórticos estruturais em MLC, distribuídos radialmente para sustentar a cobertura e vencer grandes vãos com elegância e eficiência. A geometria da estrutura valoriza a arquitetura do edifício e evidencia a versatilidade da madeira engenheirada na criação de formas complexas e espaços amplos, sem a necessidade de apoios intermediários.

Além do desempenho estrutural, a cobertura incorpora um sistema de telhado verde, que contribui para o conforto térmico, a eficiência energética e a integração da edificação com o ambiente ao redor.

O conjunto estrutural abriga uma cúpula de projeção com 18 metros de diâmetro, equipada com tecnologia de última geração para simulação astronômica, além de um auditório com capacidade para aproximadamente 300 pessoas, áreas expositivas, salas multiuso, observatório astronômico e espaços dedicados à divulgação científica.`,
    span: "md:col-span-2 md:row-span-2",
  },
  {
    images: gallery("capsu"),
    name: "Lounge do Heliponto da Quinta da Baroneza",
    type: "Comercial",
    area: "48,8 m²",
    location: "Bragança Paulista, SP",
    desc: `Lounge do heliponto da Quinta da Baroneza, com projeto estrutural desenvolvido para a Capsu.

A estrutura foi executada integralmente em CLT (Madeira Laminada Cruzada) e concebida a partir de um sistema modular, proporcionando rapidez na montagem, alta precisão construtiva e excelente desempenho estrutural. O resultado é uma arquitetura de linhas limpas e contemporâneas, que alia inovação, eficiência e a estética única da madeira engenheirada.`,
  },
  {
    images: gallery("lakota"),
    name: "Residência Lakota",
    type: "Residencial",
    area: "56,4 m²",
    location: "Brasil",
    desc: `Este projeto realizado para o cliente EcoCabanas apresenta uma residência modular e industrializada executada em Pinus autoclavado, concebida para aliar eficiência construtiva, sustentabilidade e alto desempenho. As paredes foram desenvolvidas em Wood Frame, proporcionando leveza, precisão e excelente desempenho termoacústico, enquanto a cobertura é composta por telhas metálicas termoacústicas, garantindo conforto, durabilidade e rapidez na execução.`,
  },
  {
    images: gallery("helices-recife"),
    name: "Hélices — Parque Governador Eduardo Campos",
    type: "Público",
    area: "855 m²",
    location: "Recife, PE",
    desc: `Projeto da estrutura em Madeira Laminada Colada (MLC) do Parque Governador Eduardo Campos, em Recife–PE. Este projeto destaca-se pelas vigas curvas em MLC, desenvolvidas em dois sentidos, e pelos 160 pilares curvos distribuídos em quatro estruturas idênticas. O conjunto é complementado por uma guarita de acesso com estrutura híbrida, integrando aço, concreto e madeira.

Fabricação MLC: Massiva · Montagem: ML Estruturas · Construtora: Guerra Construtora`,
    span: "md:col-span-2",
  },
  {
    images: gallery("vila-aroeira"),
    name: "Casa Mar — Vila Aroeira",
    type: "Residencial",
    area: "315 m²",
    location: "Mogiquiçaba – Belmonte, BA",
    desc: `Casa Mar – Vila Aroeira, um empreendimento localizado em um cenário paradisíaco próximo a Porto Seguro (BA), é composto por 20 residências de alto padrão, cada uma com 315 m² de área construída.

O sistema estrutural adota Madeira Laminada Colada (MLC) de eucalipto, proporcionando grandes vãos, elevada resistência e uma estética sofisticada. Toda a edificação foi concebida com sistemas construtivos leves e industrializados, utilizando paredes em Wood Frame e lajes leves do tipo Wall, garantindo alta precisão construtiva, rapidez na montagem e excelente desempenho térmico e acústico. Essa combinação de tecnologias resulta em uma construção sustentável, eficiente e alinhada aos mais modernos conceitos da construção industrializada.

Cliente: ARK · MLC: Massiva`,
  },
  {
    images: gallery("cobertura-recife"),
    name: "Cobertura — Parque Governador Eduardo Campos",
    type: "Público",
    area: "350 m²",
    location: "Recife, PE",
    desc: `Projeto da estrutura em Madeira Laminada Colada (MLC) do Parque Governador Eduardo Campos, em Recife–PE. Este projeto destaca-se por sua concepção híbrida, integrando harmonicamente madeira engenheirada, aço e concreto. O grande diferencial fica por conta das vigas curvas em MLC, conectadas com precisão e cobertas por telhas metálicas termoacústicas.

Fabricação MLC: Massiva · Montagem: ML Estruturas · Construtora: Guerra Construtora`,
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
    <section id="portfolio" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              03 — Portfólio
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-balance leading-[1.05]">
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
                <h3 className="font-display text-lg md:text-xl font-semibold">
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
              <h3 className="mt-4 font-display text-2xl font-semibold">
                {active.name}
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed whitespace-pre-line">
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
