import search from "../../assets/img/Search/Search.png"

const SearchBar = () => {
  return (
    <div className="search-container">
      <div className="search-wrapper">
        <input className="search" type="text" placeholder="Search" />
        <img className="search-icon" src={search} alt="search-icon" />
      </div>
    </div>
  );
};

export default SearchBar;
