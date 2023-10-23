"use client";
import { useState } from "react";


export default function AddBeer() {
  const [name, setName] = useState<string>("");
  // handle the form submit to /api/selects/beers

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/beers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
    if (res.ok) {
      console.log("Beer added successfully!");
    } else {
      const error = await res.text();
      console.error(`Failed to add beer: ${error}`);
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <form>
      <div>
        <label className="me-3" htmlFor="name">
          Add Beer:
        </label>
        <input
          className="border border-black rounded p-1 me-3"
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />

        <button
          className="border border-black rounded p-1"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
