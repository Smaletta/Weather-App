import { useState, useEffect } from 'react';
import useWeatherData from './useWeatherData';
import useFetch from './useFetch';
const locationApiUrl = 'https://geocoding-api.open-meteo.com/v1/search?';

// Function to convert location to coordinates
async function useGeoLocation(location) {

    try {
        const geoResponse = useFetch(`${locationApiUrl}name=${location}&count=1&language=en`);
        console.log(location);
        const geoData = await geoResponse.json();
        return useWeatherData(geoData.results[0]);
    } catch (error) {
        console.error("error");
    }
}

export default useGeoLocation;