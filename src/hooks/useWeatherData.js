import useFetch from "./useFetch";

async function useWeatherData() {
     try {
        const weatherResponse = await useFetch(`${weatherApiUrl}?latitude=${location.latitude}&longitude=${location.longitude}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weather_code`);
        const weatherData = await weatherResponse.json();
        // console.log(weatherData);
        return weatherData;
    } catch (error) {
        console.error("error");
    }
}

export default useWeatherData;