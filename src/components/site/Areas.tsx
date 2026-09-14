import { useState } from "react";
import { Scale, Users, Building2, Plus, Minus } from "lucide-react";
import { Section } from "./Section";

const AREAS = [
  {
    icon: Scale,
    title: "Direito Civil",
    description:
      "Atuação em questões relacionadas às relações civis, contratos, obrigações e demais demandas da área.",
    detail:
      "Exemplo demonstrativo de escopo: análise de contratos, orientação sobre obrigações e acompanhamento de demandas civis, sempre a partir da avaliação individual de cada situação.",
  },
  {
    icon: Users,
    title: "Direito de Família",
    description:
      "Orientação jurídica em questões relacionadas às relações familiares e patrimoniais.",
    detail:
      "Exemplo demonstrativo de escopo: orientação sobre organização familiar e patrimonial, com comunicação clara sobre as etapas e alternativas possíveis.",
  },
  {
    icon: Building2,
    title: "Direito Empresarial",
    description: "Assessoria jurídica para empresas e empreendedores em suas necessidades jurídicas.",
    detail:
      "Exemplo demonstrativo de escopo: apoio jurídico a empresas e empreendedores em rotinas contratuais e organizacionais, conforme o contexto de cada negócio.",
  },
];

export function Areas() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section
      id="areas"
      eyebrow="Atuação"
      title="Áreas de atuação"
      description="Descrições demonstrativas das áreas apresentadas neste modelo de site."
    >
      <ul className="grid gap-6 md:grid-cols-3">
        {AREAS.map((area, index) => {
          const Icon = area.icon;
          const open = openIndex === index;
          return (
            <li
              key={area.title}
              className="flex flex-col border border-hairline bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <Icon className="h-6 w-6 text-accent" aria-hidden />
              <h3 className="mt-6 text-2xl">{area.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {area.description}
              </p>

              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : index)}
                aria-expanded={open}
                aria-controls={`area-detalhe-${index}`}
                className="mt-6 inline-flex items-center gap-2 self-start border-b border-accent/50 pb-1 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                {open ? (
                  <Minus className="h-4 w-4" aria-hidden />
                ) : (
                  <Plus className="h-4 w-4" aria-hidden />
                )}
                {open ? "Fechar" : "Saiba mais"}
              </button>

              <div
                id={`area-detalhe-${index}`}
                hidden={!open}
                className="mt-5 border-l-2 border-accent/40 pl-4 text-sm leading-relaxed text-muted-foreground"
              >
                {area.detail}
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
