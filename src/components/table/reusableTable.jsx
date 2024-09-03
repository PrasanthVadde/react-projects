import { Table } from "react-bootstrap";

export const CustomTable = ({rowData=[]}) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Mobile Model</th>
          <th>Mobile Number</th>
          <th>State</th>
        </tr>
      </thead>
      <tbody>
        {
            rowData.map((eachRow,ind)=>{
                return(
                    <tr key={ind}>
                        <td>{eachRow.data1}</td>
                        <td>{eachRow.data2}</td>
                        <td>{eachRow.data3}</td>
                    </tr>
                )
            })
        }
      </tbody>
    </Table>
  );
};
