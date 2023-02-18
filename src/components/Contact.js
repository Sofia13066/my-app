import React, { Component } from 'react'
import "../styles/Contact.css";

const base_url = 'https://sw-info-api.herokuapp.com';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {planets: []};
    }

    componentDidMount() {
        // fetch('https://sw-info-api.herokuapp.com/v1/planets')
        fetch(`${base_url}/v1/planets`)
            .then(response => response.json())
            .then(data => this.setState ({planets: data})              
            ).then(()=>console.log(this.state))
    }

  render() {
    return (
        <div className="container">
        <form action="action_page.php">

        <label htmlFor="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>

        <label htmlFor="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>

        <label htmlFor="planet">Planet</label>
        <select id="planet" name="planet">
        {this.state.planets.map((f, i) => <option key={i} pos={i+1} value={f.name}>{f.name}</option>)}
        {/* <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="usa">USA</option> */}
        </select>

        <label htmlFor="subject">Subject</label>
        <textarea></textarea>

        <input type="submit" value="Submit"></input>

        </form>
    </div>
    )
  }
}


export default Contact;