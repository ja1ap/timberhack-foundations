import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock, Newspaper } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articles } from "@/data/articles";

const Blog = () => {
  const featured = articles[0];
  const remaining = articles.slice(1);

  useEffect(() => {
    document.title = "Conteúdo técnico | Timberhack";
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="relative min-h-[68svh] flex items-end overflow-hidden surface-darker">
        <img
          src={featured.cover}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-darker via-surface-darker/80 to-surface-darker/35" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />

        <div className="relative container mx-auto pt-32 pb-16 md:pb-24">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-md">
              <Newspaper className="h-3.5 w-3.5 text-primary-glow" />
              Conteúdo técnico Timberhack
            </span>
            <h1 className="mt-8 font-display text-5xl md:text-7xl font-semibold text-white leading-[0.98] text-balance">
              Biblioteca técnica para construir melhor em madeira.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/70 leading-relaxed">
              Artigos sobre normas, sistemas estruturais, custo total,
              desempenho e decisões de projeto em madeira engenheirada.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <Link
              to={`/conteudo/${featured.slug}`}
              className="group lg:col-span-7 overflow-hidden rounded-2xl bg-card border border-border shadow-soft hover:border-primary/40 transition-all duration-500 ease-expo"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={featured.cover}
                  alt={featured.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-expo group-hover:scale-105"
                />
                <div className="absolute left-5 top-5 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-primary backdrop-blur-md">
                  Destaque
                </div>
              </div>
              <div className="p-7 md:p-8">
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="rounded-full bg-accent px-3 py-1 font-medium text-accent-foreground">
                    {featured.category}
                  </span>
                  <span>{featured.date}</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {featured.readTime}
                  </span>
                </div>
                <h2 className="mt-5 font-display text-3xl md:text-4xl font-semibold leading-tight group-hover:text-primary transition-colors">
                  {featured.title}
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {featured.excerpt}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Ler artigo <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </Link>

            <div className="lg:col-span-5 flex flex-col gap-5">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Publicações recentes
                </span>
                <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold leading-tight">
                  Escolha o próximo texto.
                </h2>
              </div>

              {remaining.map((article) => (
                <Link
                  key={article.slug}
                  to={`/conteudo/${article.slug}`}
                  className="group grid grid-cols-[112px_1fr] gap-5 rounded-2xl border border-border bg-card p-4 hover:border-primary/40 transition-all duration-500 ease-expo"
                >
                  <div className="aspect-square overflow-hidden rounded-xl bg-muted">
                    <img
                      src={article.cover}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-expo group-hover:scale-105"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      <span>{article.category}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="mt-2 font-display text-xl font-semibold leading-tight group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
            {articles.map((article) => (
              <Link
                key={article.slug}
                to={`/conteudo/${article.slug}`}
                className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:-translate-y-1 transition-all duration-500 ease-expo"
              >
                <span className="text-xs font-medium text-primary">
                  {article.category}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold leading-tight group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;
