function Form(props) {
  return (
    <div className="container">
      <form>
        <input
          className="form-control"
          type="search"
          placeholder="Search employee by last or first name here. Click down arrow to sort A-Z. Click up arrow to sort Z-A."
          aria-label="Search"
          name="search"
          value={props.employeeSearch}
          onChange={props.handleInputs} />
      </form>
    </div>
  )
};

export default Form;