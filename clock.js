let paras = document.querySelectorAll("section > p");

let section = document.querySelector("section");

let divs = document.querySelectorAll("div");
for (let i = 0; i < divs.length; i++) {
  divs[i].style.transform = `rotate(${i * 30}deg)`;
}

setInterval(() => {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  console.log(paras);
  if (h > 12) h = h - 12;
  paras[0].style.transform = `rotate(${h * 30 + m / 2}deg)`;
  paras[1].style.transform = `rotate(${m * 6}deg)`;
  paras[2].style.transform = `rotate(${s * 6}deg)`;
  console.log(h, m, s);
}, 1000);

/*

12 50% 

*/
