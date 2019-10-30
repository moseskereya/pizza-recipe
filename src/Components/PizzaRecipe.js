import React, { Component } from 'react';
class Pizza extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render(props) {
        return ( 
            <div>
                <main className="main">
                <img src={this.props.recipe.recipe.image} alt="pizza"/>  
                </main>
                <article className="label">
                <p>{this.props.recipe.recipe.label}</p>
                </article>
            </div>
         );
    }
}
 
export default Pizza;