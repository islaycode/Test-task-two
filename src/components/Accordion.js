import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '50%',
        "&$expanded": {
            margin: "0px"
        }
    },
    heading: {
        fontSize: '22px',
        fontWeight: '500px',
    },
    panel: {
        background: '#F7F8FA'
    },
    list: {
        display: 'flex',
        alignContent: 'center'
    }
}));

export default function AccordionComponent() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Accordion className="MuiAccordion-root.Mui-expanded">
                <AccordionSummary
                    className={classes.panel}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>WEEK 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List component="nav" aria-label="secondary mailbox folders">
                        <ListItem button>
                            <ListItemText primary="List Item" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="List Item" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="List Item" />
                        </ListItem>
                    </List>

                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    className={classes.panel}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>WEEK 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List component="nav" aria-label="secondary mailbox folders">
                        <ListItem>
                            <ListItemText primary="List Item" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="List Item" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="List Item" />
                        </ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary
                    className={classes.panel}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography className={classes.heading}>WEEK 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List component="nav" aria-label="secondary mailbox folders">
                        <ListItem>
                            <ListItemText primary="List Item" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="List Item" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="List Item" />
                        </ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}