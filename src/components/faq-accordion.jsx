import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const LOPEMIPSUM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."

export default function FAQ_Accordion() {
  return (
    <div>
        <Accordion>
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
        <Accordion>
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
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="faq3-content"
                id="faq3-header"
            >
                <Typography component="span">How can I find cheap flights for a weekend getaway?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {LOPEMIPSUM}
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="faq4-content"
                id="faq4-header"
            >
                <Typography component="span">How can I find cheap flights for a weekend getaway?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {LOPEMIPSUM}
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="faq5-content"
                id="faq5-header"
            >
                <Typography component="span">How can I find cheap flights for a weekend getaway?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {LOPEMIPSUM}
            </AccordionDetails>
        </Accordion>
    </div>
  );
}