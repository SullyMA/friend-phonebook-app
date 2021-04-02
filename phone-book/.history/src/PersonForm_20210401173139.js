import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';



const PersonForm = ({
  newName,
  newNumber,
  addNewName,
  handleNameChange,
  handleNumberChange
}) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    press: {
      margin: {
        margin: theme.spacing(1),
      },
      extendedIcon: {
        marginRight: theme.spacing(1),
      },
    }
  }));
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <form onSubmit={addNewName} className={classes.root} noValidate autoComplete="off">
        
        {/* calls the function tracking values in the name input */}
        {/* name: <input value={newName} onChange={handleNameChange} /> */}
        <Grid item xs={12}>
        <TextField id="outlined-basic" label="Name" value={newName} onChange={handleNameChange} variant="outlined" />
        </Grid>
        <Grid  xs={12}>
        {/* calls the function tracking values in the number input */}
        <TextField id="outlined-basic" value={newNumber} onChange={handleNumberChange} label="Number" value={newName} variant="outlined" />
        </Grid>
        {/* calls the create request to add name and number */}
        <button variant="contained" type="submit">add</button>
        <Fab variant="extended" color="primary" aria-label="add" className={classes.margin}>
          <NavigationIcon className={classes.extendedIcon} />
          Extended
        </Fab>
     
      </form>
      </Grid>

  );
};


export default PersonForm;
