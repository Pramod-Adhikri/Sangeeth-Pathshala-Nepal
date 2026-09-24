import Nav from "@/components/Nav";
import ContactForm from "@/components/ContactForm";

const instruments = [
  {
    c: "var(--guitar)",
    icon: "🎸",
    name: "Guitar",
    desc: "Acoustic and electric. Chords and strumming from week one, then fingerstyle, scales, and lead playing. Advanced students can move into the jazz guitar track.",
    chips: ["In person", "Online", "Beginner to advanced"],
  },
  {
    c: "var(--bass)",
    icon: "🎸",
    name: "Bass",
    desc: "Groove, timing and tone. Learn to lock in with a drummer, read basslines, and hold down a band — the skill every band in Kathmandu is short of.",
    chips: ["In person", "Online", "Beginner to advanced"],
  },
  {
    c: "var(--keyboard)",
    icon: "🎹",
    name: "Keyboard",
    desc: "Both hands, from day one. Chords, scales, sight-reading and accompaniment, with room to go classical or straight into pop and film songs.",
    chips: ["In person", "Online", "Beginner to advanced"],
  },
  {
    c: "var(--drums)",
    icon: "🥁",
    name: "Drums",
    desc: "Rudiments, coordination and feel. Rock, pop, funk and Nepali folk grooves, plus the studio and stage habits that make a drummer easy to play with.",
    chips: ["In person", "Online", "Beginner to advanced"],
  },
  {
    c: "var(--ukulele)",
    icon: "🪕",
    name: "Ukulele",
    desc: "The fastest way into music. Four strings, a handful of chords, and you're playing songs by the end of the first month. Popular with younger students.",
    chips: ["In person", "Online", "Great first instrument"],
  },
  {
    c: "var(--evocal)",
    icon: "🎙️",
    name: "Eastern vocal",
    desc: "Classical foundation — sargam, raga, taal and riyaz discipline — applied to Nepali songs, bhajan and ghazal. The training that makes any voice reliable.",
    chips: ["In person", "Online", "Beginner to advanced"],
  },
  {
    c: "var(--wvocal)",
    icon: "🎤",
    name: "Western vocal",
    desc: "Breath, pitch, range and stage confidence for pop, rock and R&B. Take it alongside Eastern vocal in our hybrid track and get the best of both.",
    chips: ["In person", "Online", "Hybrid track available"],
  },
];

const courses = [
  {
    c: "var(--guitar)",
    icon: "🎓",
    title: "Regular course",
    desc: "The main programme on any of the seven instruments, structured to conservatory depth and benchmarked against Berklee and Trinity syllabi. Available as a certificate or non-certificate course.",
    meta: "Ongoing · Weekly classes",
  },
  {
    c: "var(--ukulele)",
    icon: "⚡",
    title: "Play your first song",
    desc: "A one-month crash course for complete beginners on guitar, keyboard, ukulele or drums. You leave able to play a full song, start to finish.",
    meta: "1 month",
  },
  {
    c: "var(--keyboard)",
    icon: "📖",
    title: "Western music theory",
    desc: "Notation, intervals, keys, chord construction and harmony — the grammar behind everything you play. Runs as a standalone course for any instrument.",
    meta: "12 weeks · 24 sessions",
  },
  {
    c: "var(--drums)",
    icon: "✍️",
    title: "Songwriting crash course",
    desc: "Turn ideas into finished songs: melody, lyrics, structure and arrangement, worked through on your own material.",
    meta: "Short course",
  },
  {
    c: "var(--evocal)",
    icon: "🎤",
    title: "Hybrid vocal",
    desc: "Eastern and Western vocal training in one track, for singers who want classical grounding and modern stage technique together.",
    meta: "Ongoing",
  },
  {
    c: "var(--bass)",
    icon: "🎷",
    title: "Jazz guitar",
    desc: "An advanced track for guitarists who already have their fundamentals: voicings, comping, improvisation and standards.",
    meta: "Advanced only",
  },
  {
    c: "var(--drums)",
    icon: "🥁",
    title: "Jazz drums",
    desc: "An advanced track for drummers who already have their fundamentals: swing feel, brushes, independence, comping behind soloists and trading fours.",
    meta: "Advanced only",
  },
];

const levels = [
  {
    c: "var(--sky-soft)",
    numColor: "var(--sky-deep)",
    num: 1,
    title: "Beginner",
    desc: "No experience needed, no instrument needed to start. You get a song list built for this level and a handout for every lesson.",
  },
  {
    c: "var(--sky)",
    num: 2,
    title: "Intermediate",
    desc: "You know the basics and want control — cleaner technique, harder repertoire, and theory that finally connects to your playing.",
  },
  {
    c: "var(--sky-deep)",
    num: 3,
    title: "Advanced",
    desc: "Performance-level work: improvisation, arrangement, playing with a band, and preparing for stage or studio.",
  },
];

