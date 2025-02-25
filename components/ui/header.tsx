import Link from "next/link";

export function Header() {
  return (
    <header className="border-b px-4 py-4 md:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/image/icon.jpg" alt="LOOKTOOK Logo" width={24} height={24} />
          <span className="text-xl font-bold">LooKTooK</span>
        </Link>
        <nav className="hidden space-x-6 md:flex">
          <Link href="/" className="text-sm hover:text-primary">
            首页
          </Link>
        </nav>
      </div>
    </header>
  );
}
