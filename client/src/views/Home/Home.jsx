import React from 'react'; 
import logo from '../../assets/icons/radar.gif';
import './style.scss';

class Home extends React.Component {

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <section className='home-page'>
                <h1>Company Tracker</h1>
                <img src={logo} className="logo" alt="logo" />

                {
                    this.props.user.length > 0 ?
                    <div className="intro">
                        <h3>Getting started with Company Tracker: </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, recusandae exercitationem! Porro autem error esse totam inventore expedita cum veniam tempora libero doloribus laudantium, soluta earum odio, cumque quae ut. Illo laudantium distinctio aliquam, quidem eos vel similique dignissimos sapiente.</p>
                    </div>
                    : <h3>Sign in to continue...</h3>

                }
            </section>
        )
    }
}

export default Home; 