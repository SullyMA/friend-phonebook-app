import React from "react";
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';




const PhoneBook = ({ persons, showFilter, removeEntry }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
    },
  }));

  // capitalize whats in the filter inputs  
  let filterUpperCase = showFilter.toUpperCase();
  
  // filter though persons based on filter inputs value
  let newPersonArray = persons.filter(person => {
    let personInUpperCase = person.name.toUpperCase();
    return personInUpperCase.includes(filterUpperCase);
  });

  const classes = useStyles();
  // loop through newPersonArray and creat an li for each element
  return newPersonArray.map(person => (
    <Box  className={classes.root}>
    <Divider/>
    <ListItem button key={person.name}>
      {person.name} : {person.number}
      <button onClick={() => removeEntry(person)}>Delete</button>
    </ListItem>
    </Box>
  ));
};

export default PhoneBook;