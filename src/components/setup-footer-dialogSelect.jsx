import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

Footer_DialogSelect.propTypes = {
  identifier: PropTypes.string.isRequired,
  dialogTitle:PropTypes.string.isRequired,
  DialogIcon:PropTypes.any.isRequired,
  dialogText:PropTypes.string.isRequired,
  dialogOptions:PropTypes.array.isRequired,
  currentValue:PropTypes.string.isRequired,
  setParentValue:PropTypes.func.isRequired
}

export default function Footer_DialogSelect({identifier,dialogTitle, DialogIcon, dialogText, dialogOptions,currentValue, setParentValue}) {
  const [open, setOpen] = React.useState(false)
  const [radioValue,setRadioValue] = React.useState(currentValue)

  const handleChange = (event) => {
    setRadioValue(event.target.value);
  };
 
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason == 'backdropClick') {
      setOpen(false);
      return
    }
    if (event.target.name.includes("cancel")){
      setOpen(false);
      return
    }
    if (event.target.name.includes("accept")){
      setParentValue(radioValue)
    }
  };

  return (
    <Box>
      <Button startIcon={<DialogIcon/>} onClick={handleClickOpen}>
        {dialogText}
      </Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex' }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <RadioGroup
                    aria-labelledby={`${identifier}-controlled-radio-buttons-group`}
                    name={`${identifier}-controlled-radio-buttons-group`}
                    value={radioValue}
                    onChange={handleChange}
                >
                  {dialogOptions.map((option,index) => {
                      return <FormControlLabel key={index} value={option.value} control={<Radio />} label={option.label} />
                  })}
                </RadioGroup>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button name={`${identifier}-button-cancel`} onClick={handleClose}>Cancel</Button>
          <Button name={`${identifier}-button-accept`} onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}