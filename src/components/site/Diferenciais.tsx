import { Handshake, Compass, MessageSquare, ShieldCheck } from "lucide-react";
import { Section } from "./Section";

const ITENS = [
  {
    icon: Handshake,
    title: "Atendimento próximo",
    text: "Cada cliente recebe atenção individualizada.",
  },
  {
    icon: Compass,
    title: "Estratégia jurídica",
    text: "Análise cuidadosa para identificar caminhos jurídicos adequados.",
  },
  {
    icon: MessageSquare,
    title: "Clareza",
    text: "Comunicação objetiva para facilitar a compreensão de cada etapa.",
  },
  {
    icon: ShieldCheck,
    title: "Confiança",
    text: "Relacionamento profissional baseado em transparência e responsabilidade.",
  },
];

export function Diferenciais() {
  return (
    <Section
      id="diferenciais"
      tone="surface"
      eyebrow="Diferenciais"
      title="Por que escolher nossa advocacia?"
    >
      <ul className="grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2">
        {ITENS.map(({ icon: Icon, title, text }) => (
          <li key={title} className="bg-card p-8 transition-colors duration-300 hover:bg-background">
            <Icon className="h-5 w-5 text-accent" aria-hidden />
            <h3 className="mt-5 text-xl">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
