const SearchResults = ({ results }) => {
  const tableTitles = Object.keys(results[0]);

  return (
    <table style={{ textAlign: "center" }}>
      <tbody>
        <tr>
          {tableTitles.map((title, index) => {
            return <td key={index}>{title}</td>;
          })}
        </tr>
        {results.map((result, index) => (
          <tr key={index}>
            {Object.values(result).map((value, index) => {
              return <td key={index}>{value}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
