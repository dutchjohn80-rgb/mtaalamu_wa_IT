import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer>
      <div className="wrap footer">
        <span>© {site.currentYear} {site.fullName}</span>
        <span className="foot-links">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.github}>GitHub</a>
        </span>
      </div>
      <div className="wrap foot-mega" aria-hidden="true">John Dutch.</div>
    </footer>
  );
}
