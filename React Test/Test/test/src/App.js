import React from "react";
import Dashboard from "./Dashboard";
import Search from "./Search";

class App extends React.Component{
  
  state ={
    data:[],
    ip:"",
    drop1:"",
    drop2:""
  }
componentDidMount(){
  fetch("/breed").then((el)=>{
    return el.json();
  }).then((res)=>{
    this.setState({data:res});
  })
}

receiveip= (ip,drop1,drop2)=>{
 this.setState({ip:ip})
 this.setState({drop1:drop1})
 this.setState({drop2:drop2})
}

  render(){
  return(
    <React.Fragment>
      <div className="row p-4">
      <div className="col-5 ">
          <Search  breeddta={this.state.data} receiveip={this.receiveip}/>
        <div className="row pt-2">
          <div className="col-8 pl-5 pt-3 ">
            <Dashboard ip={this.state.ip} drop1={this.state.drop1} drop2={this.state.drop2}/>
          </div>
        </div>
    </div>
    </div>
      </React.Fragment>
  )
  }
}

export default App