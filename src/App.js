import React, { Component } from 'react';
import './App.css';
import Offer from './Offer'

const username='Karianne';
//const username=document.getElementById('userInfo').value;
alert("Fethching data for User: " + username);


class App extends Component {
  constructor(){
    super();
    this.state={
      offers: {}    
    }
  }
  getWidgetData(uId){
        fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`)
        /* fetch('https://jsonplaceholder.typicode.com/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            cardNo: 'xxxx',
            token: 'xxxx',
          })
        }) */
        .then( (response) => {
            return response.json()
        })
        .then( (json) => {
            this.setState({
                offers: json
            })
        });
    }

  componentDidMount() {
      this.getWidgetData(4);
  }
  render() {
    console.log(this.state.offers);

    return (
      <div className="App">
        
        <div className="Widget-container">
          <header className="App-header">
            <h1 className="App-title">My Widget</h1>
          </header>
           <h2> Offers for you: </h2>
           <ul className="list-of-offers">
            {
              Object
                .keys(this.state.offers)
                  .map((key) => <Offer key={key} index={key} details={this.state.offers[key]} />)
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;