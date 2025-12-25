import Image from "next/image";

export default function HomePage() {
  return (
    <main className="container" style={{ minHeight: "80vh", display: "grid", placeItems: "center" }}>
      <section className="card" style={{ width: "100%", maxWidth: 720, padding: "1.5rem" }}>
        <div style={{ display: "grid", placeItems: "center", gap: "0.6rem" }}>
          <div className="hero-avatar">
            <Image src="/brand-logo.png" alt="The Margins Club" width={80} height={80} style={{ width: "72px", height: "auto" }} />
          </div>
          <h1 style={{ fontSize: "1.75rem", margin: 0 }}>The Margins Club</h1>
          <p className="hero-subtitle">
            A community for book lovers, writers, and creatives in KW. We host quiet reading nights, creative workshops, and literary events to bring people together through the magic of words. Join us in the margins.
          </p>
          <div className="icon-row">
            <a href="https://www.instagram.com/themarginsclub/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="/instagram.svg" alt="" width={20} height={20} />
            </a>
            <a href="mailto:hello@themarginsclub.ca" aria-label="Email">
              <img src="/mail.svg" alt="" width={20} height={20} />
            </a>
          </div>
        </div>

        <div className="link-grid" style={{ marginTop: "1rem" }}>
          {/* Core links */}
          <a className="btn btn-primary" target="_blank" rel="noopener noreferrer"
             href="https://noteforms.com/forms/the-margins-club-book-club-directory-hzke2b">
            Add Your Book Club
          </a>

          <a className="btn" target="_blank" rel="noopener noreferrer"
             href="https://buttered-pipe-997.notion.site/1b6742074135800b9e15f97e0388f85b?v=1b67420741358063a98a000c8e7a9b96">
            Book Club Directory
          </a>

          <a className="btn" target="_blank" rel="noopener noreferrer"
             href="https://buttered-pipe-997.notion.site/1b674207413580d6b8e5e202a7d11034?v=1b674207413580ca9dae000cb70a4a4d">
            Bookshelf
          </a>

          <a className="btn" target="_blank" rel="noopener noreferrer"
             href="https://www.eventbrite.ca/o/the-margins-club-kw-region-68851559643">
            Upcoming Events
          </a>

          <a className="btn" target="_blank" rel="noopener noreferrer"
             href="https://noteforms.com/forms/the-margins-club-collaboration-form-mrzlik">
            Collaboration Form
          </a>

          <a className="btn" target="_blank" rel="noopener noreferrer"
             href="https://noteforms.com/forms/what-are-you-reading-efd3ig">
            Add your book — What are you reading?
          </a>

          <a className="btn" target="_blank" rel="noopener noreferrer"
             href="https://www.instagram.com/themarginsclub/?hl=en">
            Instagram @themarginsclub
          </a>

          {/* Local pages */}
          <a className="btn" href="/about">About</a>
          <a className="btn" href="/contact">Contact</a>
        </div>

        <div className="support">
          <h3 style={{ margin: "0 0 0.5rem 0" }}>Support Us</h3>
          <a className="btn" href="/support">
            Learn more about supporting The Margins Club
          </a>
        </div>
      </section>
    </main>
  );
}