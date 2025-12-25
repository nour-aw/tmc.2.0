
export const metadata = {
  title: "Events — The Margins Club",
};

export default function EventsPage() {
  return (
    <main className="container">
      <section className="card" style={{ maxWidth: 960, margin: "0 auto" }}>
        <h1 style={{ fontSize: "1.75rem" }}>Upcoming Events</h1>
        <p style={{ color: "var(--ink-soft)" }}>
          Powered by Eventbrite. If the embed doesn’t load, use the button below.
        </p>

        {/* Eventbrite embed (Organizer profile embed) */}
        <div style={{ marginTop: "1rem", border: "1px solid var(--ink-soft)", borderRadius: "var(--radius)", overflow: "hidden" }}>
          <iframe title="The Margins Club Events" loading="lazy"
            src="https://www.eventbrite.ca/o/the-margins-club-kw-region-68851559643"
            style={{ width: "100%", height: "720px", border: "0", background: "white" }} />
        </div>

        <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <a className="btn btn-primary" target="_blank" rel="noopener noreferrer"
             href="https://www.eventbrite.ca/o/the-margins-club-kw-region-68851559643">
            Open Events on Eventbrite
          </a>
        </div>
      </section>
    </main>
  );
}
