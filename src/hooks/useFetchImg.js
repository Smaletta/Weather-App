import { useEffect } from 'react';
import { useWeatherData } from '../context/WeatherData';


function useFetchImg(wmoCode) {
const { img, setImg, location, loading, setLoading, error, setError } = useWeatherData();

    useEffect(() => {
        const fetchImg = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://gist.githubusercontent.com/stellasphere/9490c195ed2b53c707087c8c2db4ec0c/raw/76b0cb0ef0bfd8a2ec988aa54e30ecd1b483495d/descriptions.json?0`);
                if (!response.ok) throw new Error('Failed to fetch image');
                const result = await response.json();
                setImg(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchImg();
    }, [wmoCode]);

    return { img, loading, error };
}