"use client";
import { useState, useEffect } from "react";
import { SearchBar } from "@/components";

export default function Breeds() {
  const [breed, setBreed] = useState("");
  const [breeds, setBreeds] = useState(null);
  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/breeds`)
      .then((data) => data.json())
      .then(setBreeds);
  }, []);
  console.log("data", breeds);
  console.log("breed", breed);
  return (
    <>
      Breeds
      <SearchBar />
      <select onChange={(e) => setBreed(e.target.value)}>
        <option defaultValue>All Breeds</option>
        {breeds !== null &&
          breeds.map(({ name, id }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
      </select>
    </>
  );
}
