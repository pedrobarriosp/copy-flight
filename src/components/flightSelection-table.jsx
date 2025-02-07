import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import axios from 'axios';
import PropTypes from 'prop-types'
import dayjs from "dayjs";


const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;

FlightSelection_Table.propTypes = {
    requestOptions: PropTypes.object.isRequired,
    isComponentActive: PropTypes.bool.isRequired
}

export default function FlightSelection_Table({requestOptions,isComponentActive}) {
    const [flightItineraries,setFlightItineraries] = React.useState([])
    const [loading, setLoading] = React.useState(false);

    React.useEffect(()=>{
        async function loadAPIData(){
            setLoading(true)
            if(isComponentActive){
                console.log(requestOptions)
                const options = {
                    method: 'GET',
                    url: 'https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights',
                    params: {
                        originSkyId: requestOptions.originID,
                        destinationSkyId: requestOptions.destinationID,
                        originEntityId: requestOptions.originAirportID,
                        destinationEntityId: requestOptions.destinationAirportID,
                        date: requestOptions.departureDate,
                        cabinClass: requestOptions.cabinClass,
                        adults: requestOptions.adultAmount,
                        childrens: requestOptions.childrenAmount,
                        infants: requestOptions.infantAmount,
                        sortBy: 'best',
                        limit: '10',
                        currency: 'USD',
                        market: 'en-US',
                        countryCode: 'US'
                    },
                    headers: {
                        'x-rapidapi-key': API_KEY,
                        'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
                    }
                };
                const request = await axios.request(options)
                console.log(request)
                setFlightItineraries(request.data.data.itineraries);
            }
            setLoading(false)
        }   
        loadAPIData()

    },[isComponentActive, requestOptions])


    return (
        <Box>
            <Box sx={{mb:2}}>
                <Typography>
                    Top departing Flights
                </Typography>
                <Typography variant='body2' color='grey.500'>
                    {"Please note that, despite selecting 'Round trip' or 'Multi-city', this app only handles 'One way'...and the 'Select Flight' button does nothing"}
                </Typography>
            </Box>
            {loading
            ? 
                <CircularProgress color="inherit" size={20} /> 
            : 
                <TableContainer sx={{boxShadow:0, border:1 ,borderColor:"grey.300"}} component={Paper}>
                    <Table sx={{ minWidth: '100$' }} aria-label="simple table">
                        <TableBody>
                        {flightItineraries.map((itinerary,index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Box
                                        component="img"
                                        sx={{
                                            height: { xs: 10, md: 40 },
                                            width: { xs: 10, md: 40 },
                                        }}
                                        alt={itinerary.legs[0].carriers.marketing[0].name+" logo"}
                                        src={itinerary.legs[0].carriers.marketing[0].logoUrl}
                                    />
                                </TableCell>
                                <TableCell>
                                    {itinerary.legs[0].carriers.marketing[0].name}
                                </TableCell>
                                <TableCell align="right">{itinerary.legs[0].stopCount == 0 ? 'Nonstop' : itinerary.legs[0].stopCount} {itinerary.legs[0].stopCount > 1 ? 'stops' : itinerary.legs[0].stopCount == 1 ? 'stop' : ''}</TableCell>
                                <TableCell align="right">
                                    {itinerary.legs[0].durationInMinutes/60 < 1 
                                        ? 
                                            itinerary.legs[0].durationInMinutes 
                                        : 
                                            itinerary.legs[0].durationInMinutes%60 == 0 
                                            ? `${(itinerary.legs[0].durationInMinutes/60).toFixed(0)} hr` 
                                            : `${(itinerary.legs[0].durationInMinutes/60).toFixed(0)} hr ${itinerary.legs[0].durationInMinutes%60} min`
                                    }
                                </TableCell>
                                <TableCell align="right">
                                    {`${dayjs(itinerary.legs[0].departure).format('h:mm A')} - ${dayjs(itinerary.legs[0].arrival).format('h:mm A')}`}
                                    {itinerary.legs[0].durationInMinutes/60 > 24 
                                        ? 
                                            ` + ${((itinerary.legs[0].durationInMinutes/60)/24).toFixed(0)}`
                                        : 
                                            ''
                                    }
                                </TableCell>
                                <TableCell align="right">
                                    <Button variant='outlined'>
                                        Select flight
                                    </Button>
                                </TableCell>
                                <TableCell align="right">{itinerary.price.formatted}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            }
        </Box>
        
    );
}