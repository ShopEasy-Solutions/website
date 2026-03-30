import { Badge } from "@/components/ui/badge"

const testimonials = [
  {
    name: "Lucas Silva",
    handle: "@lucassilvadev",
    content: "O bot da ShopEasy transformou meu servidor. As vendas automatizadas funcionam perfeitamente e o suporte é incrível!",
  },
  {
    name: "Ana Martins",
    handle: "@anamartins_",
    content: "Contratei o site e o bot juntos. Melhor decisão que tomei para meu negócio. Profissionalismo total.",
  },
  {
    name: "Pedro Costa",
    handle: "@pedrocosta",
    content: "Nunca vi uma entrega tão rápida. Em 3 dias meu e-commerce estava funcionando perfeitamente. Recomendo demais!",
  },
  {
    name: "Mariana Oliveira",
    handle: "@marioliv",
    content: "A automação de tickets salvou minha vida. Agora consigo gerenciar tudo pelo Discord sem estresse.",
  },
  {
    name: "Rafael Santos",
    handle: "@rafsantos_",
    content: "Preço justo e qualidade excepcional. O dashboard que eles criaram é simplesmente perfeito.",
  },
  {
    name: "Juliana Ferreira",
    handle: "@juferreira",
    content: "O suporte da ShopEasy é outro nível. Respondem rápido e resolvem tudo. Vale cada centavo investido!",
  },
  {
    name: "Gabriel Rocha",
    handle: "@gabrielrocha",
    content: "Meu servidor cresceu 300% depois do bot. As features de engajamento são muito boas.",
  },
  {
    name: "Beatriz Lima",
    handle: "@bialima_",
    content: "Terceiro projeto que faço com eles. Sempre entregam além do esperado. Parceria de confiança!",
  },
]

export function Testimonials() {
  // Duplicate for infinite scroll effect
  const allTestimonials = [...testimonials, ...testimonials]

  return (
    <section id="depoimentos" className="overflow-hidden py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4 gap-2 rounded-full border-primary/30 bg-primary/5 px-4 py-1.5">
            <span className="text-sm">Depoimentos</span>
          </Badge>
          <h2 className="text-3xl font-bold md:text-4xl">
            Histórias reais de quem usa ShopEasy
          </h2>
          <p className="mt-4 text-muted-foreground">
            Veja o que nossos clientes falam sobre nossos serviços.
          </p>
        </div>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Gradient overlays */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />

        {/* First row */}
        <div className="mb-4 flex animate-marquee">
          {allTestimonials.map((testimonial, index) => (
            <div
              key={`row1-${index}`}
              className="mx-2 w-[350px] shrink-0 rounded-xl border border-border bg-card p-5"
            >
              <p className="mb-4 text-sm">{testimonial.content}</p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-medium">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.handle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second row - reversed */}
        <div className="flex animate-marquee" style={{ animationDirection: "reverse", animationDuration: "35s" }}>
          {[...allTestimonials].reverse().map((testimonial, index) => (
            <div
              key={`row2-${index}`}
              className="mx-2 w-[350px] shrink-0 rounded-xl border border-border bg-card p-5"
            >
              <p className="mb-4 text-sm">{testimonial.content}</p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-medium">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.handle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
