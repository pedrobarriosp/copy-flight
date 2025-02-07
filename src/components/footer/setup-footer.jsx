import * as React from 'react';
import Box from '@mui/material/Box';
import Footer_DialogSelect from './setup-footer-dialogSelect';
import {  Link, Stack, Typography } from '@mui/material';

import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';


const LANGUAGEOPTONS = [
    {
        label:"English (United States)",
        value:"english-usa"
    },
    {
        label:"Español (España)",
        value:"spanish-spain"
    },
]

const LOCATIONOPTIONS = [
    {
        label:"United States",
        value:"usa"
    },
    {
        label:"Español",
        value:"spain"
    },
]

const CURRENCYOPTIONS = [
    {
        label:"US Dollar",
        value:"usd"
    },
    {
        label:"Euro",
        value:"eur"
    },
]




export default function Configuration_Footer() {
    
    const [languageOptions] = React.useState(LANGUAGEOPTONS);
    const [locationOptions] = React.useState(LOCATIONOPTIONS);
    const [currencyOptions] = React.useState(CURRENCYOPTIONS);

    const [languageValue, setLanguageValue] = React.useState(languageOptions[0].value);
    const [languageLabel, setLanguageLabel] = React.useState(languageOptions[0].label);

    const [locationValue, setLocationValue] = React.useState(locationOptions[0].value);
    const [locationLabel, setLocationLabel] = React.useState(locationOptions[0].label);

    const [currencyValue, setCurrencyValue] = React.useState(currencyOptions[0].value);
    const [currencyLabel, setCurrencyLabel] = React.useState(currencyOptions[0].label);


    function handleLanguageChange(newLanguageValue){
        setLanguageValue(newLanguageValue)
        setLanguageLabel(languageOptions.find((option) => option.value == newLanguageValue).label)
    }

    function handleLocationChange(newLocationValue){
        setLocationValue(newLocationValue)
        setLocationLabel(locationOptions.find((option) => option.value == newLocationValue).label)
    }

    function handleCurrencyChange(newCurrencyValue){
        setCurrencyValue(newCurrencyValue)
        setCurrencyLabel(currencyOptions.find((option) => option.value == newCurrencyValue).label)
    }

    return (
        <Box sx={{ flexGrow: 1, justifyContent:"center" }}>
            <Stack sx={{justifyContent:'center', flexWrap:'wrap', mb:3}} direction='row' useFlexGap spacing={2}>
                <Box sx={{px:1, border:1, borderRadius:6, borderColor:'grey.300'}}>
                    <Footer_DialogSelect
                        identifier = "languageDialog"
                        dialogTitle='Select your language'
                        DialogIcon={LanguageIcon}
                        dialogText={`Language - ${languageLabel}`}
                        dialogOptions = {languageOptions}
                        currentValue={languageValue}
                        setParentValue={handleLanguageChange}
                    />
                </Box>
                <Box sx={{px:1, border:1, borderRadius:6, borderColor:'grey.300'}}>
                    <Footer_DialogSelect
                        identifier = "locationDialog"
                        dialogTitle='Select your location'
                        DialogIcon={LocationOnIcon}
                        dialogText={`Location - ${locationLabel}`}
                        dialogOptions = {locationOptions}
                        currentValue={locationValue}
                        setParentValue={handleLocationChange}
                    />
                </Box>
                <Box sx={{px:1, border:1, borderRadius:6, borderColor:'grey.300'}}>
                    <Footer_DialogSelect
                        identifier = "currencyDialog"
                        dialogTitle='Select your currency'
                        DialogIcon={CurrencyExchangeIcon}
                        dialogText={`Currency - ${currencyLabel}`}
                        dialogOptions = {currencyOptions}
                        currentValue={currencyValue}
                        setParentValue={handleCurrencyChange}
                    />
                </Box>
            </Stack>
            <Stack direction='column' columns={16} spacing={1}>
                <Box sx={{display:'flex', justifyContent:'center'}}>
                    <Typography align='center' variant='body2' color='grey.600'>
                        {`Current language and currency options applied: ${languageLabel} - ${locationLabel} - ${currencyLabel}`}
                    </Typography>
                </Box>
                <Box sx={{display:'flex', justifyContent:'center'}}>
                    <Typography align='center' variant='body2' color='grey.600'>
                        Displayed currencies may differ from the currencies used to purchase flights. Learn More
                    </Typography>
                </Box>
                
            </Stack>
            <Stack direction='row' sx={{justifyContent:'center', flexWrap:'wrap', mt:3}} useFlexGap spacing={3}>
                <Box>
                    <Link href="#" variant="body2" underline="hover">
                        About
                    </Link>
                </Box>
                <Box variant='outlined'>
                    <Link href="#" variant="body2" underline="hover">
                        Privacy
                    </Link>
                </Box>
                <Box>
                    <Link href="#" variant="body2" underline="hover">
                        Terms
                    </Link>
                </Box>
                <Box>
                    <Link href="#" variant="body2" underline="hover">
                        Join user studies
                    </Link>
                </Box>
                <Box>
                    <Link href="#" variant="body2" underline="hover">
                        Feedback
                    </Link>
                </Box>
                <Box>
                    <Link href="#" variant="body2" underline="hover">
                        Help Center
                    </Link>
                </Box>
            </Stack>
        </Box>
    );
}