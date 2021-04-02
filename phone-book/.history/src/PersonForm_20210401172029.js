import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';



const PersonForm = ({
  newName,
  newNumber,
  addNewName,
  handleNameChange,
  handleNumberChange
}) => {
  const useStyles = makeStyles((theme) => ({
    root: {
     
      flexGrow: 1,

    },
    text:{
     '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    }
  }));
  const classes = useStyles();
  return (
   
      <form onSubmit={addNewName} className={classes.root} noValidate autoComplete="off">
         <Grid container spacing={3}>
        {/* calls the function tracking values in the name input */}
        {/* name: <input value={newName} onChange={handleNameChange} /> */}
        <Grid item xs={6}>
        <TextField className={classes.text} id="outlined-basic" label="Name" value={newName} onChange={handleNameChange} variant="outlined" />
        </Grid>
        <Grid  xs={6}>
        {/* calls the function tracking values in the number input */}
        <TextField id="outlined-basic" value={newNumber} onChange={handleNumberChange} label="Number" value={newName} variant="outlined" />
        </Grid>
        {/* calls the create request to add name and number */}
        <button variant="contained" type="submit">add</button>
        {/* <Button size="small"  color="black" variant="contained" type="submit">add</Button> */}
        </Grid>
      </form>

  );
};


export default PersonForm;
