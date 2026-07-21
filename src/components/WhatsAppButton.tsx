import { useEffect, useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";

// Número do WhatsApp Business em formato internacional, apenas dígitos
// (ex.: "5541999999999"). Enquanto estiver vazio, o botão leva à seção
// de contato; ao preencher, passa a abrir a conversa no WhatsApp.
const WHATSAPP_NUMBER = "";
const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da Timberhack e gostaria de falar sobre um projeto.";

const WhatsAppButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("top");
      const threshold = hero
        ? hero.offsetTop + hero.offsetHeight - 120
        : window.innerHeight * 0.9;
      setVisible(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const href = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
    : "#contato";

  return (
    <a
      href={href}
      {...(WHATSAPP_NUMBER
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      aria-label="Conversar no WhatsApp"
      title="Conversar no WhatsApp"
      className={`fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg transition-all duration-300 ease-expo hover:bg-[#1EBE57] hover:scale-110 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
};

export default WhatsAppButton;
