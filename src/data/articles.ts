import project1 from "@/assets/project-1.jpg";
import project3 from "@/assets/project-3.jpg";
import project5 from "@/assets/project-5.jpg";

export type BlogArticle = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  cover: string;
  body: Array<{
    heading: string;
    paragraphs: string[];
  }>;
};

export const articles: BlogArticle[] = [
  {
    slug: "nbr-7190-1-2022-dimensionamento-madeira",
    category: "Normas",
    title: "NBR 7190-1:2022 - o que muda no dimensionamento em madeira",
    excerpt:
      "Análise comparativa entre a versão anterior e a revisão atual, com foco em estados limites e coeficientes de modificação.",
    date: "Mar 2025",
    readTime: "7 min",
    cover: project3,
    body: [
      {
        heading: "Uma norma mais próxima da prática atual",
        paragraphs: [
          "A revisão da NBR 7190 reorganiza critérios de dimensionamento e aproxima a prática brasileira de uma abordagem mais explícita por estados limites. Para projetos em madeira engenheirada, isso ajuda a transformar decisões que antes ficavam dispersas em uma rotina técnica mais auditável.",
          "A mudança mais importante não é apenas de fórmula. Ela altera a forma como o projetista registra hipóteses, combinações, classes de resistência, duração de carregamento e condições de serviço.",
        ],
      },
      {
        heading: "Impacto em CLT, glulam e sistemas híbridos",
        paragraphs: [
          "Em sistemas de CLT e glulam, a leitura normativa precisa caminhar junto com a especificação do material, o detalhamento das ligações, a proteção contra umidade e o plano de montagem.",
          "A norma não substitui a coordenação entre arquitetura, estrutura e fabricação. Pelo contrário: ela torna mais claro onde essa coordenação precisa estar documentada para reduzir risco em obra.",
        ],
      },
      {
        heading: "O que observar no início do projeto",
        paragraphs: [
          "Antes de congelar a solução estrutural, vale confirmar classe de uso, exposição, estratégia de proteção, sistema de contraventamento, tolerâncias de montagem e interfaces com concreto, aço e vedação.",
          "Essas decisões iniciais costumam ter mais impacto no desempenho final do que ajustes tardios de dimensionamento.",
        ],
      },
    ],
  },
  {
    slug: "clt-vs-concreto-armado-ciclo-de-vida",
    category: "Comparativos",
    title: "CLT vs concreto armado: ciclo de vida e custo total",
    excerpt:
      "Estudo de caso real com edifício de 5 pavimentos comparando emissão de CO2, prazo e custo final entregue.",
    date: "Fev 2025",
    readTime: "6 min",
    cover: project1,
    body: [
      {
        heading: "Custo total não é só custo estrutural",
        paragraphs: [
          "Comparar CLT e concreto armado apenas pelo preço por metro quadrado da estrutura deixa de fora uma parte relevante da decisão. Prazo, fundações, logística, desperdício, carbono incorporado e previsibilidade de montagem mudam bastante o resultado final.",
          "Em edifícios de múltiplos pavimentos, a redução de peso próprio pode simplificar fundações e diminuir interferências no canteiro, especialmente quando o projeto nasce com alto grau de pré-fabricação.",
        ],
      },
      {
        heading: "Onde a madeira ganha eficiência",
        paragraphs: [
          "O CLT tende a performar melhor quando arquitetura, estrutura, instalações e produção são compatibilizadas cedo. A repetição de módulos, a racionalização de painéis e a sequência de montagem precisam estar no centro da decisão.",
          "Quando essa coordenação acontece tarde, parte da vantagem industrializada da madeira se perde e o custo total fica menos competitivo.",
        ],
      },
      {
        heading: "Carbono, prazo e percepção de valor",
        paragraphs: [
          "A discussão ambiental não deve ser tratada como camada de marketing. Ela precisa entrar em inventário, rastreabilidade, origem certificada e estratégia de fim de vida.",
          "Ao mesmo tempo, o prazo menor de montagem pode antecipar receita e reduzir custos indiretos. Em muitos casos, esse efeito financeiro muda a comparação.",
        ],
      },
    ],
  },
  {
    slug: "grandes-vaos-glulam-protendido",
    category: "Casos de uso",
    title: "Vencendo grandes vãos com glulam protendido",
    excerpt:
      "Como dimensionamos um pavilhão de 28m de vão livre utilizando vigas glulam pós-tensionadas.",
    date: "Jan 2025",
    readTime: "8 min",
    cover: project5,
    body: [
      {
        heading: "Grandes vãos pedem controle de deformação",
        paragraphs: [
          "Grandes vãos em glulam dependem de uma leitura cuidadosa de flechas, vibração, estabilidade lateral, ligações e sequência de montagem. A beleza da peça aparente precisa vir acompanhada de uma engenharia bastante objetiva.",
          "A protensão pode ajudar a controlar deformações e ampliar possibilidades arquitetônicas, mas exige compatibilização fina entre cálculo, fabricação e execução.",
        ],
      },
      {
        heading: "Quando a protensão faz sentido",
        paragraphs: [
          "A solução tende a ser interessante quando o projeto precisa preservar vão livre, reduzir altura estrutural ou criar uma expressão material mais limpa do que alternativas metálicas convencionais.",
          "Ela também exige atenção especial a perdas de protensão, ancoragens, proteção dos elementos e inspeção ao longo da vida útil.",
        ],
      },
      {
        heading: "Projeto, fabricação e obra como uma sequência única",
        paragraphs: [
          "Nesse tipo de estrutura, separar projeto executivo, fabricação e montagem em etapas isoladas aumenta risco. As tolerâncias, o içamento, os apoios temporários e a ordem de protensão precisam ser pensados como uma sequência.",
          "O resultado é uma estrutura expressiva, leve e com forte presença material, sem abrir mão de desempenho técnico.",
        ],
      },
    ],
  },
];

export const featuredArticles = articles.slice(0, 3);

