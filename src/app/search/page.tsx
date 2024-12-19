import { BookList } from "@/components/BookList";
import { SearchInput } from "@/components/SearchInput";
import { bookSearch } from "@/services/bookSearch";

export const dynamic = 'force-dynamic'

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>
}

export async function generateMetadata(props: SearchPageProps) {
  const { searchParams } = props;
  const { q } = await searchParams;
  return { title: `Book results for "${q}"`}
}

function EmptyPlaceholder() {
  return (
    <div className="flex w-full min-h-64 justify-center align-center">
      <div className="font-bold text-2xl text-slate-400 self-center">
        {"No results :/"}
      </div>
    </div>
  )
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;

  const books = await bookSearch(q);

  return (
    <div className="gap-y-10">
      <SearchInput search={q} />
      <div className="h-10" />
      {
        books?.length ? <BookList books={books} /> : <EmptyPlaceholder />
      }
    </div>
  )
}