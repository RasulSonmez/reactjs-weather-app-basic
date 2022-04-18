import { createContext, useState } from "react";
import axios from "axios";
const api = {
  key: "7d4ef5d23648c7c62acd3ccfa1a0a30b",
  base: "https://api.openweathermap.org/data/2.5/",
};

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);

  const getWeatherData = async () => {
    try {
      const data = await axios.get(`${api.base}?q=${search}&appid=${api.key}`);
      setWeather(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        search,
        setSearch,
        weather,
        setWeather,
        getWeatherData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
