import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={apiResponse: ""};
  }

  callApi(){
    fetch("http://localhost:9000/testapi")
    .then(res => res.text())
    .then(res => this.setState({apiResponse:res}))
  }

  componentDidMount(){
    this.callApi()
  }


  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p>
          {this.state.apiResponse}
        </p>
    </div>
    )
  }
}

export default App;
