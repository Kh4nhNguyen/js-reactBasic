/**
 * HTML DOM
 * 
 * 1.element: id, class, tag, css selector, html collection
 * 2.attribute
 * 3.text
 *

document.write('')// nhaan vao 1 chuoi va in ra browser

var headingNode = document.getElementById("headingID")

console.log(headingNode)

console.log({
    element: headingNode
})

var headingClass = document.getElementsByClassName("headingClass")
console.log(headingClass)

var headingTag = document.getElementsByTagName("h1")
console.log(headingTag)

var headingQuerry = document.querySelector(".headingClass")// truyen gioong nhw truyen css
console.log(headingQuerry)

//Attribute node
var bodyQuerry = document.querySelector("body")
bodyQuerry.title = "Body"
bodyQuerry.setAttribute("class","setColor")//set them thuoc tinh vao element
bodyQuerry.getAttribute("class")//get thuoc tinh tu element

console.log(bodyQuerry)

//text node: innerText, textContent
var headingElement = document.querySelector('#headingID')

//lay noi dung
console.log(headingElement.innerText);
console.log(headingElement.textContent);
console.log(headingElement);

//thay doi bang noi dung moi
headingElement.innerText = 'New heading'
console.log(headingElement.innerText);

//inner HTML, outerHTML

headingElement.innerHTML = '<i title="heading">New HTML</i>'
console.log(headingElement.innerHTML);
console.log(headingElement.outerHTML);

headingElement.innerHTML = '<i title="heading">New HTML</i>'


var array = ['Javascript', 'PHP', 'Ruby'];
var [a, b ,c] = array;// log ra a, b, c tuong ung Javascript, PHP, Ruby
var [a, b, ...rest] =  array;//log ra a, b tuong ung Javascript, PHP và mảng còn lại ['Ruby']
console.log(a);
console. log(rest);
*/

var boxElement = document.querySelector('.box');

boxElement.style.width = '100px';
boxElement.style.height = '200px';
boxElement.style.backgroundColor = 'red';

Object.assign(boxElement.style, {
    width: '100px',
    height: '200px',
    backgroundColor: 'green',
})//Object == boxElement, assign == gán

console.log(boxElement.style.backgroundColor);

//Classlist Property
// add
// contains
// remove
// toggle

var boxElement = document.querySelector('.box');
console.log(boxElement.classList);
// boxElement.classList.add('red');//them nhieu cach nhau = , --- vd 'red', 'blue'

console.log(boxElement.classList.contains('red'));//kiem tra trang thai ton tai cua class

// boxElement.classList.remove('red');//xoa class


//boxElement.classList.toggle('red');//kiem tra lien tuc neu có class thì remove còn không có thì add


setInterval(() => {
    boxElement.classList.toggle('red');
}, 1000)

//dom events

var h2Element = document.querySelector('h2');//do dung querySelector nen chi nhan the h2 dau tien

h2Element.onclick = function () {
    console.log(Math.random());
}
console.log(h2Element);

//duyet toan bo the h2
var h2Element = document.querySelectorAll('h2');

for (var i = 0; i < h2Element.length; i++) {
    h2Element[i].onclick = function (e) {
        console.log(e.target);//target tra ve chinh the element dang lang nghe
    }
}

//Input/ select
var input = document.querySelector('input[type="text"]');//lay ra the input co type = text

input.onchange = function (e) {
    console.log(e.target.value);
}//lay sau khi go

input.oninput = function (e) {
    console.log(e.target.value);
}//lay tung ki tu khi go vao input

var checkboxElement = document.querySelector('input[type="checkbox"]')

checkboxElement.onchange = function (e) {
    console.log(e.target.checked);
}//lay tung ki tu khi go vao input

var selectElement = document.querySelector('select')

selectElement.onchange = function (e) {
    console.log(e.target.value);
}//lay tung ki tu khi go vao input

//Key up/ down
var inputElement = document.querySelector('input[type="text"]');

inputElement.onkeydown = function (e) {
    console.log(e);
}//lay tung ki tu khi go vao input

//preventDefault: loai bo hanh vi mac dinh

var aElements = document.links;

for (var i = 0; i < aElements.length; ++i) {
    aElements[i].onclick = function (e) {
        console.log(e.target.href);

        if (!e.target.href.startsWith('https://f8.edu.vn')) {
            e.preventDefault();
        }
    }
}//startsWith check chuỗi bắt đầu bằng gì

//stopPropagation : ngan chan sk noi bot

document.querySelector('div').onclick =
    function (e) {
        console.log('DIV');
    }

document.querySelector('button').onclick =
    function (e) {
        e.stopPropagation();
        console.log('Click me!');
    }

/**event listener
 * 1. xử lý nhiều việc khi 1 event xảy ra
 * 2. lắng nghe/ hủy bỏ lắng nghe
*/

var btn = document.getElementById('btn');

/* pp dom event
setTimeout(function(){
    btn.onclick = function(){
        //viec 1
        console.log('viec 1');
        //viec 2
        console.log('viec 2');
        //viec 3
        alert('viec 3')
    }
},3000)

//huy bo lang nghe === gan lai = 1 func rong
btn.onclick = function(){
    //viec 1
    console.log('viec 1');
    //viec 2
    console.log('viec 2');
    //viec 3
    alert('viec 3')
}

setTimeout(function(){
    btn.onclick = function(){}
},3000)
*/

//lang nghe == event listener
var btn = document.getElementById('btn');

//lang nghe
function viec1() {
    console.log('event 1');
}
btn.addEventListener('click', viec1)

btn.addEventListener('click', function (e) {
    console.log('event 2');
})
//huy bo lang nghe
setTimeout(function () {
    btn.removeEventListener('click', viec1)
}, 3000)//đối số thứ 2 của removeEventListener phải là 1 func có sẵn