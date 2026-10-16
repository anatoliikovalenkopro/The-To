import Panel from "../components/Panel.jsx";
import AlbumGrid from "../components/AlbumGrid.jsx";
import { albums } from "../data/site.js";
import usePageTitle from "../usePageTitle.js";

export default function Music() {
  usePageTitle("Music");
  return (
    <Panel title="Discography" as="h1">
      <AlbumGrid albums={albums} />
    </Panel>
  );
}
