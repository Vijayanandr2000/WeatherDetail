function submit(){
    let name = document.getElementById('text').value;
    
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+name+"&appid=c7a9299a3d8da1d910da08bcffb48a3b"
    console.log(url)
    async function getData(){
        try{
            var countryData = await fetch(url);
            var data = await countryData.json();
            console.log(data);
            console.log(data.main.temp);
            console.log(data.name);
            console.log(data.weather[0].description);
            document.getElementById('name').innerHTML = data.name;
            document.getElementById('temp').innerHTML = "Temp:"+" "+data.main.temp;
            document.getElementById('desc').innerHTML = "Description:"+" "+data.weather[0].description;
            document.getElementById('humi').innerHTML = "Humidity:"+" "+data.main.humidity;

        }
        catch(err){
            alert('Check your Place name')
        }


    }
getData();
}












