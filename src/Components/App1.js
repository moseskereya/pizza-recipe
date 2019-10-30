import React, { Component } from 'react';
import axios from "axios"
import Pizza from "./PizzaRecipe"
import Nav from "../Nav"
class App1 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            recipes:[],
            pizza:""
         }
    }

       GetPizza = (e) =>{
           e.preventDefault()
           console.log(this.state)
        const query = "pizza"
        const APP_ID = "d0021928";
        const APP_KEY = "3c5a85a012ba1a0db1c2a1899694b6dc";
        axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        .then(Response => {
            console.log(Response)
            this.setState({
                recipes:Response.data.hits
            })
        })
        .catch(error =>{
            console.log(error)
        })
    }

    searchPizza = (e) => {
        this.setState({ pizza: e.target.value
        })
    }
    render() { 
        const pizza   = this.state.pizza
        return ( 
            <main>
             <Nav/>
            <form onSubmit={this.GetPizza}>
                <input type="text" name="pizza" 
                onChange={this.searchPizza}
                value={pizza}/><br/>
                <button type="submit">Search pizza</button>
            </form> 
              <div className="Pizza">
                {
                  this.state.recipes.map(recipe => (
                      <Pizza recipe  = {recipe}
                      key={recipe.recipe.calories}
                      lable={recipe.label}
                      healthLabels={recipe.recipe.healthLabels}/>
                  ))
                }
              </div>
            </main>
        
         );
    }
}
 
export default App1;