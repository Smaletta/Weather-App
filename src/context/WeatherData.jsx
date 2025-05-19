import { createContext, useContext, useState } from "react";

export const WeatherDataContext = createContext();

export const WeatherDataProvider = ({ children }) => {
    const [search, setSearch] = useState("");
    const [location, setLocation] = useState(null);
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [img, setImg] = useState(null);
    return <WeatherDataContext.Provider value={{ search, setSearch, location, setLocation, weather, setWeather, loading, setLoading, error, setError, img, setImg }}>
        {children}
    </WeatherDataContext.Provider>;
};

export const useWeatherData = () => useContext(WeatherDataContext);