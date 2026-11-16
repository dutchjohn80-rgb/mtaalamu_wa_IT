import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap hero">
      <p className="kicker">Hitilafu 404</p>
      <h1 className="sec-title" style={{ marginTop: 16 }}>Ukurasa haupo.</h1>
      <p className="lead" style={{ margin: "24px 0 32px" }}>Huenda kiungo kimebadilika. Rudi mwanzo ujaribu tena.</p>
      <Link className="btn primary" href="/">Rudi mwanzo</Link>
    </section>
  );
}
