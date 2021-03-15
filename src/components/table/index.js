function Table(props) {

  return (
    <div className="container">
      <table className="table table-striped table-hover justify-content-center">

      <thead className="thead-dark">
        <tr>
          <th scope="col"></th>
          <th scope="col" onClick={props.sort}>First</th>
          <th scope="col">Last</th>
          <th scope="col" onClick={props.sort}>Email</th>
          <th scope="col">Phone</th>
        </tr>
      </thead>

      <tbody>
        {props.employees.length > 0 ? props.employees.map((user, index) => {
          return(
            <tr key={index}>
              <th scope="row"><img src={user.picture.thumbnail} alt="Profile Thumbnail" /></th>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          )
        }):
          <tr>
            <th scope="row"></th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        }
      </tbody>
    </table>
  </div>
  )
};

export default Table;