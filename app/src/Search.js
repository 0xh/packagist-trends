import React, {Component} from 'react';
import {Input} from 'reactstrap';
import axios from 'axios';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input
                    type="text"
                    id="search"
                    placeholder="Please enter a packages..."
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </form>
        );
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.value === '') {
            return;
        }

        const url = `https://packagist.org/packages/${this.state.value}/stats/all.json`;
        axios.get(url)
            .then((response) => {
                const data = response.data;
                let chartData = [];
                for (let i in data.values) {
                    chartData.push({
                        name: data.labels[i],
                        cake: data.values[i]
                    });
                }
                this.props.setChartDate(chartData);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export default Search;
