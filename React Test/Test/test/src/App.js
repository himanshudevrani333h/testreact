import React from "react";
import Dashboard from "./Dashboard";
import Search from "./Search";

class App extends React.Component{
  
  state ={
    data:[],
  }
componentDidMount(){
  fetch("/breed").then((el)=>{
    return el.json();
  }).then((res)=>{
    this.setState({data:res});
  })
}

  render(){
  return(
    <React.Fragment>
      <div className="row p-4">
      <div className="col-5 ">
          <Search  breeddta={this.state.data}/>
        <div className="row pt-2">
          <div className="col-8 pl-5 pt-3 ">
            <Dashboard/>
          </div>
        </div>
    </div>
    </div>
      </React.Fragment>

  )
  }
}

export default App