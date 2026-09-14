import { useState, type FormEvent } from "react";
import { Mail, MapPin, MessageCircle, Info, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Section } from "./Section";

type Campos = "nome" | "email" | "telefone" | "assunto" | "mensagem";
type Valores = Record<Campos, string>;

const VAZIO: Valores = { nome: "", email: "", telefone: "", assunto: "", mensagem: "" };

function validar(v: Valores) {
  const erros: Partial<Record<Campos, string>> = {};
  if (v.nome.trim().length < 2) erros.nome = "Informe seu nome.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) erros.email = "Informe um e-mail válido.";
  if (v.telefone.replace(/\D/g, "").length < 10) erros.telefone = "Informe um telefone válido.";
  if (v.assunto.trim().length < 3) erros.assunto = "Informe o assunto.";
  if (v.mensagem.trim().length < 10) erros.mensagem = "Descreva sua mensagem (mín. 10 caracteres).";
  return erros;
}

const CONTATOS = [
  { icon: MessageCircle, label: "WhatsApp", value: "[WHATSAPP]" },
  { icon: Mail, label: "E-mail", value: "[EMAIL]" },
  { icon: MapPin, label: "Endereço", value: "[ENDEREÇO]" },
];

export function Contato() {
  const [valores, setValores] = useState<Valores>(VAZIO);
  const [erros, setErros] = useState<Partial<Record<Campos, string>>>({});
  const [enviado, setEnviado] = useState(false);

  const set = (campo: Campos, valor: string) => {
    setValores((v) => ({ ...v, [campo]: valor }));
    if (erros[campo]) setErros((e) => ({ ...e, [campo]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const novosErros = validar(valores);
    setErros(novosErros);
    if (Object.keys(novosErros).length > 0) {
      setEnviado(false);
      return;
    }
    setEnviado(true);
    setValores(VAZIO);
  };

  const campoClasse = (campo: Campos) =>
    `mt-2 rounded-none border-hairline bg-card ${erros[campo] ? "border-destructive" : ""}`;

  return (
    <Section
      id="contato"
      eyebrow="Fale conosco"
      title="Contato"
      description="Preencha o formulário abaixo para solicitar informações."
    >
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <form onSubmit={onSubmit} noValidate className="border border-hairline bg-card p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <Label htmlFor="nome">Nome</Label>
              <Input
                id="nome"
                value={valores.nome}
                onChange={(e) => set("nome", e.target.value)}
                aria-invalid={!!erros.nome}
                aria-describedby={erros.nome ? "erro-nome" : undefined}
                className={campoClasse("nome")}
              />
              {erros.nome && (
                <p id="erro-nome" className="mt-2 text-xs text-destructive">
                  {erros.nome}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                value={valores.email}
                onChange={(e) => set("email", e.target.value)}
                aria-invalid={!!erros.email}
                aria-describedby={erros.email ? "erro-email" : undefined}
                className={campoClasse("email")}
              />
              {erros.email && (
                <p id="erro-email" className="mt-2 text-xs text-destructive">
                  {erros.email}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="telefone">Telefone</Label>
              <Input
                id="telefone"
                type="tel"
                value={valores.telefone}
                onChange={(e) => set("telefone", e.target.value)}
                aria-invalid={!!erros.telefone}
                aria-describedby={erros.telefone ? "erro-telefone" : undefined}
                className={campoClasse("telefone")}
              />
              {erros.telefone && (
                <p id="erro-telefone" className="mt-2 text-xs text-destructive">
                  {erros.telefone}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="assunto">Assunto</Label>
              <Input
                id="assunto"
                value={valores.assunto}
                onChange={(e) => set("assunto", e.target.value)}
                aria-invalid={!!erros.assunto}
                aria-describedby={erros.assunto ? "erro-assunto" : undefined}
                className={campoClasse("assunto")}
              />
              {erros.assunto && (
                <p id="erro-assunto" className="mt-2 text-xs text-destructive">
                  {erros.assunto}
                </p>
              )}
            </div>
          </div>

          <div className="mt-5">
            <Label htmlFor="mensagem">Mensagem</Label>
            <Textarea
              id="mensagem"
              rows={5}
              value={valores.mensagem}
              onChange={(e) => set("mensagem", e.target.value)}
              aria-invalid={!!erros.mensagem}
              aria-describedby={erros.mensagem ? "erro-mensagem" : undefined}
              className={campoClasse("mensagem")}
            />
            {erros.mensagem && (
              <p id="erro-mensagem" className="mt-2 text-xs text-destructive">
                {erros.mensagem}
              </p>
            )}
          </div>

          <Button type="submit" size="lg" className="mt-7 w-full rounded-none sm:w-auto sm:px-10">
            Enviar mensagem
          </Button>

          <p aria-live="polite">
            {enviado && (
              <span className="mt-5 flex items-start gap-2 border border-hairline bg-surface p-4 text-sm text-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                Formulário validado com sucesso. Nenhuma mensagem foi enviada: o envio real será
                configurado posteriormente.
              </span>
            )}
          </p>

          <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
            Demonstração visual: o formulário ainda não envia dados. A integração de envio será
            configurada posteriormente.
          </p>
        </form>

        <aside className="border border-hairline bg-surface p-6 sm:p-8">
          <p className="eyebrow">Canais de atendimento</p>
          <ul className="mt-6 space-y-6">
            {CONTATOS.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex items-start gap-3">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                <span>
                  <span className="block text-sm text-foreground">{label}</span>
                  <span className="block text-sm text-muted-foreground">{value}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-8 border-t border-hairline pt-6 text-xs leading-relaxed text-muted-foreground">
            Dados de contato são placeholders. Nenhum número, e-mail ou endereço real é apresentado
            nesta demonstração.
          </p>
        </aside>
      </div>
    </Section>
  );
}
