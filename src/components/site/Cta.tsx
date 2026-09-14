import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="border-t border-hairline bg-primary text-primary-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-end md:justify-between md:py-24">
        <div className="max-w-2xl">
          <p className="text-[0.6875rem] tracking-[0.24em] text-primary-foreground/60 uppercase">
            Contato
          </p>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl md:text-[2.75rem]">
            Vamos conversar sobre sua necessidade jurídica?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-primary-foreground/75">
            Entre em contato para solicitar informações e verificar a possibilidade de agendamento
            de uma consulta.
          </p>
        </div>
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="shrink-0 rounded-none px-8 tracking-wide"
        >
          <a href="#contato">Entrar em contato</a>
        </Button>
      </div>
    </section>
  );
}
