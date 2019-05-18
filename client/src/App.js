import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import About from './views/About/About';
import Home from './views/Home/Home';
import Catalog from './views/Catalog/Catalog';
import Compare from './views/Compare/Compare';
import Add from './views/Add/Add';
import Edit from './views/Edit/Edit';
import Header from './components/Header/Header';
import SignIn from './components/SignIn/SignIn';
import './App.css';

class App extends Component {

	state = {
		user: ''
	}

	signOut() {
		this.setState({user: ''}, () => {
			localStorage.removeItem('token')
			// window.location.href = '/';
		})

	}

	signInModal() {
		document.querySelector('.sign-in-container').classList.add('active');
	}

	signIn() {
		this.setState({user: document.getElementById('userName').value}, () => {
		localStorage.setItem('token', this.state.user)
		})
		document.querySelector('.sign-in-container').classList.remove('active');
	}

	signOut = this.signOut.bind(this);
	signIn = this.signIn.bind(this);

	render() {
		return (
			<Router>
				<div className="App">
				<Header user={this.state.user} signOut={this.signOut} signInModal={this.signInModal}/>
					<Route exact path="/" render={() => <Home user={this.state.user}/>} />
					<Route exact path="/catalog" render={() => <Catalog user={this.state.user}/>} />
					<Route exact path="/compare" render={() => <Compare user={this.state.user}/>} />
					<Route exact path="/add" render={() => <Add user={this.state.user}/>} />
					<Route exact path="/edit" component={Edit} />
					{/* <Route exact path="/edit" render={() => <Edit user={this.state.user}/>} /> */}

					<SignIn signIn={this.signIn}/>
				</div>
			</Router>
		);
	}
}

export default App;
