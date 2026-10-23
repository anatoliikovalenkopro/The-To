import { useState } from "react";
import Panel from "../components/Panel.jsx";
import VideoGrid from "../components/VideoGrid.jsx";
import AlbumGrid from "../components/AlbumGrid.jsx";
import ExternalLink from "../components/ExternalLink.jsx";
import { albums, contact, interests, socials, videos } from "../data/site.js";
import logo from "../assets/logo.webp";
import usePageTitle from "../usePageTitle.js";

const PREVIEW_COUNT = 4;

export default function Home() {
  usePageTitle();
  const [showAll, setShowAll] = useState(false);
  const shown = showAll ? videos : videos.slice(0, PREVIEW_COUNT);

  return (
    <div className="home">
      <aside className="sidebar">
        <Panel className="p-logo">
          <img src={logo} className="logo" alt="The To! logo" width="720" height="421" />
        </Panel>

        <Panel title="Contact" className="p-contact">
          <div className="btn-group">
            {contact.map((l) => (
              <ExternalLink key={l.name} href={l.url} className="btn">{l.name}</ExternalLink>
            ))}
          </div>
        </Panel>

        <Panel title="Follow Us" className="p-follow">
          <div className="btn-group">
            {socials.map((l) => (
              <ExternalLink key={l.name} href={l.url} className="btn">{l.name}</ExternalLink>
            ))}
          </div>
        </Panel>

        <Panel title="Interests" className="p-interests">
          <ul className="interests">
            {interests.map((it) => (
              <li key={it.text}>
                {it.label && <b>{it.label}: </b>}
                {it.text}
              </li>
            ))}
          </ul>
        </Panel>
      </aside>

      <div className="content">
        <Panel title="Videos" className="p-videos">
          <VideoGrid ids={shown} />
          {videos.length > PREVIEW_COUNT && (
            <button className="toggle" onClick={() => setShowAll((s) => !s)}>
              {showAll ? "Show Less" : "Show More"}
            </button>
          )}
        </Panel>

        <Panel title="Discography" className="p-disco">
          <AlbumGrid albums={albums} />
        </Panel>
      </div>
    </div>
  );
}
