var a = '1';
//var json = ["Javascript","PHP"]
// var json '{"name":"Son dang","age":18}

console.log(JSON.parse(a));//Từ Json -> js types
console.log(JSON.stringify([
    "Javascript",
    "PHP"
]));//Từ js types -> Json

//1. tao 1 doi tuong Promise
//2. executor

var promise = new Promise(
    //executor : func dc thuc thi khi goi Promise
    function (resolve, reject) {
        //logic xu ly
        //thanh cong: goi resolve()
        //that bai: goi reject()

        //Fake call API
        resolve([
            {
                id: 1,
                name: 'Javascipt'
            }
        ])
        //reject("Error")
    }
);
/** trang thai trong Promise
 *  1. Pedding dang cho thanh cong hay that bai --- 
 *  2. Fulfilled trang thai thanh cong
 *  3. Rejected da that bai
 */

promise
    .then(function () {
        return 1;
    })//thuc hien khi resolve() trong Promise duoc goi
    .then(function (data) {
        console.log(data);
        return 2;
    })
    .then(function (couser) {
        console.log("couser 3:", couser);
    })
    .catch(function (error) {
        console.log("error", error);
    })//thuc hien khi reject() trong Promise duoc goi
    .finally(function () {
        console.log("DOne");
    })//thuc hien khi 1 trong 2 reject() or resolve() trong Promise duoc goi

//Chain: tính chất chuỗi .then .catch ...
//ngoài ra func .then bên trên có thể trả về là 1 kết quả
//là tham số đầu vào cần của func .then bên dưới
//Nếu .then return ra 1 new Promise thì .then tiếp tục sẽ chờ

/**
 * 1. Promise.resolve trả luôn về trạng thái thành công
 * 2. Promise.reject  trả luôn về trạng thái thành công
 * 3. Promise.all     chạy song song các Promise
 *                    Promise 1 và Promise 2 chạy song song có thể kết nối dữ liệu
 * 
 * vd: var promise2 = Promise.resolve()
 *     var promise2 = Promise.reject()
 */

var promise2 = new Promise(
    function (resolve, reject) {
        //resolve('Succsess!')
        reject("error!!!")
    });

promise2
    .then(function (result) {
        console.log("Succsess promise2:", result);
    })
    .catch(function (error) {
        console.log("error:", error);
    })
//exam Promise.All
var promise3 = new Promise(
    function (resolve) {
        setTimeout(function () {
            resolve([1])
        }, 1000)
    });

var promise4 = new Promise(
    function (resolve) {
        setTimeout(function () {
            resolve([2,4])
        },2000)
    });

//nếu chạy bình thường thì promise3 chạy sau 2s thì promis4 ms chạy -> tổng 7s
//nhưng nếu dùng Promise.All chạy song song thì chỉ mất 5s

Promise.all([promise3,promise4])
    .then(function(result){
        var result1 = result[0];
        var result2 = result[1];

        console.log(result1.concat(result2));
    })