import React from 'react'; 
import { Redirect } from 'react-router-dom'
import './style.scss';
import API from '../../utils/API';
import CompCard from '../../components/CompCard/CompCard'


class Compare extends React.Component {

    state = {
        allCompanies: '',
        sort: '',
    }

    componentDidMount() {
        this.getAllCompanies()
        console.log(this.props)
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value }, () => console.log(this.state));
    };

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
            <section className='compare-page'>
                <h1>Compare View</h1>
                <div className="sort">
                    <select
                        type="text"
                        name="sort"
                        value={this.state.sort}
                        onChange={this.handleInputChange}
                    >
                        <option value="">Choose a sort option</option>
                        <option value="address">Address</option>
                        <option value="description">Description</option>
                        <option value="finance">Finance Records</option>
                        <option value="status">Status</option>
                    </select>
                </div>

                <div className="companies-grid">
                    {
                        this.state.sort === 'address' ?
                            this.state.allCompanies.map(comp => {
                                return <CompCard 
                                            key={comp.id} 
                                            card="address"
                                            name={comp.name} 
                                            address={comp.street_address} 
                                            city={comp.city} 
                                            state={comp.state}
                                            phone={comp.phone} />
                            })
                        : this.state.sort === 'description' ?
                            this.state.allCompanies.map(comp => {
                                return <CompCard 
                                            key={comp.id} 
                                            card="description"
                                            name={comp.name} 
                                            description={comp.description} 
                                            contact_name={comp.contact_name} 
                                            contact_phone={comp.contact_phone}  />
                            })                        
                        : this.state.sort === 'finance' ?
                            this.state.allCompanies.map(comp => {
                                return <CompCard 
                                            key={comp.id} 
                                            id={comp.id}
                                            card="finance"
                                            name={comp.name} 
                                            // earn1={comp.financial_earnings_income_1}
                                            // earn2={comp.financial_earnings_income_2}
                                            // earn3={comp.financial_earnings_income_3}
                                            // earn4={comp.financial_earnings_income_4}
                                            // year1={comp.financial_earnings_year_1}
                                            // year2={comp.financial_earnings_year_2}
                                            // year3={comp.financial_earnings_year_3}
                                            // year4={comp.financial_earnings_year_4} 
                                            expected={comp.financial_revenue_expected}
                                            total={comp.financial_revenue_total} />
                            })  
                        : this.state.sort === 'status' ?
                            this.state.allCompanies.map(comp => {
                                return <CompCard 
                                            key={comp.id} 
                                            card="status"
                                            name={comp.name} 
                                            status={comp.status} 
                                            description={comp.description} />
                            })  
                        : <div></div>
                        
                    }
                
                </div>


            </section>
        )
    }
}

export default Compare; 