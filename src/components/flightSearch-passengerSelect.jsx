/* eslint-disable react/prop-types */
import * as React from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Passenger_Adder from './flightSearch-passengerGrid';
import { Alert, Box, Stack, Typography } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const LOWERLIMIT = 1
const ZERO = 0
const UPPERLIMIT = 9

export default function Passenger_Popover({adultRef,childref,infantRef}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [adultsAmount, setAdultsAmount] = React.useState(1)
  const [childrenAmount, setChildrenAmount] = React.useState(0)
  const [onLapInfantAmount, setOnLapInfantAmount] = React.useState(0)
  const [inSeatInfantAmount, setInSeatInfantAmount] = React.useState(0)
  const [totalPassengerAmount, setTotalPassengerAmount] = React.useState(1)
  const [lapAlertDisplay,setLapAlertDisplay] = React.useState('none')
  const [seatAlertDisplay,setSeatAlertDisplay] = React.useState('none')
  const [buttonsDisplay,setButtonsDisplay] = React.useState('inline')

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  function handleButtonInput(operationSign,type){
    let modifier
    let currentValue
    let currentTotal = totalPassengerAmount
    switch (operationSign) {
        case '+':
            modifier = 1
            break;
    
        case '-':
            modifier = -1
            break;
    }
    currentTotal += modifier
    if (currentTotal < LOWERLIMIT) 
        return
    if (currentTotal > UPPERLIMIT) 
        return
    switch (type) {
        case 'adults':
            currentValue = adultsAmount + modifier
            if(currentValue / inSeatInfantAmount < 0.5){
                return
            } 
            if(onLapInfantAmount > currentValue){
                return
            } 
            if (currentValue >= ZERO) {
                adultRef.current = currentValue
                setAdultsAmount(currentValue)
                setTotalPassengerAmount(currentTotal)
            }
            break;
        case 'children':
            currentValue = childrenAmount + modifier
            if (currentValue >= ZERO) {
                childref.current = currentValue
                setChildrenAmount(currentValue)
                setTotalPassengerAmount(currentTotal)
            } 
            break;
        case 'infantLap':
            currentValue = onLapInfantAmount + modifier
            if(currentValue > adultsAmount){
                handleAlerts('inline-block','infantLap')
            } else {
                handleAlerts('none','infantLap')
            }
            if (currentValue >= ZERO){
                infantRef.current = currentValue + inSeatInfantAmount
                setOnLapInfantAmount(currentValue)
                setTotalPassengerAmount(currentTotal)
            } 
            break;
        case 'infantSeat':
            currentValue = inSeatInfantAmount + modifier
            if(adultsAmount / currentValue < 0.5){
                handleAlerts('inline-block','infantSeat')
            } else {
                handleAlerts('none','infantSeat')
            }
            if (currentValue >= ZERO){
                infantRef.current = currentValue + onLapInfantAmount
                setInSeatInfantAmount(currentValue)
                setTotalPassengerAmount(currentTotal)
            } 
            break;
    }
  }

  function handleAlerts(displayValue,alertType){
    let currentSeat = seatAlertDisplay
    let currentLap = lapAlertDisplay
    switch(alertType){
        case'infantLap':
            currentLap = displayValue
            setLapAlertDisplay(currentLap)
            break;
        case 'infantSeat':
            currentSeat = displayValue
            setSeatAlertDisplay(currentSeat)
            break;
    }
    if(currentSeat == 'none' && currentLap == 'none'){
        setButtonsDisplay('inline')
    } else {
        setButtonsDisplay('none')
    }
  }


  const open = Boolean(anchorEl);
  const id = open ? 'passengers-popover' : undefined;

  return (
    <Box>
        <Box>
            <Button color='primary.light' aria-describedby={id} variant="text" onClick={handleClick}>
                <PersonOutlineIcon sx={{mr:1}}/>{totalPassengerAmount}<ArrowDropDownIcon sx={{ml:1}}/>
            </Button>
        </Box>
        
        <Popover 
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
        >
            <Box sx={{p:2}}>
                <Passenger_Adder
                    primaryText="Adults"
                    secondarytext={null}
                    amount={adultsAmount}
                    personType='adults'
                    buttonHandlerFunction={handleButtonInput}
                />
                <Passenger_Adder
                    primaryText="Children"
                    secondarytext="Aged 2-11"
                    amount={childrenAmount}
                    personType='children'
                    buttonHandlerFunction={handleButtonInput}
                />
                <Passenger_Adder
                    primaryText="Infants"
                    secondarytext="On Lap"
                    amount={onLapInfantAmount}
                    personType='infantLap'
                    buttonHandlerFunction={handleButtonInput}
                />
                <Passenger_Adder
                    primaryText="Infants"
                    secondarytext="In seat"
                    amount={inSeatInfantAmount}
                    personType='infantSeat'
                    buttonHandlerFunction={handleButtonInput}
                />
                <Box sx={{display:'flex', justifyContent:'flex-end'}}>
                    <Typography variant='overline'>Max. {UPPERLIMIT} passengers</Typography>
                </Box>
                <Stack direction="row" sx={{display:'flex', justifyContent:"flex-end"}}>
                    <Box sx={{maxWidth:190}} style={{display:seatAlertDisplay}}>
                        <Alert id='seatinfant-alert' severity="error">
                            You must have at least one adult per two infants.
                        </Alert>
                    </Box>
                    <Box sx={{maxWidth:190}} style={{display:lapAlertDisplay}}>
                        <Alert id='lapinfant-alert'  severity="error">
                            You must have at least 1 adult per infant on lap
                        </Alert>
                    </Box>
                    <Button id='passengerchanges-button' style={{display:buttonsDisplay}} variant="text" onClick={handleClose}>
                        Done
                    </Button>
                </Stack>
            </Box>
            
        </Popover>
        
    </Box>
  );
}