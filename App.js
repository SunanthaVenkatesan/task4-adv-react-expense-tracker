import React from 'react';
import Expenses from "./components/Expenses/Expenses"
import NewExpense from './components/NewExpense/NewExpense';
const App=()=> {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "Tamilnadu",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      location: "Mumbai",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "Delhi",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "pune",
    },
    {
      id: "e5",
      title: "Laptop",
      amount: 45000,
      date: new Date(2021, 7, 12),
      location: "Bangalore",
    },
  ];

  //jsx syntax (combination of js and HTMl)-this work as there are transformation working behind(npm start)
  return (
    <div>
      <NewExpense/>
      <Expenses items ={expenses}/>
    </div>
    
      )
      
   
}


  

export default App;
