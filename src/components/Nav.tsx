"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#learn", label: "What we teach" },
  { href: "#courses", label: "Courses" },
  { href: "#beyond", label: "Beyond class" },
  { href: "#visit", label: "Visit" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("top");
    const threshold = () =>
      heroEl ? heroEl.offsetHeight - 80 : window.innerHeight * 0.8;

    const onScroll = () => setHidden(window.scrollY > threshold());
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <nav className={`nav${hidden ? " nav-hidden" : ""}`}>
      <div className="wrap">
        <div className="nav-in">
          <a className="brand" href="#top">
            sangeet <span>pathshala</span>
          </a>
          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="navLinks"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "Close" : "Menu"}
          </button>
          <div
            className={`nav-links${open ? " open" : ""}`}
            id="navLinks"
            onClick={(e) => {
              if ((e.target as HTMLElement).tagName === "A") setOpen(false);
            }}
          >
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
          <a className="btn" href="#visit">
            Book online class
          </a>
        </div>
      </div>
    </nav>
  );
}
