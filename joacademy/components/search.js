import { FilterCourses } from "@/lib/util";
import { useState } from "react";

export default function Search({ courses, onFilter }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = FilterCourses(courses, searchQuery);



  function handleQuerySearch(e) {
    setSearchQuery(e.target.value);
    return onFilter(filteredCourses);
  }

  return (
    <>
      {/* Search */}
      <div className="flex gap-2 mb-6 w-3/4 m-auto">
        <input
          placeholder="Search here"
          value={searchQuery}
          onChange={handleQuerySearch}
          className="flex-1 border rounded-lg px-4 py-3 text-sm bg-white"
        />

       
      </div>
    </>
  );
}
