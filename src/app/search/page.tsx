import { BookList } from "@/components/BookList";
import { SearchInput } from "@/components/SearchInput";
import { bookSearch } from "@/services/bookSearch";

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
    <div>
      no results
    </div>
  )
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;

  const books = await bookSearch(q);

  return (
    <div>
      <SearchInput
        search={q}
      />
      {`${q}`}
      {
        books?.length ? <BookList books={books} /> : <EmptyPlaceholder />
      }
    </div>
  )
}