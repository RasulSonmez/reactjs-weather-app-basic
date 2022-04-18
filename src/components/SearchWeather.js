const SearchWeather = ({ inputText, setInputText, getWeatherData }) => {
  const onFormSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <div className="bg-light mt-5">
        <form
          onSubmit={onFormSubmit}
          className="d-flex justify-content-center p-3"
        >
          <input
            className="form-control me-2 w-50 "
            placeholder="Search City.."
            value={inputText}
            onChange={(e) => setInputText(e.target.value.toLocaleUpperCase())}
          />
          <button onClick={getWeatherData} className="btn btn-outline-primary">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchWeather;
