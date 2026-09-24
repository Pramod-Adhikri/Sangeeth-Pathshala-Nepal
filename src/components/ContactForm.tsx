"use client";

import { useState, useRef, useEffect } from "react";

export default function ContactForm() {
  const [note, setNote] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!sent) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSent(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [sent]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    setSending(true);
    setNote("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(f),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) throw new Error(data.message || "request failed");
      f.reset();
      setSent(true);
    } catch {
      /* fallback: open the visitor's own email app if the automatic send fails */
      const name = (f.elements.namedItem("name") as HTMLInputElement)?.value ?? "";
      const phone = (f.elements.namedItem("phone") as HTMLInputElement)?.value ?? "";
      const email = (f.elements.namedItem("email") as HTMLInputElement)?.value ?? "";
      const instrument =
        (f.elements.namedItem("instrument") as HTMLSelectElement)?.value ?? "";
      const message =
        (f.elements.namedItem("message") as HTMLTextAreaElement)?.value ?? "";
      const body = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nInstrument: ${instrument}\n\n${message}`;
      window.location.href =
        "mailto:sangeetpathshalanepal@gmail.com?subject=" +
        encodeURIComponent("Class enquiry — " + name) +
        "&body=" +
        encodeURIComponent(body);
      setNote("Opening your email app instead. If nothing happens, call 01-4568339.");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <form id="enquiry" ref={formRef} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="f-name">Your name</label>
          <input id="f-name" name="name" placeholder="Name" required />
        </div>
        <div>
          <label htmlFor="f-phone">Phone number</label>
          <input id="f-phone" name="phone" placeholder="98XXXXXXXX" required />
        </div>
        <div>
          <label htmlFor="f-email">Your email</label>
          <input
            id="f-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />
        </div>
        <div>
          <label htmlFor="f-inst">What do you want to learn?</label>
          <select id="f-inst" name="instrument" defaultValue="Guitar">
            <option>Guitar</option>
            <option>Bass</option>
            <option>Keyboard</option>
            <option>Drums</option>
            <option>Ukulele</option>
            <option>Eastern vocal</option>
            <option>Western vocal</option>
            <option>Music theory</option>
            <option>Not sure yet</option>
          </select>
        </div>
        <div>
          <label htmlFor="f-msg">Anything else?</label>
          <textarea
            id="f-msg"
            name="message"
            rows={3}
            placeholder="Your level, preferred days, in person or online"
          />
        </div>
        {/* honeypot — invisible to real visitors, catches simple bots */}
        <input
          type="text"
          name="_honey"
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />
        <button className="btn" type="submit" disabled={sending}>
          {sending ? "Sending…" : "Send enquiry"}
        </button>
        {note && (
          <p style={{ fontSize: ".88rem", color: "var(--ink-soft)", margin: 0 }}>{note}</p>
        )}
      </form>

      {sent && (
        <div
          className="enquiry-modal-backdrop"
          onClick={() => setSent(false)}
          role="presentation"
        >
          <div
            className="enquiry-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="enquiry-modal-close"
              onClick={() => setSent(false)}
              aria-label="Close"
              type="button"
            >
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6l12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div className="enquiry-modal-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 12.5 9.5 18 20 6"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 id="enquiry-modal-title">Enquiry received</h3>
            <p>
              Thank you for getting in touch with Sangeet Pathshala. Your
              enquiry has been received, and a member of our team will
              contact you shortly to arrange your free trial class. We've
              also sent a confirmation to your email.
            </p>
            <button className="btn" onClick={() => setSent(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
