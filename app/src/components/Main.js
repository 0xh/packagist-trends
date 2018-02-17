import React, { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import moment from 'moment';
import Chart from './Carte';
import Search from './Search';
import Tag from './Tag';
import Github from './Github';

const queryFormat = { arrayFormat: 'bracket' };

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      words: [],
      githubStatus: [],
    };

    this.process = this.process.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.setGithubStats = this.setGithubStats.bind(this);
    this.setPackageStats = this.setPackageStats.bind(this);
  }

  componentDidMount() {
    this.process(this.props.location.search);
  }

  componentWillReceiveProps(nextProps) {
    this.process(nextProps.location.search);
  }

  process(search) {
    let { q } = queryString.parse(search, queryFormat);
    q = Array.from(new Set(q));

    for (let v of q) {
      if (this.state.words.includes(v)) {
        continue;
      }

      this.setGithubStats(v);
      this.setPackageStats(v);
    }

  }

  handleSubmit(value) {
    if (this.state.words.includes(value)) {
      return;
    }

    const { location, history } = this.props;
    const q = queryString.parse(location.search, queryFormat).q || [];
    const query = queryString.stringify({ q: [...q, value] }, queryFormat);
    history.push(`?${query}`);
  }

  setGithubStats(value) {
    axios.get(`https://packagist.org/packages/${value}.json`).then(response => {
      const lib = response.data.package;
      this.setState({
        githubStatus: [
          ...this.state.githubStatus,
          {
            name: value,
            forks: lib.github_forks,
            issues: lib.github_open_issues,
            stars: lib.github_stars,
            watchers: lib.github_watchers,
            url: lib.repository,
          },
        ],
      });
    });
  }

  setPackageStats(value) {
    axios
      .get(`https://packagist.org/packages/${value}/stats/all.json`, {
        params: {
          average: 'daily',
          from: moment()
            .subtract(6, 'months')
            .format('YYYY-MM-DD'),
          to: moment().format('YYYY-MM-DD'),
        },
      })
      .then(response => {
        const responseData = response.data;
        let data = this.state.data;
        this.setState({
          words: [...this.state.words, value],
        });

        if (data.length === 0) {
          for (let i in responseData.values) {
            data = [
              ...data,
              {
                name: responseData.labels[i],
                [value]: responseData.values[i],
              },
            ];
          }
          this.setState({ data: data });
          return;
        }

        for (let i in data) {
          Object.assign(data[i], { [value]: responseData.values[i] });
        }
        this.setState({ data: data });
      })
      .catch(error => {
        console.error(error);
      });
  }

  handleDelete(word) {
    const { location, history } = this.props;
    let {q} = queryString.parse(location.search, queryFormat);
    q = q.filter(v => v !== word);
    const query = queryString.stringify({ q: q }, queryFormat);
    history.push(`?${query}`);

    const {words, githubStatus, data} = this.state;

    let newData = [];
    let newGithubStatus = [];
    const newWords = words.filter(v => v !== word);

    if (newWords.length) {
      newGithubStatus = githubStatus.filter(v => v.name !== word);
      newData = data.map(v => {
        let obj = Object.assign({}, v);
        delete obj[word];
        return obj;
      });
    }

    this.setState({
      words: newWords,
      data: newData,
      githubStatus: newGithubStatus,
    });
  }

  render() {
    const style = {
      padding: 20,
      paddingTop: 5,
      flex: 1,
    };

    return (
      <main style={style}>
        <Search handleSubmit={this.handleSubmit} />
        <Tag words={this.state.words} handleDelete={this.handleDelete} />
        <Chart data={this.state.data} />
        <Github githubStatus={this.state.githubStatus} />
      </main>
    );
  }
}

export default Main;
