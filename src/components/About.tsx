import teamImg from "@/assets/team.jpg";

const About = () => (
  <section id="sobre" className="py-16 md:py-24 bg-background">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
            <img
              src={teamImg}
              alt="Equipe Timberhack em sessão de projeto"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-brand max-w-[220px] hidden md:block">
            <div className="font-display text-2xl font-semibold">2019</div>
            <div className="text-xs mt-1 text-primary-foreground/80">
              Fundada por engenheiros estruturais formados em Viena e São Paulo
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            05 — Sobre a Timberhack
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-balance leading-[1.05]">
            Engenharia, floresta e código.
          </h2>
          <p className="mt-6 text-base text-muted-foreground leading-relaxed">
            Nascemos da convicção de que a próxima geração de edificações
            brasileiras será construída em madeira engenheirada — não por
            tendência, mas por evidência técnica e ambiental.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Reunimos engenheiros estruturais com formação europeia e brasileira,
            desenvolvedores de fluxos BIM e especialistas em normas. Atendemos
            escritórios de arquitetura, construtoras e investidores que enxergam
            a madeira como vetor de competitividade.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 pt-8 border-t border-border">
            <div>
              <div className="font-display text-2xl font-semibold gradient-text">
                12
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Engenheiros e modeladores
              </div>
            </div>
            <div>
              <div className="font-display text-2xl font-semibold gradient-text">
                6
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Estados atendidos
              </div>
            </div>
            <div>
              <div className="font-display text-2xl font-semibold gradient-text">
                100%
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Projetos com selo BIM
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
