var myObj = {
    length: 15,
    color: "yellow",
    write: function(){
        console.log('Hello');
    }
}

myObj.write();
console.log(myObj["color"]);
var prop = "color";
console.log(myObj[prop]);
myObj.length = 30;
myObj.color = 'blue';
console.log(myObj);
delete myObj.color;
myObj.newColor = 'red';
console.log(myObj);