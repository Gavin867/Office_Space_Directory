function Form(props) {
  return (
    <div className="container">
      <form>
        <input
          className="form-control col-lg-10"
          type="search"
          placeholder="Search Employees"
          aria-label="Search"
          name="search"
          value={props.employeeSearch}
          onChange={props.search} />
          <button className="col-lg-2" type="submit" onClick={props.searchEmployees}>Search</button>
      </form>
    </div>
  )
}

export default Form;