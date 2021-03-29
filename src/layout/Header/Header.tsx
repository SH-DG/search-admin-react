import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AlarmIcon from '@material-ui/icons/Alarm';
import MenuOpen from '@material-ui/icons/MenuOpen';

const useStyles = makeStyles(() => ({
  header: {
    width: '100%',
    minHeight: 95,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#6136c8',
  },
  leftItemsBox: {},
  rightItemsBox: {},
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <div className={classes.leftItemsBox}>
        <IconButton color="secondary" aria-label="menu open">
          <MenuOpen />
        </IconButton>
      </div>
      <div className={classes.rightItemsBox}>
        <Button variant="contained">LogIn</Button>
        <Button variant="contained">LogOut</Button>
        <IconButton color="secondary" aria-label="add an alarm">
          <AlarmIcon />
        </IconButton>
      </div>
    </header>
  );
}
