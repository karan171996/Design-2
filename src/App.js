import React, { Component } from 'react';


class App extends Component {
 constructor(){
   super();
   this.state={
    result:'',
    timestamp:''
   }
  }
 
  fetchData() {
    let amount = this.refs.Amount.value;
    let source = this.refs.source.value;
    let destination = this.refs.destination.value;
//    console.log(amount,source,destination);
    fetch(
      "https://data.fixer.io/api/convert?access_key=a22225565c9b3d18d2ebb3694ef5f6e4&from="+source+"&to="+destination+"&amount="+amount+""
    ).then(response => response.json())
      .then((parseJSON) => this.setState({
         result: parseJSON.result,
         timestamp:parseJSON.info.timestamp
      }))
      .catch(error => console.log("parse failed", error));
      
  }

  render() {
    const {result,timestamp}= this.state;
    return <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Curency Converter</span>

                <div className="value-input">
                  <label>The amount at the source</label>
                  <input placeholder="Amount" id="first_name" type="text" name="currency" className="validate" ref="Amount" />
                  <label>The currency at the source:</label>
                  <select className="browser-default" ref="source">
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                    <option value="INR">INR</option>
                    <option value="GBP">GBP</option>
                    <option value="GEL">GEL</option>
                    <option value="GPY">GPY</option>
                  </select>
                </div>

                <div className="value-output">
                  <label>Currency at the destination:</label>
                  <select className="browser-default" ref="destination">
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                    <option value="INR">INR</option>
                  <option value="GBP">GBP</option>
                  <option value="GEL">GEL</option>
                  <option value="GPY">GPY</option>
                  </select>
                </div>

                <div className="row">
                  <div className="col s12 button" style={{"marginTop":"20px"}}>
                    <a className="waves-effect waves-light btn" onClick={this.fetchData.bind(this)}>
                      Convert
                    </a>
                  </div>
                  <div className="input-field col s12">
                    <div>
                      <label>
                        Converted Value:
                        <h3>{this.state.result}</h3>
                      </label>
                    </div>
                    <div>
                      <label>
                        timestamp:
                        <h3>{this.state.timestamp}</h3>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>;
  }
}

export default App;
