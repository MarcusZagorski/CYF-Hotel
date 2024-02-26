import dayjs from "dayjs";

const SearchResults = ({ results }) => {
  const tableTitles = Object.keys(results[0]);

  return (
    <table style={{ textAlign: "center" }}>
      <tbody>
        <tr>
          {tableTitles.map((title, index) => {
            return <td key={index}>{title}</td>;
          })}
          <td>Number of Nights</td>
        </tr>

        {results.map((result, resultIndex) => (
          <tr key={resultIndex}>
            {Object.values(result).map((value, valueIndex) => {
              return <td key={valueIndex}>{value}</td>;
            })}
            <td>
              {dayjs(result.checkOutDate).diff(
                dayjs(result.checkInDate),
                "day"
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
