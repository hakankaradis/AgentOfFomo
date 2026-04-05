import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Terms of Service | AgentOfFomo",
  description: "Terms of Service for the AgentOfFomo website and $AOFOMO token.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-2">
            Terms of Service
          </h1>
          <p className="text-sm text-muted font-mono mb-12">
            Last updated: April 3, 2026
          </p>

          <div className="space-y-10 text-sm text-muted leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                1. Agreement to Terms
              </h2>
              <p>
                By accessing or using the AgentOfFomo website
                (&ldquo;agentoffomo.com&rdquo;), interacting with the $AOFOMO
                token, or participating in the AgentOfFomo community
                (collectively, the &ldquo;Services&rdquo;), you agree to be
                bound by these Terms of Service (&ldquo;Terms&rdquo;). If you
                do not agree to these Terms, do not use the Services.
              </p>
              <p className="mt-3">
                We may modify these Terms at any time. Your continued use of
                the Services after any modification constitutes acceptance of
                the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                2. Eligibility
              </h2>
              <p>
                You must be at least 18 years old and have the legal capacity
                to enter into these Terms. By using the Services, you represent
                that you meet these requirements.
              </p>
              <p className="mt-3">
                You are solely responsible for ensuring that your use of the
                Services complies with all laws and regulations applicable to
                you in your jurisdiction, including but not limited to
                securities laws, tax obligations, and anti-money laundering
                regulations.
              </p>
              <p className="mt-3">
                The Services are not available to persons or entities in
                jurisdictions where participation in digital asset projects is
                prohibited or restricted, including but not limited to
                sanctioned countries (Cuba, Iran, North Korea, Syria, Crimea,
                and any other jurisdiction subject to comprehensive sanctions).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                3. Nature of the Token
              </h2>
              <p className="font-semibold text-foreground">
                $AOFOMO is a meme token and cultural brand asset. It is not an
                investment, security, commodity, or financial instrument of any
                kind.
              </p>
              <p className="mt-3">
                The token does not represent:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Ownership or equity in any company, entity, or organization</li>
                <li>A right to dividends, profits, or revenue sharing</li>
                <li>A claim on any assets, intellectual property, or treasury</li>
                <li>A right to vote on corporate or organizational decisions</li>
                <li>A guarantee of future value, appreciation, or utility</li>
                <li>Access to any product, service, or platform</li>
              </ul>
              <p className="mt-3">
                The token exists solely as a community-driven meme token. Any
                value the token may have is entirely speculative and driven by
                market forces beyond anyone&apos;s control.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                4. No Financial or Investment Advice
              </h2>
              <p className="font-semibold text-foreground">
                Nothing on this website, in our social media channels, in The
                Dossier, or in any communication from the AgentOfFomo project
                constitutes financial advice, investment advice, trading
                advice, legal advice, tax advice, or any other form of
                professional advice.
              </p>
              <p className="mt-3">
                All content produced by the AgentOfFomo project, including
                website copy, social media posts, memes, and community
                communications, is for entertainment and informational purposes
                only. The satirical and humorous nature of the project&apos;s
                content should not be interpreted as recommendations to
                purchase, sell, hold, or trade any digital asset.
              </p>
              <p className="mt-3">
                You should consult qualified independent professional advisors
                before making any financial decisions.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                5. Risk Acknowledgment
              </h2>
              <p>
                By interacting with $AOFOMO or using the Services, you
                acknowledge and accept the following risks:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Volatility:</strong> Digital assets are highly
                  experimental, risky, and volatile. The value of $AOFOMO may
                  decrease to zero. You may lose your entire purchase amount.
                </li>
                <li>
                  <strong>No guarantees:</strong> There is no guarantee of any
                  particular outcome, return, profit, or reward from holding
                  $AOFOMO.
                </li>
                <li>
                  <strong>Irreversibility:</strong> Blockchain transactions are
                  irreversible and final. There are no refunds, chargebacks, or
                  cancellations.
                </li>
                <li>
                  <strong>Regulatory risk:</strong> The regulatory landscape
                  for digital assets is evolving. Future regulations may
                  adversely affect the token or your ability to hold or
                  transfer it.
                </li>
                <li>
                  <strong>Technical risk:</strong> Smart contracts, blockchain
                  networks, and wallet software may contain vulnerabilities,
                  bugs, or experience failures.
                </li>
                <li>
                  <strong>Market risk:</strong> The token&apos;s value depends
                  entirely on market conditions, community interest, and
                  factors outside anyone&apos;s control.
                </li>
                <li>
                  <strong>Liquidity risk:</strong> There may be insufficient
                  liquidity to sell your tokens at any given time.
                </li>
              </ul>
              <p className="mt-3 font-semibold text-foreground">
                You are solely responsible for evaluating the risks and merits
                of any transaction involving $AOFOMO. Do not spend more than
                you can afford to lose entirely.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                6. Not a Broker, Dealer, or Financial Intermediary
              </h2>
              <p>
                AgentOfFomo is not a broker, dealer, exchange, custodian,
                fiduciary, money transmitter, or money services business. We do
                not hold, control, or custody any digital assets on your
                behalf. We do not facilitate, execute, or settle any
                transactions. Any token purchases occur through third-party
                decentralized exchanges over which we have no control.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                7. Intellectual Property
              </h2>
              <p>
                All content on the AgentOfFomo website, including text,
                graphics, logos, mascot imagery, branding, and design, is the
                intellectual property of the AgentOfFomo project and is
                protected by applicable copyright and trademark laws.
              </p>
              <p className="mt-3">
                Community members are welcome to create and share fan-made
                content, memes, and derivative works for non-commercial
                purposes. Commercial use of AgentOfFomo branding, logos, or
                mascot imagery requires prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                8. Prohibited Conduct
              </h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Use the Services for any unlawful purpose or in violation of any applicable law</li>
                <li>Engage in market manipulation, fraud, or deceptive practices</li>
                <li>Impersonate the AgentOfFomo project, team, or brand</li>
                <li>Create fake tokens, copycat projects, or phishing schemes using the AgentOfFomo brand</li>
                <li>Attempt to interfere with or disrupt the Services</li>
                <li>Use the Services to launder money or finance terrorism</li>
                <li>Violate any applicable sanctions or export control regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                9. Disclaimer of Warranties
              </h2>
              <p className="uppercase font-semibold text-foreground">
                The Services are provided &ldquo;as is&rdquo; and &ldquo;as
                available&rdquo; without warranties of any kind, whether
                express, implied, or statutory, including but not limited to
                implied warranties of merchantability, fitness for a
                particular purpose, title, and non-infringement.
              </p>
              <p className="mt-3">
                We do not warrant that the Services will be uninterrupted,
                secure, error-free, or free of viruses or other harmful
                components. We make no representations or warranties regarding
                the accuracy, completeness, or reliability of any content on
                the Services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                10. Limitation of Liability
              </h2>
              <p className="uppercase font-semibold text-foreground">
                To the maximum extent permitted by applicable law, in no event
                shall AgentOfFomo, its creators, contributors, affiliates, or
                any associated parties be liable for any indirect, incidental,
                special, consequential, or punitive damages, or any loss of
                profits, revenue, data, or digital assets, whether based on
                warranty, contract, tort, negligence, strict liability, or any
                other legal theory, arising out of or in connection with your
                use of the Services or the $AOFOMO token.
              </p>
              <p className="mt-3 uppercase font-semibold text-foreground">
                In no event shall our total aggregate liability exceed one
                hundred U.S. dollars ($100 USD).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                11. Indemnification
              </h2>
              <p>
                You agree to indemnify, defend, and hold harmless AgentOfFomo,
                its creators, contributors, and affiliates from and against any
                and all claims, damages, losses, liabilities, costs, and
                expenses (including reasonable attorneys&apos; fees) arising
                out of or related to your use of the Services, your violation
                of these Terms, or your violation of any applicable law or
                regulation.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                12. Dispute Resolution
              </h2>
              <p>
                Any dispute arising from these Terms or the Services shall
                first be resolved through good-faith informal negotiation. If
                the dispute cannot be resolved informally within 30 days, it
                shall be resolved through binding arbitration administered in
                accordance with the rules of the jurisdiction in which the
                project is domiciled.
              </p>
              <p className="mt-3 font-semibold text-foreground">
                You agree to resolve disputes on an individual basis only. You
                waive any right to participate in a class action, collective
                action, or representative proceeding.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                13. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the jurisdiction in which the AgentOfFomo
                project is legally domiciled, without regard to conflict of law
                principles.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                14. Termination
              </h2>
              <p>
                We reserve the right to terminate or restrict your access to
                the Services at any time, for any reason, without notice or
                liability. Upon termination, all provisions of these Terms
                which by their nature should survive shall survive, including
                but not limited to warranty disclaimers, limitation of
                liability, and indemnification.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                15. Severability
              </h2>
              <p>
                If any provision of these Terms is found to be unenforceable
                or invalid, that provision shall be limited or eliminated to
                the minimum extent necessary so that these Terms shall
                otherwise remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                16. Contact
              </h2>
              <p>
                For questions about these Terms, contact us through our
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
