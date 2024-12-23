import { Link, useRouteError } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import { Button } from "./components/ui/button";

interface RouteError {
  statusText?: string;
  message?: string;
}

export default function ErrorPage() {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <div id="error-page">
      <Navbar />
      <div className="h-[70vh] flex items-center flex-col justify-center space-y-3">
        <h1 className="text-5xl font-bold">TrendMart</h1>
        <div className="flex items-center justify-center h-screen px-4 text-center">
          <h2 className="text-xl md:text-3xl leading-relaxed">
            Welcome to <strong>TrendMart</strong>, your go-to destination for a seamless and enjoyable online shopping experience.
            At TrendMart, we bring together a wide range of products designed to cater to your everyday needs with ease and convenience.
            <br />
            <br />
            With a user-friendly interface, smooth product browsing, and a hassle-free checkout process, TrendMart ensures that your shopping journey is quick, simple, and satisfying.
            <br />
            <br />
            Thank you for choosing <strong>TrendMart</strong> – where trends meet convenience.
          </h2>
        </div>
        <Link to="/">
          {" "}
          <Button>Return Home</Button>
        </Link>
      </div>
    </div>
  );
}
