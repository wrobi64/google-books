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

  useEffect(() => {
    setValue(search);
  }, [search])

  const handleUpdateSearchParam = () => {
    const validInput = value.trim().length > 0;
    if (!validInput) {
      return;
    }
    const nextParams = new URLSearchParams();
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
      <Search 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" 
        size={24} 
      />
      <input
        onKeyDown={handleKeyDown}
        value={value}
        onChange={onChange}
        type="search"
        className="w-full h-14 pl-12 pr-4 text-lg rounded-full shadow-md ring-1 ring-gray-200 outline-none transition-all duration-300 hover:ring-2 hover:ring-blue-200 focus:shadow-lg focus:ring-2 focus:ring-blue-400"
        placeholder={placeholder}
      />
      <button onClick={handleUpdateSearchParam} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300">Search</button>
    </div>
  )
}