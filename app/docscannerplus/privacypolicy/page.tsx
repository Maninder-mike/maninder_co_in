
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata = {
    title: "Privacy Policy | DocScanner Plus",
    description: "Read the Privacy Policy for DocScanner Plus. We respect your data and privacy.",
};

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-dvh bg-zinc-50 text-zinc-900 selection:bg-indigo-900 selection:text-white dark:bg-zinc-950 dark:text-zinc-100 dark:selection:bg-indigo-100 dark:selection:text-indigo-900">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                    <Link href="/docscannerplus" className="flex items-center gap-2 text-sm font-medium hover:text-zinc-600 dark:hover:text-zinc-300">
                        <ArrowLeft className="h-4 w-4" />
                        Back to DocScanner Plus
                    </Link>
                </div>
            </nav>

            <main className="mx-auto max-w-3xl px-6 py-32">
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                        <Shield className="h-3 w-3" />
                        Legal Documentation
                    </div>
                    <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
                    <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                        Last Updated: {new Date().toLocaleDateString()}
                    </p>
                </div>

                <div className="prose prose-zinc dark:prose-invert max-w-none">
                    <p>
                        Thank you for using DocScanner Plus. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services.
                    </p>

                    <h3>1. Information We Collect</h3>
                    <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
                    <ul>
                        <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and phone number, that you voluntarily give to us when you register with the Application.</li>
                        <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Application, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Application.</li>
                        <li><strong>Mobile Device Access:</strong> We may request access or permission to certain features from your mobile device, including your mobile device's camera (for scanning), storage (for saving documents), and biological identifiers (for FaceID/TouchID security).</li>
                    </ul>

                    <h3>2. Use of Your Information</h3>
                    <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Application to:</p>
                    <ul>
                        <li>Create and manage your account.</li>
                        <li>Process documents and apply OCR (Optical Character Recognition) technologies locally or in the cloud, depending on your settings.</li>
                        <li>Email you regarding your account or order.</li>
                        <li>Generate a personal profile about you to make future visits to the Application more personalized.</li>
                    </ul>

                    <h3>3. Disclosure of Your Information</h3>
                    <p>We do not share your scanned documents with third parties for marketing purposes. We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
                    <ul>
                        <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
                        <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
                    </ul>

                    <h3>4. Security of Your Information</h3>
                    <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

                    <h3>5. Policy for Children</h3>
                    <p>We do not knowingly solicit information from or market to children under the age of 13. If you become aware that any data we have collected comes from children under age 13, please contact us using the contact information provided below.</p>

                    <h3>6. Contact Us</h3>
                    <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
                    <p>
                        <strong>Email:</strong> info@maninder.co.in<br />
                        <strong>Website:</strong> www.maninder.co.in
                    </p>
                </div>
            </main>
        </div>
    );
}
