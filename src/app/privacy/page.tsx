import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Privacy Policy | AgentOfFomo",
  description: "Privacy Policy for the AgentOfFomo website.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted font-mono mb-12">
            Last updated: April 3, 2026
          </p>

          <div className="space-y-10 text-sm text-muted leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                1. Introduction
              </h2>
              <p>
                This Privacy Policy describes how the AgentOfFomo project
                (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
                collects, uses, and shares information when you visit
                agentoffomo.com (the &ldquo;Website&rdquo;) or interact with
                our community channels.
              </p>
              <p className="mt-3">
                By using the Website, you agree to the collection and use of
                information in accordance with this policy.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                2. Information We Collect
              </h2>

              <h3 className="text-sm font-semibold text-foreground mt-4 mb-2">
                2.1 Information You Provide
              </h3>
              <p>
                We do not require you to create an account or provide personal
                information to use the Website. If you contact us through
                social media or community channels, you may voluntarily provide
                information such as your username, message content, and
                publicly visible profile information.
              </p>

              <h3 className="text-sm font-semibold text-foreground mt-4 mb-2">
                2.2 Information Collected Automatically
              </h3>
              <p>
                When you visit the Website, we may automatically collect
                certain information, including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Device information:</strong> browser type, operating
                  system, device type, and screen resolution
                </li>
                <li>
                  <strong>Usage information:</strong> pages visited, time spent
                  on pages, referring URLs, and navigation patterns
                </li>
                <li>
                  <strong>Network information:</strong> IP address (which may
                  be anonymized), approximate geographic location at the
                  country level
                </li>
              </ul>
              <p className="mt-3">
                This information is collected through standard web server logs
                and, if implemented, privacy-focused analytics tools.
              </p>

              <h3 className="text-sm font-semibold text-foreground mt-4 mb-2">
                2.3 Blockchain Information
              </h3>
              <p>
                We do not collect your wallet address, private keys, seed
                phrases, or any blockchain-related credentials. Any
                interactions with the $AOFOMO token occur directly on the
                Solana blockchain through third-party wallets and decentralized
                exchanges. Blockchain transactions are publicly visible by
                nature and are not within our control.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                3. How We Use Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Operate and maintain the Website</li>
                <li>Understand how visitors use the Website and improve the user experience</li>
                <li>Monitor for security threats and abuse</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="mt-3 font-semibold text-foreground">
                We do not use your information for targeted advertising, user
                profiling, or selling to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                4. How We Share Information
              </h2>
              <p>
                We do not sell, rent, or trade your personal information. We
                may share information in the following limited circumstances:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Service providers:</strong> With hosting providers
                  (Firebase/Google) and analytics tools that help us operate
                  the Website, subject to their own privacy policies
                </li>
                <li>
                  <strong>Legal requirements:</strong> When required to comply
                  with a legal obligation, court order, or governmental request
                </li>
                <li>
                  <strong>Protection:</strong> When necessary to protect our
                  rights, privacy, safety, or property
                </li>
                <li>
                  <strong>Aggregate data:</strong> We may share anonymized,
                  aggregate data that cannot be used to identify you
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                5. Cookies and Tracking Technologies
              </h2>
              <p>
                The Website may use essential cookies required for basic
                functionality. We do not use advertising cookies or
                cross-site tracking cookies.
              </p>
              <p className="mt-3">
                If we implement analytics, we will use privacy-focused tools
                that minimize data collection and respect user privacy. You can
                control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                6. Third-Party Services
              </h2>
              <p>
                The Website may contain links to third-party websites,
                services, or decentralized applications (such as decentralized
                exchanges). We are not responsible for the privacy practices
                or content of these third parties. We encourage you to review
                the privacy policies of any third-party services you interact
                with.
              </p>
              <p className="mt-3">
                Our hosting is provided by Google Firebase, which is subject
                to Google&apos;s Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                7. Data Security
              </h2>
              <p>
                We implement reasonable administrative and technical measures
                to protect the information we collect. However, no method of
                transmission over the Internet or electronic storage is 100%
                secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                8. Data Retention
              </h2>
              <p>
                We retain information only for as long as necessary to fulfill
                the purposes described in this policy, unless a longer
                retention period is required or permitted by law. Server logs
                are typically retained for no more than 90 days.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                9. Your Rights
              </h2>
              <p>
                Depending on your jurisdiction, you may have the right to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict processing of your information</li>
                <li>Request portability of your data</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us through our
                official social channels. We will respond to your request
                within a reasonable timeframe.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                10. International Users
              </h2>
              <p>
                The Website is hosted in the United States. If you access the
                Website from outside the United States, your information may
                be transferred to and processed in the United States or other
                countries. By using the Website, you consent to this transfer.
              </p>
              <p className="mt-3">
                If you are a resident of the European Economic Area (EEA),
                United Kingdom, or other jurisdiction with data protection
                laws, you may have additional rights under applicable law,
                including the GDPR. We will comply with applicable data
                protection requirements.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                11. Children&apos;s Privacy
              </h2>
              <p>
                The Website is not intended for use by anyone under 18 years
                of age. We do not knowingly collect personal information from
                children. If you believe we have collected information from a
                child, please contact us and we will promptly delete it.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                12. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new policy on this
                page and updating the &ldquo;Last updated&rdquo; date. Your
                continued use of the Website after changes constitutes
                acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                13. Contact
              </h2>
              <p>
                For questions about this Privacy Policy, contact us through our
                official social channels listed on agentoffomo.com.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-card-border">
            <a
              href="/"
              className="text-sm text-neon/60 hover:text-neon font-mono transition-colors"
            >
              &larr; Return to Home
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
