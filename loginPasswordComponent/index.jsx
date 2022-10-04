// this project was finished at https://www.codecademy.com/
import React from 'react';
// import js library for react object
import ReactDOM from 'react-dom';
// import js library for react-dom object (responsible for updating the page)

class Contact extends React.Component {
    // create class Contact from the library react.component. So, it inherits all methods of react.component
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    // function checks if the password is correct
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {
    //this function renders (shows on display) what is inside of the function

    const login = (<form action="#" onSubmit={this.authorize}>
    <input type="password" placeholder="Password" />
    <input type="submit" />
    </form>);
    // this variable has a form inside for a login and password and submit button. User should fill this form in in order to see a contact information

    const contactInfo = (
       <ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
        </ul>
    );
    // this variable has a contact information that becomes visible after a user gets a correct password

    return (
      <div id="authorization">
        <h1>{ this.state.authorized ? 'Contact' : 'Enter the Password' }</h1>
        // ternary operator that switches between two variables (login and contactInfo)

         {this.state.authorized ? contactInfo : login }
       
      </div>
    );
  }
}

ReactDOM.render(
    //this function updates contact info on the screen. if the password is correct it shows the contact info, if not it asks for the password again
  <Contact />, 
  document.getElementById('app')
);
