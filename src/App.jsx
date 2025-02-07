import Divider from '@mui/material/Divider';
import FAQ_Accordion from './components/faq-accordion'
import Tips_Tabs from './components/tips-tabs'
import PopularRoutes_Grid from './components/popularRoutes-grid';
import Configuration_Footer from './components/setup-footer';
import Map_Navigation from './components/map-navigation';
import Flight_Search from './components/flightSearch-card';
import FlightSelection_Table from './components/flightSelection-table';
import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import './App.css'

function App() {
  const [flightScrapperQueryParams,setQueryParams] = React.useState({})
  const [hideFlightSelection, setHideFlightSelection] = React.useState(true)

  const handleFlightSearchExploreButton = (params) =>{
    setQueryParams(params)
    setHideFlightSelection(false)
  }

  return (
    <div className='flex grow justify-center'>
      <Box sx={{ width:{xs:"100%", md:"70%"} }}>
        <Box sx={{width:"100%", display:"flex", justifyContent:"center", mt:5, px:{xs:3,md:0}}}>
          <Link href="/" variant='h3' underline='none'>
            Flights
          </Link>
        </Box>
        <Box sx={{width:"100%", justifyContent:"flex-start"}}>
          <Flight_Search
            onExploreFlightSearch={handleFlightSearchExploreButton}
          />
        </Box>
        <Divider hidden={hideFlightSelection}/>
        <Box sx={{my:4}} hidden={hideFlightSelection}>
          <FlightSelection_Table
            requestOptions={flightScrapperQueryParams}
            isComponentActive={!hideFlightSelection}
          />
        </Box>
        <Box sx={{px:{xs:3,md:0}}} hidden={!hideFlightSelection}>
          <Box>
            <Map_Navigation/>
          </Box>
          <Divider/>
          <Box sx={{ my:4 }}>
            <Typography  variant='h6'>
              Useful tools to help you find the best deals
            </Typography>
            <Tips_Tabs/>
          </Box>
          <Divider sx={{ mt:2 }}/>
          <Box sx={{my:4}}>
            <Typography variant='h6'>
              Frequently Asked Questions
            </Typography>
            <FAQ_Accordion/>
          </Box>
          <Box>
            <Typography variant='h6' sx={{my:3}}>
              Find Cheap Flights on Popular Routes
            </Typography>
            <PopularRoutes_Grid/>
          </Box>
        </Box>
        <Box sx={{my:5, px:{xs:3,md:0}}}>
          <Divider sx={{mb:3}}/>
          <Box>
            <Configuration_Footer/>
          </Box>
          <Divider sx={{mt:3}}/>
        </Box>
      </Box>
    </div>
  )
}

export default App
