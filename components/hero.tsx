import Link from "next/link"
import { ArrowRight, Sparkles, Zap, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full glow-green-lg opacity-50" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <Badge variant="outline" className="mb-6 gap-2 rounded-full border-primary/30 bg-primary/5 px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-sm">Escolhido por +100 empresas</span>
          </Badge>

          {/* Headline */}
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl">
            Automatize fácil.{" "}
            <span className="text-gradient">Cresça rápido.</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground text-balance md:text-xl">
            Sites profissionais, bots para Discord e automações inteligentes. 
            Feito para empreendedores que querem escalar.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2 rounded-full px-8">
              <Link href="https://wa.me/5521989580068?text=Oi%2C%20vim%20pelo%20site%20da%20ShopEasy%20Solutions%20e%20quero%20saber%20mais." target="_blank">
                Começar agora
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 rounded-full px-8">
              <Link href="#servicos">
                Ver serviços
              </Link>
            </Button>
          </div>

          {/* Quick stats */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-sm font-medium">Rápido</div>
                <div className="text-xs text-muted-foreground">Entrega em dias</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-sm font-medium">Seguro</div>
                <div className="text-xs text-muted-foreground">Código de qualidade</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-sm font-medium">Suporte</div>
                <div className="text-xs text-muted-foreground">Sempre disponível</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
