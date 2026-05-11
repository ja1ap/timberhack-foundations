import { useEffect, useState } from "react";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Vantagens", href: "/#vantagens" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Portfólio", href: "/#portfolio" },
  { label: "Diferenciais", href: "/#diferenciais" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Conteúdo", href: "/#conteudo" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-expo ${
        scrolled ? "bg-background/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-4">
        <a href="/#top" className="flex items-center gap-2">
          <Logo className="h-5 md:h-6 w-auto" />
        </a>
        <ul className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                  scrolled
                    ? "text-foreground/70 hover:text-foreground hover:bg-accent"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden lg:block">
          <a
            href="/#contato"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-deep transition-colors shadow-soft"
          >
            Fale com a gente
          </a>
        </div>
        <button
          className={`lg:hidden p-2 -mr-2 transition-colors ${
            scrolled ? "text-foreground" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container mx-auto py-4 flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-base font-medium text-foreground/80 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contato"
              onClick={() => setOpen(false)}
              className="mt-2 mx-4 px-5 py-3 rounded-full bg-primary text-primary-foreground text-center font-semibold"
            >
              Fale com a gente
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
