import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-16">
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[400px] w-[400px] rounded-full glow-green opacity-30" />
          </div>

          <div className="relative text-center">
            <h2 className="text-2xl font-bold md:text-4xl lg:text-5xl">
              Você chegou no fim da página.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground md:text-lg">
              Se chegou até aqui, é porque está interessado. Então vai lá, faz logo o cadastro.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="gap-2 rounded-full px-8">
                <Link href="https://wa.me/5521989580068?text=Oi%2C%20vim%20pelo%20site%20da%20ShopEasy%20Solutions%20e%20quero%20saber%20mais." target="_blank">
                  Vai, clica nesse botão
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
