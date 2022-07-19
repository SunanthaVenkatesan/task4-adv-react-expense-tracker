import React,{useState}from "react";
import './ExpenseForm.css'

const ExpenseForm=()=>{
    //the commented one is the default approach as everytime we call states
    /*
    const [enteredTitle,setEnteredTitle]=useState('')
    const[enteredAmount,setEnteredAmount]=useState('')
    const[enteredDate,setEnteredDate]=useState('')
    const[enteredLocation,setEnteredLocation]=useState('')
    */
   //the below is another alternative as we call state only one time and both works fine 
    
   const [userInput,setUserInput]=useState({
    enteredTitle:'',
    enteredAmount:'',
    enteredDate:'',
    enteredLocation:''
})



    const titleChangeHandler=(event)=>{
        //setEnteredTitle(event.target.value)
        setUserInput({
            ...userInput,//this is always called as the old data is not lost as react will not keep a track of that
            enteredTitle:event.target.value
        })
    }
    
    const amountChangeHandler=(event)=>{
        //setEnteredAmount(event.target.value)
        setUserInput({
            ...userInput,
            enteredAmount:event.target.value
        })
    }
    
    const dateChangeHandler=(event)=>{
        //setEnteredDate(event.target.value)
        setUserInput({
            ...userInput,
            enteredDate:event.target.value
        })
    }
    
    const locationChangeHandler=(event)=>{
        //setEnteredLocation(event.target.value)
        setUserInput({
            ...userInput,
            enteredLocation:event.target.value
        })
    }
    
    
    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="Date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Location</label>
                <input type="text" onChange={locationChangeHandler}/>
            </div>
        </div>
        <div className=".new-expense__actions">
            <button type="submit">Add Expenses</button>
        </div>
        


    </form>
}

export default ExpenseForm