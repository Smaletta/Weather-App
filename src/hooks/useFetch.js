import { useEffect } from 'react';
import { useWeatherData } from '../context/WeatherData';


function useFetch() {
  const { search, setSearch, location, setLocation, weather, setWeather, loading, setLoading, error, setError } = useWeatherData();

  useEffect(() => {
    const fetchLocation = async () => {
      if (!search) return;
      try {
        setLoading(true);
        const searchResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${search}&count=1&language=en`);
        if (!searchResponse.ok) throw new Error('Failed to fetch geolocation');
        const result = await searchResponse.json();
        if (result.results === undefined) throw new Error('Location not found');
        setLocation(result);
        const geolocationResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${location.results[0].latitude}&longitude=${location.results[0].longitude}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weather_code`);
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