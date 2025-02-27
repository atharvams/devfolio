import Link from "next/link";

function Header() {
  return (
    <div className="w-full mx-auto">
      <div className="flex items-center justify-between px-4 py-4">
        <div className="font-[family-name:var(--font-satisfy)] text-2xl">
          Atharva..
        </div>
        <div className="flex gap-6">
          <Link href={"#"} className="hover:text-gray-500 transition-colors">
            About
          </Link>
          <Link href={"#"} className="hover:text-gray-500 transition-colors">
            Projects
          </Link>
          <Link href={"#"} className="hover:text-gray-500 transition-colors">
            Blog
          </Link>
          <Link href={"#"} className="hover:text-gray-500 transition-colors">
            OpenSource
          </Link>
        </div>
        <div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Get Resume!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
