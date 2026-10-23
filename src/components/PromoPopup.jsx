import { useCallback, useEffect, useState } from "react";
import Modal from "./Modal.jsx";
import ExternalLink from "./ExternalLink.jsx";
import { albums, promo } from "../data/site.js";

const SEEN_KEY = "promo-seen:" + promo.albumId;

// sessionStorage can throw in some in-app browsers / private modes.
function alreadySeen() {
  try {
    return sessionStorage.getItem(SEEN_KEY) === "1";
  } catch {
    return false;
  }
}

function markSeen() {
  try {
    sessionStorage.setItem(SEEN_KEY, "1");
  } catch {
    /* ignore */
  }
}

export default function PromoPopup() {
  const album = albums.find((a) => a.id === promo.albumId);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!album || alreadySeen()) return;
    const t = setTimeout(() => setOpen(true), 500);
    return () => clearTimeout(t);
  }, [album]);

  const close = useCallback(() => {
    markSeen();
    setOpen(false);
  }, []);

  if (!album) return null;

  return (
    <Modal open={open} onClose={close} label={`${album.title} — new album`}>
      <div className="promo">
        <div className="promo-cover-wrap">
          <img src={album.cover} alt={`${album.title} cover`} className="promo-cover" width="640" height="640" />
          {promo.badges.map((b, i) => (
            <span key={b} className={`promo-badge promo-badge--${i % 2 ? "bottom" : "top"}`}>{b}</span>
          ))}
        </div>
        <h2 className="promo-title">
          {album.title} <span>{album.year}</span>
        </h2>
        <p className="promo-tagline">{promo.tagline}</p>
        <div className="promo-links">
          {album.links.map((l) => (
            <ExternalLink key={l.name} href={l.url}>{l.name}</ExternalLink>
          ))}
        </div>
        <button className="promo-skip" onClick={close}>
          Continue to site →
        </button>
      </div>
    </Modal>
  );
}
