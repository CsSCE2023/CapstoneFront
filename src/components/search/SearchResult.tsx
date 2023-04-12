import React from "react";

interface SearchResultProps {
  result: {
    title: string;
    link: string;
    description: string;
  };
}

const SearchResult: React.FC<SearchResultProps> = ({ result }) => (
  <div className="p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
    <div className="bg-white shadow-md rounded p-6">
      <h3 className="text-lg font-semibold mb-2">{result.title}</h3>
      <a
        href={result.link}
        className="text-blue-500 hover:text-blue-700 underline"
      >
        {result.link}
      </a>
      <p className="mt-2 text-gray-700">{result.description}</p>
    </div>
  </div>
);

interface SearchResultsProps {
  results: Array<{
    title: string;
    link: string;
    description: string;
  }>;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => (
  <div className="search-results-container mt-8">
    <div className="flex flex-wrap -m-4">
      {results.map((result, index) => (
        <SearchResult key={index} result={result} />
      ))}
    </div>
  </div>
);

export default SearchResults;
