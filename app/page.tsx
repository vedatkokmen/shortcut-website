import Image from "next/image";
import type { CSSProperties } from "react";
import { SiteFooter } from "./_components/SiteFooter";
import { siteConfig } from "./site-config";

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

const downloadOptions = [
  {
    store: "App Store",
    kicker: "iPhone",
    href: siteConfig.appStoreUrl,
    qrSrc: "/app-store-qr.svg",
    qrAlt: "QR code to open Shortcut on the App Store",
  },
  {
    store: "Google Play",
    kicker: "Android",
    href: siteConfig.playStoreUrl,
    qrSrc: "/play-store-qr.svg",
    qrAlt: "QR code to open Shortcut on Google Play",
  },
] as const;

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteConfig.name,
  applicationCategory: "SocialNetworkingApplication",
  operatingSystem: "iOS, Android",
  url: siteConfig.url,
  description: siteConfig.description,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  sameAs: [siteConfig.appStoreUrl, siteConfig.playStoreUrl],
};

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

function AppleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="store-icon">
      <path
        d="M17.2 12.6c0-2 1.6-3 1.7-3.1-1-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 0-.7-.7-1.7-.7-2.7-.7-1.4 0-2.8.8-3.5 2.1-1.5 2.6-.4 6.4 1 8.5.7 1 1.5 2.1 2.6 2.1 1 0 1.4-.7 2.7-.7s1.6.7 2.7.7c1.1 0 1.8-1 2.5-2 .8-1.2 1.2-2.3 1.2-2.4-.1 0-2.3-.9-2.3-2.9ZM15.2 6.6c.6-.7 1-1.7.9-2.6-.9 0-1.9.6-2.5 1.3-.6.6-1 1.6-.9 2.5.9.1 1.9-.5 2.5-1.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="store-icon">
      <path
        d="m5.8 3.2 9.8 8.8-9.8 8.8c-.4-.3-.6-.8-.6-1.5V4.7c0-.7.2-1.2.6-1.5Z"
        fill="currentColor"
        opacity=".88"
      />
      <path
        d="m16.5 12.8 2.6 2.3c.9.8.9 1.9 0 2.4l-9.4 5c-.8.4-1.5.2-1.9-.4l8.7-9.3Z"
        fill="currentColor"
        opacity=".7"
      />
      <path
        d="m16.5 11.2-8.7-9.3c.4-.6 1.1-.8 1.9-.4l9.4 5c.9.5.9 1.6 0 2.4l-2.6 2.3Z"
        fill="currentColor"
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
          <span>100%</span>
        </div>
        <div>
          <p className="app-wordmark">Shortcut</p>
          <p className="app-label">SOCIAL DISCOVERY, CURATED</p>
        </div>
        <div className="highlight-card">
          <p className="mini-label">TODAY&apos;S HIGHLIGHT</p>
          <h2>Reveals at golden hour</h2>
          <p>One profile. One mode. Enough room to choose well.</p>
          <button type="button">Propose a Date</button>
          <button type="button">Message</button>
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
                <span>{profile.place} - {profile.mode}</span>
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
    <>
    <main className="min-h-screen overflow-hidden bg-[var(--paper)] text-[var(--ink)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />
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
            <a href="#download">Download</a>
          </nav>
          <a href="#download" className="header-cta">
            Download app
            <ArrowIcon />
          </a>
        </header>

        <div className="hero-content">
          <div className="hero-copy">
            <p className="discovery-label">SOCIAL DISCOVERY, CURATED</p>
            <h1>
              Skip the swipe.{" "}
              <span className="hero-title-line">Take the </span>
              <span className="hero-title-emphasis">shortcut.</span>
            </h1>
            <p className="hero-subtitle">
              Intentional connections for dating, friendship and networking.
            </p>
            <div className="hero-actions">
              <a href="#download" className="primary-button">
                Download app
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
          <h2>Less swiping. More intention.</h2>
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
          <p className="eyebrow">THE FLOW</p>
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

      <section className="download-section" id="download">
        <div className="download-copy">
          <p className="eyebrow">DOWNLOAD SHORTCUT</p>
          <h2>Scan once. Meet in your mode.</h2>
          <p>
            Open the store on your phone or scan a QR from desktop to get
            Shortcut for iPhone or Android.
          </p>
        </div>
        <div className="download-panel" aria-label="Shortcut download links">
          {downloadOptions.map((option) => (
            <article className="download-card" key={option.store}>
              <a
                className="store-link"
                href={option.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open Shortcut on ${option.store}`}
              >
                {option.store === "App Store" ? <AppleIcon /> : <PlayIcon />}
                <span>
                  <small>{option.kicker}</small>
                  {option.store}
                </span>
                <ArrowIcon />
              </a>
              <a
                className="qr-link"
                href={option.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${option.store} QR target`}
              >
                <Image
                  src={option.qrSrc}
                  alt={option.qrAlt}
                  width={188}
                  height={188}
                  loading="eager"
                />
              </a>
              <p>Scan for {option.kicker}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
    <SiteFooter />
    </>
  );
}
