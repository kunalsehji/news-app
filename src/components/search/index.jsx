import React from "react";

const Index = ({ searchTerm, handleSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for articles"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Index;
