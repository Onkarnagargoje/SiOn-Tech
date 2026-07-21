import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { EMAILJS, isEmailJsConfigured } from '../lib/emailjs'

const INITIAL = { name: '', email: '', company: '', message: '' }

export default function useContactForm() {
  const [form, setForm] = useState(INITIAL)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [sending, setSending] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: '', message: '' })

    if (!isEmailJsConfigured()) {
      setStatus({
        type: 'error',
        message:
          'Email is not configured yet. Add your EmailJS template ID and public key to the .env file.',
      })
      return
    }

    setSending(true)
    try {
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          name: form.name,
          email: form.email,
          organization: form.company || '—',
          message: form.message,
          time: new Date().toLocaleString('en-IN', {
            dateStyle: 'medium',
            timeStyle: 'short',
          }),
        },
        EMAILJS.publicKey,
      )
      setStatus({
        type: 'success',
        message: 'Thank you — we will respond within one business day.',
      })
      setForm(INITIAL)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please email us directly or try again.',
      })
    } finally {
      setSending(false)
    }
  }

  return { form, status, sending, onChange, onSubmit }
}
