import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { featuredArticles } from "@/data/articles";

const Content = () => (
  <section id="conteudo" className="py-24 md:py-36 bg-secondary/40">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            06 - Conteúdo técnico
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-balance leading-[1.05]">
            Conhecimento em circulação aberta.
          </h2>
        </div>
        <Link
          to="/conteudo"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
        >
          Ver todas as publicações <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {featuredArticles.map((article) => (
          <Link
            key={article.slug}
            to={`/conteudo/${article.slug}`}
            className="group overflow-hidden bg-card border border-border rounded-2xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-500 ease-expo text-left"
            aria-label={`Ler artigo: ${article.title}`}
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-muted">
              <img
                src={article.cover}
                alt={article.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-expo group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
              <span className="absolute left-5 top-5 px-3 py-1 text-xs font-medium rounded-full bg-white/90 text-accent-foreground backdrop-blur-md">
                {article.category}
              </span>
            </div>

            <div className="p-7 md:p-8">
              <div className="mb-5 text-xs text-muted-foreground">
                {article.date} · {article.readTime}
              </div>
              <h3 className="font-display text-xl md:text-2xl font-semibold leading-tight mb-4 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {article.excerpt}
              </p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Ler artigo <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Content;
