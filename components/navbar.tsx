import Link from "next/link";

const NavBar = () => {
  return (
    <div className="bg-white w-full sticky top-0 p-4 shadow-gray-100 shadow-md">
      <Link
        className="text-black hover:text-green-500 active:text-green-500 transition duration-300 p-2"
        href="/"
      >
        Widgets
      </Link>
      <Link
        className="text-black hover:text-green-500 active:text-green-500 transition duration-300 p-2"
        href="/metrics"
      >
        Metrics
      </Link>
    </div>
  );
};

export default NavBar;
