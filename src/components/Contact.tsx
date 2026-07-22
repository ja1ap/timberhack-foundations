import { useState } from "react";
import { MapPin, Send } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { z } from "zod";
import { toast } from "sonner";

const CONTACT_EMAIL = "murilo.negreli@gmail.com";
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("Informe um e-mail válido").max(160),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  type: z.string().min(1, "Selecione um tipo de projeto"),
  message: z
    .string()
    .trim()
    .min(1, "Conte um pouco sobre o projeto")
    .max(1000),
});

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const fd = new FormData(form);
    const data = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      company: String(fd.get("company") || ""),
      type: String(fd.get("type") || ""),
      message: String(fd.get("message") || ""),
    };

    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }

    const payload = new FormData();
    payload.append("Nome", parsed.data.name);
    payload.append("E-mail", parsed.data.email);
    payload.append("Empresa", parsed.data.company || "Não informado");
    payload.append("Tipo de projeto", parsed.data.type);
    payload.append("Mensagem", parsed.data.message);
    payload.append("_subject", "Nova mensagem pelo site Timberhack");
    payload.append("_template", "table");
    payload.append("_captcha", "false");
    payload.append("_honey", String(fd.get("_honey") || ""));
    payload.append("_replyto", parsed.data.email);

    setLoading(true);

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        body: payload,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("FormSubmit request failed");
      }

      const result = (await response.json()) as {
        success?: boolean | string;
        message?: string;
      };

      if (String(result.success) === "false") {
        toast.error(
          result.message?.includes("Activation")
            ? "Formulário aguardando ativação. Tente novamente mais tarde."
            : "Não foi possível enviar agora. Tente novamente em instantes.",
        );
        return;
      }

      toast.success("Mensagem enviada.");
      form.reset();
    } catch {
      toast.error(
        "Não foi possível enviar agora. Tente novamente em instantes.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              07 - Contato
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-balance leading-[1.05]">
              Vamos projetar a próxima estrutura.
            </h2>
            <p className="mt-6 text-base text-muted-foreground">
              Conte sobre seu projeto.
            </p>

            <div className="mt-10 space-y-5">
              {/* Número definitivo; quando o WhatsApp for ativado, transformar em link wa.me/5511940453613 */}
              <div className="flex items-center gap-4">
                <div className="h-11 w-11 rounded-xl bg-accent text-primary flex items-center justify-center">
                  <WhatsAppIcon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">WhatsApp</div>
                  <div className="font-medium">+55 (11) 94045-3613</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-11 w-11 rounded-xl bg-accent text-primary flex items-center justify-center">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Sede</div>
                  <div className="font-medium">São Paulo, Brasil</div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="lg:col-span-7 bg-card border border-border rounded-3xl p-8 md:p-10 shadow-soft"
          >
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-semibold text-foreground mb-2 block">
                  Nome *
                </label>
                <input
                  name="name"
                  required
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-foreground mb-2 block">
                  E-mail *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  maxLength={160}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="text-xs font-semibold text-foreground mb-2 block">
                Empresa
              </label>
              <input
                name="company"
                maxLength={120}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                placeholder="Empresa ou escritório"
              />
            </div>

            <div className="mt-5">
              <label className="text-xs font-semibold text-foreground mb-2 block">
                Tipo de projeto *
              </label>
              <select
                name="type"
                required
                defaultValue=""
                className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
              >
                <option value="" disabled>
                  Selecione...
                </option>
                <option value="Residencial">Residencial</option>
                <option value="Comercial / Corporativo">
                  Comercial / Corporativo
                </option>
                <option value="Público / Institucional">
                  Público / Institucional
                </option>
                <option value="Industrial / Logístico">
                  Industrial / Logístico
                </option>
                <option value="Consultoria técnica">Consultoria técnica</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <div className="mt-5">
              <label className="text-xs font-semibold text-foreground mb-2 block">
                Mensagem *
              </label>
              <textarea
                name="message"
                required
                rows={5}
                maxLength={1000}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
                placeholder="Conte sobre área, tipologia, prazos e objetivos do projeto..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full md:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary-deep transition-colors shadow-brand disabled:opacity-60"
            >
              {loading ? "Enviando..." : "Enviar mensagem"}
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
