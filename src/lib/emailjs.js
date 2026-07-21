export const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_8fy338c',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
}

export function isEmailJsConfigured() {
  return Boolean(EMAILJS.serviceId && EMAILJS.templateId && EMAILJS.publicKey)
}
