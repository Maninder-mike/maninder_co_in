import Script from "next/script";

/**
 * Renders JSON-LD structured data using next/script to avoid
 * React 19 warnings about raw <script> tags in the component tree.
 * Escapes '<' characters to prevent '</script>' injection attacks.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  // Derive a stable id from the schema type to avoid collisions
  const schemaType = (data["@type"] as string) ?? "default";
  const safeJson = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <Script
      id={`json-ld-${schemaType.toLowerCase()}`}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: safeJson }}
    />
  );
}
