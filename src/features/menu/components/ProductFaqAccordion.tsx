import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import type { FAQ } from '@/types'
import type React from 'react'

interface Props {
  faqs: FAQ[]
  isRTL: boolean
  arabicFont: React.CSSProperties
}

export function ProductFaqAccordion({ faqs, isRTL, arabicFont }: Props) {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className="space-y-3"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {faqs.map((faq, i) => (
        <Accordion.Item
          key={i}
          value={`faq-${i}`}
          className="rounded-xl overflow-hidden"
          style={{
            backgroundColor: '#1A1A1A',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <Accordion.Header>
            <Accordion.Trigger
              className="faq-trigger flex w-full items-center px-6 py-4 text-sm font-semibold [&[data-state=open]>svg]:rotate-180 hover:opacity-80 focus-visible:outline-none"
              style={{ color: '#F8F6F1', ...arabicFont }}
            >
              <span className="faq-question">{faq.question}</span>
              <ChevronDown
                className="w-4 h-4 flex-shrink-0 transition-transform duration-300"
                style={{ color: '#B58B47' }}
                aria-hidden="true"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
            <p
              className="faq-answer px-6 pb-4 pt-2 text-sm leading-relaxed"
              style={{ color: '#9ca3af', ...arabicFont }}
            >
              {faq.answer}
            </p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
