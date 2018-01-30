import React, {Component} from 'react';
import axios from 'axios';
import Chart from './Carte';
import Search from './Search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(value) {
    const url = `https://packagist.org/packages/${value}/stats/all.json`;
    axios.get(url)
      .then((response) => {
        const data = response.data;
        let chartData = [];
        for (let i in data.values) {
          chartData.push({
            name: data.labels[i],
            value: data.values[i]
          });
        }
        this.setState({data: {chartData: chartData, name: value}});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Search handleSubmit={this.handleSubmit}/>
        <Chart data={this.state.data}/>
      </div>
    );
  }
}

export default App;
