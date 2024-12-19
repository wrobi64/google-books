'use client'
import { BookData } from "@/types/Books";
import { BookIcon } from "./icons";

export function BookList({ books }: { books: BookData[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {books.map((book: BookData) => (
        <BookListItem key={book.id} data={book} />
      ))}
    </div>
  )
}

function BookListItem({ data }: { data: BookData }) {
  if (data.thumbnail) {
    return (
      <img
        className="h-auto max-w-full rounded-lg"
        src={data.thumbnail}
      />
    )
  }
  return (
    <BookIcon width={150} height={250} />
  )
}