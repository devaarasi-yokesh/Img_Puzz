const container = document.querySelector(".new_container");
const images = ["Images/img1.png","Images/img2.png","Images/img3.png","Images/img4.png","Images/img5.png","Images/img6.png","Images/img7.png","Images/img8.png","Images/img9.png","Images/img10.png"]
let image;
for(let i=0;i<=63;i++){
   image = document.createElement("img");
   image.src = images[Math.floor((Math.random() * 10))];
   container.appendChild(image);
   
}
let ab = document.getElementsByTagName("img");
ab[0].addEventListener("click",()=>{
    if(image.src == images[0]){
        console.log("source");
    }
   
   })
