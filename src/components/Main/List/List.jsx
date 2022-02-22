import React, { useContext } from 'react';
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';

// import { ExpenseTrackerContext } from '../../../context/context';
import useStyles from './styles';

const List = () => {
  const classes = useStyles();
//   const { transactions, deleteTransaction } = useContext(ExpenseTrackerContext);
 const transactions = [
     { id :1,}
 ]
  return (
    <MUIList dense ={false} className={classes.List}>
        {transactions.map((transaction)=>(
            <Slide direction="down" in mountOnEnter unmountOnExit key ={transaction.id}>
              <ListItem>
                  <ListItemAvatar>
                      <Avatar className ={transaction.type ==='Income'?classes.avatarIncome:classes.avatarExpense}>
                        <MoneyOff/>
                      </Avatar>
                  </ListItemAvatar>
                  <ListItemText  primary ={transaction.category}/>
              </ListItem>
            </Slide>
        ))}
    </MUIList>
  );
};

export default List;