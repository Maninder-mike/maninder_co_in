import Script from "next/script";

/**
 * Renders JSON-LD structured data using next/script to avoid
 * React 19 warnings about raw <script> tags in the component tree.
 */
export function JsonLd({ data }: { data: Record<string, any> }) {
  // Derive a stable id from the schema type to avoid collisions
  const schemaType = (data["@type"] as string) ?? "default";
  return (
    <Script
      id={`json-ld-${schemaType.toLowerCase()}`}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
