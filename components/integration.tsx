import Link from "next/link"
import { ArrowRight, Code2, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const techStack = [
  { name: "React", color: "bg-sky-500/10 text-sky-500 border-sky-500/20" },
  { name: "Next.js", color: "bg-neutral-500/10 text-neutral-400 border-neutral-500/20" },
  { name: "Node.js", color: "bg-green-500/10 text-green-500 border-green-500/20" },
  { name: "Discord.js", color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" },
  { name: "TypeScript", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
  { name: "Tailwind", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
]

export function Integration() {
  return (
    <section id="integracao" className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4 gap-2 rounded-full border-primary/30 bg-primary/5 px-4 py-1.5">
            <span className="text-sm">Integrações</span>
          </Badge>
          <h2 className="text-3xl font-bold md:text-4xl">
            Desenvolvemos com as melhores tecnologias
          </h2>
          <p className="mt-4 text-muted-foreground">
            Usamos as ferramentas mais modernas do mercado para entregar qualidade.
          </p>
        </div>

        {/* Tech stack badges */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          {techStack.map((tech) => (
            <Badge
              key={tech.name}
              variant="outline"
              className={`rounded-full px-4 py-2 text-sm font-medium ${tech.color}`}
            >
              {tech.name}
            </Badge>
          ))}
        </div>

        {/* Two cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Documentation card */}
          <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 card-glow md:p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Code2 className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Nosso Bot para Discord</h3>
            <p className="mb-6 text-muted-foreground">
              Conheça nosso bot principal que já automatiza centenas de servidores. 
              Vendas, tickets, moderação e muito mais em um só lugar.
            </p>
            <Button asChild variant="outline" className="gap-2">
              <Link href="https://shopeasy.site/" target="_blank">
                Conhecer bot
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Chat/Support card */}
          <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 card-glow md:p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Suporte Humanizado</h3>
            <p className="mb-6 text-muted-foreground">
              Fale diretamente com nossa equipe via Discord. Respondemos dúvidas, 
              ajudamos com integrações e garantimos que tudo funcione perfeitamente.
            </p>
        <Button asChild variant="outline" className="gap-2">
  <Link
    href="https://wa.me/5521989580068?text=Oi%2C%20vim%20pelo%20site%20da%20ShopEasy%20Solutions%20e%20preciso%20de%20suporte."
    target="_blank"
  >
    Falar com suporte
    <ArrowRight className="h-4 w-4" />
  </Link>
</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
