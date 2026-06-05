/**
 * components/seo/JsonLd.tsx
 *
 * Renders a <script type="application/ld+json"> tag with the provided schema.
 * Can inject multiple schemas in a single call by passing an array.
 */

interface JsonLdProps {
  schema: Record<string, unknown> | Record<string, unknown>[]
}

export default function JsonLd({ schema }: JsonLdProps) {
  const json = Array.isArray(schema)
    ? { '@context': 'https://schema.org', '@graph': schema }
    : schema

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  )
}
