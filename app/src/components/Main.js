import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';
import Chart from './Carte';
import Search from './Search';
import Tag from './Tag';
import Github from './Github';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      words: [],
      githubStatus: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(value) {
    if (this.state.words.includes(value)) {
      return;
    }

    axios.get(`https://packagist.org/packages/${value}.json`)
      .then(response => {
        const lib = response.data.package;
        this.setState({
          githubStatus: [...this.state.githubStatus, {
            name: value,
            forks: lib.github_forks,
            issues: lib.github_open_issues,
            stars: lib.github_stars,
            watchers: lib.github_watchers,
            url: lib.repository
          }]
        })
      });

    axios.get(`https://packagist.org/packages/${value}/stats/all.json`, {
      params: {
        average: 'daily',
        from: moment().subtract(6, 'months').format('YYYY-MM-DD'),
        to: moment().format('YYYY-MM-DD'),
      }
    })
      .then(response => {
        const responseData = response.data;
        let data = this.state.data;
        this.setState({
          words: [...this.state.words, value]
        });

        if (data.length === 0) {
          for (let i in responseData.values) {
            data = [...data, {
              name: responseData.labels[i],
              [value]: responseData.values[i]
            }];
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
    const words = this.state.words.filter(v => v !== word);

    let data = [];
    let status = [];

    if (words.length !== 0) {
      status = this.state.githubStatus.filter(v => v.name !== word);

      data = this.state.data.map(v => {
        let obj = Object.assign({}, v);
        delete obj[word];
        return obj;
      });
    }

    this.setState({
      words: words,
      data: data,
      githubStatus: status
    });
  }

  render() {
    return (
      <main style={{
        padding: 20,
        paddingTop: 5,
        flex: 1
      }}>
        <Search handleSubmit={this.handleSubmit}/>
        <Tag words={this.state.words} handleDelete={this.handleDelete}/>
        <Chart data={this.state.data}/>
        <Github githubStatus={this.state.githubStatus}/>
      </main>
    )
  }
}

export default Main;
