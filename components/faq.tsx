"use client"

import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "O que é a ShopEasy Solutions e para quem ela serve?",
    answer: "A ShopEasy Solutions é uma empresa especializada em desenvolvimento de sites, bots para Discord e automações para negócios digitais. Atendemos desde empreendedores individuais até empresas de médio porte que querem automatizar processos e escalar suas operações.",
  },
  {
    question: "Quanto tempo leva para desenvolver um projeto?",
    answer: "O prazo varia conforme a complexidade. Bots simples ficam prontos em 3-5 dias, sites institucionais em 7-14 dias, e projetos mais complexos como e-commerces podem levar 30-60 dias. Sempre informamos prazos realistas e cumprimos o combinado.",
  },
  {
    question: "Vocês oferecem suporte após a entrega?",
    answer: "Sim! Todos os planos incluem um período de suporte e atualizações. O plano Starter tem 3 meses, Professional 6 meses, e Enterprise atualizações vitalícias. Além disso, temos suporte via Discord para tirar dúvidas.",
  },
  {
    question: "O bot funciona com o ShopEasy que vocês já têm?",
    answer: "Sim! Nosso bot principal (shopeasy.site) pode ser integrado aos projetos que desenvolvemos. Ele já possui funcionalidades de vendas, tickets, moderação e muito mais. Também criamos bots personalizados do zero conforme sua necessidade.",
  },
  {
    question: "Posso solicitar alterações após a entrega?",
    answer: "Claro! Durante o período de suporte incluso no seu plano, você pode solicitar ajustes e melhorias. Alterações maiores que fogem do escopo original são orçadas separadamente com desconto especial para clientes.",
  },
  {
    question: "Vocês fazem integrações com outras plataformas?",
    answer: "Sim! Integramos com Stripe, Mercado Pago, PagSeguro, APIs de redes sociais, Google Analytics, Discord, Telegram, e muito mais. Se precisar de uma integração específica, entre em contato que avaliamos a viabilidade.",
  },
  {
    question: "Qual é a garantia oferecida?",
    answer: "Oferecemos garantia de satisfação em todos os projetos. Se algo não funcionar como o combinado, corrigimos sem custo adicional. Para planos Enterprise, temos SLA garantido de 99.9% de uptime.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4 gap-2 rounded-full border-primary/30 bg-primary/5 px-4 py-1.5">
            <span className="text-sm">Suporte</span>
          </Badge>
          <h2 className="text-3xl font-bold md:text-4xl">
            Tem dúvidas? Relaxa, nós temos as respostas.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Selecionamos algumas dúvidas que recebemos com frequência sobre nossos serviços.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-border bg-card px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="py-5 text-left hover:no-underline">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
