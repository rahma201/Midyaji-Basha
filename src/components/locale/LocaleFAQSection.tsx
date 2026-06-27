'use client'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { Reveal, Stagger, staggerItem } from '@/components/ui/Reveal'
import type { Dictionary } from '@/lib/i18n/en'
import { HoverGlow } from '@/components/ui/HoverGlow'

export function LocaleFAQSection({ dict, locale }: { dict: Dictionary; locale: string }) {
  const isRTL = locale === 'ar'
  const arabicFont: React.CSSProperties = isRTL ? { fontFamily: 'var(--font-arabic), sans-serif' } : {}
  const headingFont: React.CSSProperties = isRTL ? { fontFamily: 'var(--font-arabic), sans-serif' } : { fontFamily: 'var(--font-playfair), serif' }

  return (
    <section className="py-28 px-4" style={{ backgroundColor: '#1A1A1A' }} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Reveal delay={0.05}><span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] mb-4" style={{ color: '#B58B47', ...arabicFont }}>{dict.faq.badge}</span></Reveal>
          <Reveal delay={0.15}>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#F8F6F1', ...headingFont }}>{dict.faq.title}</h2>
            <p className="mt-4 text-lg" style={{ color: '#9ca3af', ...arabicFont }}>{dict.faq.subtitle}</p>
          </Reveal>
        </div>
        <Stagger stagger={0.06} delay={0.1}>
          <Accordion.Root type="single" collapsible className="space-y-3" dir={isRTL ? 'rtl' : 'ltr'}>
            {dict.faq.items.map((item, i) => (
              <motion.div key={i} variants={staggerItem}>
                <HoverGlow className="rounded-xl">
                <Accordion.Item value={`item-${i}`} className="premium-hover-glow rounded-xl overflow-hidden" style={{ backgroundColor: '#0D0D0D', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <Accordion.Header>
                    <Accordion.Trigger className="faq-trigger flex w-full items-center px-6 py-5 text-sm font-semibold transition-all [&[data-state=open]>svg]:rotate-180 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58B47]" style={{ color: '#F8F6F1', ...arabicFont }}>
                      <span className="faq-question">{item.q}</span>
                      <ChevronDown className="w-4 h-4 flex-shrink-0 transition-transform duration-300" style={{ color: '#B58B47' }} aria-hidden="true" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
                    <div className="faq-answer px-6 pb-5 text-sm leading-relaxed" style={{ color: '#9ca3af', borderTop: '1px solid rgba(255,255,255,0.05)', ...arabicFont }}>
                      <p className="pt-4" style={arabicFont}>{item.a}</p>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
                </HoverGlow>
              </motion.div>
            ))}
          </Accordion.Root>
        </Stagger>
      </div>
    </section>
  )
}
