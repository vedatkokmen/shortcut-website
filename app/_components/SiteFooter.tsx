import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <Link href="/" className="brand" aria-label="Shortcut home">
            Shortcut
          </Link>
          <p>Social discovery, curated — for dating, friends, and networking.</p>
        </div>
        <nav className="site-footer-nav" aria-label="Footer navigation">
          <Link href="/#how">How it works</Link>
          <Link href="/#modes">Modes</Link>
          <Link href="/#download">Download</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </nav>
      </div>
      <div className="site-footer-legal">
        <span>© {year} Shortcut. All rights reserved.</span>
        <span className="site-footer-legal-links">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </span>
      </div>
    </footer>
  );
}
