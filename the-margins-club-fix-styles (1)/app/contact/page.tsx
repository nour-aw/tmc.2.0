
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData as any)),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setStatus(data.message);
    form.reset();
  }

  return (
    <main className="container">
      <div className="card" style={{ maxWidth: 720, margin: "0 auto" }}>
        <h1 style={{ fontSize: "1.75rem" }}>Contact</h1>
        <form onSubmit={onSubmit} style={{ marginTop: "1rem", display: "grid", gap: "0.75rem" }}>
          <input required name="name" placeholder="Your name" className="pill" />
          <input required type="email" name="email" placeholder="Your email" className="pill" />
          <textarea required name="message" placeholder="Your message" rows={5} className="pill" />
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
        {status && <p style={{ marginTop: "0.75rem" }}>{status}</p>}
      </div>
    </main>
  );
}
