import React, { useState } from "react";



function SearchForm({ searchFor }) {

  const [searchTerm, setSearchTerm] = useState("");

 
  function handleSubmit(evt) {
    evt.preventDefault();
    searchFor(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  }

  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <input
              name="searchTerm"
              placeholder="Enter Search Term"
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
          <div>
            <button>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
