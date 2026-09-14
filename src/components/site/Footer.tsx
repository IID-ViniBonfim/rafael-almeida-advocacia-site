import { Link, useRouterState } from "@tanstack/react-router";

const LINKS = [
  { label: "Início", hash: "#inicio" },
  { label: "Sobre", hash: "#sobre" },
  { label: "Áreas de Atuação", hash: "#areas" },
  { label: "FAQ", hash: "#faq" },
  { label: "Contato", hash: "#contato" },
];

export function Footer() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const href = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <footer className="border-t border-hairline bg-surface">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-lg tracking-[0.22em]">RAFAEL ALMEIDA</p>
          <p className="mt-1 text-[0.625rem] tracking-[0.42em] text-accent">ADVOCACIA</p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Conteúdo demonstrativo — escritório fictício. Este site é uma peça de demonstração
            visual e não representa um escritório ou profissional real.
          </p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <p className="eyebrow">Navegação</p>
          <ul className="mt-5 space-y-3 text-sm">
            {LINKS.map((item) => (
              <li key={item.hash}>
                <a
                  href={href(item.hash)}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/privacidade"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Política de Privacidade
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <p className="eyebrow">Informações</p>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>WhatsApp: [WHATSAPP]</li>
            <li>E-mail: [EMAIL]</li>
            <li>Endereço: [ENDEREÇO]</li>
            <li>OAB/UF: [NÚMERO]</li>
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
            Espaço reservado para informação profissional e registro na OAB.
          </p>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Rafael Almeida Advocacia (fictício).</p>
          <p>Projeto demonstrativo — sem vínculo com pessoas ou empresas reais.</p>
        </div>
      </div>
    </footer>
  );
}
