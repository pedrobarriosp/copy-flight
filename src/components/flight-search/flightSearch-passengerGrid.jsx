import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box, Stack } from '@mui/material';

Passenger_Adder.propTypes = {
    primaryText: PropTypes.string,
    secondarytext: PropTypes.any,
    personType: PropTypes.string,
    amount: PropTypes.number,
    buttonHandlerFunction: PropTypes.func,
}

export default function Passenger_Adder({primaryText,secondarytext,amount,personType,buttonHandlerFunction}) {

    // eslint-disable-next-line no-unused-vars
    function handleMinus(event){
        buttonHandlerFunction('-',personType)
    }

    // eslint-disable-next-line no-unused-vars
    function handlePlus(event){
        buttonHandlerFunction('+',personType)
    }

    return (
        <Stack direction="row" sx={{display:"flex", alignItems:"center", pb:1}}>
            <Stack direction="column" sx={{display:"flex"}}>
                <Typography color='primary'>
                    {primaryText}
                </Typography>
                {secondarytext
                    ?   <Typography variant='caption' color='primary.light'>
                            {secondarytext}
                        </Typography>
                    : <></>
                }   
            </Stack>
            <Box sx={{flexGrow:1, mx:2}}></Box>
            <Box>
                <Button disableElevation sx={{minWidth:30}} color='primary' variant='contained' size='small' onClick={handleMinus}
                    disabled = {amount <= 0 ? true : amount <= 1 && personType.includes('adults') ? true : false}
                >
                    -
                    </Button>
            </Box>
            <Box sx={{mx:2}}>
                <Typography>{amount}</Typography>
            </Box>
            <Box>
                <Button disableElevation sx={{minWidth:30}} color='primary' variant='contained' size='small' onClick={handlePlus}>+</Button>
            </Box>
        </Stack>
    );
}