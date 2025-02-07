import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FlightIcon from '@mui/icons-material/Flight';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { debounce } from '@mui/material/utils';
import PropTypes from 'prop-types'
import axios from 'axios';

// This key was created specifically for the demo in mui.com.
// You need to create a new one for your application.
const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;

const CITY = 'CITY'
const COUNTRY = 'COUNTRY'

Scrapper_Input.propTypes = {
  fieldLabel: PropTypes.string.isRequired,
  FieldIcon: PropTypes.any.isRequired,
  handledValue: PropTypes.object.isRequired
}

export default function Scrapper_Input({fieldLabel,FieldIcon,handledValue}) {
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');
  const [options, setOptions] = React.useState([]);

  const fetch = React.useMemo(
    () => 
      debounce((request,callback) => {
        const options = {
          method: 'GET',
          url: 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport',
          params: {
            query: request.input,
            locale: 'en-US'
          },
          headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
          }
        };
        
        axios.request(options).then((response) => callback(response.data.data));
      }, 400),
    [],
  );

  React.useEffect(() => {
    let active = true;

    if (inputValue === '') {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetch({ input: inputValue }, (results) => {
      let filteredResults = results.filter((entity) => {
        return ![CITY,COUNTRY].includes(entity.navigation.entityType)
      })

      //FILTER COUNTRY AND CITY
      if (active) {
        let newOptions = [];

        if (value) {
          newOptions = [value];
        }

        if (filteredResults) {
          newOptions = [...newOptions, ...filteredResults];
        }

        setOptions(newOptions);
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);

  return (
    <Autocomplete
      sx={{ width: 300 }}
      getOptionLabel={(option) =>
        typeof option === 'string' ? option : option.presentation.suggestionTitle
      }
      filterOptions={(x) => x}
      options={options}
      autoComplete
      includeInputInList
      filterSelectedOptions
      value={value}
      noOptionsText="No locations"
      onChange={(event, newValue) => {
        setOptions(newValue ? [newValue, ...options] : options);
        setValue(newValue);
        handledValue.current = newValue
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <TextField {...params} label={<Typography><FieldIcon/> {fieldLabel}</Typography>  } fullWidth />
      )}
      renderOption={(props, option) => {
        // eslint-disable-next-line react/prop-types
        const { key, ...optionProps } = props;

        return (
          <li key={key} {...optionProps}>
            <Grid container sx={{ alignItems: 'center' }}>
              <Grid item sx={{ display: 'flex', width: 44 }}>
                <FlightIcon sx={{ color: 'text.secondary' }} />
              </Grid>
              <Grid item sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}>
                  <Box
                    component="span"
                    sx={{ fontWeight: 'bold' }}
                  >
                    {option.presentation.suggestionTitle}
                  </Box>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {option.presentation.subtitle}
                </Typography>
              </Grid>
            </Grid>
          </li>
        );
      }}
    />
  );
}