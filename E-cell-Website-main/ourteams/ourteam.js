// menu option part

var menu = document.querySelector("#nav i")
 var cross=document.querySelector("#full i")
 
 
 
 var tl = gsap.timeline()

 tl.to("#full",{
    right:0,
    duration:0.8
 })

 tl.from("#full ul li",{
    x:150,
    duration:0.6,
    stagger:0.28,
    opacity:0
 })

 tl.from("#full i",{
    opacity:0
 })

 tl.pause() 

 menu.addEventListener("click",function(){
    tl.play()
 })
 cross.addEventListener("click",function(){
    tl.reverse()
 })


// image slide part
 document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate=0;
    var diffrot =0;
    elem.addEventListener("mousemove", function(dets){ 
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot  = dets.clientX - rotate;
      rotate = dets.clientX;
      
      gsap.to(elem.querySelector("img"),{
        opacity: 1,
        ease : Power3,
        top:diff,
        left:dets.clientX,
        rotate:gsap.utils.clamp(-20,20,diffrot *0.2),
      });
    });
    elem.addEventListener("mouseleave", function(dets){ 
      
      
      gsap.to(elem.querySelector("img"),{
        opacity: 0,
        ease : Power3,
        duration:0.5,
        
      });
    });
  
  });
//   cursor
main.addEventListener("mousemove",function(dets){
    //yeha pe cursor isliye kyuki humne top pe var cursor likh liye hai nhai toh yaha hume "#cursor" likhna padta
    gsap.to(cursor,{
       x:dets.x,
       y:dets.y,
       duration:0.6,  //for smoothness
       
    })
})