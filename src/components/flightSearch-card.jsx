import * as React from 'react';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button,Box, Stack, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Passenger_Popover from './flightSearch-passengerSelect';
import Scrapper_Input from './flightSearch-autocomplete';


const TRIPLABELS = {
    "round":"Round Trip",
    "oneway":"One Way",
    "multi":"Multi-city",
}

const CLASSLABELS = {
    "economy":"Economy",
    "premium_economy":"Premium Economy",
    "business":"Business",
    "first":"First Class",
}

// eslint-disable-next-line react/prop-types
export default function Flight_Search({onExploreFlightSearch}) {
    const [tripType, setTripType] = React.useState('oneway')
    const [cabinClassType, setCabinClassType] = React.useState('economy')
    const departureDate = React.useRef(null)
    const departureValue = React.useRef(null)
    const arrivalValue = React.useRef(null)
    const adultAmount = React.useRef(1)
    const childrenAmount = React.useRef(0)
    const infantAmount = React.useRef(0)

    const handleTripChange = (event) => {
        setTripType(event.target.value)
    };

    const handleClassChange = (event) => {
        setCabinClassType(event.target.value)
    };

    const handleDateChange = (event) => {
        departureDate.current = event.format('YYYY-MM-DD')
    }

    const onExploreButton = () => {
        if (departureDate.current == null){
            console.log("date not selected")
            return
        }
        if (departureValue.current == null){
            console.log("departure location not selected")
            return
        }
        if (arrivalValue.current == null){
            console.log("arrival location not selected")
            return
        }
        onExploreFlightSearch({
            originID:departureValue.current.skyId,
            destinationID:arrivalValue.current.skyId,
            originAirportID:departureValue.current.entityId,
            destinationAirportID:arrivalValue.current.entityId,
            departureDate:departureDate.current,
            cabinClass:cabinClassType,
            adultAmount:adultAmount.current,
            childrenAmount:childrenAmount.current,
            infantAmount:infantAmount.current,
            tripType:tripType
        })
    }


    return (
        <Box sx={{ display:'flex', flexGrow:1, flexDirection:"column",
         my:3, px:3, py:2, borderRadius:2, boxShadow:3 }}>
            <Stack direction='row' spacing={3} sx={{display:'flex', justifyContent:"flex-start", mb:2}}>
                <Box>
                    <FormControl sx={{minWidth:120}} variant='standard'>
                        <Select
                            labelId="trip-select-label"
                            id="trip-select"
                            value={tripType}
                            onChange={handleTripChange}
                            displayEmpty
                        >
                            <MenuItem value="" disabled hidden></MenuItem>
                            {Object.keys(TRIPLABELS).map((objKey) => {
                                return <MenuItem key={`tripOption-${objKey}`} value={objKey}>
                                    <Typography variant='body2'>
                                        {TRIPLABELS[objKey]}
                                    </Typography>
                                    
                                </MenuItem>
                            })}
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{alignSelf:'center'}}>
                    <Passenger_Popover 
                        adultRef={adultAmount}
                        childref={childrenAmount}
                        infantRef={infantAmount}
                    />
                </Box>
                <Box>
                    <FormControl sx={{minWidth:120}} variant='standard'>
                        <Select
                            labelId="cabinClass-select-label"
                            id="cabinClass-select"
                            value={cabinClassType}
                            onChange={handleClassChange}
                            displayEmpty
                            autoWidth
                        >
                            <MenuItem value="" disabled hidden></MenuItem>
                            {Object.keys(CLASSLABELS).map((objKey) => {
                                return <MenuItem key={`cabinClassOption-${objKey}`} value={objKey}>
                                    <Typography variant='body2'>
                                        {CLASSLABELS[objKey]}
                                    </Typography>
                                </MenuItem>
                            })}
                        </Select>
                    </FormControl>
                </Box>
            </Stack>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{display:"flex", mb:3}}>
                <Stack direction="row" spacing={3}>
                    <Scrapper_Input
                        fieldLabel="Where from?"
                        FieldIcon={FlightTakeoffIcon}
                        handledValue={departureValue}
                    />
                    <Scrapper_Input
                        fieldLabel="Where to?"
                        FieldIcon={FlightLandIcon}
                        handledValue={arrivalValue}
                    />
                </Stack>
                <Box sx={{flexGrow:1}}>
                    <DatePicker sx={{width:1}} disablePast onChange={handleDateChange} label="Departure Date"/>
                </Box>
            </Stack>
            <Box sx={{display:"flex", justifyContent:"center"}}>
                <Button variant='contained' onClick={onExploreButton}>Explore</Button>
            </Box>
        </Box>
    );
}