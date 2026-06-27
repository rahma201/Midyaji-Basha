'use client'
import { useState } from 'react'
import type { Dictionary } from '@/lib/i18n/en'
import { HoverGlow } from '@/components/ui/HoverGlow'

export function ContactForm({ dict, isRTL }: { dict: Dictionary; isRTL: boolean }) {
  const c = dict.contact
  const arabicFont: React.CSSProperties = isRTL ? { fontFamily: 'var(--font-arabic), sans-serif' } : {}
  const headingFont: React.CSSProperties = isRTL ? { fontFamily: 'var(--font-arabic), sans-serif' } : { fontFamily: 'var(--font-playfair), serif' }
  const [form, setForm] = useState({ name: '', phone: '', inquiry: c.inquiryTypes[0], message: '' })
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="rounded-2xl p-10 text-center" style={{ backgroundColor: '#0D0D0D', border: '1px solid rgba(181,139,71,0.3)' }}>
        <div className="text-5xl mb-4">✓</div>
        <h3 className="text-xl font-bold mb-2" style={{ color: '#F8F6F1', ...headingFont }}>{c.successTitle}</h3>
        <p style={{ color: '#9ca3af', ...arabicFont }}>{c.successMsg}</p>
      </div>
    )
  }

  return (
    <form onSubmit={e => { e.preventDefault(); setSubmitted(true) }} className="space-y-5" dir={isRTL ? 'rtl' : 'ltr'}>
      {[
        { label: c.fields.name, type: 'text', placeholder: c.fields.namePlaceholder, key: 'name' as const, required: true },
        { label: c.fields.phone, type: 'tel', placeholder: c.fields.phonePlaceholder, key: 'phone' as const, required: false },
      ].map(({ label, type, placeholder, key, required }) => (
        <div key={key}>
          <label className="block text-sm font-medium mb-2" style={{ color: '#F8F6F1', ...arabicFont }}>{label}</label>
          <input type={type} required={required} value={form[key]} onChange={e => setForm({ ...form, [key]: e.target.value })} placeholder={placeholder} className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={{ backgroundColor: '#0D0D0D', border: '1px solid rgba(255,255,255,0.1)', color: '#F8F6F1', ...arabicFont }} />
        </div>
      ))}
      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: '#F8F6F1', ...arabicFont }}>{c.fields.inquiry}</label>
        <select value={form.inquiry} onChange={e => setForm({ ...form, inquiry: e.target.value })} className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={{ backgroundColor: '#0D0D0D', border: '1px solid rgba(255,255,255,0.1)', color: '#F8F6F1', ...arabicFont }}>
          {c.inquiryTypes.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: '#F8F6F1', ...arabicFont }}>{c.fields.message}</label>
        <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder={c.fields.messagePlaceholder} className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none" style={{ backgroundColor: '#0D0D0D', border: '1px solid rgba(255,255,255,0.1)', color: '#F8F6F1', ...arabicFont }} />
      </div>
      <HoverGlow className="rounded-xl">
        <button type="submit" className="premium-button-glow w-full py-4 rounded-xl font-semibold text-white" style={{ backgroundColor: '#E51E2A', ...arabicFont }}>{c.fields.submit}</button>
      </HoverGlow>
    </form>
  )
}
