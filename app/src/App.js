import React, {Component} from 'react';
import Chart from './Carte';
import Search from './Search';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    setChartDate(data) {
        this.setState({data: data});
    }

    render() {
        return (
            <div>
                <Search setChartDate={this.setChartDate.bind(this)}/>
                <Chart data={this.state.data}/>
            </div>
        );
    }
}

export default App;
