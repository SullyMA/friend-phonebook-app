import React from "react";
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';




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
    <>
    <Divider  />
    <ListItem button key={person.name}>
    <li >
      {person.name} : {person.number}
      <button onClick={() => removeEntry(person)}>Delete</button>
    </li>
    </ListItem>
    </>
  ));
};

export default PhoneBook;