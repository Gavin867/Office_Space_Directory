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
    OGemployees: [],
    sortAscend: true
  };

  componentDidMount() {
    api.search()
      .then(response =>
        this.setState({

          employees: response.data.results,

          OGemployees: response.data.results

        }))
      .catch(err => console.log(err));
  };

  handleInputs = (event) => {
    event.preventDefault();

    const { name, value } = event.target;

    this.setState({ 
      [name]: value 
    });

    const filter = this.state.OGemployees.filter(

      employee => employee.name.first.toLowerCase().includes(value.toLowerCase())

        || employee.name.last.toLowerCase().includes(value.toLowerCase()))

    this.setState({ employees: filter })
  };

  handleSort = () => {
    const filters = this.state.employees.sort((a, b) => a.name.first.localeCompare(b.name.first))
    
    this.setState({ employees: filters })
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
