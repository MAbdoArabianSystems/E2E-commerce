import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full text-center h-[55vh] flex flex-col gap-10">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <div className="w-full text-center my-10">
        <Link
          href="/"
          className="w-40 h-16 bg-black text-[#fff] p-4 rounded-md"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
