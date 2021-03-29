import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  alertDisplay: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

export const AlertDisplay = () => {
  const classes = useStyles();
  const [message] = useState('Default Message');
  const handleClose = () => {};

  return (
    <div className={classes.root}>
      <Alert
        className={classes.alertDisplay}
        action={(
          <IconButton
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        )}
      >
        <AlertTitle>Error</AlertTitle>
        <div>{message}</div>
      </Alert>
    </div>
  );
};
