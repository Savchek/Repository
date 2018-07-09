import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="center">
        <header>
          <div className="title">
            <h2><span className="logo">the<span className="green">one</span></span></h2>
          </div>

          <div className="navigation">
            <ul>
              <li><a href="">Features</a></li>
              <li><a href="">How it Works</a></li>
              <li><a href="">Pricing</a></li>
              <li><a href="">Team</a></li>
              <li><a href="">Clients</a></li>
            </ul>
          </div>

          <div className="fields">
            <div className="fields-center">
              <p className="second">Register Now, it`s <span className="green">Free.</span></p>
              <p className="third">Complete the below form to get instant access</p>
              <form>
                <input type="email" placeholder="Email"/>
                <input placeholder="Username"/>
                <input type="password" name="password" placeholder="Password"/>
                <input type="password" name="password" placeholder="Confirm password"/>
                <label>
                  <input className="checkbox" type="checkbox" name="checkbox-test"/>
                  <span className="checkbox-custom"></span>
                 </label>
                <p className="text-and-cnd">Terms & Conditions</p>
                <p><button className="btn">Register</button></p>
              </form>
            </div>
          </div>

          <div className="more-text">
            <div className="more-text-center">
              <p className="first">This is <span className="logo">the<span className="green">one</span></span></p>
              <p className="second">The Best Marketing / Landing Page Template</p>
              <p className="third">Rabbits are small mammals in the family Leporidae of the order Lagomorpha (along with the hare and the pika). Oryctolagus cuniculus includes the European rabbit species and its descendants, the world's 305 breeds of domestic rabbit.</p>
              <button className="btn-special">Learn more</button>
              <button className="btn">Our pricing</button>
            </div>
          </div>

        </header>
      </div>
    );
  }
}

export default App;
