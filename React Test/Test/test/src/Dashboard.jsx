import React from "react";

class Dashboard extends React.Component {
  state = {
    allData: [],
  };

  componentDidMount(){
    fetch("/dashboard").then((el)=>{
      return el.json();
    }).then((res)=>{
     
      this.setState({allData:res});
      
    })
  }
  render() {

    let arr=[];

    let allData = this.state.allData
    for( let i =0; i<allData.length; i++){
        if(allData[i].name.toLowerCase() == this.props.ip.toLowerCase() && allData[i].animal.toLowerCase() == this.props.drop1.toLowerCase() && allData[i].breed.toLowerCase() == this.props.drop2.toLowerCase()){
          arr.push(allData[i]);
        }
    }
    if(arr.length >0){
      this.state.allData = arr;
    }
    return (
      <table class="table">
        <thead>
          <tr>
            <th scope="col">PetName</th>
            <th scope="col">AnimalType</th>
            <th scope="col">Breed</th>
          </tr>
        </thead>
        <tbody>
          
          {this.state.allData.map((el)=>{
            return(
              <tr key={el.id}>
              <td>{el.name}</td>
              <td>{el.animal}</td>
              <td>{el.breed}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    );
  }
}

export default Dashboard;
