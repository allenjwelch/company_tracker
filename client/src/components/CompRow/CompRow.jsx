import React from 'react';
// import { Link } from "react-router-dom";
import Chart from 'chart.js';

import './style.scss';

class CompRow extends React.Component {
    // console.log(props);

    componentDidMount() {
        this.chartjs()
    }
    toggleSlide(e) {
        e.target.closest('.comp-row').classList.toggle('is-active');
    }

    chartjs() {
        const revenue = document.querySelector(`#revenue-chart[data-id="${this.props.comp.id}"]`);
        // console.log(revenue);
		let barChart1 = new Chart(revenue, {
			type: "pie",
			data: {
				labels: ['financial_revenue_expected', 'financial_revenue_total'],
				datasets: [
					{
						label: "These things...",
						data: [this.props.comp.financial_revenue_expected, this.props.comp.financial_revenue_total],
						backgroundColor: ['rgba(0, 150, 0, .5)'],
					},
				]
			}
        });

        const earnings = document.querySelector(`#earnings-chart[data-id="${this.props.comp.id}"]`);
        // console.log(earnings);
		let barChart2 = new Chart(earnings, {
			type: "bar",
			data: {
                labels: [
                    this.props.comp.financial_earnings_year_1,
                    this.props.comp.financial_earnings_year_2,
                    this.props.comp.financial_earnings_year_3,
                    this.props.comp.financial_earnings_year_4,],
				datasets: [
					{
						label: "These things...",
						data: [
                            this.props.comp.financial_earnings_income_1,
                            this.props.comp.financial_earnings_income_2,
                            this.props.comp.financial_earnings_income_3,
                            this.props.comp.financial_earnings_income_4,],
						backgroundColor: [
                            'rgba(0, 150, 0, .5)',
                            'rgba(150, 150, 0, .5)',
                            'rgba(0, 150, 150, .5)',
                            'rgba(150, 150, 150, .5)'],
					},
				]
			}
		});
    }


    render() {
        return (
            <div key={this.props.comp.id} className="comp-row">
                <div className="name" onClick={(e) => this.toggleSlide(e)}>
                    <h1>{this.props.comp.name} <span>{this.props.comp.status}</span></h1>
                </div>

                <div className="comp-info">
                    <div className="comp-address">
                        <p className="address">{this.props.comp.street_address}</p>
                        <p className="address">{this.props.comp.city}, {this.props.comp.state}</p>
                        <p className="address">{this.props.comp.phone}</p>
                    </div>

                    <div className="comp-des">
                        <p className="description"><span>Description: </span>{this.props.comp.description}</p>
                        <p className="contact-name"><span>Contact: </span>{this.props.comp.contact_name}</p>
                        <p className="contact-phone"><span>Phone: </span>{this.props.comp.contact_phone}</p>
                    </div>

                    <div className="financial">
                        <div className="chart">
                            <canvas id="revenue-chart" data-id={this.props.comp.id} height="400px" width="400px"></canvas>
                        </div>

                        <div className="chart">
                            <canvas id="earnings-chart" data-id={this.props.comp.id} height="400px" width="400px"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default CompRow;
