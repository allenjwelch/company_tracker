import React from 'react'; 
import logo from '../../logo.svg';
import '../../App.css';

class Home extends React.Component {

    render() {
        return (
            <section className='home-page'>
                <h1>Home Page</h1>
                <img src={logo} className="App-logo" alt="logo" />
                <p>Edit <code>src/App.js</code> and save to reload.</p>
            </section>
        )
    }
}

export default Home; 