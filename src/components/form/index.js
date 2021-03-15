function Form(props) {
  return (
    <div className="container">
      <form>
        <input
          className="form-control"
          type="search"
          placeholder="Search Employees by Name"
          aria-label="Search"
          name="search"
          value={props.employeeSearch}
          onChange={props.handleInputChange} />
      </form>
    </div>
  )
}

export default Form;