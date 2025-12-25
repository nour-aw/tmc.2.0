
export const metadata = {
  title: "Support The Margins Club",
  description: "Help keep gentle, low-pressure literary spaces open and accessible."
};

export default function SupportPage() {
  return (
    <main className="container">
      <article className="card" style={{ maxWidth: 960, margin: "0 auto" }}>
        <h1 style={{ fontSize: "1.9rem" }}>Support The Margins Club</h1>

        <p style={{ marginTop: "0.75rem", lineHeight: 1.8 }}>
          The Margins Club exists to create gentle, low-pressure spaces for reading, reflection, and shared presence.
          Our gatherings bring people together around books, ideas, and community, without cost barriers or expectations.
        </p>

        <p style={{ marginTop: "0.75rem", lineHeight: 1.8 }}>
          We believe meaningful connection grows in small, intentional settings. Support from our community and local partners
          helps keep these spaces open, welcoming, and accessible.
        </p>

        <section style={{ marginTop: "1.25rem" }}>
          <h2 style={{ fontSize: "1.25rem" }}>How Your Support Helps</h2>
          <ul style={{ marginTop: "0.5rem", lineHeight: 1.8 }}>
            <li>Host free or low-cost reading events in local cafés and spaces</li>
            <li>Provide small touches that enhance the experience for attendees</li>
            <li>Collaborate with local businesses and creators</li>
            <li>Sustain and grow thoughtful, community-led programming</li>
          </ul>
        </section>

        <section style={{ marginTop: "1.25rem" }}>
          <h2 style={{ fontSize: "1.25rem" }}>Why Support Matters</h2>
          <p style={{ marginTop: "0.5rem", lineHeight: 1.8 }}>
            The Margins Club operates on care, time, and a shared belief in the value of quiet community. Contributions and in-kind
            support go directly toward sustaining events and building long-term partnerships that benefit both attendees and local businesses.
          </p>
        </section>

        <section style={{ marginTop: "1.25rem" }}>
          <h2 style={{ fontSize: "1.25rem" }}>Ways to Support</h2>
          <p style={{ marginTop: "0.5rem" }}>
            There are many ways to support The Margins Club, depending on what feels right for you or your organization:
          </p>
          <ul style={{ marginTop: "0.5rem", lineHeight: 1.8 }}>
            <li>In-kind support such as product samples, discounts, or small giveaways for attendees</li>
            <li>Event support for specific gatherings</li>
            <li>Ongoing community partnership</li>
            <li>Collaborative ideas that align with our values</li>
          </ul>
        </section>

        <section style={{ marginTop: "1.25rem" }}>
          <p style={{ lineHeight: 1.8 }}>
            If you are interested in supporting an upcoming event or exploring a partnership, we would love to hear from you.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a className="btn btn-primary" href="mailto:hello@themarginsclub.ca?subject=Supporting%20The%20Margins%20Club">
              Email us — hello@themarginsclub.ca
            </a>
            <a className="btn" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/themarginsclub/">
              Message us on Instagram
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
