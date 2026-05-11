import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articles } from "@/data/articles";

const BlogArticle = () => {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);
  const related = articles.filter((item) => item.slug !== slug).slice(0, 2);

  useEffect(() => {
    document.title = article
      ? `${article.title} | Timberhack`
      : "Artigo não encontrado | Timberhack";
  }, [article]);

  if (!article) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <section className="min-h-[70svh] flex items-center pt-28">
          <div className="container mx-auto max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Conteúdo técnico
            </span>
            <h1 className="mt-4 font-display text-4xl md:text-6xl font-semibold leading-tight">
              Artigo não encontrado.
            </h1>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              O texto pode ter sido movido ou ainda não foi publicado.
            </p>
            <Link
              to="/conteudo"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-deep transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para o blog
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <article>
        <header className="relative min-h-[72svh] flex items-end overflow-hidden surface-darker">
          <img
            src={article.cover}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-darker via-surface-darker/80 to-surface-darker/30" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />

          <div className="relative container mx-auto pt-32 pb-16 md:pb-24">
            <Link
              to="/conteudo"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para publicações
            </Link>

            <div className="mt-10 max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 text-xs text-white/70">
                <span className="rounded-full bg-white/10 px-3 py-1 font-medium text-white backdrop-blur-md">
                  {article.category}
                </span>
                <span>{article.date}</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> {article.readTime}
                </span>
              </div>
              <h1 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.02] text-balance">
                {article.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-white/70 leading-relaxed">
                {article.excerpt}
              </p>
            </div>
          </div>
        </header>

        <section className="py-16 md:py-24">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-28">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Artigo
                </div>
                <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <div>{article.category}</div>
                  <div>{article.date}</div>
                  <div>{article.readTime} de leitura</div>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-7">
              <div className="space-y-12">
                {article.body.map((section) => (
                  <section key={section.heading}>
                    <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
                      {section.heading}
                    </h2>
                    <div className="mt-5 space-y-5 text-lg leading-relaxed text-foreground/75">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-2">
              <div className="lg:sticky lg:top-28">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Leia também
                </div>
                <div className="mt-5 space-y-4">
                  {related.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/conteudo/${item.slug}`}
                      className="group block border-t border-border pt-4"
                    >
                      <span className="text-xs text-muted-foreground">
                        {item.category}
                      </span>
                      <h3 className="mt-2 font-display text-base font-semibold leading-tight group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                        Ler <ArrowUpRight className="h-3 w-3" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
};

export default BlogArticle;
