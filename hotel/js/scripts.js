// what is the path to the JSON file?
const apiURL = "./hoteldata.json";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    console.log(myList);
    
    
    console.log(myList.length);
    for (i = 0; i < myList.length; i++) {
    
    let myImageTag = document.createElement("img");
    myImageTag.src = myList[i].photo;
    myImageTag.alt = myList[i].name;
    console.log(myList[i].photo);
    
    let myCaptionTag = document.createElement("figcaption");
    myCaptionTag.textContent = myList[i].name;
    console.log(myList[i].name);
    
    let myFigureTag = document.createElement("figure");
    myFigureTag.appendChild(myImageTag);
    myFigureTag.appendChild(myCaptionTag);
    
    
    

//create CHILD elements

let theIconLeftTag = document.createElement("i");
theIconLeftTag.className = "icon ion-md-car";

let theAddress1Tag = document.createElement("p");
theAddress1Tag.textContent = myList[i].address;
console.log(myList[i].address[0]);

let theAddress2Tag = document.createElement("p");
theAddress2Tag.textContent = myList[i].address[1];
console.log(myList[i].address[1]);

let theIconRightTag = document.createElement("i");
theIconRightTag.className = "icon ion-md-call";

let thePhoneTag = document.createElement("p");
thePhoneTag.textContent = myList[i].phone;
console.log(myList[i].phone);

//create the SPAN elements
let theSpanLeftTag = document.createElement("span");
theSpanLeftTag.appendChild(theIconLeftTag);
theSpanLeftTag.appendChild(theAddress1Tag);

let theSpanRightTag = document.createElement("span");
theSpanRightTag.appendChild(theIconRightTag);
theSpanRightTag.appendChild(thePhoneTag);

 // create the PARENTS
       
        
     
        let theDivTag = document.createElement("div");
        theDivTag.appendChild(theSpanLeftTag);
        theDivTag.appendChild(theSpanRightTag);
    
    //Add both to a section tag
        let theSectionTag = document.createElement("section");
        theSectionTag.appendChild(myFigureTag);
        theSectionTag.appendChild(theDivTag);
        
        
        
        document.getElementById('myCards').appendChild(theSectionTag);
    
    
    
    

    } //close loop
    
    
}); //end of "then" fat arrow function