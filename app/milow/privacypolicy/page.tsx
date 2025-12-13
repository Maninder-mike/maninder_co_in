
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Privacy Policy | Milow",
    description: "Privacy Policy for Milow - Semi Trucking App",
};

export default function MilowPrivacyPage() {
    return (
        <div className="min-h-dvh bg-zinc-50 text-zinc-900 selection:bg-blue-900 selection:text-white dark:bg-zinc-950 dark:text-zinc-100 dark:selection:bg-blue-100 dark:selection:text-blue-900">
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
                <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
                    <Link href="/milow" className="flex items-center gap-2 text-sm font-medium hover:text-zinc-600 dark:hover:text-zinc-300">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Milow
                    </Link>
                    <span className="text-sm font-semibold text-zinc-500">Privacy Policy</span>
                </div>
            </nav>

            <main className="mx-auto max-w-3xl px-6 py-32">
                <h1 className="mb-8 text-4xl font-bold tracking-tighter sm:text-5xl">Privacy Policy</h1>
                <div className="prose prose-zinc dark:prose-invert">
                    <p className="lead">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>

                    <p>
                        Thank you for using <strong>Milow</strong>. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.
                    </p>

                    <h3>1. Information We Collect</h3>

                    <p><strong>Personal Data:</strong> We collect personally identifiable information that you voluntarily provide to us when you register for the application, such as your email address, name, and profile picture (if using social login).</p>

                    <p><strong>Location Data:</strong> Milow requires access to your device's location services to track trips and mileage accurately. This data is collected only when you explicitly start a trip or enable tracking features.</p>

                    <p><strong>Usage Data:</strong> We may collect non-personal information about how you interact with the app, such as crash logs and feature usage statistics, to help us improve the application.</p>

                    <h3>2. How We Use Your Information</h3>
                    <ul>
                        <li>To provide and maintain the App's core functionality (trip tracking, fuel logging).</li>
                        <li>To create and manage your account.</li>
                        <li>To generate reports and analytics for your personal use.</li>
                        <li>To improve user experience and fix bugs.</li>
                    </ul>

                    <h3>3. Data Storage and Security</h3>
                    <p>
                        Your data is stored securely using <strong>Supabase</strong>, an open-source Firebase alternative. We implement industry-standard security measures to protect your personal information. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure.
                    </p>

                    <h3>4. Third-Party Services</h3>
                    <p>
                        We use third-party services that may collect information used to identify you:
                    </p>
                    <ul>
                        <li><strong>Google Sign-In / Apple Sign-In:</strong> For authentication purposes.</li>
                        <li><strong>Supabase:</strong> For database and backend services.</li>
                    </ul>

                    <h3>5. Data Deletion</h3>
                    <p>
                        You have the right to request the deletion of your account and all associated data. You can delete your account directly within the application settings, or contact us at <a href="mailto:support@maninder.co.in">support@maninder.co.in</a> to request deletion.
                    </p>

                    <h3>6. Children's Privacy</h3>
                    <p>
                        Milow is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13.
                    </p>

                    <h3>7. Changes to This Policy</h3>
                    <p>
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                    </p>

                    <h3>8. Contact Us</h3>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us via the GitHub repository or at <a href="mailto:support@maninder.co.in">support@maninder.co.in</a>.
                    </p>
                </div>
            </main>
        </div>
    );
}
