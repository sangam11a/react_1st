import React, { Component } from 'react';
import SecondComponent from './secondComponent';
export default class MyfirstComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:"",
            address:"",
            number:""
        }
        //this.handleChange=this.handleChange.bind(this)//if arrow function is not to be used but function handleChange is to be bineded for defing scope of this operator
    }
    // state={//If constructor  is not to be used
    //     username:"sangam"
    // }

    /*
        If we 're going to make a function for each state then it might be okay for 3,4 states but if we're working in large number of states then we are going to suffer.
        So,The solution to the problem is just make a function for a state that creates key,value pair 
        according to the name defined to a state.
        below is a state container
    */
    handleChange=(event)=>{
        console.log(event.target.name+":"+event.target.value)
        this.setState({
            [event.target.name]:event.target.value
           
        })
    }
    handleChange2=(event)=>{
        console.log(event.target.name+":"+event.target.value)
        this.setState({
            // [event.target.name]:event.target.value
            username:event.target.value,
            
        })
    }
    handleChange1=(event)=>{
        console.log(event.target.name+":"+event.target.value)
        this.setState({
            // [event.target.name]:event.target.value
            address:event.target.value
            
        })
    }
    render() {
        return (
            <div>
                
                This is first state .
                here we go 
                <input type="text" name="username" id="username" onChange={this.handleChange2} placeholder="Working with single function for each state:Username"></input><br></br>
                {/* Upper input function is defined for single input */}
                <input type="text" name="address" id="address" onChange={this.handleChange1} placeholder="Working with single function for each state:Address"></input><br></br>
                
                <input type="text" name="username" id="username" onChange={this.handleChange} placeholder="Working with common function for multiple state:Username"></input><br></br>
                <input type="text" name="address" id="address" onChange={this.handleChange} placeholder="Working with common function for multiple state:Address"></input><br></br>
                <input type="number" name="number" onChange={this.handleChange}/>
                <span style={{background:"grey",color:"royalblue",}}><h1>Username : </h1>{this.state.username}<br></br>
                <h1>Password</h1>:{this.state.address}
                </span>
                
               <div>
                   {/*props are the ways to communication between two independent components 
                   Props are immutable while states are mutable.While there is change in states in app the part is rendered and each time there is change in state a new (instance of) props gets instantiated for the change rather than overwriting of props(due to immutability)*/}
               <SecondComponent username={this.state.username}
               address={this.state.address}
            //    This is a way to send props
               number={this.state.number}
               >

               </SecondComponent>
               </div>
            </div>
        );
    }
}

// export default myfirstComponent;