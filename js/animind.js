// kittens anim
var tl = gsap.timeline({
    defaults: {
        ease: "power1.out"
    }
});
tl.from("#welcome-l", {
    duration:2,
    opacity:0,
    x:-200,
});
tl.from("#welcome-r", {
    duration:2,
    opacity:0,
    x:200,
}, "-=2");
tl.from("#nav", {
    duration:2,
    y:-200,
}, "-=1");
tl.from(".sub-l", {
    duration:2,
    opacity:0,
    y: 500,
}, "-=2");
tl.from(".choice", {
    duration:2,
    opacity:0,
    y: 500,
    stagger: 0.5,
}, "-=2");