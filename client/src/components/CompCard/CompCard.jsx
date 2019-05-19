import React from 'react';
// import { Link } from "react-router-dom";
import Chart from 'chart.js';
import './style.scss';

class CompCard extends React.Component {

    componentDidMount() {
        console.log(this.props)
        // this.chartjs()
    }

    chartjs() {
        const revenue = document.querySelector(`#earning-chart[data-id="${this.props.id}"]`);
        // console.log(revenue);
		let barChart1 = new Chart(revenue, {
			type: "bar",
			data: {
				labels: [
                    this.props.year1,
                    this.props.year2,
                    this.props.year3,
                    this.props.year4,
                ],
				datasets: [
					{
						label: "These things...",
						data: [
                            this.props.earn1,
                            this.props.earn2,
                            this.props.earn3,
                            this.props.earn4,
                        ],
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
            // <article key={this.props.comp.id} className="comp-card">
            <article  className="comp-card">
                <h1>{this.props.name}</h1>
                <div className="data">
                    {
                        this.props.card === 'address' ?
                            <div className="address">
                                <p>{this.props.address}</p>
                                <p>{this.props.city}, {this.props.state}</p>
                                <p>{this.props.phone}</p>
                            </div>

                        : this.props.card === 'description' ?
                            <div className="description">
                                <p>{this.props.description}</p>
                                <p>{this.props.contact_name}: {this.props.contact_phone}</p>
                            </div>

                        : this.props.card === 'finance' ?
                            <div className="finance">
                                <p><span>Expected Revenue: </span>${this.props.expected}</p>
                                <p><span>Total Revenue: </span>${this.props.total}</p>
                                <p className="total"><span>Loss/Gain: </span>${this.props.total - this.props.expected}</p>
                                {/* <div className="chart">
                                    <canvas id="earning-chart" data-id={this.props.id} height="200px" width="200px"></canvas>
                                </div> */}
                            </div>

                        : this.props.card === 'status' ?
                            <div className="status">
                                <p className="ital">{this.props.status}</p>
                                <p>{this.props.description}</p>
                            </div>
                        : <></>
                    }
                
                </div>
            </article>
        )
    }

}

export default CompCard; 