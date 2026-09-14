import { UserRound, Search, Laptop, ImageIcon } from "lucide-react";
import { Section } from "./Section";
import { DemoBadge } from "./DemoBadge";
import sobreImg from "@/assets/sobre-escritorio.jpg";

const INDICADORES = [
  { icon: UserRound, label: "Atendimento personalizado" },
  { icon: Search, label: "Análise individualizada" },
  { icon: Laptop, label: "Atendimento presencial e online" },
];

export function Sobre() {
  return (
    <Section id="sobre" tone="surface">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="order-2 lg:order-1">
          <div className="relative">
            <img
              src={sobreImg}
              alt="Mesa de trabalho sóbria com livro e óculos, em tons neutros"
              loading="lazy"
              width={1008}
              height={1200}
              className="h-[320px] w-full object-cover shadow-soft sm:h-[440px]"
            />
          </div>
          <div className="mt-4 flex items-start gap-3 border border-dashed border-hairline bg-background p-4">
            <ImageIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
            <p className="text-xs leading-relaxed text-muted-foreground">
              Espaço reservado para a futura foto profissional do advogado. Nenhuma imagem de pessoa
              real é utilizada nesta demonstração.
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <DemoBadge />
          <p className="eyebrow mt-6">Sobre o escritório</p>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl md:text-[2.75rem]">
            Advocacia com estratégia e proximidade.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Rafael Almeida Advocacia foi concebido para oferecer uma experiência jurídica baseada em
            atendimento próximo, análise cuidadosa e estratégias desenvolvidas de acordo com as
            particularidades de cada situação.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Texto demonstrativo. Escritório e profissional fictícios, criados apenas para
            apresentação visual deste modelo de site.
          </p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {INDICADORES.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="border border-hairline bg-card p-5 transition-shadow duration-300 hover:shadow-soft"
              >
                <Icon className="h-5 w-5 text-accent" aria-hidden />
                <p className="mt-3 text-sm leading-snug text-foreground">{label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
