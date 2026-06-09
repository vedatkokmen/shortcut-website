import Image from "next/image";
import type { CSSProperties } from "react";

const modes = [
  {
    title: "Dating",
    copy: "A warmer way to meet someone with real intention.",
    color: "var(--ember)",
  },
  {
    title: "Friends",
    copy: "Find people for beach days, dinners, classes, and slow Sundays.",
    color: "var(--palm)",
  },
  {
    title: "Networking",
    copy: "Connect with builders, creatives, operators, and people in motion.",
    color: "var(--ocean)",
  },
];

const steps = [
  {
    number: "01",
    title: "Choose your mode",
    copy: "Dating, Friends, and Networking stay separate, so every profile is read in the right context.",
  },
  {
    number: "02",
    title: "Meet the highlight",
    copy: "Shortcut keeps discovery calm with a focused daily moment instead of an endless swipe feed.",
  },
  {
    number: "03",
    title: "Make the first move",
    copy: "Save, message, or propose something real when the timing feels right.",
  },
];

const profiles = [
  {
    name: "Maya, 29",
    place: "Canggu",
    mode: "Dating",
    note: "Open to a quiet dinner this week",
    color: "var(--ember)",
  },
  {
    name: "Leo, 32",
    place: "Uluwatu",
    mode: "Friends",
    note: "Coffee, long walks, dawn surf",
    color: "var(--palm)",
  },
  {
    name: "Anya, 27",
    place: "Ubud",
    mode: "Networking",
    note: "Building a small creative studio",
    color: "var(--ocean)",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5">
      <path
        d="M4 10h10.2M10.8 5.8 15 10l-4.2 4.2"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function PhonePreview() {
  return (
    <div className="phone-shell" aria-label="Shortcut app preview">
      <div className="phone-screen">
        <div className="phone-status">
          <span>9:41</span>
          <span className="status-dot" />
        </div>
        <div>
          <p className="app-wordmark">Shortcut</p>
          <p className="app-label">BALI SOCIAL DISCOVERY</p>
        </div>
        <div className="highlight-card">
          <p className="mini-label">TODAY&apos;S HIGHLIGHT</p>
          <h2>Reveals at golden hour</h2>
          <p>One profile. One mode. Enough room to choose well.</p>
          <button type="button">Propose a Date</button>
        </div>
        <div className="mode-switcher">
          {modes.map((mode) => (
            <span key={mode.title}>
              <i style={{ backgroundColor: mode.color }} />
              {mode.title}
            </span>
          ))}
        </div>
        <div className="tide-stack">
          {profiles.map((profile) => (
            <div className="mini-profile" key={profile.name}>
              <div className="avatar" style={{ backgroundColor: profile.color }} />
              <div>
                <strong>{profile.name}</strong>
                <span>{profile.place} · {profile.mode}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--paper)] text-[var(--ink)]">
      <section className="hero-section">
        <Image
          src="/welcome-lifestyle.png"
          alt="Friends talking at sunset in Bali"
          fill
          sizes="100vw"
          priority
          className="hero-image"
        />
        <div className="hero-scrim" />

        <header className="site-header">
          <a href="#" className="brand" aria-label="Shortcut home">
            Shortcut
          </a>
          <nav aria-label="Primary navigation">
            <a href="#how">How it works</a>
            <a href="#modes">Modes</a>
            <a href="#waitlist">Waitlist</a>
          </nav>
          <a href="#waitlist" className="header-cta">
            Join newsletter
            <ArrowIcon />
          </a>
        </header>

        <div className="hero-content">
          <div className="hero-copy">
            <p className="discovery-label">BALI SOCIAL DISCOVERY</p>
            <h1>
              Meet people 
              <span>in your mode.</span>
            </h1>
            <p className="hero-subtitle">
              Intentional connections for dating, friendship and networking in
              Bali and beyond.
            </p>
            <div className="hero-actions">
              <a href="#waitlist" className="primary-button">
                Join now
                <ArrowIcon />
              </a>
              <a href="#how" className="text-button">
                See how it works
                <ArrowIcon />
              </a>
            </div>
            <div className="mode-lines" aria-label="Shortcut discovery modes">
              {modes.map((mode) => (
                <span key={mode.title}>
                  <i style={{ backgroundColor: mode.color }} />
                  {mode.title}
                </span>
              ))}
            </div>
          </div>

          <PhonePreview />
        </div>
      </section>

      <section className="intro-band" id="how">
        <div className="section-heading">
          <p className="eyebrow">THE RITUAL</p>
          <h2>Less swiping. More signal.</h2>
        </div>
        <div className="steps-grid">
          {steps.map((step) => (
            <article className="step-card" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="modes-section" id="modes">
        <div className="mode-section-copy">
          <p className="eyebrow">THREE MODES</p>
          <h2>Keep every connection in its lane.</h2>
          <p>
            Shortcut lets you show different sides of yourself without mixing
            date energy, friend energy, and work energy into one noisy profile.
          </p>
        </div>
        <div className="mode-cards">
          {modes.map((mode) => (
            <article key={mode.title} style={{ "--mode": mode.color } as CSSProperties}>
              <div className="mode-mark" />
              <h3>{mode.title}</h3>
              <p>{mode.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="tide-section">
        <div className="section-heading">
          <p className="eyebrow">THE TIDE</p>
          <h2>Profiles with context, not pressure.</h2>
        </div>
        <div className="profile-row">
          {profiles.map((profile) => (
            <article className="profile-card" key={profile.name}>
              <div className="profile-photo" style={{ backgroundColor: profile.color }} />
              <div>
                <p>{profile.mode}</p>
                <h3>{profile.name}</h3>
                <span>{profile.place}</span>
                <strong>{profile.note}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="waitlist-section" id="waitlist">
        <div>
          <h2>Shortcut</h2>
        </div>
        <form className="waitlist-form">
          <label htmlFor="email">Join the Shortcut newsletter</label>
          <div>
            <input id="email" name="email" type="email" placeholder="your@email.com" />
            <button type="submit">
              Join waitlist
              <ArrowIcon />
            </button>
          </div>
          <p>No spam. Just launch updates and early invites.</p>
        </form>
      </section>
    </main>
  );
}
