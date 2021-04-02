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

const Notification = ({ notification, success }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  // console.log(notification);
  // console.log(success);

  // if there is no notification return null
  if (notification === null) {
    return null;
  }

  // if success renders the paticular (inLine) style 
  if (success)
    return (
      <div className="success" style={styles.success}>
        {setOpen(true)}
        {notification}
      </div>
    );
  else
    return (
      <div className="success" style={styles.fail}>
         {setOpen(false)}
        {notification}
      </div>
    );
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