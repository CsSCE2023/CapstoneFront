import React from "react";
import { truncate } from "lodash";
import Image from "next/image";
import Link from "next/link";
import { SearchResult } from "@/data/interfaces/isearchresult";

interface SearchResultProps {
  result: {
    id: string;
    title: string;
    link: string;
    description: string;
    image: string;
    name: string;
  };
}

// const myLoader = ({ src, width, quality }) => {
//   return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
// };
const Product: React.FC<SearchResultProps> = ({ result }) => (
  <div className="p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 cursor-pointer">
    <div className="bg-white shadow-md rounded p-6 cursor-pointer hover:scale-110 hover:transition-transform">
      <Link
        href={`/products/${result.id}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image
          src={"https://picsum.photos/200/200"}
          alt="Picture of the author"
          width={200}
          height={200}
        />
        <h3 className="text-lg font-semibold mb-2 text-black">{result.name}</h3>
        <h4 className="line-through">Price: € 7.99</h4>
        <h4>Discount: € 7.99</h4>
        <p className="mt-2 text-gray-700">Turkish supermarket</p>
      </Link>
    </div>
  </div>
);

interface SearchResultsProps {
  results: Array<SearchResult>;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => (
  <div className="search-results-container mt-8 max-w-5xl">
    <div className="flex flex-wrap -m-4">
      {results.map((result, index) => (
        <Product key={index} result={result} />
      ))}
    </div>
  </div>
);

export default SearchResults;
