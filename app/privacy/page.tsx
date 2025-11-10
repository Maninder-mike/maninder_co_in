import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Privacy Policy
        </h1>

        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>

          <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Information We Collect
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            When you subscribe to our newsletter, we collect your email address.
            This is the only personal information we collect through this
            website.
          </p>

          <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            How We Use Your Information
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            We use your email address solely to send you occasional updates
            about new projects, travel posts, and other content we think you
            might find interesting. We will never:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-300">
            <li>Sell your email address to third parties</li>
            <li>Share your information with advertisers</li>
            <li>Send you spam or unsolicited marketing</li>
            <li>
              Use your data for any purpose other than sending you our
              newsletter
            </li>
          </ul>

          <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Data Storage
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            Your email address is securely stored in our database (Supabase)
            with industry-standard security measures. We retain your information
            until you choose to unsubscribe.
          </p>

          <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Your Rights (GDPR)
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            Under the General Data Protection Regulation (GDPR), you have the
            following rights:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-300">
            <li>
              <strong>Right to Access:</strong> You can request a copy of the
              personal data we hold about you
            </li>
            <li>
              <strong>Right to Rectification:</strong> You can request that we
              correct any inaccurate data
            </li>
            <li>
              <strong>Right to Erasure:</strong> You can request that we delete
              your data at any time
            </li>
            <li>
              <strong>Right to Object:</strong> You can object to processing of
              your data
            </li>
            <li>
              <strong>Right to Withdraw Consent:</strong> You can unsubscribe
              from our newsletter at any time
            </li>
          </ul>

          <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Email Confirmation
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            We use a double opt-in process. After you submit your email,
            you&apos;ll receive a confirmation email. Your subscription is only
            activated after you click the confirmation link. This ensures that
            you genuinely want to receive our updates and helps prevent abuse.
          </p>

          <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Third-Party Services
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            We use the following third-party services to manage our newsletter:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-300">
            <li>
              <strong>Supabase:</strong> For secure database storage
            </li>
            <li>
              <strong>Resend:</strong> For sending confirmation and newsletter
              emails
            </li>
          </ul>
          <p className="text-zinc-700 dark:text-zinc-300">
            These services have their own privacy policies and security
            measures. We recommend reviewing them:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-300">
            <li>
              <a
                href="https://supabase.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-900 dark:text-zinc-100 underline"
              >
                Supabase Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://resend.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-900 dark:text-zinc-100 underline"
              >
                Resend Privacy Policy
              </a>
            </li>
          </ul>

          <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            How to Unsubscribe
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            You can unsubscribe from our newsletter at any time by clicking the
            unsubscribe link at the bottom of any email we send you.
            Alternatively, you can contact us directly to request removal of
            your data.
          </p>

          <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Contact Us
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            If you have any questions about this privacy policy or wish to
            exercise your rights, please contact us through any of the social
            media platforms linked on our homepage, or reach out via GitHub.
          </p>

          <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Changes to This Policy
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            We may update this privacy policy from time to time. Any changes
            will be posted on this page with an updated &quot;Last updated&quot;
            date.
          </p>
        </div>

        <div className="mt-12">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
