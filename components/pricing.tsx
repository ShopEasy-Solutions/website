"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Pricing() {
  return (
    <section id="precos" className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4 gap-2 rounded-full border-primary/30 bg-primary/5 px-4 py-1.5">
            <span className="text-sm">Preços</span>
          </Badge>
          <h2 className="text-3xl font-bold md:text-4xl">
            Soluções personalizadas para seu negócio
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cada projeto é único. Vamos entender suas necessidades e criar a solução perfeita.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card">
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-16">
            <div className="mx-auto max-w-3xl">
              <div className="mb-6 sm:mb-8">
                <span className="inline-block text-primary/80 text-xs sm:text-sm font-medium tracking-wider">PREÇO PERSONALIZADO</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-3 sm:mb-4 leading-tight">
                Feito sob medida para você
              </h3>

              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 sm:mb-10 md:mb-12 leading-relaxed">
                Não acreditamos em planos genéricos. Cada projeto é único, por isso desenvolvemos soluções completamente personalizadas que se encaixam perfeitamente nas suas necessidades.
              </p>

              <div className="grid gap-6 sm:grid-cols-3 mb-10 md:mb-12">
                <div className="flex flex-col gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-medium">Análise profunda</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Entendemos seus objetivos antes de qualquer proposta</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-medium">Transparência total</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">O valor reflete a complexidade e escopo do seu projeto</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-medium">Qualidade garantida</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Investimento em uma solução que cresce com seu negócio</p>
                  </div>
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto gap-2 rounded-full"
              >
              <Link
  href="https://wa.me/5521989580068?text=Oi%2C%20vim%20pelo%20site%20da%20ShopEasy%20Solutions%20e%20gostaria%20de%20um%20or%C3%A7amento."
  target="_blank"
>
  Solicitar Orçamento
  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Info box */}
        <div className="mt-12 rounded-2xl border border-border bg-card p-6 md:p-8">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <h3 className="text-xl font-semibold">Quer saber mais sobre nossos serviços?</h3>
              <p className="mt-2 text-muted-foreground">Entre em contato conosco para uma consulta gratuita e descubra como podemos ajudar seu negócio a crescer.</p>
            </div>
            <Button asChild variant="outline" className="shrink-0 gap-2 rounded-full">
              <Link href="#depoimentos">
                Ver depoimentos
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
