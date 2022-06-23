// kittens anim
var tl = gsap.timeline({
    defaults: {
        ease: "power1.out"
    }
});
tl.from("#kit", {
    duration:2,
    opacity:0,
    y:-200,
});
tl.from("#nav", {
    duration:2,
    opacity:0,
    y:-200,
}, "-=1");
tl.from(".k-btn", {
    duration:2,
    opacity: 0,
    y:200,
    stagger:0.5,
}, "-=2");
tl.from(".kit-img", {
    duration:2,
    opacity:0,
    y: 500,
    stagger: 0.5,
}, "-=2");