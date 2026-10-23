import { useState } from "react";
import Modal from "./Modal.jsx";
import ExternalLink from "./ExternalLink.jsx";

export default function AlbumGrid({ albums }) {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className="album-list">
        {albums.map((a) => (
          <button key={a.id} className="album" onClick={() => setActive(a)}>
            <img src={a.cover} alt={`${a.title} cover`} width="640" height="640" loading="lazy" />
            <span>{a.title} {a.year}</span>
          </button>
        ))}
      </div>

      <Modal open={!!active} onClose={() => setActive(null)} label={active ? `${active.title} — listen` : ""}>
        {active && (
          <>
            <h2 className="album-title">{active.title} {active.year}</h2>
            <div className="album-links">
              {active.links.map((l) => (
                <ExternalLink key={l.name} href={l.url}>{l.name}</ExternalLink>
              ))}
            </div>
          </>
        )}
      </Modal>
    </>
  );
}
