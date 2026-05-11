import { Boxes, Building2, FileCheck2, Compass, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Projeto estrutural CLT & Glulam",
    desc: "Concepção e dimensionamento completo de sistemas em madeira laminada cruzada e madeira lamelada colada para edificações de múltiplos pavimentos.",
    tags: ["CLT", "Glulam", "LVL"],
  },
  {
    icon: Boxes,
    title: "Modelagem BIM",
    desc: "Modelos federados em Revit com nível de detalhamento LOD 350-400, integrando arquitetura, MEP e fabricação CNC.",
    tags: ["Revit", "IFC", "LOD 400"],
  },
  {
    icon: Compass,
    title: "Consultoria técnica",
    desc: "Suporte a escritórios de arquitetura e construtoras desde estudo de viabilidade até acompanhamento de obra e montagem.",
    tags: ["Viabilidade", "Obra"],
  },
  {
    icon: FileCheck2,
    title: "Conformidade normativa",
    desc: "Verificação e memorial de cálculo segundo Eurocode 5, NBR 7190-1:2022, requisitos de resistência ao fogo e desempenho sísmico.",
    tags: ["EC5", "NBR 7190"],
  },
];

const Services = () => (
  <section id="servicos" className="py-24 md:py-36 bg-secondary/40">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            02 — Serviços
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-balance leading-[1.05]">
            Engenharia ponta a ponta para madeira engenheirada.
          </h2>
        </div>
        <p className="text-muted-foreground max-w-md">
          Do estudo preliminar à entrega da obra, com rigor técnico e
          documentação completa para aprovação em qualquer praça.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {services.map((s) => (
          <article
            key={s.title}
            className="group relative bg-card border border-border rounded-2xl p-8 lg:p-10 hover:border-primary/40 hover:shadow-card transition-all duration-500 ease-expo"
          >
            <div className="flex items-start justify-between mb-8">
              <div className="h-12 w-12 rounded-xl bg-accent text-primary flex items-center justify-center">
                <s.icon className="h-5 w-5" />
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-transform" />
            </div>
            <h3 className="font-display text-2xl font-semibold mb-3">
              {s.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {s.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-accent text-accent-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
