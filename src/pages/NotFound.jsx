import { Link } from "react-router-dom";
import Panel from "../components/Panel.jsx";
import usePageTitle from "../usePageTitle.js";

export default function NotFound() {
  usePageTitle("Not found");
  return (
    <Panel title="404 — lost in the mosh pit" as="h1">
      <p>This page doesn't exist.</p>
      <Link to="/" className="btn btn-inline">Back home</Link>
    </Panel>
  );
}
