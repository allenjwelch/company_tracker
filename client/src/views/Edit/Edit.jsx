import React from 'react'; 
import API from '../../utils/API';
import { Redirect } from 'react-router-dom'
import '../Add/style.scss';

class Edit extends React.Component {

    state = {
        toCatalog: false,
    }

    componentDidMount() {
        console.log(this.props)
        const { comp } = this.props.location.state.comp
        console.log(comp)
        console.log(this.props.location.state.comp.user);
        this.setState({
            // comp: {
                id: comp.id,
                name: comp.name,
                status: comp.status,
                phone: comp.phone,
                street_address: comp.street_address,
                city: comp.city,
                state: comp.state,
                description: comp.description,
                contact_name: comp.contact_name,
                contact_phone: comp.contact_phone,
                financial_earnings_year_1: comp.financial_earnings_year_1,
                financial_earnings_income_1: comp.financial_earnings_income_1,
                financial_earnings_year_2: comp.financial_earnings_year_2,
                financial_earnings_income_2: comp.financial_earnings_income_2,
                financial_earnings_year_3: comp.financial_earnings_year_3,
                financial_earnings_income_3: comp.financial_earnings_income_3,
                financial_earnings_year_4: comp.financial_earnings_year_4,
                financial_earnings_income_4: comp.financial_earnings_income_4,
                financial_revenue_expected: comp.financial_revenue_expected,
                financial_revenue_total: comp.financial_revenue_total
            // }, 
            
            
        }, () => {
            console.log(this.state)
        })
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        API.editCompanyById(this.state)
        //   .then(res => this.setState({ recipes: res.data }))
          .catch(err => console.log(err))
          .then(console.log('company updated...'))
          .then(() => this.setState({ toCatalog: true }))
    };

    deleteComp = () => {
        API.deleteCompany(this.state.id)
            .catch(err => console.log(err))
            .then(console.log('company deleted...'))
            .then(() => this.setState({ toCatalog: true }))
    }

    render() {
        if (this.state.toCatalog === true) {
            return <Redirect to='/catalog' />
        } 
        else if (this.props.location.state.user === '' || this.props.location.state.user === null ) {
            return <Redirect to='/' />
        }
        return (

            this.state ?

            <section className='edit-page'>
                <h1>Update or Delete</h1>
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
                            <option value="Reasearching">Reasearching</option>
                            <option value="Pending Approval">Pending Approval</option>
                            <option value="Approved">Approved</option>
                            <option value="Declined">Declined</option>
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
                        className="update-btn"
                        onClick={this.handleFormSubmit}>
                        Update Company
                    </button>

                    <button
                        className="del-btn"
                        onClick={this.deleteComp}>
                        Delete Company
                    </button>
                </div>
            </section>
            : <h1>Got nothin...</h1>
        )
    }
}

export default Edit; 