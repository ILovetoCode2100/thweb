import { ThistleDivider } from "@/components/thistle-divider"

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-600">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </section>

      <ThistleDivider />

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>1. Introduction</h2>
            <p>
              This privacy policy explains how we collect, use, and protect your personal information when you use our
              hypnotherapy services or interact with our website. We are committed to protecting your privacy and
              complying with UK GDPR requirements.
            </p>

            <h2>2. Information We Collect</h2>
            <h3>2.1 Information You Provide</h3>
            <ul>
              <li>Name and contact details (email, phone number)</li>
              <li>Health information relevant to hypnotherapy treatment</li>
              <li>Session notes and treatment progress</li>
              <li>Payment information (processed securely through third-party providers)</li>
            </ul>

            <h3>2.2 Information Collected Automatically</h3>
            <ul>
              <li>Website usage data (via analytics)</li>
              <li>IP address and browser information</li>
              <li>Cookies (see our Cookie Policy)</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use your personal information to:</p>
            <ul>
              <li>Provide hypnotherapy services</li>
              <li>Communicate with you about appointments and treatment</li>
              <li>Process payments</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Improve our services</li>
            </ul>

            <h2>4. Legal Basis for Processing</h2>
            <p>We process your personal data based on:</p>
            <ul>
              <li>
                <strong>Consent:</strong> For health data and marketing communications
              </li>
              <li>
                <strong>Contract:</strong> To provide our services
              </li>
              <li>
                <strong>Legal obligation:</strong> To maintain records as required by professional bodies
              </li>
              <li>
                <strong>Legitimate interests:</strong> To improve our services and protect our business
              </li>
            </ul>

            <h2>5. Data Sharing</h2>
            <p>We do not sell or rent your personal information. We may share data with:</p>
            <ul>
              <li>Professional supervisors (anonymised)</li>
              <li>Legal authorities when required by law</li>
              <li>Service providers (e.g., booking systems, with appropriate safeguards)</li>
            </ul>

            <h2>6. Data Security</h2>
            <p>We implement appropriate technical and organisational measures to protect your data, including:</p>
            <ul>
              <li>Encrypted storage of sensitive information</li>
              <li>Secure session notes kept in locked storage</li>
              <li>Limited access to personal data</li>
              <li>Regular security reviews</li>
            </ul>

            <h2>7. Data Retention</h2>
            <p>We retain your personal data for:</p>
            <ul>
              <li>Client records: 7 years after last contact (as required by professional insurance)</li>
              <li>Financial records: 6 years (UK legal requirement)</li>
              <li>Marketing data: Until you unsubscribe</li>
            </ul>

            <h2>8. Your Rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion (subject to legal requirements)</li>
              <li>Restrict processing</li>
              <li>Data portability</li>
              <li>Object to processing</li>
              <li>Withdraw consent</li>
            </ul>

            <h2>9. Children's Privacy</h2>
            <p>
              We do not provide services to children under 16 without parental consent. If you are under 16, please have
              your parent or guardian contact us.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any significant changes via
              email or website notice.
            </p>

            <h2>11. Contact Information</h2>
            <p>For any questions about this privacy policy or to exercise your rights, please contact:</p>
            <ul>
              <li>Email: privacy@hypnotherapyscotland.com</li>
              <li>Phone: 07XXX XXXXXX</li>
              <li>Post: [Business Address], Edinburgh, Scotland</li>
            </ul>

            <h2>12. Complaints</h2>
            <p>
              If you have concerns about how we handle your data, you have the right to complain to the Information
              Commissioner's Office (ICO) at{" "}
              <a href="https://ico.org.uk" className="text-primary hover:underline">
                ico.org.uk
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
