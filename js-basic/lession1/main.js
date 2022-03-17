/**
 * taoj 1 phuong thuc mới trong Array,String = prototype

Array.prototype.reduce2 = function(callback,result){

}


var numbers = [1, 2, 3, 4, 5, 6]

var newNumber = numbers.reduce(function(total,number){
    console.log(total + number);
    return total + number
}, "0")

console.log(newNumber);
*/

//kiểm tra tồn tại 1 chuỗi trong 1 chuôix hay 1 mảng hay không
var title = 'Responsive web design Responsive';
//console.log(title.includes('Responsive'));

var courses = ['Javascqipt', 'PHP', "Dart"];
// console.log(courses.includes('Javascript', 1));

/**
 * function myFunction(param) {
    param('Học lập trình');
}
function myCallback(value) {
    console.log('Value: ', value);
}
myFunction(myCallback);
 * 
 */

// var courses = ['Javascqipt', 'PHP', "Dart"];

courses.forEach(function (value) {
    //console.log(value);
})
// filter
var courses = [
    {
        name: 'Javascript',
        coin: 680
    },
    {
        name: 'PHP',
        coin: 860
    },
    {
        name: 'Ruby',
        coin: 980
    }
]

Array.prototype.filter2 = function(callback){
    var ouput = [];

    for(var i in this){
        if(this.hasOwnProperty(i)){
            var result = callback(this[i],i,this);
            if(result){
                ouput.push(this[i])
            }
        }
    }

    return ouput;
}

var newArr =  courses.filter2(function(value){
    return value.coin > 700 && value.coin < 900;
})
// console.log(newArr);

var courses = [
    {
        name: 'Javascript',
        coin: 680,
        isFinish: false
    },
    {
        name: 'PHP',
        coin: 860,
        isFinish: true
    },
    {
        name: 'Ruby',
        coin: 980,
        isFinish: false
    }
]

var newArr =  courses.some(function(value){
    console.log(value);
    return value.coin === 700;
})

console.log(newArr);


