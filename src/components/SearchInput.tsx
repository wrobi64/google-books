"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";

export interface SearchInputProps {
  search?: string;
  placeholder?: string;
}

export function SearchInput(props: SearchInputProps) {
  const { search = '', placeholder = 'Search for a book...' } = props;

  const router = useRouter();

  const [value, setValue] = useState(search);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setValue(search);
    setLoading(false);
  }, [search])

  const handleUpdateSearchParam = () => {
    if (loading) {
      return;
    }
    const validInput = value.trim().length > 0;
    if (!validInput) {
      return;
    }
    const nextParams = new URLSearchParams();
    setLoading(true);
    nextParams.set("q", value);
    router.push(`/search?${nextParams.toString()}`);
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleUpdateSearchParam();
    }
  }

  return (
    <div className="max-w-3xl mx-auto relative">
      {loading ? (
        <svg aria-hidden="true" className="absolute left-4 top-1/3 w-5 h-5 text-gray-300 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
      ) : (
        <Search 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" 
          size={24} 
        />
      )}
      <input
        onKeyDown={handleKeyDown}
        value={value}
        onChange={onChange}
        type="search"
        className="w-full h-14 pl-12 pr-4 text-lg text-gray-800 rounded-full shadow-md ring-1 ring-gray-200 outline-none transition-all duration-300 hover:ring-2 hover:ring-blue-200 focus:shadow-lg focus:ring-2 focus:ring-blue-400"
        placeholder={placeholder}
      />
      <button onClick={handleUpdateSearchParam} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300">Search</button>
    </div>
  )
}