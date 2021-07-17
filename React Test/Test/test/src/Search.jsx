import React from "react";

class Search extends React.Component {
  state = {
    srch: [],
  };

  componentDidMount() {
    fetch("/search")
      .then((el) => {
        return el.json();
      })
      .then((json) => {
        this.setState({srch:json});
       
      });
  }

  

  render() {
    // let breeddata = this.props.breeddta;
    // console.log(breeddata);
    let d1="";
    let d2 ="";

    const handleSelect=(e)=>{
      console.log(e);
    }
    return (
      <div class="input-group">
        <input
          type="search"
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />

        <div class="dropdown" className="pl-2" >
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            
          >
            Animal Type
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" onSelect={handleSelect} >
            {
                
               this.state.srch.map((el) => {
                return (
                
                  <a class="dropdown-item" href="#">
                    {el.animal}
                  </a>
                );
              })
            }

          </div>
        </div>

        <div class="dropdown" className="pl-2 pr-2">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Breed Type
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" onClick={(el)=>{
            d2= el.value;
          }}>
            {this.props.breeddta.map((el)=>{
              return(
                <a class="dropdown-item" href="#">
                {el.breed}
              </a>
              )
            })
          }
           
          </div>
        </div>

        <button type="button" class="btn btn-outline-primary">
          Submit
        </button>
      </div>
    );
  }
}

export default Search;
