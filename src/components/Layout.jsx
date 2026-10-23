import { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { footerLinks, marquee } from "../data/site.js";
import ExternalLink from "./ExternalLink.jsx";
import PromoPopup from "./PromoPopup.jsx";

const nav = [
  { to: "/", label: "Home" },
  { to: "/videos", label: "Videos" },
  { to: "/music", label: "Music" },
];

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const marqueeText = marquee.map((m) => `★ ${m} `).join("   ");

  return (
    <>
      <header>
        <nav className="nav">
          <div className="nav-inner">
            <NavLink to="/" className="brand">The To!</NavLink>
            <div className="links">
              {nav.map((n) => (
                <NavLink key={n.to} to={n.to} end>
                  {n.label}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>
        <div className="marquee-bar" aria-hidden="true">
          <div className="marquee-track">
            <span>{marqueeText}&nbsp;&nbsp;&nbsp;</span>
            <span>{marqueeText}&nbsp;&nbsp;&nbsp;</span>
          </div>
        </div>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} The To! — All rights reserved</p>
        <div className="footer-links">
          {footerLinks.map((l) => (
            <ExternalLink key={l.name} href={l.url}>{l.name}</ExternalLink>
          ))}
        </div>
      </footer>

      <PromoPopup />
    </>
  );
}
