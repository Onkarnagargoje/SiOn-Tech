import useContactForm from '../../hooks/useContactForm'
import { Button, Field } from '../ui'

/**
 * Shared contact form — stacks on mobile, two-column name/email on sm+.
 * @param {'full' | 'compact'} variant
 */
export default function ContactForm({
  variant = 'full',
  idPrefix = 'contact',
  submitLabel = 'Send message',
}) {
  const { form, status, sending, onChange, onSubmit } = useContactForm()
  const compact = variant === 'compact'

  return (
    <form onSubmit={onSubmit} className={compact ? 'space-y-6' : 'space-y-7'} noValidate>
      <div className="grid gap-6 sm:grid-cols-2 sm:gap-6">
        <Field
          label="Name"
          id={`${idPrefix}-name`}
          name="name"
          required
          value={form.name}
          onChange={onChange}
          autoComplete="name"
          disabled={sending}
        />
        <Field
          label="Email"
          id={`${idPrefix}-email`}
          name="email"
          type="email"
          required
          value={form.email}
          onChange={onChange}
          autoComplete="email"
          disabled={sending}
        />
      </div>

      {!compact && (
        <Field
          label="Organization"
          id={`${idPrefix}-company`}
          name="company"
          value={form.company}
          onChange={onChange}
          autoComplete="organization"
          disabled={sending}
        />
      )}

      <Field
        label={compact ? 'Project details' : 'Message'}
        id={`${idPrefix}-message`}
        name="message"
        as="textarea"
        rows={compact ? 5 : 6}
        required
        value={form.message}
        onChange={onChange}
        placeholder="Business, college or school website needs..."
        disabled={sending}
      />

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center">
        <Button
          type="submit"
          icon
          className="!rounded-full w-full sm:w-auto"
          disabled={sending}
        >
          {sending ? 'Sending…' : submitLabel}
        </Button>
        {status.message && (
          <p
            role="status"
            className={`text-sm font-semibold sm:text-base ${
              status.type === 'error' ? 'text-brand-coral' : 'text-brand-teal'
            }`}
          >
            {status.message}
          </p>
        )}
      </div>
    </form>
  )
}
