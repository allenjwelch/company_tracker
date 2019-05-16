import React from 'react'; 
import './style.scss';
import API from '../../utils/API';

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
                    <>
                        {
                            this.state.allCompanies.map(comp => {
                                return (
                                    <div key={comp.id} className="row">
                                        <div className="name">
                                            <h1>{comp.name} <span>{comp.status}</span></h1>
                                        </div>
                                        <div className="comp-info">
                                            <p className="address">{comp.street_address}</p>
                                            <p className="address">{comp.city}, {comp.state}</p>
                                        </div>

                                        <div className="comp-des">
                                            <p className="description">{comp.description}</p>
                                            <p className="contact-name">{comp.contact_name}</p>
                                            <p className="contact-phone">{comp.contact_phone}</p>
                                        </div>

                                        <div className="financial">
                                            <div className="chart">
                                                <p>{comp.financial_revenue}</p>
                                            </div>

                                            <div className="chart">
                                                <p>{comp.financial_earnings}</p>
                                            </div>
                                        </div>
                                    
                                    
                                    
                                    </div>
                                    
                                )
                            })
                        }
                    </> : <h3>There are currently no companies in your catalog.</h3>
                }
            </section>
        )
    }
}

export default Catalog; 