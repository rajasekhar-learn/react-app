import React from "react";
import  SurvayResultsLineChart  from "./SurvayResultsLineChart";
import axios from 'axios';

export default class AnalysisDashBoard extends React.Component {
 
  constructor(props){
      super(props);
      this.state={
        resultNotPresent: true,
        errorMsg:"",
        servayResults: [],
        description:""
      }
      this.fetchState = this.fetchState.bind(this);
      this.renderButton=this.renderButton.bind(this);
    }
    
fetchState(api){
  let url="/servay-responses"
  if(api.url!=="/all"){
    url="/servay-responses?category=female"
  }
  axios.get(url).then(response=>{
      this.setState({
          resultNotPresent: false,
          errorMsg:"",
          servayResults: response.data,
          description: api.description
        });
  }).catch(error=>{
    this.setState({
        resultNotPresent: false,
        errorMsg:"unable to fetch analysis results !.",
        servayResults: [],
        description: api.description
      })
    return error;
  });
  }

  renderButton(item) {
    return (
      <div class="col">
      <button type="button" class="btn btn-primary" onClick={()=> this.fetchState(item) } >{item.description}  </button>
      </div>
    );
  }

  render(){
    const items = [
      {url : "/all", description: "Avarage Servay responses for all"},
      {url : "/female", description: "Avarage Servay responses for female"}
    ];
    return (
        <div>
            <div class="container">
              <div class="row">
                { items.map(this.renderButton) }
              </div>
          </div>
          <br/>
          {!this.state.resultNotPresent &&
           <SurvayResultsLineChart data={this.state} description={this.state.description}/>
          }
        </div>
    );
  }
}
