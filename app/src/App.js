import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';
import Chart from './Carte';
import Search from './Search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(value) {
    const url = `https://packagist.org/packages/${value}/stats/all.json`;
    axios.get(url, {
      params: {
        average: 'daily',
        from: moment().subtract(6, 'months').format('YYYY-MM-DD'),
        to: moment().format('YYYY-MM-DD'),
      }
    })
      .then((response) => {
        const responseData = response.data;
        let data = this.state.data;

        if (data.length === 0) {
          for (let i in responseData.values) {
            data.push({
              name: responseData.labels[i],
              [value]: responseData.values[i]
            });
          }
          this.setState({data: data});
          return;
        }

        for (let i in data) {
          Object.assign(data[i], {[value]: responseData.values[i]});
        }
        this.setState({data: data});
      })
      .catch((error) => {
        console.error(error);
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
