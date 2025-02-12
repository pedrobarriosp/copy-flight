import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TimelineIcon from '@mui/icons-material/Timeline';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const TABLABELS = [
  {
    primary:"This is Tip #1",
    secondary:"This is the secondary text for tip #1"
  },
  {
    primary:"This is Tip #2",
    secondary:"This is the secondary text for tip #2"
  },
  {
    primary:"This is Tip #3",
    secondary:"This is the secondary text for tip #3"
  },
]

const TABPANELS = [
  {
    title:"Lorem ipsum dolor sit amet",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    title:"Lorem ipsum dolor sit amet",
    text:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
  },
  {
    title:"Lorem ipsum dolor sit amet",
    text:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
  },
]

function TabPanel(props) {
  const { value, index, content, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      sx={{pl:3}}
      {...other}
    >
      <Card>
        <CardContent>
          <Typography variant="h5">
            {content.title}
          </Typography>
          <Typography variant="body2">
            {content.text}
          </Typography>
        </CardContent>
        <CardMedia
          src="https://www.gstatic.com/flights/app/lp/dates_benefits_light.svg"
          component="img"
          sx={{ mb:2, pl:2, width:{sm:"10%",md:"50%"} }}
        />
      </Card>
    </Box>
  );
}

TabPanel.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  content: PropTypes.object.isRequired
};

function TabLabel(props) {
  const { PreferredIcon, itemIndex, selectedIndex, itemText,...other } = props;

  return (
    <Box
      role="tablelabel"
      id={`vertical-tablelabel-${itemIndex}`}
      aria-labelledby={`vertical-label-${itemIndex}`}
      sx={{ width:"100%",display:'flex',flexGrow:1}}
      {...other}
    >
      <ListItemButton
        selected={selectedIndex === itemIndex}
        sx={{width:{xs:200,md:"100%"} ,height:"100%",display:'flex',flexGrow:1}}
      >
        <ListItemIcon>
          <PreferredIcon />
        </ListItemIcon>
        <ListItemText
          disableTypography={true}
          primary={
            <Typography variant='body2'>
              {itemText.primary}
            </Typography>
          }
          secondary={
            <Typography textTransform="capitalize" variant='caption'>
              {itemText.secondary}
            </Typography>
          }
        >
        </ListItemText>
      </ListItemButton>
    </Box>
  );
}

TabLabel.propTypes = {
  PreferredIcon: PropTypes.any,
  itemIndex: PropTypes.number.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  itemText: PropTypes.object.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor:'background.paper', display:"flex",flexGrow:1}}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="usage tips"
        centered={true}
        sx={{minWidth:{xs:"50%",md:"30%"},height:"100%",display:'flex',flexDirection:"column",flexGrow:1}}
      >
        <Tab 
          label={
            <TabLabel
              PreferredIcon={CalendarMonthIcon}
              itemIndex={0}
              selectedIndex={value}
              itemText={TABLABELS[0]}
            />
          }
          sx={{display:'flex',flexGrow:1}}
          {...a11yProps(0)} 
        />
        <Tab 
          label={
            <TabLabel
              PreferredIcon={TimelineIcon}
              itemIndex={1}
              selectedIndex={value}
              itemText={TABLABELS[1]}
            />
          }
          sx={{display:'flex',flexGrow:1}}
          {...a11yProps(1)} 
        />
        <Tab 
          label={
            <TabLabel
              PreferredIcon={NotificationAddIcon}
              itemIndex={2}
              selectedIndex={value}
              itemText={TABLABELS[2]}
            />
          }
          sx={{display:'flex',flexGrow:1}}
          {...a11yProps(2)} 
        />
      </Tabs>
      <TabPanel value={value} index={0} content={TABPANELS[0]}>
      </TabPanel>
      <TabPanel value={value} index={1} content={TABPANELS[1]}>
      </TabPanel>
      <TabPanel value={value} index={2} content={TABPANELS[2]}>
      </TabPanel>
    </Box>
  );
}