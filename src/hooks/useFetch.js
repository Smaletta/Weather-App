import { useEffect } from 'react';
import { useWeatherData } from '../context/WeatherData';

const apiKey = import.meta.env.VITE_API_KEY;


function useFetch() {
  const { search, setSearch, location, setLocation, weather, setWeather, loading, setLoading, error, setError } = useWeatherData();

  useEffect(() => {
    const fetchLocation = async () => {
      if (!search) return;
      try {
        setLoading(true);
        const searchResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=${apiKey}`);
        if (!searchResponse.ok) throw new Error('Failed to fetch geolocation');
        const result = await searchResponse.json();
        if (result === null) throw new Error('Location not found');
        setLocation(result);
        const geolocationResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${location[0].lat}&lon=${location[0].lon}&appid=${apiKey}`);
        if (!geolocationResponse.ok) throw new Error('Failed to fetch weather data');
        const geolocationResult = await geolocationResponse.json();
        setWeather(geolocationResult);
        setSearch('');
        setError('');
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLocation();
  }, [search, location, setLocation, setWeather, setLoading, setError]);
  return { location, weather, loading, error };
}

export default useFetch;