// ASSESSMENT 4: REACT ASSESSMENT
// Coding practical questions

// NOTE: In this assessment you will NOT be running a react file structure

// 1. Write a React component that prints "I am a component!" Be sure to include all necessary imports, exports, etc.
console.log(`
Problem 1
`)


// import React, {Component} from 'react'
// import "./App.css"

// class App extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
            
//         }
//     }
//     render() {
//         return(
//             <div>
//                 <p>I am a component!</p>
//             </div>
//         );
//     }
// }
// export default App



// 2. Refactor this vanilla javascript loop to a map function. The output should remain the same.
console.log(`
Problem 2
`)

var names = ["Ford Prefect", "Arthur Dent", "Trillian", "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

// for(let i=0; i<names.length; i++){
//   console.log(`${names[i]} is ${names[i].length} characters long.`)
// }

names.map(element => console.log(`${element} is ${element.length} characters long.`))



// 3. Destructure the following variables out of state.
console.log(`
Problem 3
`)

this.state = {
  name: "Dracula",
  home: "Transylvania",
  dislikes: ["mirrors", "garlic", "wooden stakes"]
}

var {name, home, dislikes} = this.state



// 4. Write a React method that would add one and update the state of the count each time the method is called.
console.log(`
Problem 4
`)

this.state = {
  count: 0
}

var addOne = () => {
  var {count} = this.state
  this.setState({count: count + 1})
}



// 5. There are four mistakes in this code that would cause it to break our application. Find the mistakes and fix them:
console.log(`
Problem 5
`)

// import React, { Component } from 'react';

// class Recipes{                         // class Recipes extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       recipes:                     // meatballs and mac & cheese should be part of the recipes array []
//         {name: 'Meatballs'},
//         {name: 'Mac & Cheese'}       // wasn't mentioned in class, but wouldn't having both keys as 'name' cause issues?
//     }
//   }

//   render() {
//     return(                                         // this shouldn't be here
//       let recipe = recipes.map(recipe => {
//         return(
//           <li key={recipe.name}>{recipe.name}</li>
//         )
//       })
//       <ul>                                        // needs return here to return the recipe
//         {recipe}
//       </ul>
//     )
//   }
// }
// export default Recipes