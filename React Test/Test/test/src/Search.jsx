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
        this.setState({ srch: json });
      });
  }

  render() {
    let drop1 = "";
    let drop2 = "";
    let ip = "";
    return (
      <div class="input-group">
        <input
          type="search"
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={(el) => {
            // console.log(el.currentTarget.value);
            ip = el.currentTarget.value;
          }}
        />

        <div class="dropdown" className="pl-2">
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
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {this.state.srch.map((el) => {
              return (
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={(el) => {
                    drop1 = el.currentTarget.innerText;
                  }}
                >
                  {el.animal}
                </a>
              );
            })}
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
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {this.props.breeddta.map((el) => {
              return (
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={(el) => {
                    drop2 = el.currentTarget.innerText;
                  }}
                >
                  {el.breed}
                </a>
              );
            })}
          </div>
        </div>

        <button type="button" class="btn btn-outline-primary" onClick={()=>{
          this.props.receiveip(ip,drop1,drop2)
        }}>
          Submit
        </button>
      </div>
    );
  }
}

export default Search;
