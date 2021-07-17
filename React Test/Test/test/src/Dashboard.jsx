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
