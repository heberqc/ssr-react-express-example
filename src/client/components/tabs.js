import React from 'react';
import { NavLink } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {
  Phone,
  Favorite,
  PersonPin,
} from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    // maxWidth: 500,
  },
});

export default function IconLabelTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab icon={<Phone />} label="Home" component={NavLink} to="/" />
        <Tab icon={<Favorite />} label="Explore" component={NavLink} to="/explore" />
        <Tab icon={<PersonPin />} label="Details" component={NavLink} to="/details" />
      </Tabs>
    </Paper>
  );
}
