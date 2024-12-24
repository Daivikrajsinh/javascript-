
const arr = [
  {
      id : 1, slide1 :"Graphics Designer", image :  "https://wallpaperaccess.com/full/1393625.jpg"
  },
  {
      id : 2,  slide1 :"Web Devloper", image : "https://getwallpapers.com/wallpaper/full/2/6/a/146828.jpg"
  }, 
  {
      id : 3, slide1 :"UI UX DESIGNER",  image :"https://freedesignfile.com/upload/2016/10/Office-HD-picture-in-white-03.jpg"
  }, 
];

const img = document.querySelector("#image");
const slide1 = document.querySelector("#slide1");

const prev = document.querySelector("#prev-btn");
const next = document.querySelector("#next-btn");

let count = 0;

function showWinner(){
  arr[count];
  img.src =  arr[count].image;
  slide1.innerText = arr[count].slide1;
}

function slide (){
  next.addEventListener("click" , () => {
      count++;
      if(count > arr.length -1) {
          count = 0;
              }
      showWinner();
  })
  
  prev.addEventListener("click" , () => {
      count--;
      if(count < 0) {
          count = arr.length-1;
              }
      showWinner();
  })
}

window.addEventListener("DOMContentLoaded" , () =>{
  slide();

});

console.log(count);
