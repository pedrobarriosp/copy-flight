import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Divider } from '@mui/material';

const LOPEMIPSUM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."

export default function FAQ_Accordion() {
  return (
    <Box sx={{my:2}}>
        <Accordion disableGutters sx={{boxShadow:0}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="faq1-content"
                id="faq1-header"
            >
                <Typography component="span">How can I find last-minute flight deals?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {LOPEMIPSUM}
            </AccordionDetails>
        </Accordion>
        <Divider/>
        <Accordion disableGutters sx={{boxShadow:0}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="faq2-content"
                id="faq2-header"
            >
                <Typography component="span">How can I find cheap flights for a weekend getaway?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {LOPEMIPSUM}
            </AccordionDetails>
        </Accordion>
        <Divider/>
        <Accordion disableGutters sx={{boxShadow:0}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="faq3-content"
                id="faq3-header"
            >
                <Typography component="span">How can I find flight deals if my travel plans are flexible?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {LOPEMIPSUM}
            </AccordionDetails>
        </Accordion>
        <Divider/>
        <Accordion disableGutters sx={{boxShadow:0}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="faq4-content"
                id="faq4-header"
            >
                <Typography component="span">How can I find cheap flights to anywhere?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {LOPEMIPSUM}
            </AccordionDetails>
        </Accordion>
        <Divider/>
        <Accordion disableGutters sx={{boxShadow:0}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="faq5-content"
                id="faq5-header"
            >
                <Typography component="span">How can I get flight alerts for my trip?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {LOPEMIPSUM}
            </AccordionDetails>
        </Accordion>
    </Box>
  );
}