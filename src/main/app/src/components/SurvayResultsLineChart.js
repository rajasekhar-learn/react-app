import React from 'react';
import LineChart, { parseGroupingBy } from 'react-linechart';
import '../../node_modules/react-linechart/dist/styles.css';

export default class SurvayResultsLineChart extends React.Component {
  
    render() {

    const grouped = parseGroupingBy(this.props.data.servayResults , "year", "avarage", "questionId", (i)=> i);

    return (
    <div>
        <br/>
        { this.props.data.errorMsg.length>0  &&
          <div class="container">
            <div class="row">
              <div class="col-md-1"></div>
              <div class="col-md-10">
                  <div class="alert alert-danger" role="alert">
                          <h4>{this.props.data.errorMsg}</h4>
                 </div>
              </div>
              <div class="col-md-1"></div>
            </div>
          </div>
        }
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
                                { this.props.data.servayResults.map(result => <tr><th scope="row">{result.catagory}</th><td>{result.questionId}</td><td>{result.year}</td><td>{result.avarage}</td></tr>)}
                            </tbody>
                        </table>
                    </div>
                    <div class="col">
                        <div className="App">
                        <h3>{this.props.description} </h3>
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