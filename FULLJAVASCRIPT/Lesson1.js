// Khởi tạo JavaScript với Hello World
/* console.log("Tôi là Tin Tin là một Junior của trường Drew University!")
console.log(1,2,3,4,5);
console.log(true || false);
console.log([1,2,3], [4,5,6], [7,8,9]);
console.log({a:1, b:2, c:3, d:4, h:5, g:6}); */

// Biến(variables) và kiểu dữ liệu(datatypes)
/* var a = 5;    //var cũ rồi ít dùng, bây giờ dùng const thay cho var!
let b = 10;   //let thường dùng
const PI = 3.14;   //hằng số
let name = "TinTin Do";
let age = 20;
let nothing = null;
let undef; */

// Toán tử (Operators)
/* let a = 3; b = 8;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b);
console.log(a = b);
console.log(a != b);
console.log(a % b); */

// Đối tượng (Object)
/* let person = {
    name: "Tin Tin Do",
    age: 20,
    major: "Computer Science",
    year: 2027,
    isStudent: true
}
console.log(person);  // in ra toàn bộ trong object là person
console.log(person.year); */ // in ra đối tượng person nhưng truy vấn 1 item nhỏ bên trong nếu đặt sau dấu .

// Chuỗi (String)
/* let text = "Do Nguyen Tin Tin!";
console.log(text.length);  //từ khóa length để in ra độ dài của chuỗi, đặt sau dấu .
console.log(text.toUpperCase());  //từ khóa toUpperCase() sẽ in chuỗi viết hoa toàn bộ, đặt sau dấu .
console.log(text.toLowerCase());  //từ khóa toLowerCase() sẽ in chuỗi viết thường toàn bộ, đặt sau dấu .
console.log(text.toString);  //từ khóa toString in ra kiểu dữ liệu, đặt sau dấu .
console.log(text.replace);
console.log(text.split);
console.log(text.toLocaleUpperCase);
console.log(text.toLocaleLowerCase);
console.log(text.includes("Tin Tin")); //từ khóa includes sẽ kiểm tra xem từ mình cần có nằm hay tồn tại trong chuỗi ko, nếu có in ra True, nếu không in ra False
console.log("Xin chào " + text); */

// Mảng (Array)
/* let fruits = ['Cam', 'Chuối', 'Xoài', 'Lê', 'Mận', 'Táo','Ổi', 'Cherry'];  //có thể tạo mảng bằng cách này: let tên_mảng = new Array(soluong_item); , hoặc let tên_mảng = new Array(, , , ,);
console.log(fruits); //lấy toàn bộ mảng
console.log(fruits[3]); //lấy 1 item bất kỳ từ trái sang phải, bắt đầu từ số 0
console.log(fruits[fruits.length -3]); //lấy 1 item bất kỳ từ phải sang trái, bắt đầu từ số -1
console.log(fruits.length); //từ khóa length sẽ đếm các items trong mảng, miễn trong dấu nháy đơn, hoặc nháy kép đều tính là item

// Thêm phần tử vào Mảng (Array)
 fruits.push('kiwi');
console.log(fruits); 

// Xóa phần tử trong mảng (Array)
fruits.pop();  //In ra nó sẽ xóa phần tử ở cuối
console.log(fruits); 

fruits.shift();  //In ra nó sẽ xóa phần tử ở đầu
console.log(fruits);

// Duyệt Mảng (Array)
for(let i=0; i<fruits.length; i++) {
    console.log(fruits[i]);
}
//Cách 2: dùng for...of
for(let item of fruits) { //cách này chỉ đổi tên fruits thành item và in ra item
    console.log(item);
}
//Cách 3: forEach
fruits.forEach((item, index) => { //Cách này y chang cách 1, cách 2 nhưng khác là nó sẽ đánh số thứ tự khi duyệt mảng
    console.log(index, item);
}); */
//Một số phương thức khác của mảng (Array)
// concat() - nối 2 mảng. Dùng nằm sau dấu .
// join(separator) - chuyển mảng thành chuỗi. Dùng nằm sau dấu .
// slice(start, end) - lấy một phần mảng(ko thay đổi mảng gốc). Dùng nằm sau dấu .
// splice(start, deleteCount, item1, item2,...) - thêm/xóa phần tử trong mảng. Dùng nằm sau dấu .
// indexOf(value) - tìm vị trí phần tử đầu tiên. Dùng nằm sau dấu .
// includes(value) - kiểm tra phần tử có tồn tại hay không. Dùng nằm sau dấu .
// reverse() - đảo ngược mảng. Dùng nằm sau dấu .
// sort() - sắp xếp mảng(mặc định theo chuỗi). Dùng nằm sau dấu .

