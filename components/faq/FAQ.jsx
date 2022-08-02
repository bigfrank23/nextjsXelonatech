import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function FAQ() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
        <Typography variant='h5' color='#34548c' textAlign='center'>FAQ</Typography>
        <hr className='m-auto mt-2 mb-4' style={{background: 'red', width: "50px", height: "2px"}} />
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>WHAT DOMAIN NAME SHOULD I CHOOSE?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The choice of domain name depends on how you plan to use it. In most cases, it makes sense to choose one that is easy to pronounce and spell if you will be telling people about it over the phone. Above all, you should choose a name that is memorable and not confusing.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>HOW MUCH WILL A WEBSITE COST ME?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The cost of a website varies depends on its complexity. We are happy to discuss your requirements and provide a quote at any time.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>HOW LONG WILL IT TAKE FOR MY WEBSITE TO BE DEVELOPED?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The time it takes to build a site depends on the complexity of the site. If you have a deadline, we will work hard to meet it. The most common cause of delay is the content (text/images) from the client.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>WHAT KIND OF BUSINESSES DO YOU WORK WITH?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We work with a broad range of company types [small start-ups, large corporations, nonprofits, B2B, B2C and more] across many business industries [technology, food, apparel, health + beauty, camps, travel, finance, arts, fair trade, and more.]
            Over the years, we’ve helped businesses improve customer service, market their products, and attract customers. Functionality requests range from basic to advanced. Our team takes the time to get to know your industry, organization, and competitors to ensure your site supports all of your goals.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>WILL WE NEED TO HAVE A MEETING TO DISCUSS ABOUT THE WEBSITE ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Most of the time, a meeting isn’t necessary and the work is completed with only discussions over phone and email. We upload our work to private websites that only clients can access. We then work with you to discuss the site and review changes. The site isn’t made available to the public until it looks and works exactly as you wish.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>WHO WRITES THE CONTENT FOR THE SITE?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Usually that is you. You are the expert on your business, so it’s usually best if it comes from you. If you need help, we have a copywriter on our team who can help clean up or write original content for you at an additional cost.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography>ONCE MY WEBSITE IS COMPLETED, WHAT AFTER-SALES SERVICE DO YOU OFFER?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We fully support any website we develop and are always available should you encounter any problems or require new enhancements. Elonatech also offers website hosting and maintenance.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
