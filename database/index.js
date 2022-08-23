import mongoose from 'mongoose';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

const Income = mongoose.model(
    {
    'Business': { name: String },
    'Investments': { name: String },
    'Extra income': { name: String },
    'Deposits': { name: String },
    'Lottery': { name: String },
    'Gifts': { name: String },
    'Salary': { name: String },
    'Savings': { name: String },
    'Rental income': { name: String }
});

const Expense = mongoose.model(
    {
    'Bills': { name: String },
    'Car': { name: String },
    'Clothes': { name: String },
    'Travel': { name: String },
    'Food': { name: String },
    'Shopping': { name: String },
    'House': { name: String },
    'Entertainment': { name: String },
    'Rental income': { name: String }
});




// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));