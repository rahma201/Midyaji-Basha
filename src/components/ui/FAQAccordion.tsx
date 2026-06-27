'use client'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import type { FAQ } from '@/types'
import { HoverGlow } from '@/components/ui/HoverGlow'

interface FAQAccordionProps {
  items: FAQ[]
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <Accordion.Root type="single" collapsible className="space-y-3">
      {items.map((item, index) => (
        <HoverGlow key={index} className="rounded-xl">
        <Accordion.Item
          value={`item-${index}`}
          className="premium-hover-glow rounded-xl overflow-hidden"
          style={{ backgroundColor: '#1A1A1A', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <Accordion.Header>
            <Accordion.Trigger
              className="flex w-full items-center justify-between px-6 py-5 text-left text-sm font-semibold transition-all [&[data-state=open]>svg]:rotate-180 group hover:opacity-90"
              style={{ color: '#F8F6F1' }}
            >
              <span className="pr-4">{item.question}</span>
              <ChevronDown
                className="w-4 h-4 flex-shrink-0 transition-transform duration-200"
                style={{ color: '#B58B47' }}
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
            <div
              className="px-6 pb-5 text-sm leading-relaxed"
              style={{ color: '#9ca3af', borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              <p className="pt-4">{item.answer}</p>
            </div>
          </Accordion.Content>
        </Accordion.Item>
        </HoverGlow>
      ))}
    </Accordion.Root>
  )
}
