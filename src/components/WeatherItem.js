import React from "react";

const WeatherItem = ({ weather }) => {
  return (
    <div className="container">
      <div className="row mt-3 gap-3  d-flex justify-content-center ">
        {typeof weather.data !== "undefined" ? (
          <div className="col-md-4 card text-center">
            <div className="card-body">
              <h5 className="card-title">
                {" "}
                {weather.data.name}, {weather.data.sys.country}
              </h5>
              <h6>{new Date(weather.data.dt * 1000).toLocaleDateString()}</h6>
              <hr />

              <img
                src={`http://openweathermap.org/img/w/${weather.data.weather[0].icon}.png`}
                alt="imgicon"
              />
              <h1> {Math.round(weather.data.main.temp)} &deg; C</h1>
              <p className="card-text fw-bold">
                {" "}
                {weather.data.weather[0].description}
              </p>
              <p className="card-text">
                {" "}
                {Math.round(weather.data.main.temp_min)} &deg; C |{" "}
                {Math.round(weather.data.main.temp_min)} &deg; C
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default WeatherItem;
