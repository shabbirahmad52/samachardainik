import Link from "next/link";
export default function Custom404() {
  return (
    <div className="my-4">
      <h3 className="text-center">Page Not Found</h3>
      <div className="button-container text-center my-4">
        <Link href="/">
          <a className="btn btn-success text-center">Go to Home Page</a>
        </Link>
      </div>
    </div>
  );
}
