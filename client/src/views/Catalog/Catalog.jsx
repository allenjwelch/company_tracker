import React from 'react';
import './style.scss';
import API from '../../utils/API';
import CompRow from '../../components/CompRow/CompRow';

class Catalog extends React.Component {

    state = {
        allCompanies: '',
    }

    componentDidMount() {
        this.getAllCompanies()
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
        return (
            <section className='catalog-page'>
                <h1>Catalog Page</h1>

                {
                    this.state.allCompanies ?
                    <article className="catalog">
                        {
                            this.state.allCompanies.sort((a,b) => a.name - b.name ? 1 : -1).map(comp => {
                                return (
                                    <CompRow key={comp.id} comp={comp} />
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
