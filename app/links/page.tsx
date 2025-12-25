
export default function LinksPage() {
  return (
    <main className="container">
      <section className="card" style={{ maxWidth: 880, margin: "0 auto" }}>
        <h1 style={{ fontSize: "1.75rem" }}>Links</h1>
        <p style={{ color: "var(--ink-soft)" }}>Everything in one place.</p>

        <div style={{ display: "grid", gap: "0.75rem", marginTop: "1rem" }}>
<a id="bookshelf" className="btn" target="_blank" rel="noopener noreferrer"
   href="https://buttered-pipe-997.notion.site/1b674207413580d6b8e5e202a7d11034?v=1b674207413580ca9dae000cb70a4a4d">
  Bookshelf — What our members are reading (Notion)
</a>

<a id="add-to-bookshelf" className="btn" target="_blank" rel="noopener noreferrer"
   href="https://noteforms.com/forms/what-are-you-reading-efd3ig">
  Add your book to the Bookshelf — What are you reading? (Form)
</a>

          <a id="collab" className="btn" target="_blank" rel="noopener noreferrer"
             href="https://noteforms.com/forms/the-margins-club-collaboration-form-mrzlik">
            The Margins Club — Collaboration Form
          </a>

          <a id="directory" className="btn" target="_blank" rel="noopener noreferrer"
             href="https://buttered-pipe-997.notion.site/1b6742074135800b9e15f97e0388f85b?v=1b67420741358063a98a000c8e7a9b96">
            Book Club Directory (Notion)
          </a>

          <a id="add-to-directory" className="btn" target="_blank" rel="noopener noreferrer"
             href="https://noteforms.com/forms/the-margins-club-book-club-directory-hzke2b">
            Add Your Book Club to the Directory
          </a>

          <a id="events" className="btn btn-primary" target="_blank" rel="noopener noreferrer"
             href="https://www.eventbrite.ca/o/the-margins-club-kw-region-68851559643">
            Upcoming Events (Eventbrite)
          </a>
        </div>
      </section>
    </main>
  );
}
