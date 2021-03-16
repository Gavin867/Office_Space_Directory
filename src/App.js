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

  sortAscending = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    const sortingAs = this.state.users.sort(
      (a, b) =>
      a.name.first.localeCompare(b.name.first)
    );
    this.setState({ users: sortingAs });
  };

  sortDescending = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    const sortingDes = this.state.users.sort((a, b) =>
      b.name.first.localeCompare(a.name.first)
    );
    this.setState({ users: sortingDes });
  };

  render() {
    return (
      <>
        <div>
          <Header />
        </div>
        
        <div>
          <Form form={this.state.form} handleInputs={this.handleInputs} />
        </div>

        <div>
          <Table employees={this.state.employees} handleSort={this.handleSort} />
        </div>
      </>
    )
  };
};

export default App;