// Các phương thức nâng cao trong Mảng (Array)
// Tạo mảng mới với map()
/* let oldnumbers = [1,2,3,4,5,6,7,8];
let newnumbers = numbers.map(x => x+1); // x=> x + 1 nghĩa là x là x ban đầu, => là suy ra, x + 1 là phép mới để tạo ra mảng mới
console.log(newnumbers);
// Lọc phần tử với filter()
let numbers = [1,2,3,4,5,6,7,8,9,10];
let evens = numbers.filter(x => x%2===0);
console.log(evens);
// Gộp phần tử với reduce()
let counts = [1,2,3,4,5,6,7,8,9];
let sum = numbers.reduce((acc, cur) => acc + cur,0);  //acc là accumulator(luôn bắt đầu từ 0) -->biến tích lũy, lưu trữ kết quả tạm thời của phép tính ; cur là currentValue -->phần tử hiện tại đang được xử lý
console.log(sum);
// find() và findIndex()
let arrays = [10,20,30,40,50,60];
console.log(arrays.find(x => x>2));  //in ra 3
console.log(arrays.findIndex(x => x>2)); //in ra 2
// some() và every()
let arrs = [1,2,3,4];
console.log(arrs.some(x => x>3)); //in ra true
console.log(arrs.every(x => x>0)); // in ra true
// Làm phẳng mảng với flat()
let arr = [1,[2,3,[4,5,6,[7]]]];
console.log(arr.flat(3));
// Sao chép hoặc nối mảng
let arr1 = [1,2];
let arr2 = [3,4];
let arr3 = [5,6];
let arr4 = [...arr1, ...arr2, ...arr3];
console.log(arr4); // [1,2,3,4,5,6]
//Mảng đa chiều
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12]
];
console.log(matrix[1][2]); */ //Giải thích: [1] là phần tử thứ 2 của mảng (chỉ số bắt đầu từ 0), tức [4,5,6] , [2] là phần tử thứ 3 của mảng [4,5,6] tức là 6

// Câu lệnh Điều kiện (Control Statement)
/* let age = 18;
if (age >= 18) {
    console.log("Người lớn");
}   else {
    console.log("Trẻ em");
}
//Câu lệnh switch
let day = 5;
switch(day) {
    case 5: console.log("Thứ 2"); break; 
    case 6: console.log("Thứ 3"); break;
    default: console.log("Ngày khác");
} */ //Giải thích: so sánh day đã cho với các case, như case 5 là ===5, case 2 là ===2, case 3 là ===3, ... ; đúng thì kiểm tra lệnh, sai thì bỏ qua

// Vòng lặp (Loop)
// Vòng lặp For
/* for (let i = 0; i < 3; i++) {
    console.log("For: ", i);
}
//Vòng lặp For-of
let arr = [10,20,30,40,50];
for (let x of arr) {
    console.log("For-of: ", x);
}
//Vòng lặp While
let a = 0;
while (a < 10) {
    console.log("While: ", a);
  a++;
} */

// Dùng Function trong JavaScript
/* function greeting(name) {
    return "Nice to meet you " + name;
}
console.log(greeting("Tin Tin Do"));

// Dùng Arrow Function trong JavaScript
const add = (a,b) => a + b; // hoặc các phép tính khác: + - * / % ** = != > >= < <=
console.log(add(12,6)); */


// ÔN TẬP LẠI JAVASCRIPT TỪ CƠ BẢN ĐẾN NÂNG CAO
// CƠ BẢN
// 1. Biến & kiểu dữ liệu
// Khai báo biến
var x = 10; //cũ, có phạm vi function
let y = 20; //mới, có phạm vi block
const z = 30; // hằng số, không thay đổi
/* Kiểu dữ chính:
  Nguyên thủy(Primative): Number, String, Boolean, Null, Undefined, Symbol, BigInt
  Phi nguyên thủy(Reference): Object, Array, Function  */

