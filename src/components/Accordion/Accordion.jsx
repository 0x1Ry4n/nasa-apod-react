import * as React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import moment from 'moment/moment';
import './Accordion.css';

function SimpleAccordion(props) {
    return (
        <Accordion className="Accordion-Content">
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography class="info" id="title">{props.title}</Typography>
                <Typography class="info" id="date">{moment(props.date).format("DD/MM/YYYY")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography class="info" id="details">
                    {props.details}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default SimpleAccordion;


