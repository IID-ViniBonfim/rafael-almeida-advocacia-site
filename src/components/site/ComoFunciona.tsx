import { Section } from "./Section";

const ETAPAS = [
  {
    numero: "01",
    titulo: "Primeiro contato",
    texto: "O cliente apresenta sua situação e agenda uma conversa.",
  },
  {
    numero: "02",
    titulo: "Análise",
    texto: "As informações são avaliadas para compreender o contexto e as necessidades jurídicas.",
  },
  {
    numero: "03",
    titulo: "Estratégia",
    texto: "São discutidos os possíveis caminhos e próximos passos.",
  },
];

export function ComoFunciona() {
  return (
    <Section id="como-funciona" eyebrow="Processo" title="Como funciona">
      <ol className="relative grid gap-10 md:grid-cols-3">
        <div aria-hidden className="absolute top-3 right-0 left-0 hidden h-px bg-hairline md:block" />
        {ETAPAS.map((etapa) => (
          <li key={etapa.numero} className="relative">
            <span aria-hidden className="relative block h-1.5 w-1.5 rounded-full bg-accent" />
            <p className="mt-6 font-display text-3xl text-muted-foreground">{etapa.numero}</p>
            <h3 className="mt-2 text-2xl">{etapa.titulo}</h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {etapa.texto}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
