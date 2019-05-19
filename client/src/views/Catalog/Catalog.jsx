import React from 'react';
import { Redirect } from 'react-router-dom'
import './style.scss';
import API from '../../utils/API';
import CompRow from '../../components/CompRow/CompRow';

class Catalog extends React.Component {

    state = {
        allCompanies: '',
    }

    componentDidMount() {
        this.getAllCompanies()
        console.log(this.props)
    }

    getAllCompanies() {
        API.getAllCompanies()
            .then(res =>
                this.setState({allCompanies: res.data, }, () => {
                    console.log(this.state.allCompanies, "state.allCompanies");
                }))
            .catch(err => console.log(err))
    }

    render() {
        if (this.props.user === '' || this.props.user === null ) {
            return <Redirect to='/' />
        }
        return (
            <section className='catalog-page'>
                <h1>Catalog View</h1>

                {
                    this.state.allCompanies ?
                    <article className="catalog">
                        {
                            this.state.allCompanies.sort((a,b) => a.name - b.name ? 1 : -1).map(comp => {
                                return (
                                    <CompRow key={comp.id} user={this.props.user} comp={comp} />
                                )
                            })
                        }
                    </article> : <h3>There are currently no companies in your catalog.</h3>
                }
            </section>
        )
    }
}


export default Catalog;
