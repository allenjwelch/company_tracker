import React from 'react';
import { Redirect } from 'react-router-dom'
import './style.scss';
import API from '../../utils/API';

class Add extends React.Component {

    state = {
        // comp: {
            name: '',
            status: '',
            phone: '',
            street_address: '',
            city: '',
            state: '',
            description: '',
            contact_name:'',
            contact_phone: '',
            financial_earnings_year_1: '',
            financial_earnings_income_1: '',
            financial_earnings_year_2: '',
            financial_earnings_income_2: '',
            financial_earnings_year_3: '',
            financial_earnings_income_3: '',
            financial_earnings_year_4: '',
            financial_earnings_income_4: '',
            financial_revenue_expected: '',
            financial_revenue_total: '',
        // }
        
    }

    componentDidMount() {
        console.log(this.props)
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        API.postNewCompany(this.state)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
            .then(console.log('company added...'))
            .then(() => this.setState({ toCatalog: true }))
    };

    render() {
        if (this.state.toCatalog === true) {
            return <Redirect to='/catalog' />
        } else if (this.props.user === '' || this.props.user === null ) {
            return <Redirect to='/' />
        }
        return (
            <section className='add-page'>
                <h1>Add Page</h1>
                
                <div className="form">

                    <div className="col">
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            placeholder="Company Name"
                        />
                        <select
                            type="text"
                            name="status"
                            value={this.state.status}
                            onChange={this.handleInputChange}
                            placeholder="Status"
                        >
                            <option value=""></option>
                            <option value="Pending">Pending</option>
                            <option value="Complete">Complete</option>
                            <option value="In-Active">In-Active</option>
                            <option value="Unknown">Unknown</option>
                        </select>
                        <input
                            type="text"
                            name="phone"
                            value={this.state.phone}
                            onChange={this.handleInputChange}
                            placeholder="Phone"
                        />
                        <input
                            type="text"
                            name="street_address"
                            value={this.state.street_address}
                            onChange={this.handleInputChange}
                            placeholder="Address"
                        />
                        <input
                            type="text"
                            name="city"
                            value={this.state.city}
                            onChange={this.handleInputChange}
                            placeholder="City"
                        />
                        <input
                            type="text"
                            name="state"
                            value={this.state.state}
                            onChange={this.handleInputChange}
                            placeholder="State"
                        />
                    </div>

                    <div className="col">
                        <textarea
                            type="text"
                            name="description"
                            value={this.state.description}
                            onChange={this.handleInputChange}
                            placeholder="Description"
                        />
                        <input
                            type="text"
                            name="contact_name"
                            value={this.state.contact_name}
                            onChange={this.handleInputChange}
                            placeholder="Contact Name"
                        />
                        <input
                            type="text"
                            name="contact_phone"
                            value={this.state.contact_phone}
                            onChange={this.handleInputChange}
                            placeholder="Contact Phone"
                        />
                    </div>

                    <div className="finance">
                        <input
                            type="text"
                            name="financial_earnings_year_1"
                            value={this.state.financial_earnings_year_1}
                            onChange={this.handleInputChange}
                            placeholder="financial_earnings_year_1"
                        />
                        <input
                            type="text"
                            name="financial_earnings_income_1"
                            value={this.state.financial_earnings_income_1}
                            onChange={this.handleInputChange}
                            placeholder="financial_earnings_income_1"
                        />
                        <input
                            type="text"
                            name="financial_earnings_year_2"
                            value={this.state.financial_earnings_year_2}
                            onChange={this.handleInputChange}
                            placeholder="financial_earnings_year_2"
                        />
                        <input
                            type="text"
                            name="financial_earnings_income_2"
                            value={this.state.financial_earnings_income_2}
                            onChange={this.handleInputChange}
                            placeholder="financial_earnings_income_2"
                        />
                        <input
                            type="text"
                            name="financial_earnings_year_3"
                            value={this.state.financial_earnings_year_3}
                            onChange={this.handleInputChange}
                            placeholder="financial_earnings_year_3"
                        />
                        <input
                            type="text"
                            name="financial_earnings_income_3"
                            value={this.state.financial_earnings_income_3}
                            onChange={this.handleInputChange}
                            placeholder="financial_earnings_income_3"
                        />
                        <input
                            type="text"
                            name="financial_earnings_year_4"
                            value={this.state.financial_earnings_year_4}
                            onChange={this.handleInputChange}
                            placeholder="financial_earnings_year_4"
                        />
                        <input
                            type="text"
                            name="financial_earnings_income_4"
                            value={this.state.financial_earnings_income_4}
                            onChange={this.handleInputChange}
                            placeholder="financial_earnings_income_4"
                        />
                        <input
                            type="text"
                            name="financial_revenue_expected"
                            value={this.state.financial_revenue_expected}
                            onChange={this.handleInputChange}
                            placeholder="financial_revenue_expected"
                        />
                        <input
                            type="text"
                            name="financial_revenue_total"
                            value={this.state.financial_revenue_total}
                            onChange={this.handleInputChange}
                            placeholder="financial_revenue_total"
                        />
                    </div>


                    <button
                        onClick={this.handleFormSubmit}>
                        Add Company
                    </button>
                </div>



            </section>
        )
    }
}

export default Add;
