type Contact = {
  id: string;
  label: string;
  href: string | null;
};

export const company = {
  name: "Спецтехника",
  region: "Москва и Московская область",
  contacts: [
    { id: "phone", label: "Телефон", href: null },
    { id: "telegram", label: "Telegram", href: null },
    { id: "max", label: "MAX", href: null },
    { id: "whatsapp", label: "WhatsApp", href: null },
  ],
} satisfies {
  name: string;
  region: string;
  contacts: Contact[];
};
