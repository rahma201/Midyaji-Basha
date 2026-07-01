'use client'
import dynamic from 'next/dynamic'
import type { LocaleOrderModalProps } from './OrderModalInner'

const OrderModalInner = dynamic(
  () => import('./OrderModalInner').then((m) => ({ default: m.OrderModalInner })),
  { ssr: false },
)

export function OrderModal(props: LocaleOrderModalProps) {
  if (!props.open) return null
  return <OrderModalInner {...props} />
}
