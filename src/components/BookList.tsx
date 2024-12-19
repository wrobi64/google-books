'use client'
import { BookData } from "@/types/Books";
import { BookIcon } from "./icons";
import Image from 'next/image';

export function BookList({ books }: { books: BookData[] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-10">
      {books.map((book: BookData, i) => (
        <BookListItem key={`${book.id}-${i}`} book={book} />
      ))}
    </div>
  )
}

function BookListItem({ book }: { book: BookData }) {
  return (
    <div className="group overflow-visible h-fit sm:h-72 bg-transparent rounded-lg transition-all duration-300 outline-transparent hover:shadow-xl hover:outline hover:outline-1 hover:outline-gray-200 hover:bg-white">
      <div className="flex flex-col sm:flex-row">
        <div className="flex-none transition ease-in-out overflow-hidden w-fit h-fit rounded-lg shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:scale-105 ml-6 sm:ml-0">
          {book.thumbnail ? (
            <Image
              src={book.thumbnail}
              alt={`Cover of ${book.title}`}
              width={250}
              height={288}
              className="object-cover object-center h-72"
            />
          ) : <BookIcon className="w-250 h-72" /> }
        </div>
        <div className="grow p-3">
          <h3 className="text-xl sm:text-2xl font-bold line-clamp-2 text-gray-800">{book.title}</h3>
          <p className="text-md sm:text-lg text-gray-600 mb-3">{book?.authors?.[0] ?? 'Unknown Author'}</p>
          <p className="text-sm text-gray-700 line-clamp-6">{book.description}</p>
        </div>
      </div>
    </div>
  );
}