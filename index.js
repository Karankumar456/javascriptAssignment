//ques 1
var data = [
    { name: "juice", price: 50, quantity: 3 },//150
    { name: "cookie", price: 30, quantity: 9 },//270
    { name: "shirt", price: 880, quantity: 1 },//880
    { name: "pen", price: 100, quantity: 2 }//200
];
function sumTotal(arr) {
    var result = [];
    for(var i=0; i<data.length; i++){
        result.push({
            name: arr[i].name, 
            totalIndividual: (arr[i].price*arr[i].quantity)
        })
    }
    return result
}
var indTotal = sumTotal(data);
console.log( indTotal);

var totalSum = 0;
for(var j=0; j<indTotal.length; j++){
    totalSum+=indTotal[j].totalIndividual;
}
console.log("totalSum :"+totalSum);

// <!-- //qus 2 -->
var bio={
    name:"karan",
    passord:4234242,
    age:22,
    Email:"kk456@gmail.com",
    gender:"male",
    city:"karachi",
    country:"Pakistan",
};
var userCheck=prompt("Check properties exist in object ")
var changecase=userCheck.toLowerCase();
var result = bio.hasOwnProperty(changecase);
console.log(result);

// //ques 3
function BioData(name, fatherName, age, id) {
      this.name = name;
      this.fatherName = fatherName;
      this.age = age;
      this.id = id;
}
var data1 = new BioData("karan", "sawai mal", 22,1998);
var data2 = new BioData ("chaman", "sawai mal", 22, 2001);
var data3 = new BioData ("kirtan", "heman das", 26, 2002);
console.log(data1, data2,data3);