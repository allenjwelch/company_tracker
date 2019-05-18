import React from 'react'; 
import logo from '../../logo.svg';
import './style.scss';

class Home extends React.Component {

    componentDidMount() {
        console.log(this.props)
    }

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