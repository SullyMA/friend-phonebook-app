import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



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
  }));
  const classes = useStyles();
  return (
    
    <form onSubmit={addNewName}  className={classes.root} noValidate autoComplete="off">
       
      <div>
      {/* calls the function tracking values in the name input */}
        {/* name: <input value={newName} onChange={handleNameChange} /> */}
        <TextField id="standard-basic" label="Name" value={newName} onChange={handleNameChange}/>
      </div>
      <div>
       {/* calls the function tracking values in the numer input */}
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
       {/* calls the create request to add name and number */}
        <button  variant="contained" type="submit">add</button>
        {/* <Button size="small"  color="black" variant="contained" type="submit">add</Button> */}
      </div>
    </form>
  );
};


export default PersonForm;
