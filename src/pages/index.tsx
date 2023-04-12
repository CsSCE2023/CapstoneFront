import Image from "next/image";
import { Inter } from "next/font/google";
import SearchInput from "@/components/inputs/searchinput";
import SearchResults from "@/components/search/SearchResult";
import { useEffect, useState } from "react";
import { SearchResult } from "@/data/interfaces/isearchresult";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  // Fetch search results from an API or another data source
  useEffect(() => {
    async function fetchSearchResults() {
      const response = await fetch("/products.json");
      const data = await response.json();
      console.log(data);
      setSearchResults(
        data.products.data.items.map((p: SearchResult) => {
          return {
            ...p,
            link: `/products/${p.id}`,
          };
        })
      );
    }

    fetchSearchResults();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SearchInput />
      <SearchResults results={searchResults} />
    </main>
  );
}
