// Brand & contact — update these with your real details
export const BRAND = {
  name: 'Top 1%',
  tagline: "Taloja's Smart Rental Marketplace",
  phone: '919876543210',
  phoneDisplay: '+91 98765 43210',
  email: 'hello@top1percent.in',
  whatsapp: '919876543210',
  office: 'Shop 12, Taloja Station Road, Navi Mumbai 410208',
} as const

export function whatsappUrl(message: string): string {
  return `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`
}

export function telUrl(): string {
  return `tel:+${BRAND.phone}`
}

export function mailtoUrl(subject: string, body?: string): string {
  const params = new URLSearchParams({ subject })
  if (body) params.set('body', body)
  return `mailto:${BRAND.email}?${params.toString()}`
}
