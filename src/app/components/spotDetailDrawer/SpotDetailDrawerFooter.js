import React from "react";
import {
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  makeStyles,
  Divider,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  accordionRoot: {
    backgroundColor: theme.palette.grey[200],
  },
  accordionSummaryRoot: {
    padding: 0,
  },
  accordionDetailsRoot: {
    padding: 0,
  },
}));

/**
 * @param summary {string}
 * @param children {string | JSX.Element}
 * @returns {JSX.Element}
 * @constructor
 */
const FaqAccordion = ({ summary, children }) => {
  const classes = useStyles();

  return (
    <Accordion elevation={0} classes={{ root: classes.accordionRoot }}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        classes={{ root: classes.accordionSummaryRoot }}
      >
        <Typography className="font-bold">{summary}</Typography>
      </AccordionSummary>
      <AccordionDetails classes={{ root: classes.accordionDetailsRoot }}>
        <Typography variant="body2">{children}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export const SpotDetailDrawerFooter = () => {
  return (
    <>
      <div className="accordionContainer">
        <FaqAccordion summary="Free Cancellation Policy">
          Reefs are the bucaneers of the weird hunger. The corsair breaks with
          madness, raid the brig. grogs travel with desolation.
        </FaqAccordion>
        <FaqAccordion summary="365-Day Customer Support">
          The sea-dog blows with life, love the bahamas until it laughs. the
          bilge rat sings punishment like a swashbuckling kraken.
        </FaqAccordion>
        <FaqAccordion summary="Guaranteed Parking by MockHero">
          The plunder burns with faith, blow the galley before it sings.
          cockroachs are the sails of the coal-black pestilence.
        </FaqAccordion>
      </div>
      <Divider />
      <div className="spotDetailsDrawerTrustSeal flex justify-center items-center">
        <div className="trustSealImageContainer">
          <img src="https://via.placeholder.com/100x50" alt="placeholder" />
        </div>
        <div className="trustSealDetailsContainer">
          <ul className="list-disc">
            <li>
              <Typography variant="caption">
                Ales are the lasses of adventure.
              </Typography>
            </li>
            <li>
              <Typography variant="caption">
                Ships scream on strength at isla!
              </Typography>
            </li>
            <li>
              <Typography variant="caption">
                Lively desolations lead to the sea.
              </Typography>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
