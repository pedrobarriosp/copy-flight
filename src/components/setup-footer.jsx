import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Footer_DialogSelect from './setup-footer-dialogSelect';
import { Link } from '@mui/material';

import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

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
        setLanguageLabel(languageOptions.find((option) => option.value == newLanguageValue))
    }

    function handleLocationChange(newLocationValue){
        setLocationValue(newLocationValue)
        setLocationLabel(locationOptions.find((option) => option.value == newLocationValue))
    }

    function handleCurrencyChange(newCurrencyValue){
        setCurrencyValue(newCurrencyValue)
        setCurrencyLabel(currencyOptions.find((option) => option.value == newCurrencyValue))
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={16}>
                <Grid size={8}>
                    <Footer_DialogSelect
                        identifier = "languageDialog"
                        dialogTitle='Select your language'
                        DialogIcon={LanguageIcon}
                        dialogText={`Language - ${languageLabel}`}
                        dialogOptions = {languageOptions}
                        currentValue={languageValue}
                        setParentValue={handleLanguageChange}
                    />
                </Grid>
                <Grid size={4}>
                    <Footer_DialogSelect
                        identifier = "locationDialog"
                        dialogTitle='Select your location'
                        DialogIcon={LocationOnIcon}
                        dialogText={`Location - ${locationLabel}`}
                        dialogOptions = {locationOptions}
                        currentValue={locationValue}
                        setParentValue={handleLocationChange}
                    />
                </Grid>
                <Grid size={4}>
                    <Footer_DialogSelect
                        identifier = "currencyDialog"
                        dialogTitle='Select your currency'
                        DialogIcon={CurrencyExchangeIcon}
                        dialogText={`Currency - ${currencyLabel}`}
                        dialogOptions = {currencyOptions}
                        currentValue={currencyValue}
                        setParentValue={handleCurrencyChange}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2} columns={16}>
                <Grid size={16}>
                    <Item>{`Current language and currency options applied: ${languageLabel} - ${locationLabel} - ${currencyLabel}`}</Item>
                </Grid>
            </Grid>
            <Grid container spacing={2} columns={16}>
                <Grid size={16}>
                    <Item>Displayed currencies may differ from the currencies used to purchase flights. Learn More</Item>
                </Grid>
            </Grid>
            <Grid container spacing={2} columns={16}>
                <Grid size={2}>
                    <Link href="#" variant="body2" underline="hover">
                        About
                    </Link>
                </Grid>
                <Grid size={2}>
                    <Link href="#" variant="body2" underline="hover">
                        Privacy
                    </Link>
                </Grid>
                <Grid size={2}>
                    <Link href="#" variant="body2" underline="hover">
                        Terms
                    </Link>
                </Grid>
                <Grid size={4}>
                    <Link href="#" variant="body2" underline="hover">
                        Join user studies
                    </Link>
                </Grid>
                <Grid size={2}>
                    <Link href="#" variant="body2" underline="hover">
                        Feedback
                    </Link>
                </Grid>
                <Grid size={4}>
                    <Link href="#" variant="body2" underline="hover">
                        Help Center
                    </Link>
                </Grid>
            </Grid>
        </Box>
    );
}