// 2. Xuất & nhập dữ liệu
// Xuất dữ liệu
console.log("Tôi là Tin Tin, Tôi đang học ngành Computer Science, và nghiên cứu về trí tuệ nhân tạo AI!"); //in ra console
alert("Tôi là Tin Tin, Tôi đang học ngành Computer Science, và nghiên cứu về trí tuệ nhân tạo AI!"); //thông báo trên trình duyệt 
document.write("Tôi là Tin Tin, Tôi đang học ngành Computer Science, và nghiên cứu về trí tuệ nhân tạo AI!"); //in ra trang web
// Nhập dữ liệu
let name = prompt("Nhập tên:");
let confirmAns = confirm("Bạn có chắc không?");

// 3. Phép toán
/* Số học: + - * / % **
   So sánh: == === != > >= < <=
   Logic: && || !
   Gán: = += -= *= /=
   Chuỗi: "Hello " + "World" */

// 4. Cấu trúc điều kiện if-else
    if (age >= 18) {
        console.log("Đủ tuổi");
    } else if (age >= 16) {
        console.log("Cần người giám hộ");
    } else {
        console.log("Chưa đủ tuổi");
    }

// 5. Vòng lặp for, while
// Vòng lặp for
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// Vòng lặp while
let a = 0;
while (a < 9) {
    console.log(a);
    a++;
}

// 6. Kiểu Object
let person = {
    name: "Tin Tin Nguyen Do",
    age: 20,
    speak: "Vietnam & English",
    School: function() {
        console.log("Drew University");
    }
};
console.log(person.name); //Truy vấn thuộc tính
person.School(); //Gọi phương thức

// 7. Kiểu Function
// Khai báo thường
function add(a, b) {
    return a + b;  //Ngoài ra có thể dùng các phép khác: - * / % **
}
// Arrow Function
let multiply = (x, y) => x * y; //Ngoài ra có thể dùng các phép khác: + - / % **

// 8. Kiểu Array
let arr = [1,2,3];
arr.push(4);  //Thêm phần tử
arr.pop();   // Xóa phần tử cuối
arr.push(shift); //Xóa phần tử đầu
arr.forEach(x => console.log(x)); //duyệt mảng

// 9. Kiểu String
let str = "Hello JS";
console.log(str.length); //In ra độ dài của chuỗi
console.log(str.toUpperCase()); //Chuyển toàn bộ chuỗi thành chữ in hoa
console.log(str.toLowerCase()); //Chuyển toàn bộ chuỗi thành chữ in thường
console.log(str.includes("JS")); //Kiểm tra chuỗi có chứa giá trị trong () hay không, trả về True/False 
console.log(str.slice(0, 5)); //Cắt chuỗi từ vị trí index trong phạm vi, như ở đây là 0 đến trước 5, cú pháp: slice(start, end) và ko bao gồm end

// 10. Cơ chế DOM (Document Object Model)
// Truy cập và thay đổi HTML bằng JavaScript
document.getElementById("title").innerHTML = "Xin chào bạn!"; //hoặc document.getElementById("title").textContent = "Xin chào bạn!";
document.querySelector(".btn").style.color = "red"; //hoặc document.querySelectorAll(".btn").forEach(el => el.style.color="red"); // Chú thích: .btn là khai báo class (giống css)
//Thêm sự kiện
document.getElementById("btn").addEventListener("click", () => {
    alert("Clicked!");
});

// 11. Cơ chế bất đồng bộ (Asynchronous)
// set Timeout / setInterval
setTimeout(() => console.log("Delay 2s"), 2000); //2000 nghĩa là 2000 milliseconds(= 2 giây), tức là sau 2000 mili-giây (tức 2 giây), JavaScript mới gọi lại hàm callback. 
// Callback - Hàm được truyền làm tham số cho hàm khác
   // Ví dụ Callback (đồng bộ):
