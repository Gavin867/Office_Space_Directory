function Form(props) {
  return (
    <div className="container">
      <form className="form-inline my-2 my-lg-0 justify-content-end">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search Employees"
          aria-label="Search"
          name="search"
          value={props.employeeSearch}
          onChange={props.search} />
      </form>
    </div>
  )
}

export default Form;