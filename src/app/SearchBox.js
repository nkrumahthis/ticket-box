"use client";

import React, { useState } from 'react';

export default function SearchBox() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Perform search logic or pass the searchQuery to the parent component
    console.log('Search query:', searchQuery);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search..."
        className="border border-gray-300 rounded px-4 py-2"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 ml-2"
      >
        Search
      </button>
    </form>
  );
}
