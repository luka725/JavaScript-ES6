/*
Homework #1 
Describing music variables for meta-data
*/ 

// Creating object 
var meta = {
    artist: "Robert Plant",
    name: "Robert",
    surname: "Plant",
    age: 72,
    genre: "Rock N Roll",
    group: "Led zeppelin",
    birth: {
        day: "20",
        month: "August",
        year: 1948,
        isAlive: true,
    },
    person: function(){return "Name: " + this.artist + "\n" + "Age: " + this.age + "\n" + "Genre: " + this.genre + "\n" + "Group: " + this.group + "\n" + "Birth day: " + this.birth.day+ " " + this.birth.month + " " + this.birth.year + "\n" + "Is alive?" + " " + this.birth.isAlive }
};
var 


artistArray = Array();
artistArray[0] = meta.name;
artistArray[1] = "Was born in " + meta.age +" " + "Year ago";
artistArray[2] = "He was singer in " + meta.group;
if(meta.birth.isAlive === true){
    artistArray[3] = "He is alive!"
}else {
    artistArray[3] = "No Dead"
}

var artistArrayjoined = artistArray.join(", ");



console.log(artistArrayjoined);
console.log(typeof(meta.birth));
console.log(typeof(meta));
console.log(meta.person());