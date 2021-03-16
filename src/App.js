import './App.css';
import Header from "./components/header";
import Form from "./components/form";
import Table from "./components/table"
import React, { Component } from "react";
import api from "./utils/API";


class App extends Component {
  state = {
    employees: [],
    search: "",
    OGs: [],
    sortAscend: true
  };

  componentDidMount() {
    api.search()
      .then(response =>
        this.setState({

          employees: response.data.results,

          OGs: response.data.results

        }))
      .catch(err => console.log(err));
  };

  handleInputs = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    this.setState({ 
      [name]: value 
    });

    const tableFilter = this.state.OGs.filter(

      employee => employee.name.first.toLowerCase().includes(value.toLowerCase())

        || employee.name.last.toLowerCase().includes(value.toLowerCase()))

    this.setState({ employees: tableFilter })
  };

  // Function shown to my by Mia Dilberovic (https://github.com/Dilberovicka31) 
  sortAscending = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    const sortingAs = this.state.employees.sort(
      (a, b) =>
      a.name.last.localeCompare(b.name.last)
    );
    this.setState({ employees: sortingAs });
  };

  // Function shown to my by Mia Dilberovic (https://github.com/Dilberovicka31) 
  sortDescending = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    const sortingDes = this.state.employees.sort((a, b) =>
      b.name.last.localeCompare(a.name.last)
    );
    this.setState({ employees: sortingDes });
  };

  render() {
    return (
      <>
        <div>
          <Header />
        </div>
        
        <div>
          <Form form={this.state.form} 
          handleInputs={this.handleInputs}/>
        </div>

        <div>
          <Table employees={this.state.employees} 
          handleSort={this.handleSort} 
          sortAscending={this.sortAscending}
          sortDescending={this.sortDescending}/>
        </div>
      </>
    )
  };
};

export default App;
