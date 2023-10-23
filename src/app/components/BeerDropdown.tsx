"use client";

import { useState, useEffect } from "react";

export default function beerDropdown({
  data,
}: {
  data: Record<string, { _id: string; name: string }>;
}) {
  const beerArray = Object.values(data);
  const [selectedBeer, setSelectedBeer] = useState("");
  
  useEffect(() => {
    console.log("CHANGED BEER NAME", selectedBeer);
  }, [selectedBeer]);

  return (
    <>
      <select
        value={selectedBeer}
        onChange={(e) => setSelectedBeer(e.target.value)}
        name="beer"
        className="p-1 border rounded-lg border-black"
      >
        {beerArray &&
          beerArray.map((data: { _id: string; name: string }) => (
            <option key={data._id}>{data?.name}</option>
          ))}
      </select>
    </>
  );
}
