
let div1 =document.querySelector(".div1")
let div2 =document.querySelector(".div2")

div1.addEventListener("click" ,function () {
    let color = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","F"];
    let symbol = "#"
  for(let i=0;i<6;i++){
    let randomNum = Math.floor(Math.random() * color.length)
    symbol += color[randomNum]
  }
  div1.style.backgroundColor=symbol
})

div2.addEventListener("mousemove" ,function(){
   let color = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","F"];
   let symbol = "#"
    for(let i=0;i<6;i++){
        let randomNum = Math.floor(Math.random() * color.length)
        symbol += color[randomNum]
      }
      div2.style.backgroundColor=symbol
})
