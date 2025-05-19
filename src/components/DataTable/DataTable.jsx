import { useWeatherData } from '../../context/WeatherData';
import useFetch from '../../hooks/useFetch';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

function DataTable() {
    const { search } = useWeatherData();
    const { location, weather, loading, error } = useFetch(search);
    const { img } = useWeatherData();

    return (
        <Box id="DataTable">
            <Typography id="title" component="h1" variant="h4" gutterBottom>
                {location && location[0].name} {location && location[0].country}
                {loading && <p className="info">Loading...</p>}
                {error && <p className="error">Error: {error}</p>}
            </Typography>
            <Container sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3, lg: 4, xl: 5, xxl: 6 }} columns={{ xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 24 }}>
                    {weather && weather.list.map((index) => (
                        <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                            <Item key={index} className="Hourly">
                                <h3>{new Date(dt).toLocaleDateString()}</h3>
                                <p>Max: {weather.list[index].main.temp_max}°K</p>
                                <p>Min: {weather.list[index].main.temp_min}°K</p>
                                <p>Weather: {weather.list[index].weather[0].main}</p>
                                <p>Precipitation: {weather.list[index].rain['3h']}mm</p>
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
};

export default DataTable