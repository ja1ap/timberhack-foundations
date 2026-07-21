import { Cpu, Layers3, BookCheck, Globe2, Workflow, Flame } from "lucide-react";

const items = [
  { icon: Cpu, title: "RFEM", desc: "Análise estrutural avançada com módulos específicos para madeira." },
  { icon: Layers3, title: "BIM / Revit", desc: "Modelagem integrada em BIM, garantindo compatibilização entre disciplinas, precisão e redução de interferências." },
  { icon: BookCheck, title: "Eurocode 5", desc: "Dimensionamento estrutural conforme a EN 1995, referência europeia para o projeto de estruturas de madeira." },
  { icon: Globe2, title: "NBR 7190 1:2022", desc: "Conformidade total com a norma brasileira atualizada." },
  { icon: Workflow, title: "Pré-fabricação", desc: "Modelagem executiva preparada para a industrialização, compatível com os processos de fabricação digital e montagem em obra." },
  { icon: Flame, title: "Resistência ao fogo", desc: "Verificação de seções carbonizadas." },
];

const Differentiators = () => (
  <section id="diferenciais" className="relative py-16 md:py-24 surface-darker text-white overflow-hidden">
    <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
    <div className="relative container mx-auto">
      <div className="max-w-3xl mb-10">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow">
          04 — Diferenciais técnicos
        </span>
        <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-balance leading-[1.05]">
          Stack técnico de padrão internacional.
        </h2>
        <p className="mt-6 text-base text-white/70 max-w-2xl">
          Combinamos as melhores ferramentas de cálculo, modelagem e
          normatização para entregar projetos auditáveis e construíveis.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
        {items.map((it) => (
          <div
            key={it.title}
            className="bg-surface-darker p-6 lg:p-8 hover:bg-primary/15 transition-colors duration-500"
          >
            <it.icon className="h-6 w-6 text-primary-glow mb-5" />
            <h3 className="font-display text-base md:text-lg font-semibold">
              {it.title}
            </h3>
            <p className="mt-2 text-xs md:text-sm text-white/60 leading-relaxed">
              {it.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Differentiators;
