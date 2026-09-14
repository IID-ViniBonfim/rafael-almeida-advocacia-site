import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Sobre } from "@/components/site/Sobre";
import { Areas } from "@/components/site/Areas";
import { Diferenciais } from "@/components/site/Diferenciais";
import { ComoFunciona } from "@/components/site/ComoFunciona";
import { Faq } from "@/components/site/Faq";
import { Cta } from "@/components/site/Cta";
import { Contato } from "@/components/site/Contato";
import { Footer } from "@/components/site/Footer";

const TITLE = "Rafael Almeida Advocacia — Atuação jurídica estratégica";
const DESC =
  "Projeto demonstrativo de site para escritório de advocacia fictício: Direito Civil, Direito de Família e Direito Empresarial, com atendimento presencial e online.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Areas />
        <Diferenciais />
        <ComoFunciona />
        <Faq />
        <Cta />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}
