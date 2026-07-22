import Logo from "./Logo";
import { WHATSAPP_DISPLAY, whatsappLink } from "@/lib/whatsapp";

const base = import.meta.env.BASE_URL;

const Footer = () => (
  <footer className="surface-darker text-white/70 pt-20 pb-10">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
        <div className="md:col-span-2">
          <Logo className="h-8 w-auto mb-6" />
          <p className="text-sm max-w-sm text-white/60 leading-relaxed">
            Engenharia estrutural especializada em madeira.
          </p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
            Navegação
          </div>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={`${base}#vantagens`} className="hover:text-white transition-colors">
                Vantagens
              </a>
            </li>
            <li>
              <a href={`${base}#servicos`} className="hover:text-white transition-colors">
                Serviços
              </a>
            </li>
            <li>
              <a href={`${base}#portfolio`} className="hover:text-white transition-colors">
                Portfólio
              </a>
            </li>
            <li>
              <a href={`${base}#sobre`} className="hover:text-white transition-colors">
                Sobre
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
            Contato
          </div>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>São Paulo, Brasil</li>
          </ul>
        </div>
      </div>
      <div className="pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/40">
        <div>
          © {new Date().getFullYear()} Timberhack - Engenharia em madeira
          estrutural.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
