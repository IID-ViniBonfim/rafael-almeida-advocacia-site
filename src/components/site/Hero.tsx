import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoBadge } from "./DemoBadge";
import heroImg from "@/assets/hero-composicao.jpg";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="mx-auto grid w-full max-w-6xl gap-14 px-6 pt-16 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-24 lg:pb-28">
        <div className="reveal">
          <DemoBadge />
          <h1 className="mt-7 text-4xl leading-[1.08] sm:text-5xl md:text-6xl">
            Atuação jurídica estratégica para decisões que importam.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Orientação jurídica personalizada, com atendimento próximo e estratégia adequada às
            necessidades de cada caso.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-none px-7 tracking-wide">
              <a href="#contato">Agendar consulta</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="group rounded-none border-hairline px-7 tracking-wide"
            >
              <a href="#areas">
                Conheça nossa atuação
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-accent" aria-hidden />
            Atendimento presencial e online
          </p>
        </div>

        <div className="reveal relative" style={{ animationDelay: "120ms" }}>
          <div
            aria-hidden
            className="absolute -top-5 -left-5 hidden h-28 w-28 border-t border-l border-accent/40 lg:block"
          />
          <img
            src={heroImg}
            alt="Composição arquitetônica abstrata em tons claros, representando sobriedade e equilíbrio"
            width={1200}
            height={1504}
            className="relative h-[380px] w-full object-cover shadow-soft sm:h-[520px] lg:h-[620px]"
          />
          <div
            aria-hidden
            className="absolute -right-5 -bottom-5 hidden h-28 w-28 border-r border-b border-accent/40 lg:block"
          />
        </div>
      </div>
    </section>
  );
}
