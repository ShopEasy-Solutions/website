import { Globe, Bot, Workflow, ShoppingCart, MessageSquare, BarChart3, Shield, Headphones } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Sites Profissionais",
    description: "Criamos sites modernos e responsivos que convertem visitantes em clientes, com design personalizado para seu negócio.",
  },
  {
    icon: Bot,
    title: "Bots para Discord",
    description: "Automatize seu servidor Discord com bots personalizados para moderação, vendas, tickets e muito mais.",
  },
  {
    icon: Workflow,
    title: "Automações",
    description: "Integre suas ferramentas e automatize processos repetitivos. Economize tempo e aumente a produtividade.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Lojas virtuais completas com carrinho, checkout seguro e integração com gateways de pagamento.",
  },
]

const features = [
  {
    icon: MessageSquare,
    title: "Suporte via Discord",
    description: "Canal exclusivo para clientes com resposta rápida.",
  },
  {
    icon: BarChart3,
    title: "Dashboard Analítico",
    description: "Acompanhe métricas e resultados em tempo real.",
  },
  {
    icon: Shield,
    title: "Código Seguro",
    description: "Desenvolvido com as melhores práticas de segurança.",
  },
  {
    icon: Headphones,
    title: "Suporte 24/7",
    description: "Estamos sempre disponíveis para ajudar você.",
  },
]

export function Features() {
  return (
    <section id="servicos" className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        {/* Services */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 card-glow md:p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-20">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Uma suite completa para seu negócio
            </h2>
            <p className="mt-4 text-muted-foreground">
              Tudo que você precisa para automatizar e escalar suas operações.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h4 className="mb-1 font-medium">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
