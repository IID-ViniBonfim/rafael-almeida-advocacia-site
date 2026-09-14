import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "./Section";

const PERGUNTAS = [
  {
    q: "Como funciona o primeiro atendimento?",
    a: "No primeiro contato, a pessoa interessada apresenta um resumo da sua situação e, a partir disso, é verificada a possibilidade de agendamento de uma conversa para entender melhor o contexto.",
  },
  {
    q: "É possível realizar atendimento online?",
    a: "Sim. Neste modelo demonstrativo, o atendimento pode ocorrer de forma presencial ou online, conforme a preferência e a disponibilidade das partes.",
  },
  {
    q: "Como posso solicitar uma consulta?",
    a: "Basta utilizar o formulário de contato desta página ou os canais indicados na seção de contato para solicitar informações sobre agendamento.",
  },
  {
    q: "Quais documentos devo apresentar?",
    a: "Os documentos variam conforme cada situação. De modo geral, é útil reunir os registros que você já possui sobre o assunto, que serão avaliados durante o atendimento.",
  },
  {
    q: "Como saber se meu caso está dentro das áreas de atuação?",
    a: "As áreas apresentadas nesta página são Direito Civil, Direito de Família e Direito Empresarial. Em caso de dúvida, o contato inicial serve justamente para verificar essa adequação.",
  },
];

export function Faq() {
  return (
    <Section
      id="faq"
      tone="surface"
      eyebrow="Dúvidas"
      title="Perguntas frequentes"
      description="Respostas demonstrativas, de caráter informativo. Este conteúdo não constitui orientação jurídica sobre um caso específico."
    >
      <Accordion type="single" collapsible className="w-full border-t border-hairline">
        {PERGUNTAS.map((item, i) => (
          <AccordionItem key={item.q} value={`item-${i}`} className="border-hairline">
            <AccordionTrigger className="py-6 text-left text-base hover:no-underline sm:text-lg">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="max-w-3xl pb-6 text-sm leading-relaxed text-muted-foreground">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
