import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchWeather from "./components/SearchWeather";
import WeatherItem from "./components/WeatherItem";

const api = {
  key: "73397bb9e714c640d94fc486b2a0333d",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [inputText, setInputText] = useState("");
  const [weather, setWeather] = useState({});

  const getWeatherData = async () => {
    try {
      const data = await axios.get(
        `${api.base}weather?q=${inputText}&appid=${api.key}&units=metric`
      );
      setWeather(data);
    } catch (error) {
      console.log(error.message);
    }
    setInputText("");
  };

  return (
    <div className="container">
      <SearchWeather
        inputText={inputText}
        setInputText={setInputText}
        getWeatherData={getWeatherData}
      />
      <WeatherItem weather={weather} />
    </div>
  );
}

export default App;
