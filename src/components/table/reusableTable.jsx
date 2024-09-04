import { Table } from "react-bootstrap";

export const CustomTable = ({ rowData = [] }) => {
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
        {rowData.map((eachRow, ind) => {
          return (
            <tr key={ind}>
              <td>{eachRow.data1}</td>
              <td>{eachRow.data2}</td>
              <td>{eachRow.data3}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export const ReusableTable = ({ heading = [], rowData = [] }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {heading.map((eachHead, ind) => {
            return <th key={ind}>{eachHead}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {rowData.map((row, rowIndex) => {
          return (
            <tr key={rowIndex}>
              {heading.map((head, colIndex) => {
                return <td key={colIndex}>{typeof row[head]=="object" ? "None":row[head] }</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};