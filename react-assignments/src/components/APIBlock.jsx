import { useState, useEffect } from "react";

export default function APIProvider() {
  const [characters, setCharacters] = useState([]);

  const fetchMovies = async () => {
    const url = "https://thronesapi.com/api/v2/Characters";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      setCharacters(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Character Names</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.firstName}</li>
        ))}
      </ul>
    </div>
  );
}
