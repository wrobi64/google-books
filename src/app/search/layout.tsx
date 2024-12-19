import Link from "next/link";
import { PropsWithChildren } from "react";

export default function SearchLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-gray-50 to-gray-100 p-4 sm:p-8">
      <header className="mb-8 mt-4 text-center">
        <Link href="/">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Book Finder</h1>
        </Link>
        <p className="text-neutral-600">Discover your next great read</p>
      </header>
      <div className="max-w-screen-2xl mx-auto">
        {children}
      </div>
    </div>
  )
}