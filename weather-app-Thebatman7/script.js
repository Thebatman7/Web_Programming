//We will use an array of objects called 'cities' that will have objects with a 'name' field that will be displayed 
//using the mustache syntax. Notice that we define the 'cities' array and the 'prefix' model variable.
var app = new Vue({
    el: '#app',
    data: {
      cities: [],
      prefix: '',
    },
    //We add the 'fetchREST' function and make sure that it is called with the correct 'prefix'.
    methods: {
        fetchREST() {
            console.log("In Fetch " + this.prefix);
        
            /**
             * Now add the code to fetch the cities that start with 'prefix' from the REST service. 
             * Once the data has been returned, the 'then' promise calls the 'json()' promise to convert the json to a javascript array.
             * Since this is an asynchronous call, we add another then when the conversion completes.
             * At this point, the 'cities' array is truncated and the cities from the REST service are pushed onto the 'cities' array.
             * They will then automatically be displayed with the mustache syntax in the html file.
             */
            var url = "http://bioresearch.byu.edu/cs260/jquery/getcity.cgi?q=" + this.prefix;
            console.log("URL " + url);
            fetch(url)
            .then((data) => {
                return (data.json());
            }).then((citylist) => {
                console.log("CityList");
                console.log(citylist);
                this.cities = [];
                for (let i = 0; i < citylist.length; i++) {
                console.log(citylist[i].city);
                this.cities.push({ name: citylist[i].city });
                };
                console.log("Got Citylist");
            })
            .catch(error => {
                console.error('Error:', error);
            });
        },
    },
});

