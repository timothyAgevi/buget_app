import React, { useContext } from 'react';
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';

// import { ExpenseTrackerContext } from '../../../context/context';
import useStyles from './styles';

const List = () => {
  const classes = useStyles();
//   const { transactions, deleteTransaction } = useContext(ExpenseTrackerContext);
 const transactions = []
  return (
    <MUIList>
        {transactions.map((transaction)=>(
            <Slide>

            </Slide>
        ))}
    </MUIList>
  );
};

export default List;