var tableData = data;

tableData.forEach(displayTable);

var process = d3.select("#filter-btn");

 process.on("click", function() {

   d3.select("tbody").html("");

   d3.event.preventDefault();

// Get the value property of the input element
    var date_time = d3.select("#datetime").property("value");
     console.log(date_time);

    var city_name = d3.select("#city").property("value");
     console.log(city_name);

    var country_name = d3.select("#country").property("value");
     console.log(country_name);

    var shape = d3.select("#shape").property("value");
     console.log(shape);

    var state_name = d3.select("#state").property("value");
     console.log(state_name);

    var filteredData = tableData

    if (date_time != "") {filteredData = filteredData.filter(record => record.datetime === date_time)
        console.log(filteredData)}

    if (city_name != "") {filteredData = filteredData.filter(record => record.city === city_name)
        console.log(filteredData)}

    if (country_name != "") {filteredData = filteredData.filter(record => record.country === country_name)
        console.log(filteredData)}
    
    if (shape != "") {filteredData = filteredData.filter(record => record.shape === shape)
        console.log(filteredData)}
    
    if (state_name != "") {filteredData = filteredData.filter(record => record.state === state_name)
        console.log(filteredData)}

    
//  Display the filtered dataset
    filteredData.forEach(displayTable)

});

// Define a function to append table based on reports data
function displayTable(data) {
    var tbody = d3.select("tbody");

    var row = tbody.append("tr");

// for each key value pair in an object
    Object.entries(data).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);

       
    });
}


