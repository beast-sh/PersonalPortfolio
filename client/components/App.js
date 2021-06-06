import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Add from './Add'
export default class App extends React.Component {
constructor() {
    super();
  this.state = {selectedMonth:'Jan', selectedYear: 2016, data: []};
    this.getData = this.getData.bind(this);
  }
componentDidMount() {
    this.getData(this, '2016');
  }
  componentWillReceiveProps(nextProps) {
    this.getData(this, '2016');
  }
getData(ev, year){
    axios.get('/getAll?month=All&year='+year)
      .then(function(response) {
        ev.setState({data: response.data});
        ev.setState({selectedYear: parseInt(year)})
      });
  }
render() {
    return (
      <div>
        <Add selectedMonth={this.state.selectedMonth} selectedYear={this.state.selectedYear} />
        
      </div>
    );
  }
}