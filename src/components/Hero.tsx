import heroImg from "@/assets/hero.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => (
  <section id="top" className="relative min-h-[100svh] flex items-end overflow-hidden surface-darker">
    <img
      src={heroImg}
      alt="Interior de edificação em madeira engenheirada com vigas glulam expostas"
      className="absolute inset-0 w-full h-full object-cover opacity-55"
      width={1920}
      height={1280}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-surface-darker via-surface-darker/70 to-surface-darker/30" />
    <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />

    <div className="relative container mx-auto pb-8 md:pb-10 pt-24">
      <div className="max-w-4xl animate-fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-medium text-white/80 mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse" />
          Engenharia estrutural em madeira
        </div>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white text-balance leading-[0.95]">
          Estruturas que <span className="gradient-text">crescem</span> em florestas.
        </h1>
        <p className="mt-6 text-base md:text-lg text-white/70 max-w-2xl leading-relaxed">
          Projetamos edificações em madeira: madeira engenheirada, madeira
          roliça e madeira nativa, com alto desempenho estrutural, garantindo
          previsibilidade de custos, rapidez na execução e impacto ambiental
          mensurável.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#contato"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary-glow transition-all shadow-brand hover:scale-[1.02] ease-expo"
          >
            Fale com a gente
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 backdrop-blur-md transition-colors"
          >
            Ver projetos
          </a>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md">
        {[
          { k: "+120", v: "Projetos estruturais" },
          { k: "85k m²", v: "Área construída" },
          { k: "−40%", v: "CO₂ vs concreto" },
          { k: "EC5 + NBR", v: "Conformidade total" },
        ].map((s) => (
          <div key={s.v} className="bg-surface-darker/80 p-4 lg:p-5">
            <div className="font-display text-xl md:text-2xl text-white font-semibold">
              {s.k}
            </div>
            <div className="text-xs text-white/60 mt-1">{s.v}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
