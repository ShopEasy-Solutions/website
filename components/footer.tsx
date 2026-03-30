import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  produto: [
    { label: "Serviços", href: "#servicos" },
    { label: "Preços", href: "#precos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "FAQ", href: "#faq" },
  ],
  servicos: [
    { label: "Sites", href: "#servicos" },
    { label: "Bots Discord", href: "#servicos" },
    { label: "Automações", href: "#servicos" },
    { label: "E-commerce", href: "#servicos" },
  ],
  suporte: [
    { label: "WhatsApp", href: "https://wa.me/5521989580068?text=Oi%2C%20vim%20pelo%20site%20da%20ShopEasy%20Solutions%20e%20preciso%20de%20suporte." },
    { label: "Discord", href: "https://shopeasy.site/discord" },
  ],
  legal: [
    { label: "Privacidade", href: "#" },
    { label: "Termos de Uso", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-6">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="mb-4 flex items-center gap-2">
                   <Image
                src="/shopeasy.svg"
                alt="ShopEasy"
                width={32}
                height={32}
              />
              <span className="text-lg font-semibold">ShopEasy Solutions</span>
            </Link>
            <p className="mb-4 max-w-xs text-sm text-muted-foreground">
              Transformando negócios digitais com sites, bots e automações inteligentes.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Produto</h4>
            <ul className="space-y-3">
              {footerLinks.produto.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Suporte</h4>
            <ul className="space-y-3">
              {footerLinks.suporte.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ShopEasy Solutions. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Feito com carinho no Brasil
          </p>
        </div>
      </div>
    </footer>
  )
}
