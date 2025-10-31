import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
      <Link href="/" className="font-bold text-xl text-blue-600">
        Dental AI
      </Link>
      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/upload">Upload</Link>
      </div>
    </nav>
  );
}
