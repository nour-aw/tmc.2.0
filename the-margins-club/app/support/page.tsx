
export const metadata = {
  title: "Support — The Margins Club",
  description: "Help us build a more connected literary community in KW."
};

export default function SupportPage() {
  return (
    <main className="container">
      <article className="card" style={{ maxWidth: 960, margin: "0 auto" }}>
        <h1 style={{ fontSize: "1.9rem", marginBottom: "0.25rem" }}>Support The Margins Club: Building a Connected Literary Community</h1>
        <p style={{ color: "var(--ink-soft)" }}>We believe in the power of books and conversations to bring people together.</p>

        <section style={{ marginTop: "1rem", lineHeight: 1.8 }}>
          <p>
            As a community initiative, our mission is to make reading, writing, and creative gatherings accessible to everyone.
            Your support helps us host quiet reading nights, run book clubs, organize workshops, and keep events low-cost or free.
          </p>
        </section>

        <section style={{ marginTop: "1.25rem" }}>
          <h2 style={{ fontSize: "1.25rem" }}>How Your Support Helps</h2>
          <ul style={{ marginTop: "0.5rem", lineHeight: 1.8 }}>
            <li>Offer free or pay-what-you-can <strong>bookish events</strong> to the community.</li>
            <li>Support facilitators, speakers, and volunteers who make these gatherings special.</li>
            <li>Cover venue, supplies, and accessibility needs.</li>
          </ul>
        </section>

        <section style={{ marginTop: "1.25rem" }}>
          <h2 style={{ fontSize: "1.25rem" }}>Ways to Support</h2>
          <div style={{ display: "grid", gap: "0.75rem", marginTop: "0.5rem" }}>
            <a className="btn btn-primary" href="mailto:hello@themargins.club?subject=One-Time%20Contribution&body=Hi%2C%20I%27d%20like%20to%20make%20a%20one-time%20contribution.%20Please%20share%20the%20best%20way%20to%20send%20support.">
              One-Time Contribution
            </a>
            <a className="btn" href="mailto:hello@themargins.club?subject=Monthly%20Contribution&body=Hi%2C%20I%27m%20interested%20in%20supporting%20monthly.%20Please%20send%20details.">
              Monthly Contribution
            </a>
            <a className="btn" target="_blank" rel="noopener noreferrer"
               href="https://noteforms.com/forms/the-margins-club-collaboration-form-mrzlik">
              Sponsorship Packages
            </a>
            <a className="btn" target="_blank" rel="noopener noreferrer"
               href="https://noteforms.com/forms/the-margins-club-collaboration-form-mrzlik">
              Advertising & Partner Campaigns
            </a>
          </div>
          <p style={{ color: "var(--ink-soft)", marginTop: "0.75rem" }}>
            Prefer another route (e-transfer, invoice, or in-kind)? Email us: <a href="mailto:hello@themargins.club">hello@themargins.club</a>.
          </p>
        </section>

        <section style={{ marginTop: "1.25rem" }}>
          <h2 style={{ fontSize: "1.25rem" }}>Why Your Support Matters</h2>
          <p style={{ marginTop: "0.5rem", lineHeight: 1.8 }}>
            Every dollar goes directly into sustaining and growing our programs. With your help, we can ensure that
            reading and creative community spaces remain welcoming, affordable, and vibrant for everyone.
          </p>
        </section>
      </article>
    </main>
  );
}
