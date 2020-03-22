import React from 'react';
import LineChart, { parseGroupingBy } from 'react-linechart';
import '../../node_modules/react-linechart/dist/styles.css';
import axios from 'axios';

export default class AvarageResponsesOfAllResultsList extends React.Component {
  state = {
    resultNotPresent: true,
    errorMsg:"",
    servayResults: []
  }


  componentDidMount() {
    axios.get(`/servay-responses?category=female`)
      .then(res => {
        const servayResults = res.data;
        this.setState(
          {
            resultNotPresent: false,
            errorMsg:"",
            servayResults: servayResults
          }
          );
      }).catch(error => {
        this.setState(
          {
            resultNotPresent: false,
            errorMsg:"unable to fetch analysis results !.",
            servayResults: []
          }
        )
        return error;
      })
  }

  render() {

    const grouped = parseGroupingBy(this.state.servayResults , "year", "avarage", "questionId", (i)=> i);


    if(this.state.resultNotPresent){

        return (
          <div>
          <br/>
         <h4>Loading ....</h4>
         <div class="spinner-border text-primary" role="status">
           <span class="sr-only">Loading...</span>
        </div>
        </div>
        );
    }

    if(this.state.errorMsg.length>0){
      return (
        <div>
          <br/>
          <div class="container">
            <div class="row">
              <div class="col-md-1"></div>
              <div class="col-md-10">
                  <div class="alert alert-danger" role="alert">
                          <h4>{this.state.errorMsg}</h4>
                 </div>
              </div>
              <div class="col-md-1"></div>
            </div>
          </div>

          <br/>

               <div class="container">
                           <div class="row">
                               <div class="col">
                               <table class="table table-sm table-hover table-dark">
                                   <thead>
                                   <tr>
                                       <th scope="col">category</th>
                                       <th scope="col">questionId</th>
                                       <th scope="col">Year</th>
                                       <th scope="col">Avarage</th>
                                   </tr>
                                   </thead>
                                   <tbody>
                                       { this.state.servayResults.map(result => <tr><th scope="row">{result.catagory}</th><td>{result.questionId}</td><td>{result.year}</td><td>{result.avarage}</td></tr>)}
                                   </tbody>
                               </table>
                           </div>
                           <div class="col">
                               <div className="App">
                                   <h3>Servay Responses for female category </h3>
                                   <LineChart
                                       width={600}
                                       height={400}
                                       data={grouped}
                                       xLabel="Year"
                                       yLabel="Avarage"
                                   />
                               </div>
                           </div>
                           </div>
                       </div>
      </div>
      );
  }
    return (
    <div>
        <br/>

        <div class="container">
                    <div class="row">
                        <div class="col">
                        <table class="table table-sm table-hover table-dark">
                            <thead>
                            <tr>
                                <th scope="col">category</th>
                                <th scope="col">questionId</th>
                                <th scope="col">Year</th>
                                <th scope="col">Avarage</th>
                            </tr>
                            </thead>
                            <tbody>
                                { this.state.servayResults.map(result => <tr><th scope="row">{result.catagory}</th><td>{result.questionId}</td><td>{result.year}</td><td>{result.avarage}</td></tr>)}
                            </tbody>
                        </table>
                    </div>
                    <div class="col">
                        <div className="App">
                            <h3>Servay Responses for female category </h3>
                            <LineChart
                                width={600}
                                height={400}
                                data={grouped}
                                xLabel="Year"
                                yLabel="Avarage"
                            />
                        </div>
                    </div>
                    </div>
                </div>
    </div>
    )
  }

}