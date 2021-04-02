import React from "react";
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Notification = ({ notification, success }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  // console.log(notification);
  // console.log(success);

  // if there is no notification return null
  if (notification === null) {
    return null;
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  // if success renders the paticular (inLine) style 
  if (success){
  setOpen(true)
    return (
      <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success"> 
        {notification}
        </Alert>
      </Snackbar>
      <div className="success" style={styles.success}>
       
        {notification}
      </div>
      </div>
    );
    }else{
      setOpen(false)
    return (
      <div className={classes.root}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
        {notification}
        </Alert>
      </Snackbar>
      <div className="success" style={styles.fail}>
         {setOpen(false)}
        {notification}
      </div>
      </div>
    );
    }
};

var styles = {
  success: {
    color: "green",
    background: "white",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  fail: {
    color: "red",
    background: "white",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }
};

export default Notification;