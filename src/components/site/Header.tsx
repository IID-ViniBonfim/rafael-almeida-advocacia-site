import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV = [
  { label: "Início", hash: "#inicio" },
  { label: "Sobre", hash: "#sobre" },
  { label: "Áreas de Atuação", hash: "#areas" },
  { label: "Diferenciais", hash: "#diferenciais" },
  { label: "FAQ", hash: "#faq" },
  { label: "Contato", hash: "#contato" },
];

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const href = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-hairline bg-background/90 backdrop-blur-md"
          : "border-transparent bg-background"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="leading-none" aria-label="Rafael Almeida Advocacia — início">
          <span className="block font-display text-lg tracking-[0.22em] text-foreground">
            RAFAEL ALMEIDA
          </span>
          <span className="mt-1 block text-[0.625rem] tracking-[0.42em] text-accent">ADVOCACIA</span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.hash}
              href={href(item.hash)}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="sm" className="rounded-none px-5 tracking-wide">
            <a href={href("#contato")}>Agendar consulta</a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-hairline text-foreground transition-colors hover:bg-surface lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="menu-mobile"
        hidden={!open}
        className="border-t border-hairline bg-background lg:hidden"
      >
        <nav aria-label="Navegação mobile" className="mx-auto max-w-6xl px-6 py-4">
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.hash} className="border-b border-hairline/70 last:border-0">
                <a
                  href={href(item.hash)}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild className="mt-5 w-full rounded-none">
            <a href={href("#contato")} onClick={() => setOpen(false)}>
              Agendar consulta
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
