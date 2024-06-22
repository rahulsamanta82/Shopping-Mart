import { Outlet } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

export default function Root() {
  return (
    <>
      <Navbar />
      <div id="detail">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