function sayHello(name) {
  console.log("Xin chào " + name);
}function processUserInput(callback) {
  let name = "TinTin";
  callback(name); // gọi lại hàm callback
}
processUserInput(sayHello); 
   // Ví dụ Callback(Bất đồng bộ)(setTimeout):
    console.log("Bắt đầu...");
setTimeout(function() {
  console.log("Đây là callback sau 2 giây");
}, 2000);
console.log("Kết thúc");
   // Ví dụ Callback với sự kiện(event):
document.querySelector(".btn").addEventListener("click", function() {
  console.log("Nút đã được bấm!");
});

// Promise
let promise = new Promise((resolve, reject) => {
    resolve("Thành công");
});
promise.then(msg => console.log(msg));
// Async / Await
async function fetchData() {
    let res = await fetch("https://api.example.come");
    let data = await res.json();
    console.log(data);
}

// 12. Cơ chế lưu trữ dữ liệu
// LocalStorage (Lưu vĩnh viễn trong trình duyệt)
localStorage.setItem("name", "Tin Tin");
console.log(localStorage.getItem("name"));
//SessionStorage (Chỉ lưu trong phiên trình duyệt hiện tại)
sessionStorage.setItem("age", 21);
// Cookies (Dùng nhiều trong xác thực)
document.cookie = "user=Tin; expires=Fri, 31 Dec 2025 23:59:59 GMT";


// JavaScript NÂNG CAO
// 1. Scope & Hoisting
/* Scope (Phạm vi):
 var --> function scope
 let, const --> block scope
   Hoisting: JS "kéo" khai báo biến & hàm lên đầu trước khi chạy */
   console.log(b); //undefined (do hoisting)
   var b = 5;
// 2. Closures
/* Closures: hàm có nhớ biến của hàm cha dù cha đã kết thúc. */
function outer() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
let counter = outer();
console.log(counter()); //1
console.log(counter()); //2
// 3. Prototype & OOP trong JS
/* JS dùng prototype-based inheritance */
function Person(name) {
    this.name = name;
}
Person.prototype.sayHi = function() {
console.log("Hi, I'm " + this.name);
};
let p = new Person('Tin Tin Nè');
p.sayHi();
/* Từ ES6(ECMASCRIPT 2015) có class */
class Animal {
    constructor(type) {
        this.type = type;
    }
    speak() {
        console.log(`${this.type} makes a sound`);
    }
}
// 4. Modules (ES6)
/* Xuất / nhập module */
// math.js
export function add(a, b) {
    return a + b; }
// main.js
import {add} from "./math.js";
console.log(add(2, 3));
// 5. Error Handling
try {
    let x = y + 1;
} catch (err) {
    console.error("Có lỗi:", err.message);
} finally {
    console.log("Luôn chạy");
}
// 6. Fetch API/AJAX
/* Lấy dữ liệu từ server */
fetch("https://api.example.com/data")
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));
// 7. Regular Expressions(Regex)
/* Dùng regex để kiểm tra chuỗi */
let email = "ndo1@drew.edu";
console.log(/^\S+@\S+\.\S+$/.ndo1(email));
// 8. ES6 + Features
/* Destructuring */
let [b,c] = [1, 2];
let {fullname, age} = {name:"Nguyen", age:"20"};
/* Spread/Rest */
let arrays = [1,2,3];
let newArrays = [...arrays, 4, 5];  //spread
function sum(...nums) {return nums.reduce((a, b)=>a+b);}

/* Template Literals */
let fname = "Do Nguyen Tin Tin";
console.log(`Helloooo, ${name}`); /* Giải thích: dấu backtick ` ` , thay cho dấu nháy đơn hoặc nháy kép
                                   Cho phép nhúng biến hoặc biểu thức trực tiếp vào chuỗi bằng cú pháp ${...};
                                  Ví dụ: let a = 5, b = 7;
                                        console.log(`Tổng của ${a} + ${b} = ${a + b}`);
                                 Ưu điểm: Ko cần nối chuỗi bằng dấu + , Dễ viết chuỗi nhiều dòng: 
                                 ví dụ: console.log{`
                                                     Dòng 1
                                                     Dòng 2
                                                     Dòng 3                                                                                     
                                                      . . .
                                                    `} */


                            