const steps = [
  {
    c: "var(--blue)",
    title: "Talk to us",
    desc: "Call, message, or walk into the school in Handigaun. Tell us what you want to play — we'll tell you honestly where to begin.",
  },
  {
    c: "var(--sky-deep)",
    title: "Fill the registration form",
    desc: "Tell us your instrument, experience level and preferred schedule. A short form is all it takes to get your first class on the calendar.",
  },
  {
    c: "var(--blue-deep)",
    title: "Pick your schedule",
    desc: "Choose your days, times and whether you learn in person or online. Students, working people and school kids all fit differently — we work around it.",
  },
];

const beyond = [
  {
    c: "var(--drums)",
    icon: "🎙️",
    title: "Artist Management",
    desc: "If you're one of our strongest players on any instrument, we don't just teach you — we back you. Gigs, exposure and a platform to be heard, built around what you play best.",
  },
  {
    c: "var(--ukulele)",
    icon: "☕",
    title: "Cafe",
    desc: "Where everyone ends up between classes. Open mic nights, jam sessions, and the place you meet the people you'll end up in a band with.",
  },
  {
    c: "var(--bass)",
    icon: "🎬",
    title: "B-Side",
    desc: "Our video series — performances, lessons and conversations from inside the school, so you can hear what we sound like before you visit.",
  },
];

const faqs = [
  {
    q: "I've never touched an instrument. Is that a problem?",
    a: "No. Most of our students start at zero. The beginner track assumes no prior knowledge and no ability to read music.",
  },
  {
    q: "Do I need to own an instrument first?",
    a: "Not to start. Instruments are available at the school for use during class. Once you're sure you want to continue, we'll help you buy something sensible for your budget rather than the most expensive option in the shop.",
  },
  {
    q: "What age do you teach?",
    a: "Children, teenagers and adults. Younger students usually start on ukulele or keyboard; adults come to us at every age, often after years of meaning to.",
  },
  {
    q: "How do online classes work?",
    a: "Live one-to-one video classes with the same teachers and the same syllabus, plus the lesson handouts sent to you. Suitable for students outside Kathmandu and abroad.",
  },
  {
    q: "Will I get a certificate?",
    a: "If you enrol on the certificate route, yes — it includes assessment at the end of each level. The non-certificate route covers the same material without exams.",
  },
  {
    q: "Can I change instruments later?",
    a: "Yes, and many students do. Talk to your teacher first — sometimes what feels like the wrong instrument is really a practice problem we can fix.",
  },
];

