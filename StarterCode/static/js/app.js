// from data.js
const tableData = data;
const tbody = d3.select("tbody");

function buildTable(data) {
  // clear data
  tbody.html("");

  // loop through data
  data.forEach((dataRow) => {
    // Append a row to the table body
    const row = tbody.append("tr");

    // loop through field

    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

function handleClick() {

  // Grab the datetime value from the filter
  const date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  if (date) {
    // filter the table data
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  // build the table
  buildTable(filteredData);
}

// listen for event
d3.selectAll("#filter-btn").on("click", handleClick);

// build the table
buildTable(tableData);
