
export default function AboutPage() {
  return (
    <main className="container">
      <article className="card" style={{ maxWidth: 880, margin: "0 auto" }}>
        <h1 style={{ fontSize: "1.9rem", marginBottom: "0.25rem" }}>About The Margins Club</h1>
        <p style={{ color: "var(--ink-soft)" }}>EST 2025 · KW Region</p>

        <p style={{ marginTop: "1rem", lineHeight: 1.8 }}>
          The Margins Club is a community for readers and thinkers exploring where ideas meet action.
          We host gatherings, book clubs, collaborations, and conversations — all centered around curiosity,
          creativity, and culture.
        </p>

        <section style={{ marginTop: "1.25rem" }}>
          <h2 style={{ fontSize: "1.25rem" }}>What we do</h2>
          <ul style={{ marginTop: "0.5rem", lineHeight: 1.8 }}>
            <li>Seasonal <strong>book clubs</strong> and reading sprints</li>
            <li>Community <strong>events</strong> and pop-ups</li>
            <li>Open <strong>collaborations</strong> with creators and venues</li>
          </ul>
        </section>

        <section style={{ marginTop: "1.25rem" }}>
          <h2 style={{ fontSize: "1.25rem" }}>Get involved</h2>
          <p>Jump straight to the good stuff on our Links page:</p>
          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
            <a className="btn" href="/links#collab">Collaboration Form</a>
            <a className="btn" href="/links#directory">Book Club Directory</a>
            <a className="btn btn-primary" href="/events">Upcoming Events</a>
          </div>
        </section>
      </article>
    </main>
  );
}
