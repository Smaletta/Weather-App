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

    return (
        <Box id="DataTable">
            <Typography id="title" component="h1" variant="h4" gutterBottom>
                {location && location.results[0].name} {location && location.results[0].country}
                {loading && <p className="info">Loading...</p>}
                {error && <p className="error">Error: {error}</p>}
            </Typography>
            <Container sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3, lg: 4, xl: 5, xxl: 6 }} columns={{ xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 24 }}>
                    {weather && weather.daily.time.map((time, index) => (
                        <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                            <Item key={index} className="day">
                                <h3>{new Date(time).toLocaleDateString()}</h3>
                                <p>Max: {weather.daily.temperature_2m_max[index]}°C</p>
                                <p>Min: {weather.daily.temperature_2m_min[index]}°C</p>
                                <p>Precipitation: {weather.daily.precipitation_sum[index]}mm</p>
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
};

export default DataTable