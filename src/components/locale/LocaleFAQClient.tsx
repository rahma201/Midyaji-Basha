'use client'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { HoverGlow } from '@/components/ui/HoverGlow'

interface FAQItem { q: string; a: string }

export function LocaleFAQClient({ items, isRTL }: { items: FAQItem[]; isRTL: boolean }) {
  const arabicFont: React.CSSProperties = isRTL ? { fontFamily: 'var(--font-arabic), sans-serif' } : {}
  return (
    <Accordion.Root type="single" collapsible className="space-y-3" dir={isRTL ? 'rtl' : 'ltr'}>
      {items.map((item, i) => (
        <HoverGlow key={i} className="rounded-xl">
        <Accordion.Item value={`faq-${i}`} className="premium-hover-glow rounded-xl overflow-hidden" style={{ backgroundColor: '#1A1A1A', border: '1px solid rgba(255,255,255,0.07)' }}>
          <Accordion.Header>
            <Accordion.Trigger className="faq-trigger flex w-full items-center px-6 py-5 text-sm font-semibold [&[data-state=open]>svg]:rotate-180 hover:opacity-80 focus-visible:outline-none" style={{ color: '#F8F6F1', ...arabicFont }}>
              <span className="faq-question">{item.q}</span>
              <ChevronDown className="w-4 h-4 flex-shrink-0 transition-transform duration-300" style={{ color: '#B58B47' }} aria-hidden="true" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
            <p className="faq-answer px-6 pb-5 pt-3 text-sm leading-relaxed" style={{ color: '#9ca3af', borderTop: '1px solid rgba(255,255,255,0.05)', ...arabicFont }}>{item.a}</p>
          </Accordion.Content>
        </Accordion.Item>
        </HoverGlow>
      ))}
    </Accordion.Root>
  )
}
