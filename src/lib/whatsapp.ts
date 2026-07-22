// Número do WhatsApp Business, em formato internacional (só dígitos).
export const WHATSAPP_NUMBER = "5511940453613";

// Como o número é exibido no site.
export const WHATSAPP_DISPLAY = "+55 (11) 94045-3613";

const DEFAULT_MESSAGE =
  "Olá! Vim pelo site da Timberhack e gostaria de falar sobre um projeto.";

export const whatsappLink = (message: string = DEFAULT_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
