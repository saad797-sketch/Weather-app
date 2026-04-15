import { useState } from "react";

interface Props {
  onSearch: (city: string) => void;
}

function SearchBar({ onSearch }: Props) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (!city.trim()) return;
    onSearch(city);
    setCity("");
  };

  return (
    <div className="search-bar">
      <input
        className="search-input"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Buscar ciudad"
      />
      <button className="search-button" onClick={handleSearch}>
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;