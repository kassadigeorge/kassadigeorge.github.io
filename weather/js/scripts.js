 const d = new Date();
    const todayDayNumber = d.getDay();
    
    const myweekday = new Array(7);
    myweekday[0] = "Sunday";
    myweekday[1] = "Monday";
    myweekday[2] = "Tuesday";
    myweekday[3] = "Wednesday";
    myweekday[4] = "Thursday";
    myweekday[5] = "Friday";
    myweekday[6] = "Saturday";


const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5816861&appid=8e456a144c00ce77d62b0d5917246e4a&units=imperial";

fetch (apiURL)
.then((response) => response.json())
.then((weatherInfo) => {
    console.log(weatherInfo);
    console.log(weatherInfo.city.name);
    
    
    
    let sample = document.createElement("h1");
    sample.textContent = weatherInfo.city.name;
    document.getElementById("place").appendChild(sample);
    
    
    
    
    
    
    let mylist = weatherInfo.list;
    
    let forecastDayNumber = todayDayNumber;
    console.log(forecastDayNumber);
    
    for (i = 0; i < mylist.length; i++) {
        
        let time = mylist[i].dt_txt;
        if (time.includes('21:00:00')) {
            console.log("found on entry with 21:00:00 in the time. It was report "+i+" from the mylist of 40");
            
            forecastDayNumber += 1;
            if (forecastDayNumber===7){forecastDayNumber = 0;}
            
           let theDayName = document.createElement("span");
            theDayName.textContent = myweekday[forecastDayNumber];
            console.log(">"+myweekday[forecastDayNumber]);
            
            let theTemp = document.createElement("p");
            theTemp.textContent = weatherInfo.list[i].main.temp + "\xB0";
   
            let iconcode = weatherInfo.list[i].weather[0].icon;
            let iconPath = 
                "//openweathermap.org/img/w/" + iconcode +".png";
            let theIcon = document.createElement("img")
            theIcon.src = iconPath;
            
            
              let theDay = document.createElement("div");
                theDay.appendChild(theDayName);
                theDay.appendChild(theTemp);
                theDay.appendChild(theIcon);
            
            document.getElementById('weatherforecast').appendChild(theDay);
            
        } //end if
    } //end for
    
  
    
}); //end of .then