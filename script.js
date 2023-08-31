
function firstpageanim(){
    var tl = gsap.timeline();

  //   tl.from(".lamp", {
  //     y: '-10',
  //     opacity:0,
  //     duration:4,
  //     ease:Expo.easeInOut

  // })




    tl.from("#nav", {
        y: '-10',
        opacity:0,
        duration:2,
       
        ease:Expo.easeInOut

    })
    .to(".boundingelem", {
        y:0, 
        ease:Expo.easeInOut,
        duration:2,
        delay:-1,
        stagger:.3
    })

    .from("#herofooter", {
       y:-10,
       opacity: 0 ,
       duration:1.5,
       delay:-1,
       ease: Expo.easeInOut
    })
}


// function circleskew(){
//     var xscale = 1;
//     var yscale = 1;

//     var xprev = 0;
//     var yprev = 0;

//     window.addEventListener("mousemove", function(detail){
//  var xdiff = detail.clientX - xprev;
//  var ydiff = detail.clientY - yprev;

//  xprev = detail.clientX;
//  yprev = detail.clientY;



//     })
// }


function circle() {
    window.addEventListener("mousemove", function(detail){
      document.querySelector("#minicircle").style.transform = `translate(${detail.clientX}px, ${detail.clientY}px)`
    })
}


function loco(){
  gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  
  
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
}


document.querySelectorAll(".elem").forEach(function(elem){
var rotate= 0;
var diffrot = 0




elem.addEventListener("mouseleave",function(detail){

 gsap.to(elem.querySelector("img"),{
  opacity: 0,
  ease: Power3,
  
 })
})


  elem.addEventListener("mousemove",function(detail){


 var diff = detail.clientY - elem.getBoundingClientRect().top;
 diffrot= detail.clientX - rotate;
 rotate = detail.clientX

 

   gsap.to(elem.querySelector("img"),{
    opacity: 1,
    ease: Power3,
    top: -40,
    left: detail.clientX,
    rotate:gsap.utils.clamp(-20 , 20, diffrot)
    
   })
  })
})



circle();
loco();
firstpageanim()
