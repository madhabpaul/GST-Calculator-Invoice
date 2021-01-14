import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));

function Nav() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <AccountBalanceWalletIcon />
                </IconButton>
                <Typography variant="h6" color="inherit">
                    GST Calculator
                </Typography>
                </Toolbar>
            </AppBar>
            </div>
        </>
    )
}

export default Nav
