import { Outlet } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";

export default function Root() {
  return (
    <main>
      <Navbar />

      <div id="detail">
        <Outlet />
      </div>
    </main>
  );
}
