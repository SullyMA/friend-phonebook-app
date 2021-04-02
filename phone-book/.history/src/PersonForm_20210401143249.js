import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(5),
//     },
//   },
// }));
// const classes = useStyles();

const PersonForm = ({
  newName,
  newNumber,
  addNewName,
  handleNameChange,
  handleNumberChange
}) => {
  return (
    
    <form onSubmit={addNewName}>
      <div>
      {/* calls the function tracking values in the name input */}
        name: <input value={newName} onChange={handleNameChange} />
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
