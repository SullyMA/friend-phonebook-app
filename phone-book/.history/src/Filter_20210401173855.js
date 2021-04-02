import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const Filter = ({ showFilter, setshowFilter }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  const classes = useStyles();
  const filterPersons = e => {
    setshowFilter(e.target.value);
  };

  return (
    <div>
       <input   />
      <TextField id="outlined-basic" value={showFilter} label="filter shown with" variant="outlined"onChange={filterPersons} />
    </form>
  );
}
    </div>
  );
};

export default Filter;