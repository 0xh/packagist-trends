import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';
import Chart from './Carte';
import Search from './Search';
import Header from './Header';
import Tag from './Tag';
import Reboot from 'material-ui/Reboot';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      words: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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
        this.setState({words: [...this.state.words, value]});

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

  handleDelete(word) {
    const words = this.state.words.filter((v) => {
      return v !== word;
    });

    let data = this.state.data.map((v) => {
      let obj = Object.assign({}, v);
      delete obj[word];
      return obj;
    });

    if (Object.keys(data[0]).length === 1) {
      data = [];
    }

    this.setState({
      words: words,
      data: data
    });
  }

  render() {
    return (
      <div>
        <Reboot />
        <Header />
        <Search handleSubmit={this.handleSubmit}/>
        <Tag words={this.state.words} handleDelete={this.handleDelete}/>
        <Chart data={this.state.data}/>
      </div>
    );
  }
}

export default App;
