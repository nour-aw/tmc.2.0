
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "The Margins Club",
  description: "The Margins Club — essays, ideas, and edges.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <nav className="nav container">
            <Link href="/" className="brand" aria-label="Home">
              <Image src="/brand-logo.png" alt="Logo" width={36} height={36} />
              <span>The Margins Club</span>
              <span className="badge">Beta</span>
            </Link>
            <div className="navlinks">
              <Link href="/" className="pill">Home</Link>
<Link href="/links" className="pill">Links</Link>
<Link href="/bookshelf" className="pill">Bookshelf</Link>
<Link href="/events" className="pill">Events</Link>
              <Link href="/about" className="pill">About</Link>
              <Link href="/contact" className="btn btn-primary">Contact</Link>
<Link href="/support" className="pill">Support</Link>
<a href="https://www.instagram.com/themarginsclub/?hl=en" target="_blank" rel="noopener noreferrer" className="pill" aria-label="Instagram">
  <img src="/instagram.svg" alt="" width="20" height="20" style={{ verticalAlign: "middle" }} />
</a>
            </div>
          </nav>
        </header>
        {children}
        <footer className="footer container">
          © {new Date().getFullYear()} The Margins Club. Built with Next.js — deploy on Vercel.
        </footer>
      </body>
    </html>
  );
}
