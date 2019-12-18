var ufoData = data;
// display UFO sightings
var tbody = d3.select("tbody");
function tableDisplay(ufo) {
    
    ufo.forEach((ufoRecord) => {
      var row = tbody.append("tr");
      Object.entries(ufoRecord).forEach(([ value]) => {
        var cell = row.append("td");
        cell.html(value);});
     
    });
  
    //console.log(ufoData);
  // update for new table data returned
  function deleteTbody() {
    d3.select("tbody")
      .selectAll("tr").remove()
      .selectAll("td").remove();
  };

  // UFO sightings--#2
  // console.log(ufoData);
  tableDisplay(ufoData);

  // Control that button baaaaaby!
  var button = d3.select("#filter-btn");
  // filter the database and display
  button.on("click", function(event) {
    d3.event.preventDefault();
    deleteTbody();
    var dateInput = d3.select("#datetime").property("value");
        if (dateInput.trim() === "" ) {
      // if/else
      var filteredData = ufoData;
    } else {
      // display dataset  
      var filteredData = ufoData.filter(ufo => 
        ufo.datetime === dateInput.trim());
    };
      // "No record found"
    if (filteredData.length == 0) {
      d3.select("tbody")
        .append("tr")
        .append("td")
          .attr("colspan", 7)
          .html("<h4>No Records Found</h4>");
    };
  
    // console.log(filteredData);
    tableDisplay(filteredData);
  });
}



