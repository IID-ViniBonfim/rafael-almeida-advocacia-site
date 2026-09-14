import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { DemoBadge } from "@/components/site/DemoBadge";

const TITLE = "Política de Privacidade — Rafael Almeida Advocacia";
const DESC =
  "Modelo demonstrativo de política de privacidade para o site fictício Rafael Almeida Advocacia.";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacidade" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacidade" }],
  }),
  component: Privacidade,
});

function Privacidade() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto w-full max-w-3xl px-6 py-20">
        <DemoBadge />
        <h1 className="mt-6 text-4xl leading-tight sm:text-5xl">Política de Privacidade</h1>
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            Este texto é um modelo demonstrativo, criado apenas para ilustrar a estrutura de uma
            página de política de privacidade. Ele não possui validade jurídica e deve ser
            substituído por um documento elaborado para o caso concreto.
          </p>
          <h2 className="text-2xl text-foreground">Dados coletados</h2>
          <p>
            O formulário de contato desta demonstração não envia nem armazena dados. Quando a
            integração de envio for configurada, esta seção deverá descrever quais informações são
            coletadas e com qual finalidade.
          </p>
          <h2 className="text-2xl text-foreground">Uso das informações</h2>
          <p>
            Espaço reservado para descrever como eventuais informações fornecidas seriam utilizadas,
            por quanto tempo seriam mantidas e com quem poderiam ser compartilhadas.
          </p>
          <h2 className="text-2xl text-foreground">Direitos do titular</h2>
          <p>
            Espaço reservado para descrever os direitos previstos na legislação aplicável e os
            canais para exercê-los.
          </p>
          <h2 className="text-2xl text-foreground">Contato</h2>
          <p>Responsável: [NOME] — E-mail: [EMAIL] — Telefone: [WHATSAPP].</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