export default function Home() {
  return (
    <>
      <div className="top-bar" aria-hidden="true" />
      <Nav />

      <header className="hero-band" id="top">
        <div className="hero-blob hero-blob-a" />
        <div className="hero-blob hero-blob-b" />
        <div className="wrap hero-band-in hero-band-in--solo">
          <div className="hero-copy">
            <h1>Be a musician.</h1>
            <p className="tag">
              You Don&rsquo;t Need Talent. Start With Strong Roots. Build
              Your Foundation. Find Your Sound. 
            </p>
            <div className="hero-cta">
              <a className="btn" href="#visit">
                Book online class
              </a>
              <a className="btn btn-ghost" href="#learn">
                See what we teach
              </a>
            </div>

            <div className="hero-social">
              <a
                href="https://www.instagram.com/sangeetpathshalanepal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sangeet Pathshala on Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4.2" />
                  <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@sangeetpathshala"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sangeet Pathshala on TikTok"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.5 3c.4 2.2 2 3.8 4.3 4.1v2.9c-1.6.1-3-.4-4.3-1.3v6.4c0 3.3-2.7 5.9-6 5.9S2.5 18.4 2.5 15.1s2.7-5.9 6-5.9c.4 0 .8.03 1.2.1v3.02c-.38-.12-.78-.19-1.2-.19-1.6 0-2.9 1.3-2.9 2.97 0 1.6 1.3 2.9 2.9 2.9s2.9-1.3 2.9-2.9V3h3.1z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@sangeetpathshala/featured"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sangeet Pathshala on YouTube"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="5" width="20" height="14" rx="4" />
                  <path d="M10 9l6 3-6 3V9z" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="about" id="about">
        <div className="wrap about-grid">
          <div className="about-copy">
            <h2 className="about-heading">
              Let Us Make You a <span className="about-heading-accent">Musician.</span>
            </h2>

            <p>
              Since 2012, Sangeet Pathshala has been building musicians
              from the ground up — strong foundations, confident
              musicianship, and a sound that&rsquo;s your own.
            </p>

            <p className="about-quote">Strong roots. Fearless growth.</p>

            <p>
              From your first lesson to the stage, we give you the
              skills, guidance, and confidence to keep growing — in
              person in Handigaun, Kathmandu, or online worldwide.
            </p>

            <p className="about-quote">
              Your journey starts with one note. Let&rsquo;s play it
              together.
            </p>

            <div className="hero-cta" style={{ marginTop: "10px" }}>
              <a className="btn" href="#visit">
                Join Sangeet Pathshala
              </a>
            </div>
          </div>

          <div className="about-brandcard" aria-hidden="true">
            <div className="about-brandcard-mark">
              sangeet <span>pathshala</span>
            </div>
            <div className="about-brandcard-est">
              since 2012
            </div>
          </div>
        </div>
      </section>

      <section id="learn" className="tinted">
        <div className="wrap">
          <h2>What we teach</h2>
          <p className="lede">
            Every instrument runs on the same four-pillar method — technique,
            theory, ear, and repertoire — so you build real musicianship, not
            just a few songs.
          </p>

          <div className="teach-list">
            {instruments.map((inst) => (
              <article
                className="teach-row"
                key={inst.name}
                style={{ ["--c" as string]: inst.c }}
              >
                <div className="teach-info">
                  <h3>
                    <span className="teach-dot" aria-hidden="true" />
                    {inst.name}
                  </h3>
                  <p>{inst.desc}</p>
                  <div className="chips">
                    {inst.chips.map((chip, i) => (
                      <span
                        className={`chip${i === 0 ? " solid" : ""}`}
                        key={chip}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="courses" id="courses">
        <div className="wrap">
          <h2>Courses and levels</h2>
          <p className="lede">
            Come for one month or stay for years. Certificate and
            non-certificate routes both follow the same syllabus — the
            certificate simply adds assessment.
          </p>

          <div className="course-list">
            {courses.map((c) => (
              <div
                className="course"
                key={c.title}
                style={{ ["--c" as string]: c.c }}
              >
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
                <div className="meta">{c.meta}</div>
              </div>
            ))}
          </div>

          <div className="levels">
            {levels.map((l) => (
              <div
                className="level"
                key={l.title}
                data-num={l.num}
                style={{ ["--c" as string]: l.c }}
              >
                <h3>
                  <span
                    className="level-num"
                    style={l.numColor ? { color: l.numColor } : undefined}
                  >
                    {l.num}
                  </span>
                  {l.title}
                </h3>
                <p>{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="start">
        <div className="wrap">
          <h2>How to start</h2>
          <p className="lede">Three steps, and you can do the first one today.</p>
          <div className="steps">
            {steps.map((s, i) => (
              <div className="step" key={s.title} style={{ ["--c" as string]: s.c }}>
                <div className="step-num">{i + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="beyond" id="beyond">
        <div className="wrap">
          <h2>Beyond the classroom</h2>
          <p className="lede">
            A music school should sound like one. What happens outside lesson
            hours is half the reason students stay.
          </p>
          <div className="beyond-grid">
            {beyond.map((b) => (
              <article
                className="bcard"
                key={b.title}
                style={{ ["--c" as string]: b.c }}
              >
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="wrap">
          <h2>Common questions</h2>
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="visit" id="visit">
        <div className="wrap">
          <h2>Visit the school</h2>
          <p className="lede">
            Come see a class before you decide. Message us and we&apos;ll set
            up a free trial on the instrument you want to learn.
          </p>

          <div className="visit-grid">
            <div>
              <div className="detail">
                <div className="k">Address</div>
                <div className="v">Handigaun, Kathmandu</div>
              </div>
              <div className="detail">
                <div className="k">Phone</div>
                <div className="v">
                  <a href="tel:014568339">01-4568339</a>
                </div>
              </div>
              <div className="detail">
                <div className="k">Email</div>
                <div className="v">
                  <a href="mailto:sangeetpathshalanepal@gmail.com">
                    sangeetpathshalanepal@gmail.com
                  </a>
                </div>
              </div>
              <div className="detail">
                <div className="k">Class hours</div>
                <div className="v">Sunday to Friday</div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <section className="map-section" id="map">
        <div className="wrap">
          <h2 className="map-heading">Sangeet Pathshala on a Map</h2>
        </div>
        <div className="map-embed">
          <a
            className="map-open-btn"
            href="https://www.google.com/maps/place/Sangeet+Pathshala/@27.7119836,85.3219212,15z/data=!4m10!1m2!2m1!1ssangeet+pathshala!3m6!1s0x39eb199be0a9b4bd:0xf530f89613f3f1b1!8m2!3d27.7210256!4d85.3383227!15sChFzYW5nZWV0IHBhdGhzaGFsYVoTIhFzYW5nZWV0IHBhdGhzaGFsYZIBDG11c2ljX3NjaG9vbOABAA!16s%2Fg%2F11fm5y33dd?entry=ttu&g_ep=EgoyMDI2MDkyMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Maps ↗
          </a>
          <iframe
            src="https://www.google.com/maps?q=27.7210256,85.3383227&z=16&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sangeet Pathshala location map"
          />
        </div>
      </section>

      <footer>
        <div className="wrap foot">
          <div>
            <strong style={{ color: "var(--ink)" }}>Sangeet Pathshala</strong>{" "}
            — Where music finds its roots.
            <br />
            Handigaun, Kathmandu · Regd. No. 227937/076/077
          </div>
          <div>
            <a href="tel:014568339">01-4568339</a> ·{" "}
            <a href="mailto:sangeetpathshalanepal@gmail.com">Email us</a>
          </div>
        </div>
      </footer>
    </>
  );
}
