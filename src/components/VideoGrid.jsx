import { useState } from "react";
import Modal from "./Modal.jsx";

export default function VideoGrid({ ids }) {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className="videos">
        {ids.map((id, i) => (
          <button key={id} className="video" onClick={() => setActive(id)} aria-label={`Play video ${i + 1}`}>
            <img src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" />
            <span className="play" aria-hidden="true">▶</span>
          </button>
        ))}
      </div>

      <Modal open={!!active} onClose={() => setActive(null)} label="Video player" wide>
        <div className="video-frame">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${active}?autoplay=1`}
            title="YouTube video player"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        </div>
      </Modal>
    </>
  );
}
