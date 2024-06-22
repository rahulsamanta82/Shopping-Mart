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
        <h1 className="text-5xl font-bold">404!</h1>
        <h2 className="text-xl md:text-3xl">
          Sorry, we could not find that page.
        </h2>
        <p className="text-sm  text-center">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <p>
          {error.statusText} {error.message}
        </p>
        <Link to="/">
          {" "}
          <Button>Return Home</Button>
        </Link>
      </div>
    </div>
  );
}
