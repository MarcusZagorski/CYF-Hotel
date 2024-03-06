import { useState } from "react";
import "./SearchResults.scss";
import dayjs from "dayjs";
import CustomerProfile from "../../CustomerProfile/CustomerProfile";

function SearchResults({ results }) {
  const rowTitles = Object.keys(results[0]);
  const rowsData = results;

  const [selectedRow, setSelectedRow] = useState(null);

  return (
    <table>
      <thead>
        <tr>
          {rowTitles.map((rowHeader, rowHeaderIndex) => {
            return <th key={rowHeaderIndex}>{rowHeader}</th>;
          })}
          <th>Number of Nights</th>
        </tr>
      </thead>
      <tbody>
        {rowsData.map((rowData, rowDataIndex) => {
          const numberOfNights = dayjs(rowData.checkOutDate).diff(
            dayjs(rowData.checkInDate),
            "day"
          );

          const isSelected = rowDataIndex === selectedRow;

          const rowClass = isSelected ? "table__row" : "";

          return (
            <tr
              key={rowDataIndex}
              style={{ textAlign: "center" }}
              onClick={() => setSelectedRow(rowDataIndex)}
              className={rowClass}
            >
              <td>{rowData.id}</td>
              <td>{rowData.title}</td>
              <td>{rowData.firstName}</td>
              <td>{rowData.surname}</td>
              <td>{rowData.email}</td>
              <td>{rowData.roomId}</td>
              <td>{rowData.checkInDate}</td>
              <td>{rowData.checkOutDate}</td>
              <td>{numberOfNights}</td>
              <td>
                <CustomerProfile id={rowData.id} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default SearchResults;
