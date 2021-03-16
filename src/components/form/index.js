function Form(props) {
  return (
    <div className="container">
      <form>
        <input
          className="form-control"
          type="search"
          placeholder="Search Employee by Name or Click Column Icon to Change Sort Order."
          aria-label="Search"
          name="search"
          value={props.employeeSearch}
          onChange={props.handleInputs} />
      </form>
    </div>
  )
};

export default Form;