import Panel from "../components/Panel.jsx";
import VideoGrid from "../components/VideoGrid.jsx";
import { videos } from "../data/site.js";
import usePageTitle from "../usePageTitle.js";

export default function Videos() {
  usePageTitle("Videos");
  return (
    <Panel title="All Videos" as="h1">
      <VideoGrid ids={videos} />
    </Panel>
  );
}
