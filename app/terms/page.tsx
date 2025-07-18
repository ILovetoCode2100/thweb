import { ThistleDivider } from "@/components/thistle-divider"

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms & Conditions</h1>
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
            <h2>1. Agreement to Terms</h2>
            <p>
              By booking a hypnotherapy session or using this website, you agree to these Terms & Conditions. If you do
              not agree with any part of these terms, please do not use our services.
            </p>

            <h2>2. Services Provided</h2>
            <p>
              We provide clinical hypnotherapy services for various conditions including anxiety, stress, confidence
              issues, weight management, smoking cessation, and other behavioural changes. Hypnotherapy is a
              complementary therapy and not a replacement for medical treatment.
            </p>

            <h2>3. Booking and Appointments</h2>
            <h3>3.1 Booking</h3>
            <ul>
              <li>Appointments can be booked via phone, email, or through our website</li>
              <li>A free 30-minute consultation is offered to new clients</li>
              <li>Full sessions typically last 60-90 minutes</li>
            </ul>

            <h3>3.2 Cancellation Policy</h3>
            <ul>
              <li>24 hours notice is required for cancellations or rescheduling</li>
              <li>Late cancellations may incur a 50% fee</li>
              <li>No-shows will be charged the full session fee</li>
              <li>Exceptions may be made for genuine emergencies</li>
            </ul>

            <h2>4. Fees and Payment</h2>
            <ul>
              <li>Session fees are outlined on our website and confirmed at booking</li>
              <li>Payment is due at the time of service</li>
              <li>We accept cash, bank transfer, and major credit/debit cards</li>
              <li>Package deals must be used within 6 months of purchase</li>
            </ul>

            <h2>5. Client Responsibilities</h2>
            <p>As a client, you agree to:</p>
            <ul>
              <li>Provide accurate information about your health and medical history</li>
              <li>Inform us of any changes to your health or medication</li>
              <li>Arrive on time for appointments</li>
              <li>Participate actively in the therapy process</li>
              <li>Follow any self-care recommendations between sessions</li>
            </ul>

            <h2>6. Confidentiality</h2>
            <p>All information shared during sessions is confidential, except where:</p>
            <ul>
              <li>You give explicit consent to share information</li>
              <li>There is a legal requirement to disclose</li>
              <li>There is a risk of harm to yourself or others</li>
              <li>It relates to criminal activity or child protection</li>
            </ul>

            <h2>7. Health and Safety</h2>
            <p>Hypnotherapy is generally safe, but may not be suitable for everyone. Please inform us if you have:</p>
            <ul>
              <li>Epilepsy or seizure disorders</li>
              <li>Severe mental health conditions (psychosis, schizophrenia)</li>
              <li>Heart conditions</li>
              <li>Are pregnant (certain techniques may not be suitable)</li>
            </ul>

            <h2>8. Results and Guarantees</h2>
            <p>
              While hypnotherapy has helped many people achieve positive changes, we cannot guarantee specific results.
              Success depends on various factors including your commitment to the process and individual circumstances.
            </p>

            <h2>9. Professional Standards</h2>
            <p>We maintain professional standards as required by:</p>
            <ul>
              <li>National Council for Hypnotherapy (NCH)</li>
              <li>Professional insurance requirements</li>
            </ul>

            <h2>10. Online Sessions</h2>
            <p>For online hypnotherapy sessions:</p>
            <ul>
              <li>You must have a stable internet connection</li>
              <li>Sessions should be taken in a quiet, private space</li>
              <li>You are responsible for your own safety and comfort</li>
              <li>Technical issues may occasionally affect sessions</li>
            </ul>

            <h2>11. Intellectual Property</h2>
            <p>
              All materials provided during sessions (recordings, worksheets, etc.) are for your personal use only and
              may not be reproduced or distributed without permission.
            </p>

            <h2>12. Liability</h2>
            <p>
              We maintain professional indemnity insurance. Our liability is limited to the cost of services provided.
              We are not liable for indirect or consequential losses.
            </p>

            <h2>13. Complaints Procedure</h2>
            <p>If you have any concerns about your treatment:</p>
            <ol>
              <li>First, please discuss with us directly</li>
              <li>If unresolved, you may contact our professional body (NCH)</li>
              <li>The organisation has a formal complaints procedure</li>
            </ol>

            <h2>14. Changes to Terms</h2>
            <p>
              We reserve the right to update these terms. Significant changes will be communicated to existing clients.
              Continued use of services implies acceptance of updated terms.
            </p>

            <h2>15. Governing Law</h2>
            <p>
              These terms are governed by Scottish law. Any disputes will be subject to the jurisdiction of Scottish
              courts.
            </p>

            <h2>16. Contact Information</h2>
            <p>For questions about these terms, please contact:</p>
            <ul>
              <li>Email: morven@tayloredhypnotherapy.com</li>
              <li>Phone: +44 7801 279880</li>
              <li>Address: 3 Ennis Park, Polbeth, West Calder EH55 8TN</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
