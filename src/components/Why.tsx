import { Leaf, Clock, Shield, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Leaf,
    metric: "1 m³",
    title: "≈ 1 tonelada de CO₂",
    desc: "sequestrada e armazenada por toda a vida útil da estrutura em madeira engenheirada.",
  },
  {
    icon: Clock,
    metric: "−50%",
    title: "Tempo de obra",
    desc: "Pré-fabricação industrial reduz prazos de execução comparado a sistemas convencionais.",
  },
  {
    icon: Shield,
    metric: "1:5",
    title: "Resistência/peso",
    desc: "Madeira engenheirada oferece desempenho estrutural superior com cargas próprias menores.",
  },
  {
    icon: TrendingUp,
    metric: "ESG+",
    title: "Aderência ESG",
    desc: "Atende critérios LEED, AQUA, EDGE e diretrizes de descarbonização da AEC.",
  },
];

const Why = () => (
  <section id="vantagens" className="py-16 md:py-24 bg-background">
    <div className="container mx-auto">
      <div className="max-w-3xl mb-10">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          01 — Por quê
        </span>
        <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-balance leading-[1.05]">
          Por que madeira estrutural?
        </h2>
        <p className="mt-6 text-base text-muted-foreground max-w-2xl">
          Desempenho estrutural, sustentabilidade, industrialização e rapidez
          construtiva em um único sistema.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border">
        {stats.map((s) => (
          <article
            key={s.title}
            className="group bg-card p-8 lg:p-10 hover:bg-accent/40 transition-colors duration-500 ease-expo"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="font-display text-2xl font-semibold gradient-text">
                {s.metric}
              </div>
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              {s.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {s.desc}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Why;
