import React from "react";
import Table from "react-bootstrap/Table";

const Table1 = ({ headers, data }) => {
  return (
    <div>
      <Table responsive hover className="l-table">
        <thead>
          <tr>
            {headers.map(head => (
              <th>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr>
              {headers.map(head => (
                <td>{row[head]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Table1;