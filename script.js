//DOM Selection
//document.getElementById()
//->element
/*const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "black";
judul.innerHTML = "Selamat Datang di Belajar DOM";

//document.getElementsByTagName()
//->htmlCollection
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "30px";

//document.getElementsByClassName()
//->htmlCollection
const p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = "Ini diubah dari JavaScript";
*/

//document.querySelector()
//->element

/*const p4 = document.querySelector("#b p");

p4.style.color = "green";
p4.style.fontSize = "30px";

const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.backgroundColor = "Orange";
*/

//Jika memakai hanya querySelector maka yang terpilih hanya element p yang pertama, harus memakai querySelectorAll jika ingin memilih semua element p
//const p = document.querySelector("p");
//p.innerHTML = "Ini diubah melalui javascript";

//document.querySelectorAll()
//const p = document.querySelectorAll("p");
//for (i = 0; i < p.length; i++) {
//  p[i].style.backgroundColor = "lightblue";
//}

//bisa ditulis dengan

/*const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");
p4.style.backgroundColor = "lightgreen";
*/

// const judul = document.getElementById("judul");
// judul.innerHTML = "<em>Gery Ho</em>";

// const judul = document.querySelector("#judul");
// judul.style.color = "lightblue";
// judul.style.backgroundColor = "salmon";

// const judul = document.getElementsByTagName("h1")[0];
// const a = document.querySelector("section#a a");
// a.setAttribute("id", "link");
// menambahkan attribut baru
// judul.setAttribute("class", "nama");
//a.removeAttribute("href");
const p2 = document.querySelector(".p2");
p2.classList.add("label");
