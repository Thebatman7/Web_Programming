//const { fromCallback } = require("bluebird");

document.getElementById("weatherSubmit").addEventListener("click", function(event) {
    /*
    This ensures that the browser doesn't try to send the form information to the server, like it normally would.
    Normally, when you submit a form on a web page, the browser packages up the form data, sends it to the server, and the server sends back a new HTML page.
    You will see the entire page refresh in this case. With Ajax, we instead use the form data to fetch data from a server, then update the DOM for the web page directly.
    Since we only update a small portion of the DOM, the browser only need to redraw that portion of the page.
    */
    event.preventDefault();
    const value = document.getElementById("weatherInput").value;
    if (value === "")
      return;
    console.log(value);


    /*
    This uses the JavaScript fetch method to retrieve data from the given URL.
    This returns a Promise. Remember that a Promise handles asynchronous execution.
    When we send the fetch request to the server, we don't know how long this will take.
    By returning a Promise, we can continue doing other work.
    Once the request to the server returns, JavaScript will execute the function listed in the then portion of the promise.
    In this function, we return the value of response.json(), which returns another Promise.
    When this Promise is finished, it will have converted the response we received from the API into a JSON object.
    Note that our URL adds text to the query to make this a city in the US, and also adds a setting so that returned values are in Imperial units.
    */
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=89c5043dc77628dd288ba843e8090733";
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            let results = "";
            results += '<h2>Weather in ' + json.name + "</h2>";
            for (let i=0; i < json.weather.length; i++) {
                results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
            }
            results += '<h2>' + json.main.temp + " &deg;F</h2>"
            results += "<p>"
            for (let i=0; i < json.weather.length; i++) {
                results += json.weather[i].description
                if (i !== json.weather.length - 1) results += ", "
            }
            results += "</p>";
            document.getElementById("weatherResults").innerHTML = results;
        });


    const url2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=89c5043dc77628dd288ba843e8090733";
    fetch(url2)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            console.log(json);
            let pred = "<h2>Your weather for the next 5 days:</h2>";
            document.getElementById("prediction").innerHTML = pred;
            let forecast = "";
            for (let i=0; i < json.list.length; i++) {
                forecast += "<div class=\"three_hour\">";
                forecast += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
                forecast += "<p>Temperature: " + json.list[i].main.temp + "</p>";
                forecast += '<img class=\"icon\" src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>';
                forecast += "<p>Humidity: " + json.list[i].main.humidity + " %</p>";
                forecast += "</div>";
            }
            document.getElementById("forecastResults").innerHTML = forecast;
        });


});


  