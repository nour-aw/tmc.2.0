export const metadata = {
  title: "Bookshelf — The Margins Club",
};

export default function BookshelfPage() {
  return (
    <main className="container">
      <section className="card" style={{ maxWidth: 960, margin: "0 auto" }}>
        <h1 style={{ fontSize: "1.75rem" }}>Bookshelf</h1>
        <p style={{ color: "var(--ink-soft)" }}>
          What our members are reading — browse the shared shelf and add your current read.
        </p>

        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "0.75rem" }}>
          <a className="btn" target="_blank" rel="noopener noreferrer" href="https://buttered-pipe-997.notion.site/1b674207413580d6b8e5e202a7d11034?v=1b674207413580ca9dae000cb70a4a4d">
            Open Bookshelf (Notion)
          </a>
          <a className="btn btn-primary" target="_blank" rel="noopener noreferrer" href="https://noteforms.com/forms/what-are-you-reading-efd3ig">
            Add your book (Form)
          </a>
        </div>

        <h2 style={{ fontSize: "1.25rem", marginTop: "1.25rem" }}>Quick Add</h2>
        <p style={{ color: "var(--ink-soft)" }}>
          You can submit directly below. If it doesn’t load, use the button above.
        </p>
        <div style={{ marginTop: "0.5rem", border: "1px solid var(--ink-soft)", borderRadius: "var(--radius)", overflow: "hidden" }}>
          <iframe title="What are you reading? — Noteforms" loading="lazy"
            src="https://noteforms.com/forms/what-are-you-reading-efd3ig" style={{ width: "100%", height: "900px", border: 0, background: "white" }} />
        </div>
      </section>
    </main>
  );
}